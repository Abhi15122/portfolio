import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({ eyebrow, title, align = "left", className }: Props) {
  return (
    <div className={cn("mb-12 md:mb-20", align === "center" && "text-center", className)}>
      {eyebrow ? (
        <p className="text-muted text-xs uppercase tracking-[0.25em] mb-4 flex items-center gap-3">
          <span className="size-1.5 rounded-full bg-accent" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight">
        {title}
      </h2>
    </div>
  );
}
