"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  DARK_FALLBACK_THEME,
  DARK_QUERY,
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
  type ThemeName,
  isThemeName,
  mapThemeToCarbon,
} from "@/lib/theme-config";

function applyTheme(theme: ThemeName) {
  const carbonTheme = mapThemeToCarbon(theme);
  const root = document.documentElement;
  const body = document.body;

  root.dataset.theme = theme;
  root.dataset.carbonTheme = carbonTheme;
  if (body) {
    body.dataset.theme = theme;
    body.dataset.carbonTheme = carbonTheme;
  }
}

export function getStoredTheme(): ThemeName | null {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  return isThemeName(stored) ? stored : null;
}

export function resolveSystemTheme(matches?: boolean): ThemeName {
  const prefersDark =
    typeof window !== "undefined"
      ? matches ?? window.matchMedia(DARK_QUERY).matches
      : false;
  return prefersDark ? DARK_FALLBACK_THEME : DEFAULT_THEME;
}

type ThemeContextValue = {
  theme: ThemeName;
  storedTheme: ThemeName | null;
  setTheme: (theme: ThemeName) => void;
  resetTheme: () => void;
  carbonTheme: "g10" | "g90" | "g100";
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [storedTheme, setStoredTheme] = useState<ThemeName | null>(() =>
    typeof window === "undefined" ? null : getStoredTheme(),
  );
  const [theme, setThemeState] = useState<ThemeName>(() => {
    if (typeof document === "undefined") {
      return DEFAULT_THEME;
    }
    const current = document.documentElement.dataset.theme;
    if (isThemeName(current)) {
      return current;
    }
    const stored = getStoredTheme();
    return stored ?? resolveSystemTheme();
  });

  useEffect(() => {
    if (typeof document === "undefined") return;
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaList = window.matchMedia(DARK_QUERY);
    const listener = (event: MediaQueryListEvent) => {
      if (storedTheme) return;
      setThemeState(resolveSystemTheme(event.matches));
    };
    mediaList.addEventListener("change", listener);
    return () => mediaList.removeEventListener("change", listener);
  }, [storedTheme]);

  const setTheme = useCallback(
    (next: ThemeName) => {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(THEME_STORAGE_KEY, next);
      }
      setStoredTheme(next);
      setThemeState(next);
    },
    [setThemeState],
  );

  const resetTheme = useCallback(() => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(THEME_STORAGE_KEY);
    }
    setStoredTheme(null);
    setThemeState(resolveSystemTheme());
  }, []);

  const carbonTheme = mapThemeToCarbon(theme);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      storedTheme,
      setTheme,
      resetTheme,
      carbonTheme,
    }),
    [theme, storedTheme, setTheme, resetTheme, carbonTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

export {
  THEME_STORAGE_KEY,
  DARK_QUERY,
  THEME_OPTIONS,
  DEFAULT_THEME,
  DARK_FALLBACK_THEME,
  mapThemeToCarbon,
} from "@/lib/theme-config";
export type { ThemeName } from "@/lib/theme-config";
