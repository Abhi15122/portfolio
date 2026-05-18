"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { forwardRef, useRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { isTouch } from "@/lib/motion-tokens";

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  strength?: number;
  asLink?: { href: string; target?: string; rel?: string };
}

const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(function MagneticButton(
  { children, strength = 0.4, className, asLink, ...props },
  ref,
) {
  const localRef = useRef<HTMLElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

  const move = (e: React.PointerEvent) => {
    if (isTouch()) return;
    const el = localRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const baseClass = cn(
    "inline-flex items-center justify-center gap-2 px-6 h-12 rounded-full text-sm font-medium transition-colors will-change-transform",
    className,
  );

  if (asLink) {
    return (
      <motion.a
        ref={(el) => {
          localRef.current = el as unknown as HTMLElement;
        }}
        href={asLink.href}
        target={asLink.target}
        rel={asLink.rel}
        onPointerMove={move}
        onPointerLeave={reset}
        style={{ x: sx, y: sy }}
        data-cursor="hover"
        className={baseClass}
      >
        <motion.span style={{ x: sx, y: sy }} className="inline-flex items-center gap-2">
          {children}
        </motion.span>
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={(el) => {
        localRef.current = el;
        if (typeof ref === "function") ref(el);
        else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = el;
      }}
      onPointerMove={move}
      onPointerLeave={reset}
      style={{ x: sx, y: sy }}
      data-cursor="hover"
      className={baseClass}
      {...(props as Omit<React.ComponentProps<typeof motion.button>, "ref">)}
    >
      <motion.span style={{ x: sx, y: sy }} className="inline-flex items-center gap-2">
        {children}
      </motion.span>
    </motion.button>
  );
});

export default MagneticButton;
