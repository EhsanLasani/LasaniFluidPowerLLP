import Image from "next/image";
import {
  Button,
  Column,
  Grid,
  Link as CarbonLink,
  Stack,
  Theme,
  Tile,
  Tag,
} from "@carbon/react";

export default function Home() {
  return (
    <Stack gap={10}>
      <ThemeHero />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6">
        {/* Dark section */}
        <SectionBlock
          className="section-on-dark"
          heading="Why Lasani Is the Preferred Partner for OEMs and MROs"
        >
          <p>
            Our edge lies in the synergy of engineering precision, high-volume
            inventory, and on-time delivery. Backed by ISO 9001:2015 quality
            systems and end-to-end machining expertise, Lasani ensures every
            project meets the highest standards of accuracy, traceability, and
            performance.
          </p>
        </SectionBlock>

        {/* Light section */}
        <SectionBlock heading="Core offerings">
          <p>
            Your one-stop destination for seamless and welded tubes, chrome
            plated bars, and honed or skived cylinders -- sourced, finished, and
            stocked for rapid availability with ISO 9001:2015 traceability.
          </p>
        </SectionBlock>
      </div>
    </Stack>
  );
}

/* ---------- Hero ---------- */
function ThemeHero() {
  return (
    <Theme theme="g100">
      <section className="hero-surface section-surface section-on-dark">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-slate-900/80 to-black opacity-90" />
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-end justify-end pr-10 pb-8">
          <Image
            src="/Images/home1.png"
            alt=""
            width={720}
            height={480}
            className="h-auto w-[min(90%,720px)] object-contain opacity-80"
            priority
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
              </div>
            </Stack>
          </Column>
        </Grid>
      </section>
    </Theme>
  );
}

/* ---------- Section Block ---------- */
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
    <div className={`section-surface ${className ?? ""}`}>
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">{heading}</h2>
        {children}
      </div>
    </div>
  );
}
