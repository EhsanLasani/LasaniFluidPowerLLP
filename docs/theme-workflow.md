# Theme Integration Workflow

This handbook captures the repeatable steps for adding a new visual theme to the Lasani website (or to future projects that reuse the same shell). Follow the checklist from top to bottom to keep appearance, typography, and component behaviour in sync.

---

## 1. Quick Reference Checklist

**Collect design inputs**
- [ ] Confirm theme id (`vendor-variant`, e.g. `fluent-dark`) and marketing label.
- [ ] Gather token values: background stack, surface elevations, borders, primary/secondary text, accent, focus, interactive states.
- [ ] Capture brand typography (base/heading families and fallbacks).

**Register the theme**
- [ ] Add the id to `THEME_OPTIONS` and the label map in `components/dev-theme-switcher.tsx`.
- [ ] Map the theme to a Carbon fallback (`g10`, `g90`, `g100`) in `lib/theme-config.ts`.
- [ ] (Optional) Seed the theme via `themeRegistry.register(...)` if you want metadata available centrally.

**Implement the tokens**
- [ ] Append a `:where([data-theme="…"]) { … }` block to `app/globals.css` using the collected tokens.
- [ ] Set typography variables (`--font-base`, `--font-heading`) to match the design system.
- [ ] Define supporting tokens (`--color-heading`, `--color-interactive-subtle`, etc.) to keep component surfaces aligned.

**Wire up the runtime**
- [ ] Verify `theme-init` script (in `app/layout.tsx`) picks up the new id.
- [ ] Confirm the theme appears in the dev switcher dropdown and toggles without hydration warnings.

**Component QA**
- [ ] Inspect header, footer, hero, and section surfaces: backgrounds should match the new tokens.
- [ ] Check interactive states (links, buttons, nav) for sufficient contrast in both light and dark variants.
- [ ] Review typography render (headings vs. body) to ensure the expected face loads on available platforms.

---

## 2. Theme Registry Module

File: `lib/theme-registry.ts`

The module provides a light abstraction for declaring theme metadata. It ships with the current theme list pre-seeded from `lib/theme-config.ts`, and exposes helpers you can reuse in future projects.

```ts
import { createThemeDescriptor, themeRegistry } from "@/lib/theme-registry";

const mangoTheme = createThemeDescriptor({
  id: "mango-light",
  label: "Mango UI (light)",
  tone: "light",
  typography: {
    base: "\"Mango Sans\", \"Inter\", system-ui, sans-serif",
    heading: "\"Mango Serif\", \"Manrope\", system-ui, sans-serif",
  },
});

themeRegistry.register(mangoTheme);
```

**Key exports**

- `ThemeRegistry`: class with `register`, `get`, `list`, and `listByTone` methods.
- `createThemeDescriptor`: utility that infers tone/fallbacks while allowing overrides.
- `themeRegistry`: default instance seeded from `THEME_OPTIONS`.

Use this registry to:
- Generate dropdown options (`themeRegistry.toOptions()`).
- Inspect metadata while rendering docs or previews.
- Keep future Storybook/Playwright fixtures in sync with the canonical theme list.

---

## 3. CSS Integration Pattern

Every theme in `app/globals.css` follows a consistent structure:

```css
/* @theme vendor-variant:start */
:where(html[data-theme="vendor-variant"],
       body[data-theme="vendor-variant"],
       [data-theme="vendor-variant"]) {
  color-scheme: light | dark;
  --color-bg: ...;
  --color-surface: ...;
  --color-border: ...;
  --color-text: ...;
  --color-text-secondary: ...;
  --color-interactive: ...;
  --color-heading: ...;
  --font-base: "...";
  --font-heading: "...";
  /* any additional tokens (accent, focus, subtles, etc.) */
}
/* @theme vendor-variant:end */
```

Guidelines:
- Always scope tokens with `:where(...)` so they can apply to nested containers (e.g., themed preview frames).
- Provide at least the core color ramp (`bg`, `surface`, `border`, `text`, `text-secondary`, `text-muted`, `interactive`, `accent`, `focus`).
- Derive subtle/background variants (`--color-surface-raised`, `--color-interactive-subtle`) for card and badge components.
- Mirror typography shifts per brand by updating `--font-base` and `--font-heading`.

---

## 4. Runtime Usage Across Components

