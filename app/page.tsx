import Image from "next/image";
import { Button, Column, Grid, Link as CarbonLink, Stack, Tile } from "@carbon/react";

const HERO_BADGES = [
  "OEM ready logistics",
  "ISO 9001:2015 aligned",
  "Export documentation support",
] as const;

const VALUE_PROPS = [
  {
    eyebrow: "Inventory at scale",
    title: "Stock that keeps production on schedule",
    description:
      "500 MT+ of ready tubes, pipes, and chrome plated bars staged for rapid dispatch with mill test certification.",
  },
  {
    eyebrow: "Precision machining",
    title: "End-to-end hydraulic cylinder expertise",
    description:
      "Deep hole drilling, honing, skiving, and CNC finishing delivered under one roof for predictable tolerances.",
  },
  {
    eyebrow: "Quality discipline",
    title: "Traceability and inspection built-in",
    description:
      "ISO 9001:2015 workflows, full dimensional reporting, and heat-number traceability on every batch.",
  },
] as const;

const OFFERINGS = [
  {
    title: "Professional Tube Source",
    summary:
      "Seamless and welded tubes, chrome plated bars, and honed cylinders prepared to spec with surface finish to Ra 0.4 um.",
    href: "/products",
    cta: "Explore product catalogue",
  },
  {
    title: "Integrated Machining & Services",
    summary:
      "Deep-hole boring, skiving roller burnishing, OD grinding, and custom fabrication with engineered fixturing support.",
    href: "/services",
    cta: "Review service capabilities",
  },
] as const;

const CAPABILITIES = [
  "Deep hole drilling (BTA / gun) up to 5,500 mm",
  "Honing & skiving roller burnishing to H8 / H9",
  "Precision boring and CNC finishing for OEM assemblies",
  "Chrome plating, weld overlay, and fabrication partnerships",
] as const;

const DELIVERY_POINTS = [
  "Pan-India logistics coordination with export packing standards",
  "24-hour RFQ response backed by application engineers",
  "On-site inspection support and digital quality packs",
] as const;

const METRICS = [
  { value: "500 MT+", label: "Stocked tubes & bars" },
  { value: "12,000 mm", label: "Max honing length" },
  { value: "40+ yrs", label: "Hydraulic expertise" },
  { value: "24 hrs", label: "Typical quote turnaround" },
] as const;

export default function Home() {
  return (
    <main className="flex flex-col gap-12">
      <HeroSection />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-16">
        <ValuePropositionSection />
        <OfferingsSection />
        <CapabilitiesSection />
        <MetricsSection />
        <ContactSection />
      </div>
    </main>
  );
}

function HeroSection() {
  return (
    <section
      className="section-surface section-surface--raised hero-surface relative overflow-hidden"
      style={{
        background:
          "radial-gradient(130% 120% at 12% 5%, color-mix(in srgb, var(--color-interactive) 24%, transparent) 0%, transparent 75%), " +
          "linear-gradient(135deg, color-mix(in srgb, var(--color-bg) 88%, var(--color-interactive) 12%) 0%, color-mix(in srgb, var(--color-bg) 82%, var(--color-accent) 18%) 65%, var(--color-bg) 100%)",
      }}
    >
      <Grid condensed className="relative z-10">
        <Column sm={4} md={6} lg={6}>
          <Stack gap={5}>
            <div className="flex flex-wrap gap-2">
              {HERO_BADGES.map((badge) => (
                <HeroBadge key={badge} label={badge} />
              ))}
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight md:text-5xl">
              Hydraulic tubes, chrome plated bars, and machining expertise ready for your next build.
            </h1>
            <p className="max-w-2xl text-base text-secondary md:text-lg">
              Lasani Fluid Power LLP supplies specialty tubes and finished hydraulic components with ISO-aligned
              machining, inspection, and logistics programs tailored to OEMs and MRO teams worldwide.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/products" kind="primary">
                Browse inventory
              </Button>
              <Button href="/contact" kind="tertiary">
                Send drawings
              </Button>
            </div>
          </Stack>
        </Column>
        <Column sm={4} md={2} lg={2} className="hidden md:flex" />
        <Column sm={4} md={6} lg={6} className="mt-10 md:mt-0">
          <div className="flex h-full items-end justify-end">
            <Image
              src="/Images/home1.png"
              alt="Hydraulic tubes and precision machining setup"
              width={720}
              height={520}
              className="h-auto w-[min(90%,480px)] max-w-full object-contain"
              priority
              style={{
                mixBlendMode: "multiply",
                filter: "saturate(0.85)",
              }}
            />
          </div>
        </Column>
      </Grid>
    </section>
  );
}

function ValuePropositionSection() {
  return (
    <ThemedSection
      variant="raised"
      eyebrow="Why manufacturers partner with Lasani"
      title="Material availability with engineering accountability"
      intro="A unified operations team keeps stocking, machining, and logistics aligned so your hydraulic projects launch on schedule."
    >
      <Grid condensed className="gap-6">
        {VALUE_PROPS.map((item) => (
          <Column key={item.title} sm={4} md={4} lg={4}>
            <Tile className="h-full border border-subtle bg-[color-mix(in srgb, var(--color-bg) 90%, var(--color-interactive) 10%)]/10 p-6">
              <Stack gap={3}>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                  {item.eyebrow}
                </span>
                <h3 className="text-xl font-semibold leading-snug">{item.title}</h3>
                <p className="text-secondary">{item.description}</p>
              </Stack>
            </Tile>
          </Column>
        ))}
      </Grid>
    </ThemedSection>
  );
}

