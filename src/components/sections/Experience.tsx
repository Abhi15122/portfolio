"use client";

import { motion } from "motion/react";
import { GraduationCap, Briefcase } from "lucide-react";
import { timeline } from "@/data/experience";
import SectionHeading from "@/components/ui/SectionHeading";
import { easings } from "@/lib/motion-tokens";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Experience & Education" title="Where I've been." />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-line md:-translate-x-1/2" />
          <ul className="space-y-12 md:space-y-20">
            {timeline.map((entry, i) => (
              <Item key={`${entry.org}-${i}`} entry={entry} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Item({ entry, index }: { entry: (typeof timeline)[number]; index: number }) {
  const side = index % 2 === 0 ? "md:pr-12 md:text-right md:[grid-column:1]" : "md:pl-12 md:[grid-column:2]";
  const Icon = entry.kind === "education" ? GraduationCap : Briefcase;

  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.8, ease: easings.expoOut }}
      className="relative grid md:grid-cols-2 gap-6 md:gap-12"
    >
      <span
        aria-hidden
        className="absolute left-4 md:left-1/2 top-2 size-3 -translate-x-1/2 rounded-full bg-accent ring-4 ring-canvas"
      />
      <div className={`pl-12 md:pl-0 ${side}`}>
        <div className={`flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted ${index % 2 === 0 ? "md:justify-end" : ""}`}>
          <Icon className="size-3.5" />
          <span>{entry.kind === "education" ? "Education" : "Experience"}</span>
          <span className="text-line">·</span>
          <span>{entry.period}</span>
        </div>
        <h3 className="font-display text-3xl md:text-4xl mt-3 leading-tight">{entry.title}</h3>
        <p className="text-accent text-sm mt-2">{entry.org}</p>
        {entry.location ? (
          <p className="text-muted text-xs mt-1">{entry.location}</p>
        ) : null}
        <p className="text-ink/75 mt-4 max-w-md leading-relaxed">{entry.summary}</p>
        {entry.tech?.length ? (
          <ul className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
            {entry.tech.map((t) => (
              <li
                key={t}
                className="text-xs px-2.5 py-1 rounded-full border border-line text-muted"
              >
                {t}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </motion.li>
  );
}
