"use client";

import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let instance: Lenis | null = null;

export function getLenis() {
  return instance;
}

export function initLenis() {
  if (typeof window === "undefined") return null;
  if (instance) return instance;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return null;

  instance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
  });

  instance.on("scroll", () => ScrollTrigger.update());

  const raf = (time: number) => {
    instance?.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);

  return instance;
}

export function destroyLenis() {
  instance?.destroy();
  instance = null;
}
