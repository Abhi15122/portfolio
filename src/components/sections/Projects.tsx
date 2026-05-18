"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import { easings } from "@/lib/motion-tokens";

export default function Projects() {
  const [active, setActive] = useState(0);
  const current = projects[active];

  return (
    <section id="projects" className="relative py-24 md:py-32 px-6 md:px-10 bg-canvas">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Selected Projects" title="Work I'm proud of." />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 hidden lg:block sticky top-32">
            <div className="relative aspect-[4/3] w-full rounded-2xl border border-line bg-surface overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current?.slug}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: easings.expoOut }}
                  className="absolute inset-0"
                >
                  <ProjectCover src={current?.cover ?? ""} alt={`${current?.title} homepage`} />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/55 to-transparent"
                  />
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div className="text-xs uppercase tracking-[0.25em] text-muted">
                      {String(active + 1).padStart(2, "0")} /
                      {String(projects.length).padStart(2, "0")}
                    </div>
                    <div>
                      <p className="font-display text-5xl text-accent leading-none">
                        {current?.title}
                      </p>
                      <p className="text-ink/85 mt-3 max-w-xs leading-relaxed">
                        {current?.tagline}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {current?.tech.slice(0, 5).map((t) => (
                          <span
                            key={t}
                            className="text-[10px] px-2 py-1 rounded-full bg-canvas/80 backdrop-blur border border-line text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              {current?.liveUrl ? (
                <a
                  href={current.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="inline-flex items-center gap-2 text-sm text-ink hover:text-accent transition-colors"
                >
                  View live <ArrowUpRight className="size-4" />
                </a>
              ) : null}
              {current?.repoUrl ? (
                <a
                  href={current.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="inline-flex items-center gap-2 text-sm text-ink hover:text-accent transition-colors"
                >
                  Source <GithubIcon className="size-4" />
                </a>
              ) : null}
            </div>
          </div>

          <ul className="lg:col-span-7 divide-y divide-line border-y border-line">
            {projects.map((p, i) => (
              <li
                key={p.slug}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <Link
                  href={`/projects/${p.slug}`}
                  data-cursor="hover"
                  className="group relative grid grid-cols-[auto_1fr_auto] gap-6 items-center py-8 hover:bg-surface/40 transition-colors -mx-4 px-4"
                >
                  <span className="font-mono text-xs text-muted">
                    _{String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl md:text-5xl leading-none transition-colors group-hover:text-accent">
                      {p.title}
                    </h3>
                    <p className="text-muted text-sm mt-2">{p.tagline}</p>
                    <div className="flex lg:hidden mt-3 gap-4 text-xs">
                      {p.liveUrl ? (
                        <span className="text-accent">View live →</span>
                      ) : null}
                      {p.repoUrl ? <span className="text-muted">Source →</span> : null}
                    </div>
                  </div>
                  <ArrowUpRight className="size-6 text-muted group-hover:text-accent transition-colors -translate-x-1 group-hover:translate-x-0 group-hover:-translate-y-1 motion-safe:transition-transform" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ProjectCover({ src, alt }: { src: string; alt: string }) {
  const [errored, setErrored] = useState(false);
  if (!src || errored) {
    return (
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #d8ff4a 0%, transparent 55%), radial-gradient(circle at 80% 80%, #6a4dff33 0%, transparent 60%)",
        }}
      />
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setErrored(true)}
      className="absolute inset-0 w-full h-full object-cover object-top"
    />
  );
}
