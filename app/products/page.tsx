import Link from "next/link";

const productCategories = [
  {
    id: "honed-tube",
    name: "Honed / Skived Tube",
    summary:
      "Precision cold drawn or DOM tubes with H8/H9 tolerances, ready for cylinder assembly.",
    specs: [
      "Inner diameter 25 mm – 350 mm",
      "Wall thickness 4 mm – 25 mm",
      "Length 3 m – 11 m",
      "Surface finish ≤ Ra 0.40 μm",
    ],
  },
  {
    id: "ready-to-hone",
    name: "Ready-to-Hone / Suitable Tube",
    summary:
      "Cold drawn seamless and DOM welded tubes delivered to near-net tolerances for faster machining.",
    specs: [
      "Inner diameter 25 mm – 350 mm",
      "Tolerance 0.2 mm – 1.00 mm",
      "Straightness 1 mm / 1000 mm",
      "Custom grades available",
    ],
  },
  {
    id: "hot-finished",
    name: "Hot Finished Bored & Honed Tube",
    summary:
      "Heavy-wall tubes for large bore cylinders, finished to customer tolerance and length.",
    specs: [
      "Inner diameter 100 mm – 700 mm",
      "Wall thickness 20 mm – 100 mm",
      "Length 3 m – 11 m",
      "Surface finish ≤ Ra 0.40 μm",
    ],
  },
  {
    id: "chrome-bar",
    name: "Chrome Plated Bar",
    summary:
      "Hard chrome plated shafts with ISO f7 tolerances for piston rods and motion control assemblies.",
    specs: [
      "Diameters 25 mm – 100 mm",
      "Chrome thickness 15 – 20 μm",
      "Length 2.5 m – 6 m",
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
      "Custom cut lengths & kitting",
      "Shot blasting, phosphating, and coating options",
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-3xl font-semibold">Products</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Lasani Fluid Power LLP sources and processes hydraulic tubes, piston
          rods, and line pipes for OEMs, maintenance teams, and distributors.
          Our supply chain spans premium mills and regional stocking programs so
          you can build and service cylinders without delay.
        </p>
      </section>

      <section className="space-y-12">
        {productCategories.map((product) => (
          <article
            key={product.id}
            id={product.id}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">
                  {product.name}
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  {product.summary}
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Request availability →
              </Link>
            </div>
            <ul className="mt-6 grid gap-3 text-sm text-slate-600 md:grid-cols-2">
              {product.specs.map((spec) => (
                <li key={spec} className="rounded-xl bg-slate-50 px-4 py-3">
                  {spec}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="rounded-3xl bg-slate-900 px-8 py-10 text-white">
        <h2 className="text-2xl font-semibold">
          Need a custom alloy, tolerance, or finish?
        </h2>
        <p className="mt-2 max-w-3xl text-white/80">
          Our sourcing team works with trusted mills and partners to deliver
          bespoke hydraulic tubes and rods. Submit your drawing or specification
          and we will recommend the most cost-effective material and machining
          route.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
        >
          Start a custom project
        </Link>
      </section>
    </div>
  );
}
