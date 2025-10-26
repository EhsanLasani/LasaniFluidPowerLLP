import { Layer, Stack, Tile } from "@carbon/react";

const repairPrograms = [
  {
    title: "Cylinder Overhaul",
    points: [
      "Disassembly, inspection, and root cause diagnosis",
      "Barrel honing, rod re-chroming, and seal replacement",
      "Hydrostatic testing to OEM operating pressures",
    ],
  },
  {
    title: "Emergency Breakdown Support",
    points: [
      "24/7 intake for critical equipment",
      "Rapid machining using stocked tubes and bars",
      "Logistics coordination for pan-India dispatch",
    ],
  },
  {
    title: "Lifecycle Extension Programs",
    points: [
      "Predictive maintenance schedules",
      "Performance tracking and wear analysis",
      "Custom spares kitting and consignment stocks",
    ],
  },
];

export default function RepairPage() {
  return (
    <Stack gap={10}>
      <Stack gap={3}>
        <h1 className="text-3xl font-semibold text-[var(--cds-text-primary)]">
          Cylinder Repair Services
        </h1>
        <p className="max-w-3xl text-sm text-[var(--cds-text-secondary)]">
          Our repair team restores hydraulic cylinders to OEM specifications
          while minimizing downtime. With in-house machining, chrome plating
          partners, and a deep inventory of tubes and rods, we deliver reliable
          repairs for construction, mining, and industrial applications.
        </p>
      </Stack>

      <div className="grid gap-6 md:grid-cols-3">
        {repairPrograms.map((program) => (
          <Layer key={program.title} level={1}>
            <Tile className="h-full rounded-3xl border border-solid border-[var(--cds-border-subtle)] bg-[var(--cds-layer)] p-6 text-[var(--cds-text-primary)]">
              <Stack gap={3}>
                <h2 className="text-lg font-semibold">{program.title}</h2>
                <ul className="space-y-2 text-sm text-[var(--cds-text-secondary)]">
                  {program.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </Stack>
            </Tile>
          </Layer>
        ))}
      </div>

      <Layer level={1}>
        <section
          className="rounded-3xl px-8 py-10"
          style={{
            backgroundColor: "var(--cds-background-inverse)",
            color: "var(--cds-text-inverse)",
          }}
        >
          <Stack gap={3}>
            <h2 className="text-2xl font-semibold">Testing and certification</h2>
            <p
              className="max-w-3xl text-sm"
              style={{ color: "var(--cds-text-inverse)", opacity: 0.8 }}
            >
              Every rebuilt cylinder undergoes pressure testing, leakage checks,
              and dimensional verification. We provide comprehensive reports so
              you can reinstate equipment with full confidence in performance
              and safety.
            </p>
          </Stack>
        </section>
      </Layer>
    </Stack>
  );
}
