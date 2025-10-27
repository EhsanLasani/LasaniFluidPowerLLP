import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Manrope, Geist_Mono } from "next/font/google";
import { CarbonShell } from "@/components/carbon-shell";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider, DARK_QUERY, THEME_STORAGE_KEY } from "@/components/theme-provider";
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
    const stored = window.localStorage.getItem(storageKey);
    const theme = stored === "light" || stored === "dark"
      ? stored
      : (window.matchMedia(darkQuery).matches ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
  } catch (error) {
    console.warn("Theme init failed", error);
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${manrope.variable} ${geistMono.variable} bg-[var(--color-surface-base)] text-[var(--color-text-primary)] antialiased`}
      >
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>
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
