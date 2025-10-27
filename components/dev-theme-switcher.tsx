"use client";

import { ChangeEvent, useMemo, useState, useSyncExternalStore } from "react";
import {
  DEFAULT_THEME,
  THEME_OPTIONS,
  ThemeName,
  getStoredTheme,
  setThemePreference,
} from "@/components/theme-provider";

const THEME_LABELS: Record<ThemeName, string> = {
  "carbon-g10": "Carbon · g10 (light)",
  "carbon-g90": "Carbon · g90 (dark)",
  "carbon-g100": "Carbon · g100 (deep dark)",
  "material-light": "Material · Light",
  "material-dark": "Material · Dark",
};

const isDev = process.env.NODE_ENV !== "production";

function subscribeToThemeChanges(callback: () => void) {
  if (typeof document === "undefined") return () => {};
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getActiveThemeSnapshot(): ThemeName {
  if (typeof document === "undefined") return DEFAULT_THEME;
  const current = document.documentElement.dataset.theme;
  return current && (THEME_OPTIONS as readonly string[]).includes(current)
    ? (current as ThemeName)
    : DEFAULT_THEME;
}

function getServerSnapshot() {
  return DEFAULT_THEME;
}

export function DevThemeSwitcher() {
  const activeTheme = useSyncExternalStore(
    subscribeToThemeChanges,
    getActiveThemeSnapshot,
    getServerSnapshot,
  );
  const [storedTheme, setStoredTheme] = useState<ThemeName | null>(() =>
    typeof window === "undefined" ? null : getStoredTheme(),
  );
  const options = useMemo(
    () =>
      THEME_OPTIONS.map((value) => ({
        value,
        label: THEME_LABELS[value],
      })),
    [],
  );

  if (!isDev) {
    return null;
  }

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextTheme = event.target.value as ThemeName;
    setStoredTheme(nextTheme);
    setThemePreference(nextTheme);
  };

  const handleReset = () => {
    setThemePreference(null);
    setStoredTheme(null);
  };

  return (
    <div className="dev-theme-switcher">
      <label className="dev-theme-switcher__label" htmlFor="dev-theme-selector">
        Theme preview
      </label>
      <select
        id="dev-theme-selector"
        className="dev-theme-switcher__select"
        value={activeTheme}
        onChange={handleSelect}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button
        type="button"
        className="dev-theme-switcher__reset"
        onClick={handleReset}
        disabled={storedTheme === null}
      >
        Reset to system
      </button>
    </div>
  );
}
