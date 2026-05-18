import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { getProject, projects } from "@/data/projects";
import Navbar from "@/components/sections/Navbar";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} — Abhinav Verma`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#projects"
            data-cursor="hover"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted hover:text-accent transition-colors mb-12"
          >
            <ArrowLeft className="size-4" /> All projects
          </Link>

          <p className="text-xs uppercase tracking-[0.25em] text-muted mb-4">
            {project.year}
          </p>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] tracking-tight">
            {project.title}
            <span className="text-accent">.</span>
          </h1>
          <p className="text-ink/80 text-xl mt-6 max-w-2xl leading-relaxed">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-2 mt-8">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full border border-line text-muted"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="inline-flex items-center gap-2 px-5 h-11 rounded-full bg-accent text-accent-ink text-sm font-medium hover:bg-[#e3ff60] transition-colors"
              >
                View live <ArrowUpRight className="size-4" />
              </a>
            ) : null}
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="inline-flex items-center gap-2 px-5 h-11 rounded-full border border-line text-sm hover:border-accent hover:text-accent transition-colors"
              >
                Source <GithubIcon className="size-4" />
              </a>
            ) : null}
          </div>

          <div className="mt-20 grid gap-16">
            <Block label="Overview" body={project.detail.overview} />
            <Block label="Problem" body={project.detail.problem} />
            <Block label="Solution" body={project.detail.solution} />
            <Block label="Results" body={project.detail.results} />
          </div>

          {project.detail.screenshots.length ? (
            <div className="mt-20 grid gap-6">
              {project.detail.screenshots.map((s, i) => (
                <div
                  key={i}
                  className="aspect-video rounded-2xl border border-line bg-surface overflow-hidden"
                >
                  <p className="p-4 text-xs text-muted">{s.alt}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-20 text-xs uppercase tracking-[0.25em] text-muted">
              TODO: Abhinav — add screenshots
            </p>
          )}
        </div>
      </main>
    </>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <section className="grid md:grid-cols-[120px_1fr] gap-6 md:gap-12 border-t border-line pt-8">
      <h2 className="text-xs uppercase tracking-[0.25em] text-muted">{label}</h2>
      <p className="text-ink/85 text-lg leading-relaxed max-w-2xl">{body}</p>
    </section>
  );
}
