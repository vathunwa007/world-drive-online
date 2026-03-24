import React, { useEffect, useRef, useState } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { CarPhysics } from "../lib/physics";
import { RoadDetector } from "../lib/roadDetector";
import { PeerData } from "../lib/webrtc";

interface Map3DProps {
  apiKey: string;
  mapId: string;
  myCar: CarPhysics;
  myCarType: string;
  myCarColor: string;
  playerName: string;
  peersRef: React.MutableRefObject<Map<string, PeerData>>;
  onMapError?: (error: string) => void;
  onRoadStatusChange?: (onRoad: boolean) => void;
}

export const Map3D: React.FC<Map3DProps> = ({
  apiKey,
  mapId,
  myCar,
  myCarType,
  myCarColor,
  playerName,
  peersRef,
  onMapError,
  onRoadStatusChange,
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const overlayRef = useRef<google.maps.WebGLOverlayView | null>(null);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  const myCarMeshRef = useRef<THREE.Group | null>(null);
  const peerMeshesRef = useRef<Map<string, THREE.Group>>(new Map());
  const zoomRef = useRef(20);
  const GOOGLE_MAX_ZOOM = 22;
  const EXTENDED_MAX_ZOOM = 28;
  const roadDetectorRef = useRef(new RoadDetector());
  const [mapType, setMapType] = useState<"roadmap" | "satellite">("roadmap");
  const [is3D, setIs3D] = useState(true);
  const is3DRef = useRef(true);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      zoomRef.current -= e.deltaY * 0.005;
      zoomRef.current = Math.max(
        10,
        Math.min(EXTENDED_MAX_ZOOM, zoomRef.current),
      );
    };
    const mapDiv = mapRef.current;
    if (mapDiv) {
      mapDiv.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => {
      if (mapDiv) mapDiv.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    setOptions({
      key: apiKey,
      v: "beta",
    });

    Promise.all([importLibrary("maps"), importLibrary("geometry")]).then(
      ([mapsLibrary]) => {
        const mapInstance = new mapsLibrary.Map(mapRef.current!, {
          center: { lat: myCar.lat, lng: myCar.lng },
          zoom: zoomRef.current,
          tilt: 60,
          heading: myCar.heading,
          ...(mapId ? { mapId } : {}),
          renderingType: "VECTOR" as any,
          disableDefaultUI: true,
          gestureHandling: "none", // Disable user panning/zooming
          keyboardShortcuts: false,
        });

        setMap(mapInstance);
        mapInstance.setMapTypeId("roadmap");

        mapInstance.addListener("renderingtype_changed", () => {
          if (mapInstance.getRenderingType() === "RASTER") {
            if (onMapError) {
              onMapError(
                "The map is not a vector map. WebGLOverlayView requires a vector map. Please check your Map ID.",
              );
            }
          }
        });

        const overlay = new google.maps.WebGLOverlayView();
        overlayRef.current = overlay;

        overlay.onAdd = () => {
          sceneRef.current = new THREE.Scene();

          // Rotate the scene so that Three.js Y axis points Up (Google Maps Z axis)
          // and Three.js Z axis points South (Google Maps -Y axis)
          sceneRef.current.rotation.x = Math.PI / 2;
          // If the car models are built facing +Z (towards the camera), they will face South.
          // To make them face North (heading 0), we rotate the scene 180 degrees around Y.
          sceneRef.current.rotation.y = Math.PI;

          cameraRef.current = new THREE.PerspectiveCamera();

          const light = new THREE.DirectionalLight(0xffffff, 1);
          light.position.set(0, 10, 0);
          sceneRef.current.add(light);

          const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
          sceneRef.current.add(ambientLight);

          // Create my car mesh
          myCarMeshRef.current = createCarMesh(
            myCarType,
            myCarColor,
            playerName,
            true,
          );
          sceneRef.current.add(myCarMeshRef.current);
        };

        overlay.onContextRestored = ({ gl }) => {
          rendererRef.current = new THREE.WebGLRenderer({
            canvas: gl.canvas,
            context: gl,
            ...gl.getContextAttributes(),
          });
          rendererRef.current.autoClear = false;
        };

        overlay.onDraw = ({ gl, transformer }) => {
          if (!sceneRef.current || !cameraRef.current || !rendererRef.current)
            return;

          // Sample the map pixel color at center BEFORE rendering Three.js on top.
          // At this point, Google Maps has already drawn roads/terrain to the framebuffer.
          const prevOnRoad = myCar.onRoad;
          roadDetectorRef.current.sampleFromGL(gl);
          myCar.onRoad = roadDetectorRef.current.onRoad;
          if (myCar.onRoad !== prevOnRoad && onRoadStatusChange) {
            onRoadStatusChange(myCar.onRoad);
          }

          // Animate my car wheels
          if (
            myCarMeshRef.current &&
            myCarMeshRef.current.userData.frontWheels
          ) {
            const steeringRad = myCar.steeringAngle * (Math.PI / 180);
            myCarMeshRef.current.userData.frontWheels.forEach(
              (wheelGroup: THREE.Group) => {
                wheelGroup.rotation.y = -steeringRad;
              },
            );
          }

          // Render my car
          cameraRef.current.projectionMatrix.fromArray(
            transformer.fromLatLngAltitude(
              { lat: myCar.lat, lng: myCar.lng, altitude: 0 },
              new Float32Array([
                myCar.pitch || 0,
                myCar.roll || 0,
                -myCar.heading,
              ]),
              new Float32Array([1, 1, 1]),
            ),
          );

          // Update label scale for my car based on zoom
          // Use effective Google Maps zoom (capped at 22) — CSS scale handles the rest
          if (myCarMeshRef.current) {
            const effectiveZoom = Math.min(zoomRef.current, 22);
            const zoomScale = Math.pow(2, 20 - effectiveZoom);
            const scaleFactor = Math.max(0.3, Math.min(zoomScale, 50));
            // In 3D (tilt 60°) label tilts 30° to face camera; in 2D (tilt 0°) label lies flat facing up
            const labelTilt = is3DRef.current
              ? -((30 * Math.PI) / 180)
              : (90 * Math.PI) / 180;
            myCarMeshRef.current.children.forEach((child) => {
              if (child.userData.isNameSprite) {
                child.scale.set(
                  -child.userData.baseScale.x * scaleFactor,
                  child.userData.baseScale.y * scaleFactor,
                  child.userData.baseScale.z,
                );
                if (is3DRef.current) {
                  child.position.y = child.userData.baseY * scaleFactor;
                  child.position.z = 0;
                } else {
                  child.position.y = 0;
                  child.position.z = -child.userData.baseY * scaleFactor;
                }
                child.rotation.x = labelTilt;
              }
            });
          }

          // Temporarily hide peers to render only my car
          peerMeshesRef.current.forEach((mesh) => (mesh.visible = false));
          if (myCarMeshRef.current) myCarMeshRef.current.visible = true;
          rendererRef.current.render(sceneRef.current, cameraRef.current);

          // Render peers
          if (myCarMeshRef.current) myCarMeshRef.current.visible = false;

          peersRef.current.forEach((peer, id) => {
            let mesh = peerMeshesRef.current.get(id);

            if (
              !mesh ||
              mesh.userData.carType !== peer.carType ||
              mesh.userData.carColor !== peer.carColor
            ) {
              if (mesh) {
                sceneRef.current!.remove(mesh);
                disposeCarMesh(mesh);
              }
              mesh = createCarMesh(
                peer.carType,
                peer.carColor,
                peer.playerName,
                false,
              );
              sceneRef.current!.add(mesh);
              peerMeshesRef.current.set(id, mesh);
            } else if (mesh.userData.playerName !== peer.playerName) {
              updateNameSprite(mesh, peer.playerName, false);
              mesh.userData.playerName = peer.playerName;
            }

            // Animate peer wheels
            if (mesh.userData.frontWheels) {
              const steeringRad = (peer.steeringAngle || 0) * (Math.PI / 180);
              mesh.userData.frontWheels.forEach((wheelGroup: THREE.Group) => {
                wheelGroup.rotation.y = -steeringRad;
              });
            }

            // Update label scale and heading for peer car based on zoom
            // Use effective Google Maps zoom (capped at 22) — CSS scale handles the rest
            const effectiveZoom = Math.min(zoomRef.current, 22);
            const zoomScale = Math.pow(2, 20 - effectiveZoom);
            const scaleFactor = Math.max(0.3, Math.min(zoomScale, 50));
            // Counter-rotate label so it faces the same direction as the player's camera
            const headingDiffRad =
              (peer.heading - myCar.heading) * (Math.PI / 180);
            const labelTilt = is3DRef.current
              ? -((30 * Math.PI) / 180)
              : (90 * Math.PI) / 180;
            mesh.children.forEach((child) => {
              if (child.userData.isNameSprite) {
                child.scale.set(
                  -child.userData.baseScale.x * scaleFactor,
                  child.userData.baseScale.y * scaleFactor,
                  child.userData.baseScale.z,
                );
                if (is3DRef.current) {
                  child.position.y = child.userData.baseY * scaleFactor;
                  child.position.z = 0;
                } else {
                  child.position.y = 0;
                  child.position.z = -child.userData.baseY * scaleFactor;
                }
                child.rotation.x = labelTilt;
                child.rotation.y = headingDiffRad;
              }
            });

            // Hide all peers except this one
            peerMeshesRef.current.forEach((m) => (m.visible = false));
            mesh.visible = true;

            cameraRef.current!.projectionMatrix.fromArray(
              transformer.fromLatLngAltitude(
                { lat: peer.lat, lng: peer.lng, altitude: 0 },
                new Float32Array([
                  peer.pitch || 0,
                  peer.roll || 0,
                  -peer.heading,
                ]),
                new Float32Array([1, 1, 1]),
              ),
            );

            rendererRef.current!.render(sceneRef.current!, cameraRef.current!);
          });

          // Restore visibility
          if (myCarMeshRef.current) myCarMeshRef.current.visible = true;
          peerMeshesRef.current.forEach((mesh) => (mesh.visible = true));

          for (const [id, mesh] of peerMeshesRef.current.entries()) {
            if (!peersRef.current.has(id)) {
              sceneRef.current.remove(mesh);
              disposeCarMesh(mesh);
              peerMeshesRef.current.delete(id);
            }
          }

          rendererRef.current.resetState();
        };

        overlay.setMap(mapInstance);
      },
    );

    return () => {
      if (overlayRef.current) {
        overlayRef.current.setMap(null);
      }
    };
  }, [apiKey, mapId]);

  // Sync is3D ref
  useEffect(() => {
    is3DRef.current = is3D;
  }, [is3D]);

  // Sync map type with map instance
  useEffect(() => {
    if (!map) return;
    map.setMapTypeId(mapType);
  }, [map, mapType]);

  // Update my car mesh if type, color, or name changes
  useEffect(() => {
    if (!sceneRef.current) return;

    if (
      !myCarMeshRef.current ||
      myCarMeshRef.current.userData.carType !== myCarType ||
      myCarMeshRef.current.userData.carColor !== myCarColor
    ) {
      if (myCarMeshRef.current) {
        sceneRef.current.remove(myCarMeshRef.current);
        disposeCarMesh(myCarMeshRef.current);
      }

      myCarMeshRef.current = createCarMesh(
        myCarType,
        myCarColor,
        playerName,
        true,
      );
      sceneRef.current.add(myCarMeshRef.current);
    } else if (myCarMeshRef.current.userData.playerName !== playerName) {
      updateNameSprite(myCarMeshRef.current, playerName, true);
      myCarMeshRef.current.userData.playerName = playerName;
    }
  }, [myCarType, myCarColor, playerName]);

  // Update map camera to follow car
  useEffect(() => {
    if (!map) return;

    let animationFrameId: number;
    let lastLat = 0;
    let lastLng = 0;
    let lastHeading = 0;
    let lastZoom = 0;

    const renderLoop = () => {
      // Trigger WebGLOverlayView redraw
      if (overlayRef.current) {
        overlayRef.current.requestRedraw();
      }

      // Move map camera to follow car only if moved
      if (
        Math.abs(myCar.lat - lastLat) > 0.0000001 ||
        Math.abs(myCar.lng - lastLng) > 0.0000001 ||
        Math.abs(myCar.heading - lastHeading) > 0.1 ||
        Math.abs(zoomRef.current - lastZoom) > 0.01
      ) {
        const effectiveZoom = Math.min(zoomRef.current, GOOGLE_MAX_ZOOM);
        const extraZoom = Math.max(0, zoomRef.current - GOOGLE_MAX_ZOOM);
        const cssScale = Math.pow(2, extraZoom);

        map.moveCamera({
          center: { lat: myCar.lat, lng: myCar.lng },
          heading: myCar.heading,
          tilt: is3D ? 60 : 0,
          zoom: effectiveZoom,
        });

        // Apply CSS scale for zoom beyond Google Maps' limit
        if (mapRef.current) {
          mapRef.current.style.transform =
            cssScale > 1 ? `scale(${cssScale})` : "";
        }
        lastLat = myCar.lat;
        lastLng = myCar.lng;
        lastHeading = myCar.heading;
        lastZoom = zoomRef.current;
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [map, myCar, is3D]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div ref={mapRef} className="w-full h-full origin-center" />
      <div className="absolute bottom-6 right-6 flex flex-col gap-2 z-10">
        <button
          className="w-10 h-10 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 text-white rounded-full shadow-lg flex items-center justify-center text-xl font-bold hover:bg-slate-900/100 transition-colors"
          onClick={() =>
            (zoomRef.current = Math.min(EXTENDED_MAX_ZOOM, zoomRef.current + 1))
          }
          title="Zoom In"
        >
          +
        </button>
        <button
          className="w-10 h-10 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 text-white rounded-full shadow-lg flex items-center justify-center text-xl font-bold hover:bg-slate-900/100 transition-colors"
          onClick={() => (zoomRef.current = Math.max(10, zoomRef.current - 1))}
          title="Zoom Out"
        >
          -
        </button>
        <button
          className="w-10 h-10 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 text-white rounded-full shadow-lg flex items-center justify-center text-xs font-bold hover:bg-slate-900/100 transition-colors"
          onClick={() =>
            setMapType((prev) => (prev === "roadmap" ? "satellite" : "roadmap"))
          }
          title={
            mapType === "roadmap"
              ? "Switch to Satellite"
              : "Switch to Street Map"
          }
        >
          {mapType === "roadmap" ? "🛰" : "🗺"}
        </button>
        <button
          className={`w-10 h-10 backdrop-blur-md border border-slate-700/50 rounded-full shadow-lg flex items-center justify-center text-xs font-bold transition-colors ${
            is3D
              ? "bg-blue-600/80 text-white hover:bg-blue-500/80"
              : "bg-slate-900/80 text-white hover:bg-slate-900/100"
          }`}
          onClick={() => setIs3D((prev) => !prev)}
          title={is3D ? "Switch to 2D" : "Switch to 3D"}
        >
          {is3D ? "3D" : "2D"}
        </button>
      </div>
    </div>
  );
};

const gltfLoader = new GLTFLoader();

// Map tilt is 60° from straight-down. To face the camera, the label tilts
// (90° - 60°) = 30° from vertical in the scene's local coordinate space.
const MAP_TILT_RAD = (30 * Math.PI) / 180;

function createNameLabel(name: string, isMe: boolean = false): THREE.Mesh {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = 2048;
  canvas.height = 512;

  if (context) {
    const fontSize = 200;
    context.font = `Bold ${fontSize}px "Inter", "Segoe UI", Arial, sans-serif`;
    context.fillStyle = isMe ? "rgba(37, 99, 235, 0.9)" : "rgba(0, 0, 0, 0.75)";
    const textWidth = context.measureText(name).width;

    const bgPadding = 120;
    const bgWidth = textWidth + bgPadding * 2;
    const bgHeight = fontSize + 200;
    const x = (canvas.width - bgWidth) / 2;
    const y = (canvas.height - bgHeight) / 2;
    const radius = 50;

    context.beginPath();
    context.moveTo(x + radius, y);
    context.lineTo(x + bgWidth - radius, y);
    context.quadraticCurveTo(x + bgWidth, y, x + bgWidth, y + radius);
    context.lineTo(x + bgWidth, y + bgHeight - radius);
    context.quadraticCurveTo(
      x + bgWidth,
      y + bgHeight,
      x + bgWidth - radius,
      y + bgHeight,
    );
    context.lineTo(x + radius, y + bgHeight);
    context.quadraticCurveTo(x, y + bgHeight, x, y + bgHeight - radius);
    context.lineTo(x, y + radius);
    context.quadraticCurveTo(x, y, x + radius, y);
    context.closePath();
    context.fill();

    context.strokeStyle = isMe
      ? "rgba(251, 191, 36, 0.6)"
      : "rgba(255, 255, 255, 0.3)";
    context.lineWidth = 6;
    context.stroke();

    context.fillStyle = isMe ? "#fbbf24" : "#ffffff";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.shadowColor = "rgba(0, 0, 0, 1)";
    context.shadowBlur = 10;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 4;
    context.fillText(name, canvas.width / 2, canvas.height / 2);
    context.shadowBlur = 0;
    context.shadowOffsetY = 0;
    context.fillText(name, canvas.width / 2, canvas.height / 2);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.anisotropy = 16;
  if (typeof THREE.SRGBColorSpace !== "undefined") {
    texture.colorSpace = THREE.SRGBColorSpace as THREE.ColorSpace;
  }

  const baseScaleX = isMe ? 50 : 42;
  const baseScaleY = isMe ? 12.5 : 10.5;

  const geometry = new THREE.PlaneGeometry(1, 1);
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    depthTest: false,
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(geometry, material);

  // Flip X to counter the scene's rotation.y = PI, and tilt to match 60° map tilt
  mesh.rotation.x = -MAP_TILT_RAD;
  mesh.scale.set(-baseScaleX, baseScaleY, 1);

  mesh.position.y = 16;
  mesh.renderOrder = 999;
  mesh.userData = {
    isNameSprite: true,
    playerName: name,
    baseScale: { x: baseScaleX, y: baseScaleY, z: 1 },
    baseY: 16,
  };
  return mesh;
}

function disposeCarMesh(mesh: THREE.Group) {
  mesh.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const m = child as THREE.Mesh;
      if (m.geometry) m.geometry.dispose();
      if (m.material) {
        if (Array.isArray(m.material)) {
          m.material.forEach((mat) => mat.dispose());
        } else {
          m.material.dispose();
        }
      }
    } else if (child.userData.isNameSprite && (child as THREE.Mesh).isMesh) {
      const m = child as THREE.Mesh;
      const mat = m.material as THREE.MeshBasicMaterial;
      if (mat.map) mat.map.dispose();
      mat.dispose();
      m.geometry.dispose();
    }
  });
}

function updateNameSprite(
  group: THREE.Group,
  name?: string,
  isMe: boolean = false,
) {
  let existing: THREE.Mesh | null = null;

  // Find existing label
  group.children.forEach((child) => {
    if (child.userData.isNameSprite) {
      existing = child as THREE.Mesh;
    }
  });

  // If name hasn't changed, do nothing
  if (existing && existing.userData.playerName === name) {
    return;
  }

  // Remove and dispose old label
  if (existing) {
    group.remove(existing);
    const mat = (existing as THREE.Mesh).material as THREE.MeshBasicMaterial;
    if (mat.map) mat.map.dispose();
    mat.dispose();
    (existing as THREE.Mesh).geometry.dispose();
  }

  // Add new label if name exists
  if (name) {
    const label = createNameLabel(name, isMe);
    group.add(label);
  }
}

function createCarMesh(
  type: string,
  colorHex: string,
  playerName?: string,
  isMe: boolean = false,
) {
  const group = new THREE.Group();
  const color = new THREE.Color(colorHex || "#ff0000");

  // Store metadata to detect changes
  group.userData = { carType: type, carColor: colorHex, playerName };

  // Load the model based on the type
  const modelUrl = `/models/${type}.glb`;

  gltfLoader.load(
    modelUrl,
    (gltf) => {
      const model = gltf.scene;

      // Apply the color to the car body material
      model.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          if (mesh.material) {
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach((mat) => {
                if ("color" in mat)
                  (mat as THREE.MeshStandardMaterial).color.copy(color);
              });
            } else {
              if ("color" in mesh.material)
                (mesh.material as THREE.MeshStandardMaterial).color.copy(color);
            }
          }
        }
      });

      // Clear the fallback box and add the loaded model
      const toRemove = group.children.filter((c) => !c.userData.isNameSprite);
      toRemove.forEach((c) => {
        group.remove(c);
        if ((c as THREE.Mesh).isMesh) {
          const m = c as THREE.Mesh;
          if (m.geometry) m.geometry.dispose();
          if (m.material) {
            if (Array.isArray(m.material)) {
              m.material.forEach((mat) => mat.dispose());
            } else {
              m.material.dispose();
            }
          }
        } else if (c instanceof THREE.Group) {
          disposeCarMesh(c);
        }
      });
      group.add(model);
    },
    undefined,
    (error) => {
      console.warn(
        `Failed to load model ${modelUrl}, using fallback geometry.`,
        error,
      );
    },
  );

  // Add a fallback immediately so it's not invisible while loading
  createFallbackCar(group, type, color);

  if (playerName) {
    updateNameSprite(group, playerName, isMe);
  }

  // Scale down to roughly match real-world meters
  group.scale.set(0.5, 0.5, 0.5);

  return group;
}

