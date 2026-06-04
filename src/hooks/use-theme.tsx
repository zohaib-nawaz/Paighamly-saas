"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import {
  COLOR_SCHEME_STORAGE_KEY,
  DEFAULT_COLOR_SCHEME,
  isColorSchemeId,
  type ColorSchemeId,
} from "@/lib/color-scheme";
import {
  DEFAULT_THEME,
  STORAGE_KEY,
  isThemeId,
  type ThemeId,
} from "@/lib/themes";

/**
 * ThemeProvider — accent theme + light/dark color scheme.
 *
 * Boot script in layout.tsx applies both on <html> before hydrate.
 */

interface ThemeContextValue {
  theme: ThemeId;
  setTheme: (next: ThemeId) => void;
  colorScheme: ColorSchemeId;
  setColorScheme: (next: ColorSchemeId) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function applyColorSchemeToDocument(scheme: ColorSchemeId): void {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.colorScheme = scheme;
  document.documentElement.classList.toggle("dark", scheme === "dark");
}

function readInitialTheme(): ThemeId {
  if (typeof window === "undefined") return DEFAULT_THEME;
  const fromAttr = document.documentElement.dataset.theme;
  if (isThemeId(fromAttr)) return fromAttr;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isThemeId(stored)) return stored;
  } catch {
    /* private browsing */
  }
  return DEFAULT_THEME;
}

function readInitialColorScheme(): ColorSchemeId {
  if (typeof window === "undefined") return DEFAULT_COLOR_SCHEME;
  const fromAttr = document.documentElement.dataset.colorScheme;
  if (isColorSchemeId(fromAttr)) return fromAttr;
  try {
    const stored = localStorage.getItem(COLOR_SCHEME_STORAGE_KEY);
    if (isColorSchemeId(stored)) return stored;
  } catch {
    /* private browsing */
  }
  return DEFAULT_COLOR_SCHEME;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(readInitialTheme);
  const [colorScheme, setColorSchemeState] = useState<ColorSchemeId>(
    readInitialColorScheme,
  );

  const setTheme = useCallback((next: ThemeId) => {
    setThemeState(next);
    if (typeof document !== "undefined") {
      document.documentElement.dataset.theme = next;
    }
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* session-only */
    }
  }, []);

  const setColorScheme = useCallback((next: ColorSchemeId) => {
    setColorSchemeState(next);
    applyColorSchemeToDocument(next);
    try {
      localStorage.setItem(COLOR_SCHEME_STORAGE_KEY, next);
    } catch {
      /* session-only */
    }
  }, []);

  useEffect(() => {
    applyColorSchemeToDocument(colorScheme);
  }, [colorScheme]);

  useEffect(() => {
    function onStorage(e: StorageEvent) {
      if (e.key === STORAGE_KEY && isThemeId(e.newValue) && e.newValue !== theme) {
        setThemeState(e.newValue);
        document.documentElement.dataset.theme = e.newValue;
      }
      if (
        e.key === COLOR_SCHEME_STORAGE_KEY &&
        isColorSchemeId(e.newValue) &&
        e.newValue !== colorScheme
      ) {
        setColorSchemeState(e.newValue);
        applyColorSchemeToDocument(e.newValue);
      }
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [theme, colorScheme]);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, colorScheme, setColorScheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    return {
      theme: DEFAULT_THEME,
      setTheme: () => {},
      colorScheme: DEFAULT_COLOR_SCHEME,
      setColorScheme: () => {},
    };
  }
  return ctx;
}
