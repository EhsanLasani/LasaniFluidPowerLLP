import { Layer, Stack, Tile } from "@carbon/react";

const industries = [
  {
    name: "Oil and Gas",
    description:
      "High integrity tubing and repair services for drilling rigs, wellhead equipment, and hydraulic power units.",
    highlights: [
      "API and EN compliant materials",
      "Corrosion-resistant coatings and plating",
      "Offshore-ready logistics partnerships",
    ],
  },
  {
    name: "Hydraulic Cylinder OEMs",
    description:
      "Ready-to-hone tubes, piston rods, and machining support for OEM production lines.",
    highlights: [
      "Buffer stocks and just-in-time replenishment",
      "Engineering collaboration on tolerances",
      "Serial number based traceability",
    ],
  },
  {
    name: "Mining and Construction",
    description:
      "Robust cylinder rebuild and spares programs to keep heavy equipment running around the clock.",
    highlights: [
      "Emergency repair turnarounds",
      "Wear-resistant rod resurfacing",
      "On-site technical inspections",
    ],
  },
  {
    name: "Automotive and Off-Highway",
    description:
      "Precision machined tubes and rods for suspension, steering, and hydraulic actuation systems.",
    highlights: [
      "PPAP and APQP documentation support",
      "Statistical process control data",
      "Global logistics and export compliance",
    ],
  },
  {
    name: "Power and Energy",
    description:
      "Hydraulic line systems and cylinder assemblies for power plants and renewable energy assets.",
    highlights: [
      "High-pressure tubing with NDT reports",
      "Custom manifold machining",
      "Spare kits and preventative maintenance planning",
    ],
  },
  {
    name: "Aerospace and Defense",
    description:
      "Specialty alloys, quality systems, and documentation to support critical defense applications.",
    highlights: [
      "Controlled manufacturing cells",
      "Full material traceability",
      "ITAR-aligned data handling",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <Stack gap={10}>
      <Stack gap={3}>
        <h1 className="text-3xl font-semibold text-[var(--cds-text-primary)]">
          Industries We Serve
        </h1>
        <p className="max-w-3xl text-sm text-[var(--cds-text-secondary)]">
          From OEM production lines to field maintenance crews, Lasani Fluid
          Power LLP supports critical hydraulics and motion control applications
          across multiple industries. We tailor stocking programs, machining,
          and documentation to match your quality and compliance expectations.
        </p>
      </Stack>

      <Stack gap={8}>
        {industries.map((industry) => (
          <Layer key={industry.name} level={1}>
            <article className="rounded-3xl border border-solid border-[var(--cds-border-subtle)] bg-[var(--cds-layer)] p-8">
              <Stack gap={4}>
                <div>
                  <h2 className="text-2xl font-semibold text-[var(--cds-text-primary)]">
                    {industry.name}
                  </h2>
                  <p className="mt-2 text-sm text-[var(--cds-text-secondary)]">
                    {industry.description}
                  </p>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {industry.highlights.map((highlight) => (
                    <Tile
                      key={highlight}
                      className="bg-[var(--cds-layer-accent)] text-sm text-[var(--cds-text-primary)]"
                    >
                      {highlight}
                    </Tile>
                  ))}
                </div>
              </Stack>
            </article>
          </Layer>
        ))}
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
              Talk to an industry specialist
            </h2>
            <p
              className="max-w-3xl text-sm"
              style={{ color: "var(--cds-text-inverse)", opacity: 0.8 }}
            >
              Share your application details, operating environment, and target
              timelines. Our sales engineers will recommend the right product
              mix, machining approach, and logistics plan to keep your equipment
              running.
            </p>
          </Stack>
        </section>
      </Layer>
    </Stack>
  );
}
