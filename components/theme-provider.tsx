"use client";

import { ReactNode, useEffect } from "react";

type ThemeName = "light" | "dark";

export const THEME_STORAGE_KEY = "lasani.theme";
export const DARK_QUERY = "(prefers-color-scheme: dark)";

function applyTheme(theme: ThemeName) {
  const root = document.documentElement;
  root.dataset.theme = theme;
}

function getStoredTheme(): ThemeName | null {
  const stored = typeof window === "undefined" ? null : localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  return null;
}

export function setThemePreference(theme: ThemeName | null) {
  if (typeof window === "undefined") return;
  if (theme) {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    applyTheme(theme);
  } else {
    localStorage.removeItem(THEME_STORAGE_KEY);
    applyTheme(window.matchMedia(DARK_QUERY).matches ? "dark" : "light");
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const initial = getStoredTheme() ?? (window.matchMedia(DARK_QUERY).matches ? "dark" : "light");
    applyTheme(initial);

    const mediaList = window.matchMedia(DARK_QUERY);
    const listener = (event: MediaQueryListEvent) => {
      const stored = getStoredTheme();
      if (stored) return;
      applyTheme(event.matches ? "dark" : "light");
    };
    mediaList.addEventListener("change", listener);
    return () => mediaList.removeEventListener("change", listener);
  }, []);

  return <>{children}</>;
}