function OfferingsSection() {
  return (
    <ThemedSection
      title="Core offerings"
      intro="From raw tube supply to finished hydraulic assemblies, we control the entire chain so you can scale builds without quality drift."
    >
      <Grid condensed className="gap-6">
        {OFFERINGS.map((offering) => (
          <Column key={offering.title} sm={4} md={4} lg={4}>
            <Tile className="h-full border border-subtle bg-[var(--color-surface)] p-6">
              <Stack gap={4}>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold leading-snug">{offering.title}</h3>
                  <p className="text-secondary">{offering.summary}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button href={offering.href} kind="ghost">
                    {offering.cta}
                  </Button>
                </div>
              </Stack>
            </Tile>
          </Column>
        ))}
      </Grid>
    </ThemedSection>
  );
}

function CapabilitiesSection() {
  return (
    <ThemedSection
      variant="muted"
      title="Capabilities engineered for repeatable performance"
      intro="Dedicated project managers coordinate machining cells, inspection resources, and outbound logistics to deliver consistent results."
    >
      <Grid condensed className="gap-6">
        <Column sm={4} md={6} lg={6}>
          <Stack gap={3}>
            <h3 className="text-lg font-semibold">Machining & finishing stack</h3>
            <ul className="grid gap-2 text-secondary">
              {CAPABILITIES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Stack>
        </Column>
        <Column sm={4} md={6} lg={6}>
          <Stack gap={3}>
            <h3 className="text-lg font-semibold">Delivery assurance</h3>
            <ul className="grid gap-2 text-secondary">
              {DELIVERY_POINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Stack>
        </Column>
      </Grid>
    </ThemedSection>
  );
}

function MetricsSection() {
  return (
    <ThemedSection
      variant="raised"
      title="Operational highlights"
      intro="Every metric is backed by documented processes, calibrated equipment, and dedicated supply partners."
    >
      <Grid condensed className="gap-4">
        {METRICS.map((metric) => (
          <Column key={metric.label} sm={4} md={4} lg={4}>
            <div className="flex h-full flex-col items-start justify-between rounded-[var(--radius-lg)] border border-subtle bg-[var(--color-bg-subtle)] p-6 shadow-sm">
              <span className="text-3xl font-semibold">{metric.value}</span>
              <span className="text-secondary">{metric.label}</span>
            </div>
          </Column>
        ))}
      </Grid>
    </ThemedSection>
  );
}

function ContactSection() {
  return (
    <ThemedSection
      variant="inverse"
      title="Send your specifications or schedule a discovery call"
      intro="Share drawings, tolerance bands, or quality expectations -- our engineering team will respond with a tailored production plan."
    >
      <Grid condensed className="items-center gap-6">
        <Column sm={4} md={6} lg={6}>
          <Stack gap={4}>
            <Button href="/contact" kind="primary">
              Upload RFQ or CAD
            </Button>
            <Button href="/contact" kind="tertiary">
              Book a consultation
            </Button>
          </Stack>
        </Column>
        <Column sm={4} md={6} lg={6}>
          <Stack gap={3}>
            <h3 className="text-lg font-semibold">Prefer to start with a conversation?</h3>
            <p className="text-secondary">
              Call +91 99000 19885 or email{" "}
              <CarbonLink href="mailto:sales@lasanifluidpower.com">sales@lasanifluidpower.com</CarbonLink> for immediate
              assistance.
            </p>
            <p className="text-secondary">
              We can align to your ERP vendor setup, recurring blanket orders, or just-in-time delivery schedules.
            </p>
          </Stack>
        </Column>
      </Grid>
    </ThemedSection>
  );
}

type SectionVariant = "default" | "muted" | "raised" | "inverse";

type ThemedSectionProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  variant?: SectionVariant;
  className?: string;
  children: React.ReactNode;
};

function ThemedSection({
  eyebrow,
  title,
  intro,
  variant = "default",
  className,
  children,
}: ThemedSectionProps) {
  const variantClass: Record<SectionVariant, string> = {
    default: "section-surface",
    muted: "section-surface surface-panel--muted",
    raised: "section-surface section-surface--raised",
    inverse: "section-surface section-on-dark",
  };

  return (
    <section className={`${variantClass[variant]} ${className ?? ""}`.trim()}>
      <Stack gap={4}>
        {eyebrow ? (
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">{eyebrow}</span>
        ) : null}
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold leading-snug">{title}</h2>
          {intro ? <p className="max-w-3xl text-secondary">{intro}</p> : null}
        </div>
        {children}
      </Stack>
    </section>
  );
}

function HeroBadge({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full border border-subtle px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em]"
      style={{
        background: "color-mix(in srgb, var(--color-interactive) 12%, var(--color-bg))",
        color: "var(--color-text-secondary)",
      }}
    >
      {label}
    </span>
  );
}
