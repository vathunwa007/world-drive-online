/**
 * Road detection by sampling pixel colors from the Google Maps WebGL canvas.
 * Roads on Google Maps render as bright, desaturated (white/gray) pixels.
 * Off-road areas (parks, water, bare ground) have distinct color signatures.
 *
 * This approach is free — no API calls needed.
 */

export type TerrainType = 'road' | 'offroad';

export class RoadDetector {
  private _onRoad: boolean = true;
  private _terrain: TerrainType = 'road';

  // Sample a small area around the center for more reliable detection
  private readonly SAMPLE_RADIUS = 3; // pixels around center

  get onRoad(): boolean {
    return this._onRoad;
  }

  get terrain(): TerrainType {
    return this._terrain;
  }

  /**
   * Call this during the WebGL onDraw callback, BEFORE rendering Three.js content.
   * At that point the Google Maps base map is already in the framebuffer.
   */
  public sampleFromGL(gl: WebGLRenderingContext): void {
    const cx = Math.floor(gl.drawingBufferWidth / 2);
    const cy = Math.floor(gl.drawingBufferHeight / 2);
    const r = this.SAMPLE_RADIUS;

    // Sample a small grid of pixels around the center
    const size = r * 2 + 1;
    const pixels = new Uint8Array(size * size * 4);
    gl.readPixels(cx - r, cy - r, size, size, gl.RGBA, gl.UNSIGNED_BYTE, pixels);

    // Count road-like vs non-road pixels
    let roadCount = 0;
    let totalSampled = 0;

    for (let i = 0; i < pixels.length; i += 4) {
      const red = pixels[i];
      const green = pixels[i + 1];
      const blue = pixels[i + 2];
      const alpha = pixels[i + 3];

      // Skip fully transparent pixels
      if (alpha < 10) continue;

      totalSampled++;
      if (this.isRoadColor(red, green, blue)) {
        roadCount++;
      }
    }

    // If majority of sampled pixels are road-colored, we're on a road
    if (totalSampled > 0) {
      const roadRatio = roadCount / totalSampled;
      this._onRoad = roadRatio > 0.5;
      this._terrain = this._onRoad ? 'road' : 'offroad';
    }
  }

  /**
   * Determine if an RGB color looks like a road on Google Maps.
   *
   * Key distinction:
   * - Roads are NEUTRAL (R ≈ B, cool/gray tone) — pure white, gray, or blue-gray
   * - Ground/terrain is WARM (R > B, slight beige/cream tint) — even if very bright
   *
   * Road colors:
   * - White/gray roads: R≈G≈B, bright, neutral (R-B < 8)
   * - Blue-gray roads: ~170,180,195 range (B >= R)
   * - Yellow/orange highways: distinct warm but saturated
   *
   * Off-road colors:
   * - Bare ground/terrain: very light but warm tint (R-B > 8)
   * - Green parks/grass: G >> R, G >> B
   * - Blue water: B >> R
   */
  private isRoadColor(r: number, g: number, b: number): boolean {
    const brightness = (r + g + b) / 3;
    const maxC = Math.max(r, g, b);
    const minC = Math.min(r, g, b);
    const colorSpread = maxC - minC; // How far apart the channels are

    // --- Reject off-road first ---

    // Green areas (parks/grass)
    if (g > r + 15 && g > b + 15) return false;

    // Blue water
    if (b > r + 25 && b > g + 10 && brightness < 180) return false;

    // Bare ground / terrain: bright but has warm tint (R > B noticeably)
    // This is the key rule — ground on Google Maps is warm-white (#F5F2ED style)
    // while roads are neutral-white (#FFFFFF / #F0F0F0 style)
    if (brightness > 180 && r - b > 8 && colorSpread < 30) return false;

    // --- Match road colors ---

    // Pure white/neutral gray roads: bright, channels very close together
    if (brightness > 180 && colorSpread < 10) return true;

    // Blue-gray roads (common vector map style, B >= R)
    if (brightness > 150 && colorSpread < 30 && b >= r && minC > 130) return true;

    // Yellow/orange highways (distinctly saturated warm)
    if (r > 200 && g > 170 && b < 150 && brightness > 170) return true;

    // Mid-tone neutral gray (sidewalks, parking lots)
    if (brightness > 120 && colorSpread < 12 && minC > 100) return true;

    return false;
  }
}
