"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { easings } from "@/lib/motion-tokens";

interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
}

export default function FadeIn({
  delay = 0,
  duration = 0.8,
  y = 24,
  once = true,
  children,
  ...rest
}: FadeInProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, margin: "-15% 0px -10% 0px" }}
      transition={{ duration, delay, ease: easings.expoOut }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
