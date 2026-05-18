"use client";

import { motion } from "motion/react";
import { marqueeTech } from "@/data/stack";

export default function Marquee() {
  const items = [...marqueeTech, ...marqueeTech];
  return (
    <section
      aria-label="Tech stack marquee"
      className="relative py-12 border-y border-line overflow-hidden group/marquee"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <motion.div
        className="flex gap-12 whitespace-nowrap will-change-transform group-hover/marquee:[animation-play-state:paused]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 35, ease: "linear", repeat: Infinity }}
      >
        {items.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="font-display text-[clamp(2.5rem,7vw,5rem)] leading-none text-ink/40 hover:text-accent transition-colors"
          >
            {t}
            <span className="text-accent">.</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
