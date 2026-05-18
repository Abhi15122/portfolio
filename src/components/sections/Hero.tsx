"use client";

import { motion } from "motion/react";
import { ArrowDown, Download } from "lucide-react";
import { about } from "@/data/about";
import SplitText from "@/components/animations/SplitText";
import MagneticButton from "@/components/ui/MagneticButton";
import { easings } from "@/lib/motion-tokens";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden px-6 md:px-10 pt-32 pb-16"
    >
      <BackgroundMesh />

      <div className="relative max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: easings.expoOut }}
          className="flex items-center gap-3 mb-8 text-xs uppercase tracking-[0.3em] text-muted"
        >
          <span className="relative flex size-2">
            <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
            <span className="relative size-2 rounded-full bg-accent" />
          </span>
          Open to junior roles · MAIT &apos;26
        </motion.div>

        <h1 className="font-display text-[clamp(3.5rem,13vw,11rem)] leading-[0.88] tracking-tight">
          <SplitText text="Abhi" by="word" stagger={0.08} delay={0.4} duration={1} />
          <br />
          <SplitText
            text="Verma."
            by="char"
            stagger={0.04}
            delay={0.7}
            duration={1}
            childClassName="italic text-accent"
          />
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.9, ease: easings.expoOut }}
          className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end"
        >
          <div className="md:col-span-7">
            <p className="text-ink/80 text-lg md:text-xl max-w-xl leading-relaxed">
              {about.shortBio}
            </p>
          </div>
          <div className="md:col-span-5 flex flex-wrap items-center gap-4 md:justify-end">
            <MagneticButton
              asLink={{ href: "#contact" }}
              className="bg-accent text-accent-ink hover:bg-[#e3ff60]"
            >
              Get in touch <ArrowDown className="size-4 -rotate-45" />
            </MagneticButton>
            <MagneticButton
              asLink={{ href: about.resumeHref, target: "_blank", rel: "noopener noreferrer" }}
              className="border border-line text-ink hover:border-accent hover:text-accent"
            >
              Résumé <Download className="size-4" />
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted flex flex-col items-center gap-3"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-line"
        />
      </motion.div>
    </section>
  );
}

function BackgroundMesh() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-canvas" />
      <div
        className="absolute -top-1/3 -left-1/4 w-[60vw] h-[60vw] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, #d8ff4a 0%, transparent 60%)" }}
      />
      <div
        className="absolute -bottom-1/3 -right-1/4 w-[60vw] h-[60vw] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, #6a4dff 0%, transparent 60%)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
