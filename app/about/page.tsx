import { Layer, Stack, Tile } from "@carbon/react";

const values = [
  {
    title: "Challenge",
    description:
      "We pursue and enjoy overcoming engineering challenges to deliver dependable hydraulic solutions.",
  },
  {
    title: "Collaboration",
    description:
      "Working in cross-functional teams with customers and suppliers unlocks exponential value.",
  },
  {
    title: "Pride",
    description:
      "We take pride in the effort behind every tube, rod, and cylinder that leaves our facility.",
  },
  {
    title: "Commitment",
    description:
      "We honor our promises and stay dedicated until the job is finished to the right standard.",
  },
];

const leaders = [
  {
    name: "Mr. Abdul Rehman Khan",
    role: "Managing Director",
    bio: "B.E (Mechanical). Leads strategy execution and business expansion across India.",
  },
  {
    name: "Mr. Ehsan Ahmad Khan",
    role: "Director",
    bio: "B.Sc (Mechanical). 25 years of supply chain and manufacturing leadership driving customer success.",
  },
  {
    name: "Dr. Abdul Mannan Khan",
    role: "Director",
    bio: "MD (Radiology). Supports governance and growth initiatives with a focus on stakeholder value.",
  },
];

export default function AboutPage() {
  return (
    <Stack gap={10}>
      <Stack gap={3}>
        <h1 className="text-3xl font-semibold text-[var(--cds-text-primary)]">
          About Lasani Fluid Power LLP
        </h1>
        <p className="max-w-3xl text-sm text-[var(--cds-text-secondary)]">
          Lasani Fluid Power LLP is a fourth-generation family business with
          more than forty years of experience in specialty pipes, tubes, and
          hydraulic components. We partner with OEMs and maintenance teams to
          deliver high-quality materials, machining, and repair services backed
          by reliable logistics.
        </p>
      </Stack>

      <div className="grid gap-6 md:grid-cols-2">
        <Layer level={1}>
          <Tile className="rounded-3xl border border-solid border-[var(--cds-border-subtle)] bg-[var(--cds-layer)] p-8 text-[var(--cds-text-primary)]">
            <Stack gap={3}>
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="text-sm text-[var(--cds-text-secondary)]">
                To source the best raw materials for the fluid power industry
                while delivering sustainable, value-driven solutions that reduce
                lead times, improve quality, and increase operational uptime.
              </p>
            </Stack>
          </Tile>
        </Layer>
        <Layer level={1}>
          <Tile className="rounded-3xl border border-solid border-[var(--cds-border-subtle)] bg-[var(--cds-layer)] p-8 text-[var(--cds-text-primary)]">
            <Stack gap={3}>
              <h2 className="text-2xl font-semibold">Our Vision</h2>
              <p className="text-sm text-[var(--cds-text-secondary)]">
                To be the one-stop destination for customers across all tiers of
                the fluid power manufacturing ecosystem, offering competitive
                pricing, technical support, and flexible supply chain solutions
                aligned with market demands.
              </p>
            </Stack>
          </Tile>
        </Layer>
      </div>

      <Stack gap={4}>
        <h2 className="text-2xl font-semibold text-[var(--cds-text-primary)]">
          Core Values
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((value) => (
            <Layer key={value.title} level={1}>
              <Tile className="rounded-3xl border border-solid border-[var(--cds-border-subtle)] bg-[var(--cds-layer)] p-6 text-[var(--cds-text-primary)]">
                <Stack gap={2}>
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="text-sm text-[var(--cds-text-secondary)]">
                    {value.description}
                  </p>
                </Stack>
              </Tile>
            </Layer>
          ))}
        </div>
      </Stack>

      <Stack gap={4}>
        <h2 className="text-2xl font-semibold text-[var(--cds-text-primary)]">
          Leadership
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {leaders.map((leader) => (
            <Layer key={leader.name} level={1}>
              <Tile className="rounded-3xl border border-solid border-[var(--cds-border-subtle)] bg-[var(--cds-layer)] p-6 text-[var(--cds-text-primary)]">
                <Stack gap={2}>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--cds-text-secondary)]">
                    {leader.role}
                  </p>
                  <h3 className="text-lg font-semibold">{leader.name}</h3>
                  <p className="text-sm text-[var(--cds-text-secondary)]">
                    {leader.bio}
                  </p>
                </Stack>
              </Tile>
            </Layer>
          ))}
        </div>
      </Stack>

      <Layer level={1}>
        <section
          className="rounded-3xl px-8 py-10"
          style={{
            backgroundColor: "var(--cds-background-inverse)",
            color: "var(--cds-text-inverse)",
          }}
        >
          <Stack gap={3}>
            <h2 className="text-2xl font-semibold">
              Infrastructure and logistics
            </h2>
            <p
              className="max-w-3xl text-sm"
              style={{ color: "var(--cds-text-inverse)", opacity: 0.8 }}
            >
              Based in Navi Mumbai near the Mumbai-Pune Expressway and JNPT
              port, we are positioned for fast domestic and export deliveries.
              Our warehouse manages stocked programs, custom kitting, and
              inspection so you can rely on predictable supply chains.
            </p>
          </Stack>
        </section>
      </Layer>
    </Stack>
  );
}
