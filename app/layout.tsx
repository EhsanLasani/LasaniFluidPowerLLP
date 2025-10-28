import type { Metadata } from "next";
import {
  Inter,
  Manrope,
  Geist_Mono,
  IBM_Plex_Sans,
  IBM_Plex_Serif,
  Roboto,
} from "next/font/google";
import { AppShell } from "@/components/layout/app-shell";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import {
  CARBON_THEME_MAP,
  DARK_QUERY,
  DARK_FALLBACK_THEME,
  DEFAULT_THEME,
  THEME_OPTIONS,
  THEME_STORAGE_KEY,
  mapThemeToCarbon,
} from "@/lib/theme-config";
import { DevThemeSwitcher } from "@/components/dev-theme-switcher";
import { primaryNav } from "@/lib/navigation";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const ibmSans = IBM_Plex_Sans({
  variable: "--font-ibm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const ibmSerif = IBM_Plex_Serif({
  variable: "--font-ibm-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lasani Fluid Power LLP",
  description:
    "Precision hydraulic tubes, chrome plated bars, and ISO-certified machining services with global logistics coverage.",
};

const themeInitScript = `
(function() {
  try {
    const storageKey = "${THEME_STORAGE_KEY}";
    const darkQuery = "${DARK_QUERY}";
    const themeOptions = ${JSON.stringify(THEME_OPTIONS)};
    const defaultTheme = "${DEFAULT_THEME}";
    const darkFallbackTheme = "${DARK_FALLBACK_THEME}";
    const carbonBridge = ${JSON.stringify(CARBON_THEME_MAP)};
    const stored = window.localStorage.getItem(storageKey);
    const isValidStored = stored && themeOptions.includes(stored) ? stored : null;
    const prefersDark = window.matchMedia(darkQuery).matches;
    const theme = isValidStored ?? (prefersDark ? darkFallbackTheme : defaultTheme);
    const carbonTheme = carbonBridge[theme] || "g10";
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.carbonTheme = carbonTheme;
    if (document.body) {
      document.body.dataset.theme = theme;
      document.body.dataset.carbonTheme = carbonTheme;
    }
  } catch (error) {
    console.warn("Theme init failed", error);
    document.documentElement.dataset.theme = "${DEFAULT_THEME}";
    document.documentElement.dataset.carbonTheme = "${mapThemeToCarbon(
      DEFAULT_THEME
    )}";
    if (document.body) {
      document.body.dataset.theme = "${DEFAULT_THEME}";
      document.body.dataset.carbonTheme = "${mapThemeToCarbon(DEFAULT_THEME)}";
    }
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme={DEFAULT_THEME} suppressHydrationWarning>
      <body
        className={[
          inter.variable,
          manrope.variable,
          geistMono.variable,
          ibmSans.variable,
          ibmSerif.variable,
          roboto.variable,
          "bg-[var(--color-bg)]",
          "text-[var(--color-text)]",
          "antialiased",
        ].join(" ")}
        data-theme={DEFAULT_THEME}
        data-carbon-theme={mapThemeToCarbon(DEFAULT_THEME)}
      >
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <ThemeProvider>
          <DevThemeSwitcher />
          <AppShell
            navItems={primaryNav.map((item) => ({
              href: item.href,
              label: item.title,
            }))}
          >
            {children}
            <SiteFooter />
          </AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
