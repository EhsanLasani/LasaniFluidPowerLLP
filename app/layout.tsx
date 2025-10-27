import type { Metadata } from "next";
import { Inter, Manrope, Geist_Mono } from "next/font/google";
import { CarbonShell } from "@/components/carbon-shell";
import { SiteFooter } from "@/components/site-footer";
import Script from "next/script";
import {
  ThemeProvider,
  DARK_QUERY,
  DARK_FALLBACK_THEME,
  DEFAULT_THEME,
  THEME_OPTIONS,
  THEME_STORAGE_KEY,
} from "@/components/theme-provider";
import { DevThemeSwitcher } from "@/components/dev-theme-switcher";
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
    const stored = window.localStorage.getItem(storageKey);
    const isValidStored = stored && themeOptions.includes(stored) ? stored : null;
    const prefersDark = window.matchMedia(darkQuery).matches;
    const theme = isValidStored ?? (prefersDark ? darkFallbackTheme : defaultTheme);
    document.documentElement.dataset.theme = theme;
  } catch (error) {
    console.warn("Theme init failed", error);
    document.documentElement.dataset.theme = "${DEFAULT_THEME}";
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
        className={`${inter.variable} ${manrope.variable} ${geistMono.variable} bg-[var(--color-bg)] text-[var(--color-text)] antialiased`}
      >
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>
          <DevThemeSwitcher />
          <CarbonShell>
            <div className="flex flex-col gap-16">
              {children}
              <SiteFooter />
            </div>
          </CarbonShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
