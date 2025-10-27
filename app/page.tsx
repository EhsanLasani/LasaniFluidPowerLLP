import Image from "next/image";
import {
  Button,
  Column,
  Grid,
  Link as CarbonLink,
  Stack,
  Tag,
  Theme,
  Tile,
} from "@carbon/react";

/* ----------------------------
   Content data
----------------------------- */
const valueProps = [
  {
    title: "Stock & Scale",
    highlight: "Ready Inventory",
    description: "500 MT+ stocking program with rapid dispatch capabilities.",
  },
  {
    title: "Engineering Precision",
    highlight: "End-to-End Machining",
    description:
      "Deep hole drilling, honing, trepanning, boring, and grinding in one facility.",
  },
  {
    title: "Quality Assured",
    highlight: "ISO 9001:2015 Discipline",
    description:
      "Tier-one sourcing, ISO 9001:2015 aligned QA, and mill traceability.",
  },
  {
    title: "On-Time Delivery",
    highlight: "Logistics Assurance",
    description: "Pan-India and export logistics with reliable ETAs.",
  },
];

const offerings = [
  {
    title: "Professional Tube Source",
    copy:
      "Your one-stop destination for seamless and welded tubes, chrome plated bars, and honed or skived cylinders -- sourced, finished, and stocked for rapid availability with ISO 9001:2015 traceability.",
    href: "/products",
    icon: "/Icons/Professional Tube Source.png",
  },
  {
    title: "Integrated Machining & Services",
    copy:
      "Comprehensive machining, deep-hole drilling, boring, and repair programs that keep hydraulic systems running with predictable turnaround and strict quality alignment.",
    href: "/services",
    icon: "/Icons/Integrated Machining & Services.png",
  },
];

