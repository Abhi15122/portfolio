export const easings = {
  expoOut: [0.16, 1, 0.3, 1] as const,
  quintOut: [0.22, 1, 0.36, 1] as const,
  quartIn: [0.5, 0, 0.75, 0] as const,
  quintInOut: [0.83, 0, 0.17, 1] as const,
};

export const durations = {
  fast: 0.25,
  base: 0.6,
  slow: 1.1,
  hero: 1.4,
};

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isTouch() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: none), (pointer: coarse)").matches;
}
