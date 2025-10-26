import { Grid, Column, Link as CarbonLink, Layer } from "@carbon/react";

export function SiteFooter() {
  return (
    <Layer level={1}>
      <footer className="border-t border-solid border-[var(--cds-border-subtle)] bg-[var(--cds-layer)] px-6 py-10">
        <Grid condensed className="mx-auto max-w-6xl text-[var(--cds-text-primary)]">
          <Column sm={4} md={4} lg={4}>
            <p className="text-lg font-semibold">Lasani Fluid Power LLP</p>
            <p className="mt-3 text-sm text-[var(--cds-text-secondary)]">
              Precision hydraulic tubes, chrome plated bars, and ISO-certified
              machining services for OEMs and maintenance teams.
            </p>
          </Column>
          <Column sm={4} md={4} lg={4}>
            <p className="text-lg font-semibold">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--cds-text-secondary)]">
              <li>+91 99000 19885</li>
              <li>+91 89763 37049</li>
              <li>+91 93248 61346</li>
              <li>info@la-sani.com</li>
            </ul>
          </Column>
          <Column sm={4} md={4} lg={4}>
            <p className="text-lg font-semibold">Quick Links</p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--cds-text-secondary)]">
              <li>
                <CarbonLink href="/products">Products</CarbonLink>
              </li>
              <li>
                <CarbonLink href="/machining">Machining Services</CarbonLink>
              </li>
              <li>
                <CarbonLink href="/contact">Contact &amp; RFQ</CarbonLink>
              </li>
            </ul>
          </Column>
        </Grid>
        <div className="mt-8 border-t border-solid border-[var(--cds-border-subtle)] pt-4 text-center text-xs text-[var(--cds-text-secondary)]">
          © {new Date().getFullYear()} Lasani Fluid Power LLP. All rights
          reserved.
        </div>
      </footer>
    </Layer>
  );
}
