import Link from "next/link";

const valueProps = [
  {
    title: "Stock & Scale",
    description: "500 MT+ stocking program with rapid dispatch capabilities.",
  },
  {
    title: "Engineering Precision",
    description:
      "Deep hole drilling, honing, trepanning, boring, and grinding under one roof.",
  },
  {
    title: "Quality Assured",
    description:
      "Tier-one sourcing, ISO 9001:2015 aligned QA, and mill traceability.",
  },
  {
    title: "On-Time Delivery",
    description: "Pan-India and export logistics with reliable ETAs.",
  },
];

const offerings = [
  {
    title: "Professional Tube Source",
    copy: "Seamless & welded tubes, honed / skived cylinders, chrome plated bars.",
    href: "/products",
  },
  {
    title: "Machining Services",
    copy: "ISO-certified deep hole drilling, honing, SRB, boring, grinding, trepanning.",
    href: "/machining",
  },
  {
    title: "Cylinder Repair Programs",
    copy: "OEM-grade rebuild, re-chroming, and expedited turnaround for mission-critical assets.",
    href: "/repair",
  },
];

const featuredProducts = [
  {
    title: "Honed / Skived Tube",
    bullets: [
      "ID 25 mm – 350 mm",
      "Tolerance H8, H9, H10",
      "Surface finish to Ra ≤ 0.40 μm",
    ],
    href: "/products#honed-tube",
  },
  {
    title: "Chrome Plated Bar",
    bullets: [
      "Diameters 25 mm – 100 mm",
      "ISO f7 tolerances",
      "Corrosion-resistant grades",
    ],
    href: "/products#chrome-bar",
  },
  {
    title: "Hydraulic Line Pipe",
    bullets: [
      "Standard & custom alloys",
      "Turnkey kitting",
      "Traceable supply chain",
    ],
    href: "/products#line-pipe",
  },
];

const capabilities = [
  "Deep hole drilling (BTA / gun)",
  "Honing & Skiving Roller Burnishing",
  "Precision boring / fine boring",
  "Trepanning",
  "OD turning & grinding",
  "Welding, cladding & fabrication",
  "Custom OEM machining projects",
];

const industries = [
  "Oil & Gas",
  "Hydraulic Cylinder OEMs",
  "Mining & Construction",
  "Automotive & Off-Highway",
  "Power & Energy",
  "Aerospace & Defense",
  "Petrochemical",
  "Rail & Heavy Engineering",
];

const equipmentSpecs = [
  {
    title: "Deep Hole Drilling",
    detail: "Ø 50–100 mm | OAL up to 5,500 mm | 0.7 μm Ra",
  },
  {
    title: "Boring",
    detail: "Ø 50–360 mm | OAL up to 5,500 mm | 1.2 μm Ra",
  },
  {
    title: "Trepanning",
    detail: "Ø 80–230 mm | OAL up to 5,500 mm | 1.0 μm Ra",
  },
  {
    title: "Honing",
    detail: "Ø 25–700 mm | OAL up to 12,000 mm | H8/H9 | ≤ 0.4 μm Ra",
  },
];

export default function Home() {
  return (
    <div className="space-y-20">
      <section className="relative overflow-hidden rounded-3xl bg-slate-900 px-10 py-20 text-white shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800/90 to-slate-900 opacity-90" />
        <div className="relative z-10 max-w-3xl space-y-6">
          <span className="inline-flex items-center rounded-full border border-white/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
            Precision tubes. Reliable power. Global reach.
          </span>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Hydraulic tubes, chrome plated bars, and machining expertise trusted
            for 40+ years.
          </h1>
          <p className="text-lg text-white/80">
            Lasani Fluid Power LLP delivers specialty pipes, tubes, and
            ISO-certified engineering services with end-to-end logistics
            coverage for OEMs, MRO teams, and export customers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Speak to an Expert
            </Link>
            <Link
              href="/resources"
              className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Download Brochure
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-white/60">
            <span>ISO 9001:2015</span>
            <span>MSME</span>
            <span>GST Registered</span>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Why engineering teams pick Lasani</h2>
        <p className="mt-2 max-w-3xl text-slate-600">
          We combine deep inventory, advanced machining, and reliable logistics
          to help OEMs and maintenance teams reduce lead times, rework, and
          total cost of ownership.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Core offerings</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.copy}
                </p>
              </div>
              <Link
                href={item.href}
                className="mt-6 inline-flex items-center text-sm font-semibold text-slate-900 underline-offset-4 hover:underline"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">
          Featured product specifications
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <div
              key={product.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {product.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                {product.bullets.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link
                href={product.href}
                className="mt-6 inline-flex items-center text-sm font-semibold text-slate-900 underline-offset-4 hover:underline"
              >
                View full specs →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Machining capabilities</h2>
            <p className="mt-2 text-slate-600">
              Integrated machining services to finish hydraulic cylinders,
              piston rods, and custom components with OEM-grade precision.
            </p>
            <ul className="mt-6 space-y-2 text-sm leading-6 text-slate-600">
              {capabilities.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <Link
              href="/machining"
              className="mt-6 inline-flex items-center text-sm font-semibold text-slate-900 underline-offset-4 hover:underline"
            >
              Full capability range →
            </Link>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Industries we serve</h2>
            <p className="mt-2 text-slate-600">
              Supporting first- and second-tier manufacturers with dependable
              technical supply partnerships.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {industry}
                </div>
              ))}
            </div>
            <Link
              href="/industries"
              className="mt-6 inline-flex items-center text-sm font-semibold text-slate-900 underline-offset-4 hover:underline"
            >
              Talk to an industry specialist →
            </Link>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold">Featured equipment</h2>
        <p className="mt-2 text-slate-600">
          Modern plant with tightly controlled tolerances, extensive bore
          lengths, and high throughput.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {equipmentSpecs.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-slate-900 px-4 py-5 text-sm text-white"
            >
              <p className="font-semibold">{item.title}</p>
              <p className="mt-2 text-white/70">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-slate-900 px-8 py-10 text-white">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">
              Ready to send drawings or specs?
            </h2>
            <p className="mt-2 text-white/80">
              Upload your RFQ and our engineering team will respond with
              availability, machining approach, and logistics timelines.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Upload RFQ
            </Link>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Prefer to talk?</h3>
            <p className="mt-2 text-white/80">
              Call us at +91 99000 19885 or schedule a Microsoft Teams session
              with our technical sales engineers.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center text-sm font-semibold text-white underline-offset-4 hover:underline"
            >
              Speak to an expert →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
