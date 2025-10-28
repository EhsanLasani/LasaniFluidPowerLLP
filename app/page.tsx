import { Button, Link as CarbonLink } from "@carbon/react";
import {
  Section,
  SectionHeader,
  SectionBody,
} from "@/components/layout/section";
import { ResponsiveGrid } from "@/components/layout/responsive-grid";
import { Card } from "@/components/layout/card";

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
    <main className="flex w-full flex-col items-center gap-20 pb-24">
      <HeroSection />
      <ValuePropositionSection />
      <OfferingsSection />
      <CapabilitiesSection />
      <MetricsSection />
      <ContactSection />
    </main>
  );
}

function HeroSection() {
  return (
    <Section
      width="wide"
      variant="raised"
      align="center"
      contentPadding="none"
      containerClassName="px-0"
      className="hero-surface relative overflow-hidden"
      style={{
        background:
          "radial-gradient(150% 130% at 50% -25%, color-mix(in srgb, var(--color-surface) 72%, var(--color-interactive) 28%) 0%, transparent 70%), " +
          "linear-gradient(160deg, color-mix(in srgb, var(--color-bg) 88%, var(--color-interactive) 12%) 0%, color-mix(in srgb, var(--color-bg) 72%, var(--color-accent) 28%) 52%, color-mix(in srgb, var(--color-bg) 92%, var(--color-surface) 8%) 100%)",
      }}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[min(96vw,_80rem)] flex-col items-center gap-6 px-6 text-center sm:px-10">
        <h1 className="type-display text-balance max-w-3xl">
          Reliability. Commitment. Value - Engineered into Every Cylinder.
        </h1>
        <p className="type-body-lg max-w-3xl text-secondary">
          Lasani Fluid Power LLP provides precision tubes, chrome-plated bars,
          and machining expertise with an exceptional supply chain and custom
          services for leading hydraulic cylinder manufacturers and system
          integrators.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/products" kind="primary" size="lg">
            Browse inventory
          </Button>
          <Button
            href="/contact"
            kind="ghost"
            size="lg"
            className="cta-secondary"
          >
            Send drawings
          </Button>
        </div>
      </div>
    </Section>
  );
}

function ValuePropositionSection() {
  return (
    <Section variant="raised" align="center" contentPadding="lg">
      <SectionHeader
        align="center"
        eyebrow="Why manufacturers partner with Lasani"
        title="Material availability with engineering accountability"
        kicker="A unified operations team keeps stocking, machining, and logistics aligned so your hydraulic projects launch on schedule."
      />
      <SectionBody>
        <ResponsiveGrid minColumnWidth="18rem">
          {VALUE_PROPS.map((item) => (
            <Card
              key={item.title}
              eyebrow={item.eyebrow}
              title={item.title}
              variant="muted"
            >
              {item.description}
            </Card>
          ))}
        </ResponsiveGrid>
      </SectionBody>
    </Section>
  );
}

function OfferingsSection() {
  return (
    <Section align="center" contentPadding="lg">
      <SectionHeader
        align="center"
        title="Core offerings"
        kicker="From raw tube supply to finished hydraulic assemblies, we control the entire chain so you can scale builds without quality drift."
      />
      <SectionBody>
        <ResponsiveGrid minColumnWidth="20rem">
          {OFFERINGS.map((offering) => (
            <Card
              key={offering.title}
              title={offering.title}
              footer={
                <div className="flex flex-wrap gap-3">
                  <Button href={offering.href} kind="ghost">
                    {offering.cta}
                  </Button>
                </div>
              }
            >
              {offering.summary}
            </Card>
          ))}
        </ResponsiveGrid>
      </SectionBody>
    </Section>
  );
}

function CapabilitiesSection() {
  return (
    <Section variant="muted" align="center" contentPadding="lg">
      <SectionHeader
        align="center"
        title="Capabilities engineered for repeatable performance"
        kicker="Dedicated project managers coordinate machining cells, inspection resources, and outbound logistics to deliver consistent results."
      />
      <SectionBody className="gap-10">
        <ResponsiveGrid minColumnWidth="20rem">
          <div className="flex flex-col gap-3 text-left">
            <h3 className="type-subtitle">Machining &amp; finishing stack</h3>
            <ul className="grid gap-2 type-body text-secondary">
              {CAPABILITIES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3 text-left">
            <h3 className="type-subtitle">Delivery assurance</h3>
            <ul className="grid gap-2 type-body text-secondary">
              {DELIVERY_POINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </ResponsiveGrid>
      </SectionBody>
    </Section>
  );
}

function MetricsSection() {
  return (
    <Section variant="raised" align="center" contentPadding="lg">
      <SectionHeader
        align="center"
        title="Operational highlights"
        kicker="Every metric is backed by documented processes, calibrated equipment, and dedicated supply partners."
      />
      <SectionBody>
        <ResponsiveGrid minColumnWidth="14rem" gap="sm">
          {METRICS.map((metric) => (
            <Card key={metric.label} title={metric.value}>
              {metric.label}
            </Card>
          ))}
        </ResponsiveGrid>
      </SectionBody>
    </Section>
  );
}

function ContactSection() {
  return (
    <Section variant="inverse" align="center" contentPadding="lg">
      <SectionHeader
        align="center"
        title="Send your specifications or schedule a discovery call"
        kicker="Share drawings, tolerance bands, or quality expectations — our engineering team will respond with a tailored production plan."
      />
      <SectionBody className="gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <Button href="/contact" kind="primary">
            Upload RFQ or CAD
          </Button>
          <Button href="/contact" kind="tertiary">
            Book a consultation
          </Button>
        </div>
        <div className="flex flex-col gap-3 text-left lg:max-w-lg">
          <h3 className="type-subtitle">
            Prefer to start with a conversation?
          </h3>
          <p className="type-body text-secondary">
            Call +91 99000 19885 or email{" "}
            <CarbonLink href="mailto:sales@lasanifluidpower.com">
              sales@lasanifluidpower.com
            </CarbonLink>{" "}
            for immediate assistance.
          </p>
          <p className="type-body text-secondary">
            We can align to your ERP vendor setup, recurring blanket orders, or
            just-in-time delivery schedules.
          </p>
        </div>
      </SectionBody>
    </Section>
  );
}
