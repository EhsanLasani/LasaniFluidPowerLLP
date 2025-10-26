const industries = [
  {
    name: "Oil & Gas",
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
      "Buffer stocks and JIT replenishment",
      "Engineering collaboration on tolerances",
      "Serial number based traceability",
    ],
  },
  {
    name: "Mining & Construction",
    description:
      "Robust cylinder rebuild and spares programs to keep heavy equipment running around the clock.",
    highlights: [
      "Emergency repair turnarounds",
      "Wear-resistant rod resurfacing",
      "On-site technical inspections",
    ],
  },
  {
    name: "Automotive & Off-Highway",
    description:
      "Precision machined tubes and rods for suspension, steering, and hydraulic actuation systems.",
    highlights: [
      "PPAP/ASO documentation support",
      "Statistical process control data",
      "Global logistics and export compliance",
    ],
  },
  {
    name: "Power & Energy",
    description:
      "Hydraulic line systems and cylinder assemblies for power plants and renewable energy assets.",
    highlights: [
      "High-pressure tubing with NDT reports",
      "Custom manifold machining",
      "Spare kits and preventative maintenance planning",
    ],
  },
  {
    name: "Aerospace & Defense",
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
    <div className="space-y-16">
      <section>
        <h1 className="text-3xl font-semibold">Industries We Serve</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          From OEM production lines to field maintenance crews, Lasani Fluid
          Power LLP supports critical hydraulics and motion control applications
          across multiple industries. We tailor stocking programs, machining,
          and documentation to match your quality and compliance expectations.
        </p>
      </section>

      <section className="space-y-10">
        {industries.map((industry) => (
          <article
            key={industry.name}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              {industry.name}
            </h2>
            <p className="mt-3 text-sm text-slate-600">{industry.description}</p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-600 md:grid-cols-2">
              {industry.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-xl bg-slate-50 px-4 py-3 leading-6"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="rounded-3xl bg-slate-900 px-8 py-10 text-white">
        <h2 className="text-2xl font-semibold">
          Talk to an industry specialist
        </h2>
        <p className="mt-3 max-w-3xl text-white/80">
          Share your application details, operating environment, and target
          timelines. Our sales engineers will recommend the right product mix,
          machining approach, and logistics plan to keep your equipment running.
        </p>
      </section>
    </div>
  );
}
