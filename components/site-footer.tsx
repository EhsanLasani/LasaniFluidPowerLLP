import { Link as CarbonLink } from "@carbon/react";

const FOOTER_COLUMNS = [
  {
    heading: "Lasani Fluid Power LLP",
    body: [
      "Precision hydraulic tubes, chrome plated bars, and ISO-certified machining services for OEMs and maintenance teams.",
    ],
  },
  {
    heading: "Contact",
    body: ["+91 99000 19885", "+91 89763 37049", "+91 93248 61346", "info@la-sani.com"],
  },
  {
    heading: "Quick Links",
    links: [
      { label: "Products", href: "/products" },
      { label: "Services", href: "/services" },
      { label: "Contact & RFQ", href: "/contact" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)]">
      <div className="mx-auto flex w-full max-w-[min(96vw,_80rem)] flex-col gap-10 px-6 py-12 sm:px-10">
        <div className="grid gap-8 text-center md:grid-cols-3 md:text-left">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading} className="flex flex-col gap-3">
              <p className="text-lg font-semibold">{column.heading}</p>
              {column.body
                ? column.body.map((line) => (
                    <p key={line} className="text-sm text-[var(--color-text-secondary)]">
                      {line}
                    </p>
                  ))
                : null}
              {column.links ? (
                <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <CarbonLink href={link.href}>{link.label}</CarbonLink>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
        <div className="w-full border-t border-[var(--color-border)] pt-4 text-center text-xs text-[var(--color-text-secondary)]">
          © {new Date().getFullYear()} Lasani Fluid Power LLP. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
