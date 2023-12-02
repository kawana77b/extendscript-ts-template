/**
 * Generates and returns `Bounds`
 * @param x
 * @param y
 * @param width
 * @param height
 * @returns
 */
export function bounds(
  x: number,
  y: number,
  width: number,
  height: number,
): Bounds {
  return [x, y, width, height] as Bounds;
}
