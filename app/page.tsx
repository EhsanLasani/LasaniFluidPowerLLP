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

    bullets: [

      "ID 25 mm - 350 mm",

      "Tolerance H8, H9, H10",

      "Surface finish to Ra <= 0.40 um",

    ],

    href: "/products#honed-tube",

  },
  
  
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

            <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6">
        <SectionBlock className="section-block" heading="Why Lasani Is the Preferred Partner for OEMs and MROs">
          <ColumnContent>
            <p className="max-w-3xl text-sm text-slate-700">
              Our edge lies in the synergy of engineering precision, high-volume
              inventory, and on-time delivery. Backed by ISO 9001:2015 quality
              systems and end-to-end machining expertise, Lasani ensures every
              project meets the highest standards of accuracy, traceability, and
              performance.
            </p>
          </ColumnContent>
          <div className="brand-card mb-16 rounded-[2.5rem] px-10 py-12">
              <Grid condensed className="gap-6 md:grid-cols-2 lg:grid-cols-4">
                {valueProps.map((item) => (
                  <Column key={item.title} sm={4} md={4} lg={4}>
                    <Tile className="brand-card flex min-h-[220px] flex-col gap-3 rounded-[1.75rem] px-7 py-9 text-left">
                      <p className="text-2xl font-semibold text-slate-900">
                        {item.title}
                      </p>
                      {item.highlight ? (
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-brand-primary)]">
                          {item.highlight}
                        </p>
                      ) : null}
                      <p className="text-sm leading-6 text-slate-700">
                        {item.description}
                      </p>
                    </Tile>
                  </Column>
                ))}
              </Grid>
            </div>
        </SectionBlock>

        <SectionBlock className="section-block" heading="Core offerings">
          <Grid condensed className="mt-6">
            {offerings.map((item) => (
              <Column key={item.title} sm={4} md={8} lg={8}>
                <Tile className="brand-card flex h-full items-start gap-4 rounded-[1.5rem] px-7 py-8">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(179,215,236,0.65)]">
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
                      <span className="text-lg font-semibold text-slate-900">
                        ●
                      </span>
                    )}
                  </span>
                  <Stack gap={3}>
                    <p className="text-base font-semibold text-slate-900">
                      {item.title}
                    </p>
                    <p className="text-sm text-slate-700">
                      {item.copy}
                    </p>
                    <CarbonLink className="brand-link" href={item.href}>
                      Learn more
                    </CarbonLink>
                  </Stack>
                </Tile>
              </Column>
            ))}
          </Grid>
        </SectionBlock>

        <SectionBlock className="section-block" heading="Featured product specifications">
          <Grid condensed className="mt-6">
            {featuredProducts.map((product) => (
              <Column key={product.title} sm={4} md={4} lg={4}>
                <Tile className="brand-card brand-card--flat h-full rounded-[1.25rem] px-6 py-6">
                  <Stack gap={3}>
                    <p className="text-lg font-semibold text-slate-900">
                      {product.title}
                    </p>
                    <ul className="space-y-2 text-sm text-slate-700">
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

        <div className="brand-card rounded-[2.5rem] px-8 py-10">
            <SectionBlock className="section-block" heading="Manufacturing/Service capabilities">
              <p className="text-sm text-slate-700">
                Integrated machining services to finish hydraulic cylinders, piston rods, and custom components with OEM-grade precision.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {capabilities.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
              <div className="mt-10 rounded-[2rem] border border-transparent bg-gradient-to-b from-white via-white to-slate-100 px-4 py-6 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.5)]">
                <p className="text-base font-semibold text-slate-900">Featured equipment</p>
                <p className="mt-2 text-sm text-slate-700">
                  Modern plant with tightly controlled tolerances, extensive bore lengths, and high throughput.
                </p>
                <div className="mt-6 grid gap-4 lg:grid-cols-4">
                  {equipmentSpecs.map((item) => (
                    <Tile
                      key={item.title}
                      className="brand-card flex h-full flex-col justify-between rounded-[1.75rem] px-6 py-6 text-left text-sm text-slate-900"
                    >
                      <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                      <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[var(--color-brand-primary)]">Key Specs</p>
                      <p className="mt-3 text-sm leading-6 text-slate-700">{item.detail}</p>
                    </Tile>
                  ))}
                </div>
              </div>
              <div className="mt-12 flex justify-center pl-2 sm:justify-start sm:pl-6">
                <Button
                  href="/services"
                  kind="primary"
                  size="md"
                  className="mb-4 w-full px-8 py-4 sm:w-auto sm:ml-3 sm:px-10 sm:py-4"
                >
                  Full capability range
                </Button>
              </div>
            </SectionBlock>
          </div>

        <div className="brand-card rounded-[2.5rem] px-8 py-10">
            <SectionBlock className="section-block" heading="Industries we serve">
              <p className="text-sm text-slate-700">
                Supporting first- and second-tier manufacturers with dependable technical supply partnerships.
              </p>
              <Grid condensed className="mt-4">
                {industries.map((industry) => (
                  <Column key={industry} sm={4} md={2} lg={4}>
                    <Tile className="brand-card brand-card--flat flex items-center gap-3 rounded-2xl px-5 py-4 text-sm font-medium text-slate-900">
                      <Image src="/Icons/placeholder.svg" alt="" width={20} height={20} className="h-5 w-5 flex-shrink-0" />
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
      </div>
      <ThemeCta />

    </Stack>

  );

}



function ThemeHero() {

  return (

    <Theme theme="g100">

      <section className="relative overflow-hidden rounded-3xl px-8 py-16 text-slate-900 shadow-lg">

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

        <Grid condensed className="relative z-10 text-white">

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

              <p className="text-base text-white/90">

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

              <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.25em] text-white/70">

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
  className,
}: {
  heading: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Stack gap={6} className={`text-slate-900 ${className ?? ''}`}>
      <h2 className="text-2xl font-semibold text-slate-900">
        {heading}
      </h2>
      {children}
    </Stack>
  );
}

function ColumnContent({ children }: { children: React.ReactNode }) {
  return <div className="text-slate-900">{children}</div>;
}



function ThemeCta() {

  return (

    <Theme theme="g100">

      <section className="rounded-3xl px-8 py-12 text-slate-900">

        <Grid condensed>

          <Column sm={4} md={8} lg={8}>

            <Stack gap={3}>

              <h2 className="text-2xl font-semibold">

                Ready to send drawings or specs?

              </h2>

              <p className="text-base text-slate-700">

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

              <p className="text-base text-slate-700">

                Call us at +91 99000 19885 or schedule a Microsoft Teams session

                with our technical sales engineers.

              </p>

              <CarbonLink className="brand-link" href="/contact">
                Speak to an expert
              </CarbonLink>

            </Stack>

          </Column>

        </Grid>

      </section>

    </Theme>

  );

}


