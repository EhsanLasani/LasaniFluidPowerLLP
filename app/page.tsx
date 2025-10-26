import Image from "next/image";
import {
  Button,
  Column,
  Grid,
  Layer,
  Link as CarbonLink,
  Stack,
  Tag,
  Theme,
  Tile,
} from "@carbon/react";

const valueProps = [
  {
    title: "Stock & Scale",
    description: "500 MT+ stocking program with rapid dispatch capabilities.",
  },
  {
    title: "Engineering Precision",
    description:
      "Deep hole drilling, honing, trepanning, boring, and grinding in one facility.",
  },
  {
    title: "Quality Assured",
    description:
      "Tier-one sourcing, ISO 9001:2015 aligned QA, and mill traceability.",
  },
  {
    title: "On-Time Delivery",
    description: "Pan-India and export logistics with reliable ETAs.",
  },
];

const offerings = [
  {
    title: "Professional Tube Source",
    copy: "Seamless & welded tubes, honed / skived cylinders, chrome plated bars.",
    href: "/products",
  },
  {
    title: "Machining Services",
    copy: "ISO-certified deep hole drilling, honing, SRB, boring, grinding, trepanning.",
    href: "/machining",
  },
  {
    title: "Cylinder Repair Programs",
    copy: "OEM-grade rebuild, re-chroming, and expedited turnaround for mission-critical assets.",
    href: "/repair",
  },
];

const featuredProducts = [
  {
    title: "Honed / Skived Tube",
    bullets: [
      "ID 25 mm - 350 mm",
      "Tolerance H8, H9, H10",
      "Surface finish to Ra <= 0.40 um",
    ],
    href: "/products#honed-tube",
  },
  {
    title: "Chrome Plated Bar",
    bullets: [
      "Diameters 25 mm - 100 mm",
      "ISO f7 tolerances",
      "Corrosion-resistant grades",
    ],
    href: "/products#chrome-bar",
  },
  {
    title: "Hydraulic Line Pipe",
    bullets: [
      "Standard & custom alloys",
      "Turnkey kitting",
      "Traceable supply chain",
    ],
    href: "/products#line-pipe",
  },
];

const capabilities = [
  "Deep hole drilling (BTA / gun)",
  "Honing & Skiving Roller Burnishing",
  "Precision boring / fine boring",
  "Trepanning",
  "OD turning & grinding",
  "Welding, cladding & fabrication",
  "Custom OEM machining projects",
];

const industries = [
  "Oil & Gas",
  "Hydraulic Cylinder OEMs",
  "Mining & Construction",
  "Automotive & Off-Highway",
  "Power & Energy",
  "Aerospace & Defense",
  "Petrochemical",
  "Rail & Heavy Engineering",
];

const equipmentSpecs = [
  {
    title: "Deep Hole Drilling",
    detail: "Dia 50-100 mm | OAL up to 5,500 mm | 0.7 um Ra",
  },
  {
    title: "Boring",
    detail: "Dia 50-360 mm | OAL up to 5,500 mm | 1.2 um Ra",
  },
  {
    title: "Trepanning",
    detail: "Dia 80-230 mm | OAL up to 5,500 mm | 1.0 um Ra",
  },
  {
    title: "Honing",
    detail: "Dia 25-700 mm | OAL up to 12,000 mm | H8/H9 | <= 0.4 um Ra",
  },
];

