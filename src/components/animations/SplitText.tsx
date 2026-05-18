"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { useMemo } from "react";
import { easings } from "@/lib/motion-tokens";

interface SplitTextProps extends Omit<HTMLMotionProps<"span">, "children"> {
  text: string;
  by?: "word" | "char";
  stagger?: number;
  delay?: number;
  duration?: number;
  as?: "span" | "h1" | "h2" | "h3" | "p";
  className?: string;
  childClassName?: string;
  once?: boolean;
}

export default function SplitText({
  text,
  by = "word",
  stagger = 0.05,
  delay = 0,
  duration = 0.9,
  as = "span",
  className,
  childClassName,
  once = true,
  ...rest
}: SplitTextProps) {
  const reduce = useReducedMotion();
  const segments = useMemo(() => {
    if (by === "char") return Array.from(text);
    return text.split(/(\s+)/);
  }, [text, by]);

  const Tag = motion[as] as typeof motion.span;

  if (reduce) {
    const Static = as as keyof React.JSX.IntrinsicElements;
    return <Static className={className}>{text}</Static>;
  }

  return (
    <Tag
      aria-label={text}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      {...rest}
    >
      {segments.map((seg, i) => {
        if (/^\s+$/.test(seg)) return <span key={`s-${i}`}>{seg}</span>;
        return (
          <span
            key={`w-${i}`}
            aria-hidden
            className="inline-block overflow-hidden align-baseline"
          >
            <motion.span
              className={`inline-block will-change-transform ${childClassName ?? ""}`}
              variants={{
                hidden: { y: "110%", opacity: 0 },
                visible: {
                  y: "0%",
                  opacity: 1,
                  transition: { duration, ease: easings.expoOut },
                },
              }}
            >
              {seg}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}
