"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { isTouch } from "@/lib/motion-tokens";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    if (isTouch()) return;
    setEnabled(true);

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      const hover = !!target?.closest("a, button, [data-cursor=hover]");
      setHovering(hover);
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    document.documentElement.style.cursor = "none";
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.documentElement.style.cursor = "";
    };
  }, [x, y]);

  if (!enabled) return null;

  const scale = pressed ? 0.7 : hovering ? 2.4 : 1;

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[200] -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div
        animate={{ scale }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="size-3 rounded-full bg-accent mix-blend-difference"
      />
    </motion.div>
  );
}
