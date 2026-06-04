"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

export function FloatingThemeToggle() {
  const { colorScheme, setColorScheme } = useTheme();
  const isDark = colorScheme === "dark";

  function toggle() {
    setColorScheme(isDark ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={cn(
        "fixed bottom-6 right-6 z-50 flex size-12 items-center justify-center rounded-full",
        "border border-border bg-card text-foreground shadow-lg shadow-black/10",
        "ring-1 ring-foreground/5 transition-all",
        "hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        "dark:shadow-black/40",
      )}
    >
      {isDark ? (
        <Sun className="size-5 text-primary" aria-hidden />
      ) : (
        <Moon className="size-5 text-primary" aria-hidden />
      )}
    </button>
  );
}