export default function Home() {
  return (
    <Stack gap={10}>
      <ThemeHero />
      <SectionBlock heading="Why engineering teams pick Lasani">
        <ColumnContent>
          <p className="max-w-3xl text-sm text-[var(--cds-text-secondary)]">
            We combine deep inventory, advanced machining, and reliable
            logistics to help OEMs and maintenance teams reduce lead times,
            rework, and total cost of ownership.
          </p>
        </ColumnContent>
        <Grid condensed className="mt-6">
          {valueProps.map((item) => (
            <Column key={item.title} sm={4} md={2} lg={3}>
              <Tile className="h-full bg-[var(--cds-layer)]">
                <Stack gap={3}>
                  <p className="text-base font-semibold text-[var(--cds-text-primary)]">
                    {item.title}
                  </p>
                  <p className="text-sm text-[var(--cds-text-secondary)]">
                    {item.description}
                  </p>
                </Stack>
              </Tile>
            </Column>
          ))}
        </Grid>
      </SectionBlock>

      <SectionBlock heading="Core offerings">
        <Grid condensed className="mt-6">
          {offerings.map((item) => (
            <Column key={item.title} sm={4} md={4} lg={4}>
              <Tile className="h-full bg-[var(--cds-layer)]">
                <Stack gap={4}>
                  <div>
                    <p className="text-base font-semibold text-[var(--cds-text-primary)]">
                      {item.title}
                    </p>
                    <p className="mt-3 text-sm text-[var(--cds-text-secondary)]">
                      {item.copy}
                    </p>
                  </div>
                  <CarbonLink href={item.href}>Learn more</CarbonLink>
                </Stack>
              </Tile>
            </Column>
          ))}
        </Grid>
      </SectionBlock>

      <SectionBlock heading="Featured product specifications">
        <Grid condensed className="mt-6">
          {featuredProducts.map((product) => (
            <Column key={product.title} sm={4} md={4} lg={4}>
              <Tile className="h-full bg-[var(--cds-layer)]">
                <Stack gap={3}>
                  <p className="text-base font-semibold text-[var(--cds-text-primary)]">
                    {product.title}
                  </p>
                  <ul className="space-y-2 text-sm text-[var(--cds-text-secondary)]">
                    {product.bullets.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <CarbonLink href={product.href}>View full specs</CarbonLink>
                </Stack>
              </Tile>
            </Column>
          ))}
        </Grid>
      </SectionBlock>

      <Grid condensed>
        <Column sm={4} md={4} lg={8}>
          <SectionBlock heading="Machining capabilities">
            <p className="text-sm text-[var(--cds-text-secondary)]">
              Integrated machining services to finish hydraulic cylinders,
              piston rods, and custom components with OEM-grade precision.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--cds-text-secondary)]">
              {capabilities.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <CarbonLink className="mt-4 inline-block" href="/machining">
              Full capability range
            </CarbonLink>
          </SectionBlock>
        </Column>
        <Column sm={4} md={4} lg={8}>
          <SectionBlock heading="Industries we serve">
            <p className="text-sm text-[var(--cds-text-secondary)]">
              Supporting first- and second-tier manufacturers with dependable
              technical supply partnerships.
            </p>
            <Grid condensed className="mt-3">
              {industries.map((industry) => (
                <Column key={industry} sm={4} md={2} lg={4}>
                  <Tile className="text-sm font-medium text-[var(--cds-text-primary)]">
                    {industry}
                  </Tile>
                </Column>
              ))}
            </Grid>
            <CarbonLink className="mt-4 inline-block" href="/industries">
              Talk to an industry specialist
            </CarbonLink>
          </SectionBlock>
        </Column>
      </Grid>

      <Layer level={1}>
        <section className="rounded-3xl border border-solid border-[var(--cds-border-subtle)] bg-[var(--cds-layer)] px-6 py-8">
          <Stack gap={4}>
            <p className="text-xl font-semibold text-[var(--cds-text-primary)]">
              Featured equipment
            </p>
            <p className="text-sm text-[var(--cds-text-secondary)]">
              Modern plant with tightly controlled tolerances, extensive bore
              lengths, and high throughput.
            </p>
            <Grid condensed className="mt-2">
              {equipmentSpecs.map((item) => (
                <Column key={item.title} sm={4} md={2} lg={4}>
                  <Tile className="bg-[var(--cds-layer-accent)] text-sm text-[var(--cds-text-primary)]">
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-2 text-xs text-[var(--cds-text-secondary)]">
                      {item.detail}
                    </p>
                  </Tile>
                </Column>
              ))}
            </Grid>
          </Stack>
        </section>
      </Layer>

      <ThemeCta />
    </Stack>
  );
}

function ThemeHero() {
  return (
    <Theme theme="g100">
      <section className="relative overflow-hidden rounded-3xl px-8 py-16 text-[var(--cds-text-primary)] shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-slate-900/80 to-black opacity-90" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <Image
            src="/Images/home-hero-frame.png.png"
            alt=""
            fill
            priority
            className="object-contain opacity-80"
            sizes="(min-width: 1280px) 1100px, (min-width: 768px) 80vw, 95vw"
          />
        </div>
        <Grid condensed className="relative z-10">
          <Column sm={4} md={8} lg={8}>
            <Stack gap={4}>
              <div className="flex flex-wrap gap-2">
                <Tag type="cool-gray">Precision tubes</Tag>
                <Tag type="cool-gray">Reliable power</Tag>
                <Tag type="cool-gray">Global reach</Tag>
              </div>
              <h1 className="text-4xl font-semibold leading-tight">
                Hydraulic tubes, chrome plated bars, and machining expertise
                trusted for 40+ years.
              </h1>
              <p className="text-base text-[var(--cds-text-secondary)]">
                Lasani Fluid Power LLP delivers specialty pipes, tubes, and
                ISO-certified engineering services with end-to-end logistics
                coverage for OEMs, MRO teams, and export customers.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/products" kind="primary">
                  Explore products
                </Button>
                <Button href="/contact" kind="secondary">
                  Speak to an expert
                </Button>
                <Button href="/resources" kind="tertiary">
                  Download brochure
                </Button>
              </div>
              <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.25em] text-[var(--cds-text-secondary)]">
                <span>ISO 9001:2015</span>
                <span>MSME</span>
                <span>GST Registered</span>
              </div>
            </Stack>
          </Column>
        </Grid>
      </section>
    </Theme>
  );
}

function SectionBlock({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <Stack gap={4}>
      <h2 className="text-2xl font-semibold text-[var(--cds-text-primary)]">
        {heading}
      </h2>
      {children}
    </Stack>
  );
}

function ColumnContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[var(--cds-text-primary)]">
      {children}
    </div>
  );
}

function ThemeCta() {
  return (
    <Theme theme="g100">
      <section className="rounded-3xl px-8 py-12 text-[var(--cds-text-primary)]">
        <Grid condensed>
          <Column sm={4} md={8} lg={8}>
            <Stack gap={3}>
              <h2 className="text-2xl font-semibold">
                Ready to send drawings or specs?
              </h2>
              <p className="text-base text-[var(--cds-text-secondary)]">
                Upload your RFQ and our engineering team will respond with
                availability, machining approach, and logistics timelines.
              </p>
              <Button href="/contact" kind="primary">
                Upload RFQ
              </Button>
            </Stack>
          </Column>
          <Column sm={4} md={8} lg={8}>
            <Stack gap={3}>
              <h3 className="text-xl font-semibold">Prefer to talk?</h3>
              <p className="text-base text-[var(--cds-text-secondary)]">
                Call us at +91 99000 19885 or schedule a Microsoft Teams session
                with our technical sales engineers.
              </p>
              <CarbonLink href="/contact">Speak to an expert</CarbonLink>
            </Stack>
          </Column>
        </Grid>
      </section>
    </Theme>
  );
}
