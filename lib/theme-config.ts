export const THEME_STORAGE_KEY = "lasani.theme";
export const DARK_QUERY = "(prefers-color-scheme: dark)";

export const THEME_OPTIONS = [
  "carbon-g10",
  "carbon-g90",
  "carbon-g100",
  "material-light",
  "material-dark",
  "lasani-light",
  "lasani-dark",
  "fluent-light",
  "fluent-dark",
  "apple-light",
  "apple-dark",
  "spectrum-light",
  "spectrum-dark",
  "uber-light",
  "uber-dark",
  "audi-light",
  "audi-dark",
] as const;

export type ThemeName = (typeof THEME_OPTIONS)[number];

export const DEFAULT_THEME: ThemeName = "carbon-g10";
export const DARK_FALLBACK_THEME: ThemeName = "carbon-g90";

export const CARBON_THEME_MAP: Record<ThemeName, "g10" | "g90" | "g100"> = {
  "carbon-g10": "g10",
  "carbon-g90": "g90",
  "carbon-g100": "g100",
  "material-light": "g10",
  "material-dark": "g90",
  "lasani-light": "g10",
  "lasani-dark": "g90",
  "fluent-light": "g10",
  "fluent-dark": "g90",
  "apple-light": "g10",
  "apple-dark": "g90",
  "spectrum-light": "g10",
  "spectrum-dark": "g90",
  "uber-light": "g10",
  "uber-dark": "g90",
  "audi-light": "g10",
  "audi-dark": "g90",
};

export function mapThemeToCarbon(theme: ThemeName): "g10" | "g90" | "g100" {
  return CARBON_THEME_MAP[theme] ?? "g10";
}

export function isThemeName(value: unknown): value is ThemeName {
  return typeof value === "string" && (THEME_OPTIONS as readonly string[]).includes(value);
}
