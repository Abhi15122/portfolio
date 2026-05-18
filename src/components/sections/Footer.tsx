"use client";

import { ArrowUp } from "lucide-react";
import { getLenis } from "@/lib/lenis";

export default function Footer() {
  const year = new Date().getFullYear();

  const toTop = () => {
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-line py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display text-2xl">
            Abhi<span className="text-accent">.</span>
          </p>
          <p className="text-xs text-muted mt-1">
            © {year} · Built with Next.js + Framer Motion.
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs text-muted">
          <a
            href="https://github.com/Abhi15122"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="hover:text-accent transition-colors"
          >
            Source
          </a>
          <button
            type="button"
            onClick={toTop}
            data-cursor="hover"
            className="inline-flex items-center gap-2 hover:text-accent transition-colors"
          >
            Back to top <ArrowUp className="size-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
