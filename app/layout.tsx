import type { Metadata } from "next";
import { Inter, Manrope, Geist_Mono } from "next/font/google";
import { CarbonShell } from "@/components/carbon-shell";
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

export const metadata: Metadata = {
  title: "Lasani Fluid Power LLP",
  description:
    "Precision hydraulic tubes, chrome plated bars, and ISO-certified machining services with global logistics coverage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${manrope.variable} ${geistMono.variable} bg-[var(--color-surface-base)] text-[var(--color-text-primary)] antialiased`}
      >
        <CarbonShell>
          <div className="flex flex-col gap-16">
            {children}
            <SiteFooter />
          </div>
        </CarbonShell>
      </body>
    </html>
  );
}
