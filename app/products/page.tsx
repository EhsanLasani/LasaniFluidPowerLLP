import { Button, Layer, Stack, Tile } from "@carbon/react";

const productCategories = [
  {
    id: "honed-tube",
    name: "Honed / Skived Tube",
    summary:
      "Precision cold drawn or DOM tubes with H8/H9 tolerances, supplied ready for cylinder assembly.",
    specs: [
      "Inner diameter 25 mm - 350 mm",
      "Wall thickness 4 mm - 25 mm",
      "Length 3 m - 11 m",
      "Surface finish <= Ra 0.40 um",
    ],
  },
  {
    id: "ready-to-hone",
    name: "Ready-to-Hone / Suitable Tube",
    summary:
      "Cold drawn seamless and DOM welded tubes delivered near net size for faster machining cycles.",
    specs: [
      "Inner diameter 25 mm - 350 mm",
      "Tolerance 0.2 mm - 1.00 mm",
      "Straightness 1 mm per 1000 mm",
      "Custom grades available",
    ],
  },
  {
    id: "hot-finished",
    name: "Hot Finished Bored & Honed Tube",
    summary:
      "Heavy-wall tubes for large bore cylinders, finished to customer tolerance and length.",
    specs: [
      "Inner diameter 100 mm - 700 mm",
      "Wall thickness 20 mm - 100 mm",
      "Length 3 m - 11 m",
      "Surface finish <= Ra 0.40 um",
    ],
  },
  {
    id: "chrome-bar",
    name: "Chrome Plated Bar",
    summary:
      "Hard chrome plated shafts with ISO f7 tolerances for piston rods and motion control assemblies.",
    specs: [
      "Diameters 25 mm - 100 mm",
      "Chrome thickness 15 - 20 um",
      "Length 2.5 m - 6 m",
      "Grades: C45E, 20MnV6, 42CrMo4 and more",
    ],
  },
  {
    id: "line-pipe",
    name: "Hydraulic Line Pipe & Tubulars",
    summary:
      "High integrity seamless and welded pipes for high-pressure hydraulic lines and power packs.",
    specs: [
      "Metric and imperial sizing",
      "ASTM / DIN / EN compliant",
      "Custom cut lengths and kitting",
      "Shot blasting, phosphating, and coating options",
    ],
  },
];

export default function ProductsPage() {
  return (
    <Stack gap={10}>
      <Stack gap={3}>
        <h1 className="text-3xl font-semibold text-[var(--cds-text-primary)]">
          Products
        </h1>
        <p className="max-w-3xl text-sm text-[var(--cds-text-secondary)]">
          Lasani Fluid Power LLP sources and processes hydraulic tubes, piston
          rods, and line pipes for OEMs, maintenance teams, and distributors.
          Our supply chain spans premium mills and stocking programs so you can
          build and service cylinders without delay.
        </p>
      </Stack>

      <Stack gap={8}>
        {productCategories.map((product) => (
          <Layer key={product.id} level={1}>
            <article
              id={product.id}
              className="rounded-3xl border border-solid border-[var(--cds-border-subtle)] bg-[var(--cds-layer)] p-8"
            >
              <Stack gap={5}>
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-[var(--cds-text-primary)]">
                      {product.name}
                    </h2>
                    <p className="mt-2 text-sm text-[var(--cds-text-secondary)]">
                      {product.summary}
                    </p>
                  </div>
                  <Button href="/contact" kind="tertiary">
                    Request availability
                  </Button>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {product.specs.map((spec) => (
                    <Tile
                      key={spec}
                      className="bg-[var(--cds-layer-accent)] text-sm text-[var(--cds-text-primary)]"
                    >
                      {spec}
                    </Tile>
                  ))}
                </div>
              </Stack>
            </article>
          </Layer>
        ))}
      </Stack>

      <ThemeCta />
    </Stack>
  );
}

function ThemeCta() {
  return (
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
            Need a custom alloy, tolerance, or finish?
          </h2>
          <p
            className="max-w-3xl text-sm"
            style={{ color: "var(--cds-text-inverse)", opacity: 0.8 }}
          >
            Our sourcing team works with trusted mills and partners to deliver
            bespoke hydraulic tubes and rods. Submit your drawing or
            specification and we will recommend the most cost-effective material
            and machining route.
          </p>
          <Button href="/contact" kind="primary">
            Start a custom project
          </Button>
        </Stack>
      </section>
    </Layer>
  );
}
