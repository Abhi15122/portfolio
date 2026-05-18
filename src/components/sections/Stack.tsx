"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { stack, stackCategories, type StackCategory } from "@/data/stack";
import SectionHeading from "@/components/ui/SectionHeading";
import { easings } from "@/lib/motion-tokens";

const categoryLabels: Record<StackCategory, string> = {
  Frontend: "01 / Frontend",
  Backend: "02 / Backend",
  Database: "03 / Database",
  Tools: "04 / Tools",
};

export default function Stack() {
  return (
    <section id="stack" className="relative py-24 md:py-32 px-6 md:px-10 bg-canvas">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Stack" title="Things I reach for." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {stackCategories.map((cat, ci) => {
            const items = stack.filter((s) => s.category === cat);
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ delay: ci * 0.1, duration: 0.8, ease: easings.expoOut }}
                className="rounded-2xl border border-line p-6 md:p-8 bg-surface/50"
              >
                <h3 className="text-xs uppercase tracking-[0.25em] text-muted mb-6">
                  {categoryLabels[cat]}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {items.map((it) => (
                    <TechCard key={it.name} name={it.name} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TechCard({ name }: { name: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useTransform(y, [-20, 20], [8, -8]);
  const ry = useTransform(x, [-20, 20], [-8, 8]);
  const srx = useSpring(rx, { stiffness: 200, damping: 15 });
  const sry = useSpring(ry, { stiffness: 200, damping: 15 });

  const move = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set(e.clientX - (r.left + r.width / 2));
    y.set(e.clientY - (r.top + r.height / 2));
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={move}
      onPointerLeave={reset}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 600 }}
      data-cursor="hover"
      className="group relative rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-ink/85 hover:text-ink hover:border-accent transition-colors cursor-pointer"
    >
      <div
        aria-hidden
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ boxShadow: "0 0 30px -8px #d8ff4a55 inset" }}
      />
      <span className="relative">{name}</span>
    </motion.div>
  );
}
