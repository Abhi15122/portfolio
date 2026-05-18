"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/data/socials";
import MagneticButton from "@/components/ui/MagneticButton";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { getLenis } from "@/lib/lenis";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(el as HTMLElement, { offset: -80 });
    else el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-canvas/70 border-b border-line py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl tracking-tight"
          data-cursor="hover"
        >
          Abhi<span className="text-accent">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleAnchor(e, l.href)}
              className="text-muted hover:text-ink transition-colors"
              data-cursor="hover"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <MagneticButton
            asLink={{ href: "#contact" }}
            className="bg-accent text-accent-ink hover:bg-[#e3ff60]"
          >
            Let&apos;s talk
          </MagneticButton>
        </div>
      </div>
    </motion.header>
  );
}
