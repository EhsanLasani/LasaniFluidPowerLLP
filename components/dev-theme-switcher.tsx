"use client";

import { ChangeEvent, useMemo } from "react";
import { THEME_OPTIONS, ThemeName, useTheme } from "@/components/theme-provider";

const THEME_LABELS: Record<ThemeName, string> = {
  "carbon-g10": "Carbon g10 (light)",
  "carbon-g90": "Carbon g90 (dark)",
  "carbon-g100": "Carbon g100 (deep dark)",
  "material-light": "Material light",
  "material-dark": "Material dark",
  "lasani-light": "Lasani brand (light)",
  "lasani-dark": "Lasani brand (dark)",
};

const isDev = process.env.NODE_ENV !== "production";

export function DevThemeSwitcher() {
  const { theme, storedTheme, setTheme, resetTheme } = useTheme();

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
    setTheme(nextTheme);
  };

  const handleReset = () => {
    resetTheme();
  };

  return (
    <div className="dev-theme-switcher">
      <label className="dev-theme-switcher__label" htmlFor="dev-theme-selector">
        Theme preview
      </label>
      <select
        id="dev-theme-selector"
        className="dev-theme-switcher__select"
        value={theme}
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
