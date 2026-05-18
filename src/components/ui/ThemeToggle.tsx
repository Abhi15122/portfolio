"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      data-cursor="hover"
      className="size-10 rounded-full border border-line flex items-center justify-center text-ink hover:text-accent hover:border-accent transition-colors"
    >
      {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
