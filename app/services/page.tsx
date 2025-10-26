import { Layer, Stack, Tile } from "@carbon/react";

const machiningServices = [
  {
    title: "Deep Hole Drilling (BTA and Gun)",
    description:
      "Precision bores for hydraulic cylinders, hollow bars, and custom components with excellent surface finish.",
    details: [
      "Diameter range: 50 mm - 100 mm",
      "Overall length: up to 5,500 mm",
      "Surface finish: 0.7 um Ra",
      "Run-out and concentricity validated on CNC metrology",
    ],
  },
  {
    title: "Honing and Skiving Roller Burnishing",
    description:
      "Achieve final internal surface quality with repeatable H8/H9 tolerances and mirror finishes.",
    details: [
      "Diameter range: 25 mm - 700 mm",
      "Overall length: up to 12,000 mm",
      "Surface finish: <= 0.4 um Ra",
      "Process control via in-process profilometers",
    ],
  },
  {
    title: "Precision Boring and Fine Boring",
    description:
      "Tight tolerance boring for forged, cast, and fabricated components with consistent wall thickness.",
    details: [
      "Diameter range: 50 mm - 360 mm",
      "Overall length: up to 5,500 mm",
      "Surface finish: <= 1.2 um Ra",
      "CNC boring bars with vibration monitoring",
    ],
  },
  {
    title: "Trepanning",
    description:
      "Efficient removal of material for large diameter hollow components while preserving core material.",
    details: [
      "Diameter range: 80 mm - 230 mm",
      "Overall length: up to 5,500 mm",
      "Surface finish: <= 1.0 um Ra",
      "Ideal for sleeves, mandrels, and heavy duty cylinders",
    ],
  },
  {
    title: "Support Processes",
    description:
      "Complementary machining to deliver ready-to-assemble parts with minimum vendor touches.",
    details: [
      "OD turning and grinding",
      "Welding and cladding",
      "Sawing, beveling, and facing",
      "Shot blasting, phosphating, and protective packaging",
    ],
  },
];

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

export default function ServicesPage() {
  return (
    <Stack gap={12}>
      <Stack gap={3}>
        <h1 className="text-3xl font-semibold text-[var(--cds-text-primary)]">
          Services
        </h1>
        <p className="max-w-3xl text-sm text-[var(--cds-text-secondary)]">
          Lasani Fluid Power LLP delivers end-to-end services to keep hydraulic
          cylinders and motion-control systems running. From precision machining
          to full cylinder overhaul programs, our teams combine stocked material,
          advanced equipment, and quality documentation to meet demanding
          tolerances and timelines.
        </p>
      </Stack>

      <Stack gap={8}>
        {machiningServices.map((service) => (
          <Layer key={service.title} level={1}>
            <article className="rounded-3xl border border-solid border-[var(--cds-border-subtle)] bg-[var(--cds-layer)] p-8">
              <Stack gap={5}>
                <div>
                  <h2 className="text-2xl font-semibold text-[var(--cds-text-primary)]">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm text-[var(--cds-text-secondary)]">
                    {service.description}
                  </p>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {service.details.map((detail) => (
                    <Tile
                      key={detail}
                      className="bg-[var(--cds-layer-accent)] text-sm text-[var(--cds-text-primary)]"
                    >
                      {detail}
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
          <Stack gap={4}>
            <h2 className="text-2xl font-semibold">
              Quality systems and documentation
            </h2>
            <p
              className="max-w-3xl text-sm"
              style={{ color: "var(--cds-text-inverse)", opacity: 0.8 }}
            >
              All machining processes follow documented SOPs with in-process
              inspection, SPC, and final dimensional audits. We provide
              inspection certificates, surface finish reports, and heat
              treatment traceability on request to support your quality
              documentation.
            </p>
          </Stack>
        </section>
      </Layer>

      <Stack gap={3}>
        <h2 className="text-2xl font-semibold text-[var(--cds-text-primary)]">
          Cylinder repair programs
        </h2>
        <p className="max-w-3xl text-sm text-[var(--cds-text-secondary)]">
          When cylinders reach the end of service life or suffer unexpected
          failures, we restore them to peak performance with OEM-aligned
          procedures and rapid logistics.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {repairPrograms.map((program) => (
            <Layer key={program.title} level={1}>
              <Tile className="h-full rounded-3xl border border-solid border-[var(--cds-border-subtle)] bg-[var(--cds-layer)] p-6 text-[var(--cds-text-primary)]">
                <Stack gap={3}>
                  <h3 className="text-lg font-semibold">{program.title}</h3>
                  <ul className="space-y-2 text-sm text-[var(--cds-text-secondary)]">
                    {program.points.map((point) => (
                      <li key={point}>- {point}</li>
                    ))}
                  </ul>
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
