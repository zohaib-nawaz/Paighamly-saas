/**
 * Light / dark appearance (separate from accent `data-theme`).
 *
 * Accent themes (violet, emerald, …) only swap the primary color.
 * Color scheme swaps surface tokens (background, card, borders).
 */

export const COLOR_SCHEME_IDS = ["dark", "light"] as const;

export type ColorSchemeId = (typeof COLOR_SCHEME_IDS)[number];

export const DEFAULT_COLOR_SCHEME: ColorSchemeId = "dark";

export const COLOR_SCHEME_STORAGE_KEY = "paighamly.color-scheme";

export function isColorSchemeId(value: unknown): value is ColorSchemeId {
  return (
    typeof value === "string" &&
    (COLOR_SCHEME_IDS as readonly string[]).includes(value)
  );
}
