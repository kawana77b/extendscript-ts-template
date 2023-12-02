/**
 * convert frame to second
 * @param frame
 * @param fps
 * @returns
 */
export function frame2sec(frame: number, fps: number): number {
  return frame / fps;
}

/**
 * convert second to frame
 * @param sec
 * @param fps
 * @returns
 */
export function sec2frame(sec: number, fps: number): number {
  return sec * fps;
}
