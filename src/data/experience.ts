export type TimelineKind = "experience" | "education";

export interface TimelineEntry {
  kind: TimelineKind;
  title: string;
  org: string;
  period: string;
  location?: string;
  summary: string;
  tech?: string[];
}

export const timeline: TimelineEntry[] = [
  {
    kind: "experience",
    title: "Full-Stack Developer",
    org: "TODO: Abhinav — company name",
    period: "Present",
    location: "Remote",
    summary:
      "Building product features end-to-end across a TypeScript / Next.js / NestJS stack. Owning UX polish, API contracts, and performance.",
    tech: ["TypeScript", "Next.js", "NestJS", "PostgreSQL"],
  },
  {
    kind: "experience",
    title: "Frontend Developer",
    org: "TODO: Abhinav — previous company",
    period: "2024 — 2025",
    location: "Remote",
    summary:
      "Shipped customer-facing dashboards with strong attention to motion, accessibility, and component reuse.",
    tech: ["React", "Redux", "Tailwind"],
  },
  {
    kind: "experience",
    title: "Software Engineer Intern",
    org: "TODO: Abhinav — internship",
    period: "2023",
    location: "Remote",
    summary:
      "Worked on internal tooling and contributed to the design-system migration.",
    tech: ["React", "Node.js"],
  },
  {
    kind: "education",
    title: "B.Tech, Computer Science",
    org: "Maharaja Agrasen Institute of Technology (MAIT)",
    period: "Graduated",
    location: "New Delhi, India",
    summary:
      "Focused on data structures, web systems, and building practical projects outside coursework.",
  },
];
