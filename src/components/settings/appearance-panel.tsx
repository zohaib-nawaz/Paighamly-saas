"use client";

import { Check, Moon, Sun } from "lucide-react";

import { useTheme } from "@/hooks/use-theme";
import type { ColorSchemeId } from "@/lib/color-scheme";
import { THEMES, type ThemeId } from "@/lib/themes";
import { cn } from "@/lib/utils";

/**
 * Appearance panel — light/dark mode + accent color theme picker.
 */
export function AppearancePanel() {
  const { theme, setTheme, colorScheme, setColorScheme } = useTheme();

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Appearance</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Choose light or dark surfaces. Saved to this device.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:max-w-md">
          <ColorSchemeCard
            id="light"
            label="Light"
            description="Bright backgrounds, dark text."
            icon={Sun}
            isActive={colorScheme === "light"}
            onPick={() => setColorScheme("light")}
          />
          <ColorSchemeCard
            id="dark"
            label="Dark"
            description="Low-light friendly (default)."
            icon={Moon}
            isActive={colorScheme === "dark"}
            onPick={() => setColorScheme("dark")}
          />
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Color theme</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Pick the accent color used for buttons, active nav, and badges.
            Works in both light and dark mode.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {THEMES.map((t) => (
            <ThemeCard
              key={t.id}
              id={t.id}
              name={t.name}
              tagline={t.tagline}
              swatch={t.swatch}
              isActive={t.id === theme}
              onPick={() => setTheme(t.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function ColorSchemeCard({
  id,
  label,
  description,
  icon: Icon,
  isActive,
  onPick,
}: {
  id: ColorSchemeId;
  label: string;
  description: string;
  icon: typeof Sun;
  isActive: boolean;
  onPick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onPick}
      aria-pressed={isActive}
      aria-label={`Use ${label} mode`}
      className={cn(
        "flex flex-col gap-3 rounded-lg border bg-card p-4 text-left transition-colors",
        isActive
          ? "border-primary/60 ring-2 ring-primary/40"
          : "border-border hover:border-muted-foreground/30 hover:bg-accent/50",
      )}
    >
      <div className="flex items-center justify-between">
        <span
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-lg border",
            id === "light"
              ? "border-border bg-background text-amber-500"
              : "border-border bg-slate-900 text-slate-300",
          )}
          aria-hidden
        >
          <Icon className="h-4 w-4" />
        </span>
        {isActive && (
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-[11px] font-medium text-primary">
            <Check className="h-3 w-3" />
            Active
          </span>
        )}
      </div>
      <div>
        <div className="text-sm font-semibold text-foreground">{label}</div>
        <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
          {description}
        </div>
      </div>
    </button>
  );
}

function ThemeCard({
  id,
  name,
  tagline,
  swatch,
  isActive,
  onPick,
}: {
  id: ThemeId;
  name: string;
  tagline: string;
  swatch: string;
  isActive: boolean;
  onPick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onPick}
      aria-pressed={isActive}
      aria-label={`Use ${name} theme`}
      className={cn(
        "flex flex-col gap-3 rounded-lg border bg-card p-4 text-left transition-colors",
        isActive
          ? "border-primary/60 ring-2 ring-primary/40"
          : "border-border hover:border-muted-foreground/30 hover:bg-accent/50",
      )}
    >
      <div className="flex items-center justify-between">
        <span
          aria-hidden
          className="h-8 w-8 shrink-0 rounded-full"
          style={{
            background: swatch,
            boxShadow: "inset 0 0 0 1px oklch(0 0 0 / 0.12)",
          }}
        />
        {isActive && (
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-[11px] font-medium text-primary">
            <Check className="h-3 w-3" />
            Active
          </span>
        )}
      </div>
      <div>
        <div className="text-sm font-semibold text-foreground">{name}</div>
        <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
          {tagline}
        </div>
      </div>
      <div
        className="mt-1 flex h-2 overflow-hidden rounded-full"
        aria-hidden
      >
        <span className="flex-1" style={{ background: swatch }} />
        <span className="w-3 bg-muted" />
        <span className="w-3 bg-secondary" />
        <span className="w-3 bg-background border border-border" />
      </div>
      <span className="sr-only">Theme id: {id}</span>
    </button>
  );
}