const featuredProducts = [
  {
    title: "Redy To Hone Tube",
    bullets: ["ID 25 mm - 350 mm", "Tolerance H8, H9, H10", "Surface finish to Ra <= 0.40 um"],
    href: "/products#honed-tube",
  },
  {
    title: "Honed / Skived Tube",
    bullets: ["ID 25 mm - 350 mm", "Tolerance H8, H9, H10", "Surface finish to Ra <= 0.40 um"],
    href: "/products#honed-tube",
  },
  {
    title: "Chrome Plated Bar",
    bullets: ["Diameters 25 mm - 100 mm", "ISO f7 tolerances", "Corrosion-resistant grades"],
    href: "/products#chrome-bar",
  },
  {
    title: "Hydraulic Line Pipe",
    bullets: ["Standard & custom alloys", "Turnkey kitting", "Traceable supply chain"],
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
  { title: "Deep Hole Drilling", detail: "Dia 50-100 mm | OAL up to 5,500 mm | 0.7 um Ra" },
  { title: "Boring", detail: "Dia 50-360 mm | OAL up to 5,500 mm | 1.2 um Ra" },
  { title: "Trepanning", detail: "Dia 80-230 mm | OAL up to 5,500 mm | 1.0 um Ra" },
  { title: "Honing", detail: "Dia 25-700 mm | OAL up to 12,000 mm | H8/H9 | <= 0.4 um Ra" },
];

/* ----------------------------
   Page
----------------------------- */
export default function Home() {
  return (
    // One global dark surface for the whole page
    <Theme theme="g100">
      <Stack gap={10}>
        <ThemeHero />

        <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6">
          {/* Why section */}
          <SectionBlock dark heading="Why Lasani Is the Preferred Partner for OEMs and MROs">
            <ColumnContent>
              <p className="max-w-3xl text-sm">
                Our edge lies in the synergy of engineering precision, high-volume inventory, and
                on-time delivery. Backed by ISO 9001:2015 quality systems and end-to-end machining
                expertise, Lasani ensures every project meets the highest standards of accuracy,
                traceability, and performance.
              </p>
            </ColumnContent>

            <div className="brand-card mb-16 rounded-[2.5rem] px-10 py-12">
              <Grid condensed className="gap-6 md:grid-cols-2 lg:grid-cols-4">
                {valueProps.map((item) => (
                  <Column key={item.title} sm={4} md={4} lg={4}>
                    <Tile className="brand-card flex min-h-[220px] flex-col gap-3 rounded-[1.75rem] px-7 py-9 text-left">
                      <p className="text-2xl font-semibold">{item.title}</p>
                      {item.highlight ? (
                        <p className="text-xs font-semibold uppercase tracking-[0.28em]">
                          {item.highlight}
                        </p>
                      ) : null}
                      <p className="text-sm leading-6">{item.description}</p>
                    </Tile>
                  </Column>
                ))}
              </Grid>
            </div>
          </SectionBlock>

          {/* Offerings */}
          <SectionBlock heading="Core offerings">
            <Grid condensed className="mt-6">
              {offerings.map((item) => (
                <Column key={item.title} sm={4} md={8} lg={8}>
                  <Tile className="brand-card flex h-full items-start gap-4 rounded-[1.5rem] px-7 py-8">
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(179,215,236,0.18)]">
                      {item.icon ? (
                        <Image
                          src={item.icon}
                          alt=""
                          width={32}
                          height={32}
                          className="h-8 w-8 object-contain"
                          priority
                        />
                      ) : (
                        <span className="text-lg font-semibold">●</span>
                      )}
                    </span>
                    <Stack gap={3}>
                      <p className="text-base font-semibold">{item.title}</p>
                      <p className="text-sm">{item.copy}</p>
                      <CarbonLink className="brand-link" href={item.href}>
                        Learn more
                      </CarbonLink>
                    </Stack>
                  </Tile>
                </Column>
              ))}
            </Grid>
          </SectionBlock>

          {/* Featured products */}
          <SectionBlock dark heading="Featured product specifications">
            <Grid condensed className="mt-6">
              {featuredProducts.map((product) => (
                <Column key={product.title} sm={4} md={4} lg={4}>
                  <Tile className="brand-card brand-card--flat h-full rounded-[1.25rem] px-6 py-6">
                    <Stack gap={3}>
                      <p className="text-lg font-semibold">{product.title}</p>
                      <ul className="space-y-2 text-sm">
                        {product.bullets.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      <CarbonLink className="brand-link" href={product.href}>
                        View full specs
                      </CarbonLink>
                    </Stack>
                  </Tile>
                </Column>
              ))}
            </Grid>
          </SectionBlock>

          {/* Capabilities */}
          <SectionBlock heading="Manufacturing/Service capabilities">
            <p className="text-sm">
              Integrated machining services to finish hydraulic cylinders, piston rods, and custom
              components with OEM-grade precision.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              {capabilities.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>

            <div className="brand-panel-gradient mt-10 rounded-[2rem] px-4 py-6 shadow-[0_32px_70px_-34px_rgba(8,15,30,0.65)]">
              <p className="text-base font-semibold">Featured equipment</p>
              <p className="mt-2 text-sm">
                Modern plant with tightly controlled tolerances, extensive bore lengths, and high
                throughput.
              </p>
              <div className="mt-6 grid gap-4 lg:grid-cols-4">
                {equipmentSpecs.map((item) => (
                  <Tile
                    key={item.title}
                    className="brand-card flex h-full flex-col justify-between rounded-[1.75rem] px-6 py-6 text-left text-sm"
                  >
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.2em]">Key Specs</p>
                    <p className="mt-3 text-sm leading-6">{item.detail}</p>
                  </Tile>
                ))}
              </div>
              <div className="mt-10 flex justify-center sm:justify-start">
                <Button href="/services" kind="primary" size="md" className="px-8 py-4">
                  Full capability range
                </Button>
              </div>
            </div>
          </SectionBlock>

          {/* Industries */}
          <SectionBlock dark heading="Industries we serve">
            <p className="text-sm">
              Supporting first- and second-tier manufacturers with dependable technical supply
              partnerships.
            </p>
            <Grid condensed className="mt-4">
              {industries.map((industry) => (
                <Column key={industry} sm={4} md={2} lg={4}>
                  <Tile className="brand-card brand-card--flat flex items-center gap-3 rounded-2xl px-5 py-4 text-sm font-medium">
                    <Image
                      src="/Icons/placeholder.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="h-5 w-5 flex-shrink-0"
                    />
                    <span>{industry}</span>
                  </Tile>
                </Column>
              ))}
            </Grid>
            <CarbonLink className="brand-link mt-5 inline-block" href="/industries">
              Talk to an industry specialist
            </CarbonLink>
          </SectionBlock>
        </div>

        <ThemeCta />
      </Stack>
    </Theme>
  );
}

/* ----------------------------
   Components
----------------------------- */
function ThemeHero() {
  return (
    <section className="hero-surface section-surface section-on-dark">
      {/* background gradient + image BELOW content */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-slate-900/80 to-black opacity-90" />
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-end justify-end pr-10 pb-8">
        <Image
          src="/Images/home1.png"
          alt=""
          width={720}
          height={480}
          priority
          className="h-auto w-[min(90%,720px)] object-contain opacity-80"
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
              Hydraulic tubes, chrome plated bars, and machining expertise trusted for 40+ years.
            </h1>

            <p className="text-base">
              Lasani Fluid Power LLP delivers specialty pipes, tubes, and ISO-certified engineering
              services with end-to-end logistics coverage for OEMs, MRO teams, and export customers.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button href="/products" kind="primary">Explore products</Button>
              <Button href="/contact" kind="secondary">Speak to an expert</Button>
              <Button href="/resources" kind="tertiary">Download brochure</Button>
            </div>

            <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.25em]">
              <span>ISO 9001:2015</span>
              <span>MSME</span>
              <span>GST Registered</span>
            </div>
          </Stack>
        </Column>
      </Grid>
    </section>
  );
}

function SectionBlock({
  heading,
  children,
  className,
  dark = false, // NEW
}: {
  heading: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean; // NEW
}) {
  const classes = [
    "section-surface",
    dark ? "section-on-dark" : "",       // NEW: opt-in dark surface
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <div className="section-surface__inner flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">{heading}</h2>
        {children}
      </div>
    </div>
  );
}


function ColumnContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

function ThemeCta() {
  return (
    <section className="section-surface">
      <Grid condensed>
        <Column sm={4} md={8} lg={8}>
          <Stack gap={3}>
            <h2 className="text-2xl font-semibold">Ready to send drawings or specs?</h2>
            <p className="text-base/90">
             Lasani Fluid Power LLP delivers specialty pipes, tubes, and ISO-certified engineering services
             with end-to-end logistics coverage for OEMs, MRO teams, and export customers.
            </p>
            <Button href="/contact" kind="primary">
              Upload RFQ
            </Button>
          </Stack>
        </Column>
        <Column sm={4} md={8} lg={8}>
          <Stack gap={3}>
            <h3 className="text-xl font-semibold">Prefer to talk?</h3>
            <p className="text-base">
              Call us at +91 99000 19885 or schedule a Microsoft Teams session with our technical
              sales engineers.
            </p>
            <CarbonLink className="brand-link" href="/contact">
              Speak to an expert
            </CarbonLink>
          </Stack>
        </Column>
      </Grid>
    </section>
  );
}
