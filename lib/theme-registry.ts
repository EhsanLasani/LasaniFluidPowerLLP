import {
  CARBON_THEME_MAP,
  THEME_OPTIONS,
  type ThemeName,
  mapThemeToCarbon,
} from "@/lib/theme-config";

export type ThemeTone = "light" | "dark";

export interface ThemeTypography {
  base: string;
  heading: string;
}

export interface ThemeDescriptor {
  id: string;
  label: string;
  tone: ThemeTone;
  carbonFallback?: "g10" | "g90" | "g100";
  typography?: ThemeTypography;
  notes?: string;
}

type RegistryMap = Map<string, ThemeDescriptor>;

export class ThemeRegistry {
  private themes: RegistryMap = new Map();

  constructor(initialThemes?: ThemeDescriptor[]) {
    if (initialThemes?.length) {
      initialThemes.forEach((theme) => this.register(theme));
    }
  }

  register(descriptor: ThemeDescriptor): ThemeDescriptor {
    const normalized: ThemeDescriptor = {
      ...descriptor,
      carbonFallback: descriptor.carbonFallback ?? mapThemeToCarbon(descriptor.id as ThemeName),
      tone: descriptor.tone,
    };

    this.themes.set(descriptor.id, normalized);
    return normalized;
  }

  has(id: string): boolean {
    return this.themes.has(id);
  }

  get(id: string): ThemeDescriptor | undefined {
    return this.themes.get(id);
  }

  list(): ThemeDescriptor[] {
    return Array.from(this.themes.values());
  }

  listByTone(tone: ThemeTone): ThemeDescriptor[] {
    return this.list().filter((theme) => theme.tone === tone);
  }

  toOptions(): Array<{ value: string; label: string }> {
    return this.list().map(({ id, label }) => ({ value: id, label }));
  }
}

function toTitleCase(id: string): string {
  return id
    .replace(/[-_]/g, " ")
    .split(" ")
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");
}

function inferTone(themeId: string): ThemeTone {
  if (/dark|g9|g100/i.test(themeId)) {
    return "dark";
  }
  return "light";
}

function seedFromConfig(): ThemeDescriptor[] {
  return THEME_OPTIONS.map((id) => ({
    id,
    label: toTitleCase(id),
    tone: inferTone(id),
    carbonFallback: CARBON_THEME_MAP[id],
  }));
}

export const themeRegistry = new ThemeRegistry(seedFromConfig());

export function createThemeDescriptor(partial: Partial<ThemeDescriptor> & { id: string }) {
  const tone = partial.tone ?? inferTone(partial.id);
  return {
    id: partial.id,
    label: partial.label ?? toTitleCase(partial.id),
    tone,
    carbonFallback:
      partial.carbonFallback ??
      (partial.id in CARBON_THEME_MAP
        ? CARBON_THEME_MAP[partial.id as ThemeName]
        : tone === "dark"
        ? "g90"
        : "g10"),
    typography: partial.typography,
    notes: partial.notes,
  } satisfies ThemeDescriptor;
}
