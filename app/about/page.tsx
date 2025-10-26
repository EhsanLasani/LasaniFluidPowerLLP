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
    bio: "B.Sc (Mechanical). 25 years of supply chain and manufacturing leadership, driving customer success.",
  },
  {
    name: "Dr. Abdul Mannan Khan",
    role: "Director",
    bio: "MD (Radiology). Supports corporate governance and growth initiatives with a focus on stakeholder value.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-3xl font-semibold">About Lasani Fluid Power LLP</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Lasani Fluid Power LLP is a fourth-generation family business with
          more than forty years of experience in specialty pipes, tubes, and
          hydraulic components. We partner with OEMs and maintenance teams to
          deliver high-quality materials, machining, and repair services backed
          by reliable logistics.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Our Mission</h2>
          <p className="mt-3 text-sm text-slate-600">
            To source the best raw materials for the fluid power industry while
            delivering sustainable, value-driven solutions that reduce lead
            times, improve quality, and increase operational uptime.
          </p>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Our Vision</h2>
          <p className="mt-3 text-sm text-slate-600">
            To be the one-stop destination for customers across all tiers of the
            fluid power manufacturing ecosystem, offering competitive pricing,
            technical support, and flexible supply chain solutions aligned to
            market demands.
          </p>
        </article>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Core Values</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {value.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Leadership</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                {leader.role}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                {leader.name}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{leader.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-slate-900 px-8 py-10 text-white">
        <h2 className="text-2xl font-semibold">Infrastructure & Logistics</h2>
        <p className="mt-3 max-w-3xl text-white/80">
          Based in Navi Mumbai near the Mumbai-Pune Expressway and JNPT port, we
          are positioned for fast domestic and export deliveries. Our warehouse
          manages stocked programs, custom kitting, and inspection so you can
          rely on predictable supply chains.
        </p>
      </section>
    </div>
  );
}
