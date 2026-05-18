"use client";

import { motion } from "motion/react";
import { Briefcase, GraduationCap, MapPin, User } from "lucide-react";
import { about } from "@/data/about";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import { easings } from "@/lib/motion-tokens";

const iconMap = {
  briefcase: Briefcase,
  pin: MapPin,
  cap: GraduationCap,
} as const;

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="About" title="A developer who cares about the small stuff." />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          <FadeIn className="md:col-span-5">
            <div className="relative aspect-[4/5] w-full rounded-2xl border border-line bg-surface overflow-hidden">
              <div
                aria-hidden
                className="absolute inset-0 opacity-20"
                style={{
                  background:
                    "radial-gradient(circle at 30% 20%, #d8ff4a 0%, transparent 50%)",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-muted">
                <User className="size-12 opacity-50" />
                <p className="text-xs uppercase tracking-[0.25em]">Portrait placeholder</p>
                <p className="text-[10px] text-muted/70">TODO: Abhi — add real photo</p>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-muted">
                <span>{about.location}</span>
                <span className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-accent" />
                  {about.available ? "Available" : "Booked"}
                </span>
              </div>
            </div>
          </FadeIn>

          <div className="md:col-span-7">
            {about.longBio.map((para, i) => (
              <FadeIn key={i} delay={i * 0.1} className="text-ink/80 text-lg leading-relaxed mb-6">
                <p>{para}</p>
              </FadeIn>
            ))}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
              {about.goals.map((g, i) => {
                const Icon = iconMap[g.icon as keyof typeof iconMap] ?? Briefcase;
                return (
                  <motion.div
                    key={g.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * i, duration: 0.7, ease: easings.expoOut }}
                    className="rounded-xl border border-line p-5 bg-surface hover:border-accent transition-colors"
                  >
                    <Icon className="size-5 text-accent mb-3" />
                    <div className="text-[10px] uppercase tracking-[0.25em] text-muted">
                      {g.eyebrow}
                    </div>
                    <div className="text-ink text-sm font-medium mt-1 leading-snug">{g.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
