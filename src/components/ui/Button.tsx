import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline";

const base =
  "inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full text-sm font-medium transition-colors";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-ink hover:bg-[#e3ff60]",
  ghost: "text-ink hover:text-accent",
  outline: "border border-line text-ink hover:border-accent hover:text-accent",
};

interface BaseProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  className,
  children,
  ...rest
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button data-cursor="hover" className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...rest
}: BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a data-cursor="hover" className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </a>
  );
}
