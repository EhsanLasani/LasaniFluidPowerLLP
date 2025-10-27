"use client";

import { ReactNode, useEffect } from "react";

export const THEME_STORAGE_KEY = "lasani.theme";
export const DARK_QUERY = "(prefers-color-scheme: dark)";
export const THEME_OPTIONS = [
  "carbon-g10",
  "carbon-g90",
  "carbon-g100",
  "material-light",
  "material-dark",
] as const;
export type ThemeName = (typeof THEME_OPTIONS)[number];

export const DEFAULT_THEME: ThemeName = "carbon-g10";
export const DARK_FALLBACK_THEME: ThemeName = "carbon-g90";

function applyTheme(theme: ThemeName) {
  document.documentElement.dataset.theme = theme;
}

export function getStoredTheme(): ThemeName | null {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  return THEME_OPTIONS.includes(stored as ThemeName) ? (stored as ThemeName) : null;
}

export function resolveSystemTheme(matches?: boolean): ThemeName {
  const prefersDark =
    typeof window !== "undefined"
      ? matches ?? window.matchMedia(DARK_QUERY).matches
      : false;
  return prefersDark ? DARK_FALLBACK_THEME : DEFAULT_THEME;
}

export function setThemePreference(theme: ThemeName | null) {
  if (typeof window === "undefined") return;
  if (theme) {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    applyTheme(theme);
  } else {
    window.localStorage.removeItem(THEME_STORAGE_KEY);
    applyTheme(resolveSystemTheme());
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const storedTheme = getStoredTheme();
    applyTheme(storedTheme ?? resolveSystemTheme());

    const mediaList = window.matchMedia(DARK_QUERY);
    const listener = (event: MediaQueryListEvent) => {
      if (getStoredTheme()) return;
      applyTheme(resolveSystemTheme(event.matches));
    };
    mediaList.addEventListener("change", listener);
    return () => mediaList.removeEventListener("change", listener);
  }, []);

  return <>{children}</>;
}
