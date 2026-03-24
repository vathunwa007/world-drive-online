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
   * Road colors are cool/neutral tones (blue-gray) across all brightness levels:
   * - Bright roads: ~(230,235,240) white/light gray, neutral (B >= R)
   * - Mid roads: ~(170,180,195) blue-gray
   * - Dark roads: ~(55,62,78) dark slate/blue-gray
   *
   * Off-road colors are warm-tinted or strongly colored:
   * - Ground/terrain: warm beige/cream (R > B noticeably)
   * - Parks/grass: green dominant
   * - Water: strong blue dominant
   * - Buildings: various warm/saturated colors
   */
  private isRoadColor(r: number, g: number, b: number): boolean {
    const brightness = (r + g + b) / 3;
    const maxC = Math.max(r, g, b);
    const minC = Math.min(r, g, b);
    const colorSpread = maxC - minC;

    // --- Reject off-road first ---

    // Green areas (parks/grass)
    if (g > r + 15 && g > b + 15) return false;

    // Strong blue water (very saturated blue)
    if (b > r + 30 && b > g + 20) return false;

    // Warm-tinted ground/terrain (R > B noticeably, not saturated enough for highways)
    if (r - b > 10 && colorSpread < 40) return false;

    // Very dark areas that aren't blue-gray (e.g. dark brown, dark green)
    if (brightness < 30) return false;

    // --- Match road colors ---

    // Core rule: roads on Google Maps are cool/neutral (B >= R or very close)
    // This covers the full brightness range from dark slate to bright white

    // Blue-gray roads: B >= R, low-to-moderate spread — covers dark to bright
    if (b >= r && colorSpread < 35) return true;

    // Pure neutral gray/white: channels very close, any brightness
    if (colorSpread < 10) return true;

    // Yellow/orange highways (distinctly saturated warm — exception to warm rejection)
    if (r > 200 && g > 170 && b < 150 && brightness > 170) return true;

    return false;
  }
}