### Layout Spine (`app/layout.tsx` & `components/layout/app-shell.tsx`)
- The `theme-init` script writes `data-theme`/`data-carbon-theme` on `<html>` and `<body>`.
- `AppShell` mirrors those attributes on its root wrapper so descendant components receive the correct token set.
- Any new shell component must forward `data-theme` attributes if it introduces additional wrappers.

### Header & Navigation
- Navigation text color inherits `--color-text`.
- Active/hover states rely on `--color-interactive`; ensure each new theme sets a visible contrast for links.
- When creating new nav items, avoid hard-coded colors—use utility classes (`text-[var(--color-interactive)]`) or the predefined `.text-secondary` helper.

### Footer
- `SiteFooter` uses `LayoutContainer` and references the raw tokens (`--color-surface`, `--color-border`, `--color-text-secondary`). It automatically adapts as long as the theme defines those variables.
- When extending the footer (e.g., adding badges or CTA buttons), use the design tokens (`--color-interactive-subtle`) instead of static hex codes.

### Hero & Content Sections
- `Section` component consumes `--color-surface`, `--color-border`, `--color-interactive`, and `--color-heading`. Variant logic (`raised`, `inverse`, `muted`) blends these tokens via `color-mix`.
- `LayoutContainer` centers content and should wrap any new section to respect responsive max-width and page gutters.
- New components should pull colors from tokens (`text-secondary`, `bg-subtle`, `border-subtle`) to remain theme-aware.

### Buttons & Interactive Elements
- Carbon buttons already react to `--color-interactive` and related tokens. When building custom buttons, use the same variable names to keep parity.
- For bespoke hover/focus effects, derive them from existing tokens (`color-mix` with `--color-interactive` + `--color-surface`) rather than constants.

---

## 5. Adding a New Theme: Worked Example

1. **Design handoff**  
   Receive “Nimbus Dark” palette with token sheet and typography pairings.

2. **Update config**  
   - Append `"nimbus-dark"` to `THEME_OPTIONS`.  
   - Map it to `"g90"` inside `CARBON_THEME_MAP`.  
   - Add `"nimbus-dark": "Nimbus (dark)"` to `THEME_LABELS` in `components/dev-theme-switcher.tsx`.  
   - Register metadata:  
     ```ts
     themeRegistry.register(
       createThemeDescriptor({
         id: "nimbus-dark",
         label: "Nimbus (dark)",
         typography: {
           base: "\"Nimbus Sans\", \"Segoe UI\", sans-serif",
           heading: "\"Nimbus Display\", \"Manrope\", sans-serif",
         },
       }),
     );
     ```

3. **Add CSS block**  
   Insert a `:where([...])` block in `globals.css` populated with the Nimbus tokens.

4. **Test & QA**  
   - Restart `npm run dev`, switch to “Nimbus (dark)”.  
   - Validate hero, card, and footer contrast.  
   - Confirm typography change (inspect computed font-family).  
   - Run visual diff or Lighthouse for color contrast if needed.

5. **Document**  
   Record any theme-specific notes in `ThemeDescriptor.notes` or the project README for future maintainers.

---

## 6. Recommendations for New Components

- Consume typography utilities (`type-display`, `type-title`, etc.)—those adapt automatically as `--font-heading`/`--font-base` change per theme.
- For custom backgrounds, start from existing tokens (`--color-surface`, `--color-surface-raised`) and adjust with `color-mix` so dark/light themes stay readable.
- Use the `Section` component variants instead of raw `<section>` markup; the variant system already honours inverse/gradient behaviour per theme.
- When adding icons or graphics, verify the asset works on both light and dark backgrounds. Prefer SVG with `currentColor` fill to inherit theme colors.

---

## 7. Maintenance Tips

- Keep the theme list alphabetised in `THEME_OPTIONS` to reduce merge conflicts.
- Group CSS theme blocks by vendor and annotate with `@theme vendor-variant:start/end` comments for easier searching.
- If a theme requires component-level overrides, place them near the component styles (e.g., `.cta-secondary`) with a `[data-theme="id"]` selector and document the rationale.
- Run a regression pass whenever modifying the `theme-init` script or `ThemeProvider` to ensure SSR hydration stays in sync.

---

Following this process keeps visual consistency across themes and makes it trivial to introduce new vendor-inspired palettes without rewriting page components. Save this file with the project so future contributors can onboard quickly. 
