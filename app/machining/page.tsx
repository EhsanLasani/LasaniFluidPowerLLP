const machiningServices = [
  {
    title: "Deep Hole Drilling (BTA & Gun Drilling)",
    description:
      "Precision bores for hydraulic cylinders, hollow bars, and custom components with excellent surface finish.",
    details: [
      "Diameter range: 50 mm – 100 mm",
      "Overall length: up to 5,500 mm",
      "Surface finish: 0.7 μm Ra",
      "Run-out and concentricity validated on CNC metrology",
    ],
  },
  {
    title: "Honing & Skiving Roller Burnishing",
    description:
      "Achieve final internal surface quality with repeatable H8/H9 tolerances and mirror finishes.",
    details: [
      "Diameter range: 25 mm – 700 mm",
      "Overall length: up to 12,000 mm",
      "Surface finish: ≤ 0.4 μm Ra",
      "Process control via in-process profilometers",
    ],
  },
  {
    title: "Precision Boring & Fine Boring",
    description:
      "Tight tolerance boring for forged, cast, and fabricated components with consistent wall thickness.",
    details: [
      "Diameter range: 50 mm – 360 mm",
      "Overall length: up to 5,500 mm",
      "Surface finish: ≤ 1.2 μm Ra",
      "CNC boring bars with vibration monitoring",
    ],
  },
  {
    title: "Trepanning",
    description:
      "Efficient removal of material for large diameter hollow components while preserving core material.",
    details: [
      "Diameter range: 80 mm – 230 mm",
      "Overall length: up to 5,500 mm",
      "Surface finish: ≤ 1.0 μm Ra",
      "Ideal for sleeves, mandrels, and heavy-duty cylinders",
    ],
  },
  {
    title: "Support Processes",
    description:
      "Complementary machining to deliver ready-to-assemble parts with minimum vendor touches.",
    details: [
      "OD turning & grinding",
      "Welding and cladding",
      "Sawing, beveling, and facing",
      "Shot blasting, phosphating, and protective packaging",
    ],
  },
];

export default function MachiningPage() {
  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-3xl font-semibold">Machining Services</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Lasani Fluid Power LLP runs a vertically integrated machining setup so
          you can source hydraulic tubes and rods finished to the exact
          tolerances your cylinders demand. Our manufacturing engineers collaborate
          with your design and maintenance teams to plan the optimal machining route.
        </p>
      </section>

      <section className="space-y-10">
        {machiningServices.map((service) => (
          <article
            key={service.title}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              {service.title}
            </h2>
            <p className="mt-3 text-sm text-slate-600">{service.description}</p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-600 md:grid-cols-2">
              {service.details.map((detail) => (
                <li key={detail} className="rounded-xl bg-slate-50 px-4 py-3">
                  {detail}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="rounded-3xl bg-slate-900 px-8 py-10 text-white">
        <h2 className="text-2xl font-semibold">
          Quality systems & documentation
        </h2>
        <p className="mt-3 max-w-3xl text-white/80">
          All machining processes follow documented SOPs with in-process
          inspection, SPC, and final dimensional audits. We provide inspection
          certificates, surface finish reports, and heat treatment traceability
          on request to support your quality documentation.
        </p>
      </section>
    </div>
  );
}
