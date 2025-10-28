/* eslint-disable tailwindcss/classnames-order */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { useTheme } from "@/components/theme-provider";
import Image from "next/image";

type AppShellProps = {
  children: ReactNode;
  navItems: Array<{ href: string; label: string }>;
};

export function AppShell({ children, navItems }: AppShellProps) {
  const pathname = usePathname();
  const { theme, carbonTheme } = useTheme();

  return (
    <div
      data-theme={theme}
      data-carbon-theme={carbonTheme}
      className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]"
    >
      <header className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="mx-auto w-full max-w-[min(96vw,_80rem)] px-6 py-4 sm:px-10">
          <div className="grid items-center gap-6 sm:grid-cols-[auto_1fr_auto]">
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image
                src="/Images/logo.png"
                alt="Lasani Fluid Power LLP"
                width={128}
                height={40}
                priority
                className="h-10 w-auto"
              />
              <span className="sr-only">Lasani Fluid Power LLP</span>
            </Link>
            <nav aria-label="Primary navigation" className="justify-self-center">
              <ul className="flex items-center justify-center gap-6 text-sm font-medium">
                {navItems.map((item) => {
                  const active =
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={`transition-colors ${
                          active
                            ? "text-[var(--color-interactive)]"
                            : "hover:text-[var(--color-interactive)]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="hidden items-center justify-end sm:flex" aria-hidden="true">
              <Image
                src="/Images/logo.png"
                alt=""
                width={128}
                height={40}
                className="h-10 w-auto opacity-0"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col gap-16 py-10">{children}</main>
    </div>
  );
}
