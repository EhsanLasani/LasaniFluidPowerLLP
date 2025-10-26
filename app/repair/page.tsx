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
    <div className="space-y-16">
      <section>
        <h1 className="text-3xl font-semibold">Cylinder Repair Services</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Our repair team restores hydraulic cylinders to OEM specifications
          while minimizing downtime. With in-house machining, chrome
          plating partners, and a deep inventory of tubes and rods, we deliver
          reliable repairs for construction, mining, and industrial applications.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {repairPrograms.map((program) => (
          <article
            key={program.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-slate-900">
              {program.title}
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {program.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="rounded-3xl bg-slate-900 px-8 py-10 text-white">
        <h2 className="text-2xl font-semibold">Testing & certification</h2>
        <p className="mt-3 max-w-3xl text-white/80">
          Every rebuilt cylinder undergoes pressure testing, leakage checks, and
          dimensional verification. We provide comprehensive reports so you can
          reinstate equipment with full confidence in performance and safety.
        </p>
      </section>
    </div>
  );
}