function createFallbackCar(
  group: THREE.Group,
  type: string,
  color: THREE.Color,
) {
  // Base dimensions
  let width = 2;
  let height = 1;
  let length = 4;
  let wheelRadius = 0.4;
  let wheelWidth = 0.2;
  let wheelZ = 1.5;
  let wheelX = 1.1;

  if (type === "suv") {
    height = 1.6;
    length = 4.5;
    width = 2.2;
    wheelRadius = 0.5;
    wheelZ = 1.6;
    wheelX = 1.2;
  } else if (type === "truck") {
    height = 1.8;
    length = 5.5;
    width = 2.4;
    wheelRadius = 0.6;
    wheelZ = 2.0;
    wheelX = 1.3;
  } else if (type === "compact") {
    height = 1.2;
    length = 3.5;
    width = 1.8;
    wheelRadius = 0.35;
    wheelZ = 1.2;
    wheelX = 1.0;
  }

  // Chassis
  const geometry = new THREE.BoxGeometry(width, height, length);
  const material = new THREE.MeshStandardMaterial({ color });
  const chassis = new THREE.Mesh(geometry, material);
  chassis.position.y = height / 2 + wheelRadius / 2;
  group.add(chassis);

  // Wheels
  const wheelGeo = new THREE.CylinderGeometry(
    wheelRadius,
    wheelRadius,
    wheelWidth,
    16,
  );
  const wheelMat = new THREE.MeshStandardMaterial({ color: 0x333333 });

  const positions = [
    { pos: [-wheelX, wheelRadius, wheelZ], isFront: true },
    { pos: [wheelX, wheelRadius, wheelZ], isFront: true },
    { pos: [-wheelX, wheelRadius, -wheelZ], isFront: false },
    { pos: [wheelX, wheelRadius, -wheelZ], isFront: false },
  ];

  const frontWheels: THREE.Group[] = [];

  positions.forEach(({ pos, isFront }) => {
    const wheelGroup = new THREE.Group();
    wheelGroup.position.set(pos[0], pos[1], pos[2]);

    const wheel = new THREE.Mesh(wheelGeo, wheelMat);
    wheel.rotation.z = Math.PI / 2;
    wheelGroup.add(wheel);

    group.add(wheelGroup);

    if (isFront) {
      frontWheels.push(wheelGroup);
    }
  });

  group.userData.frontWheels = frontWheels;
}
