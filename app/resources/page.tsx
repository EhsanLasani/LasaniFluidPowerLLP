import Link from "next/link";

const resources = [
  {
    title: "Company Brochure",
    description:
      "Overview of Lasani Fluid Power LLP, product portfolio, and machining services.",
    href: "/designInputs/Lasani%20Presentation%20for%20Website%20Rev1.pdf",
    note: "Upload final PDF to public folder before launch.",
  },
  {
    title: "Product Specification Sheets",
    description:
      "Detailed specs for honed tubes, ready-to-hone tubes, chrome plated bars, and hydraulic line pipes.",
    href: "/products#specifications",
  },
  {
    title: "Machining Capability Matrix",
    description:
      "Process window for deep hole drilling, honing, boring, trepanning, and ancillary operations.",
    href: "/machining",
  },
  {
    title: "Case Studies & Testimonials",
    description:
      "Coming soon: success stories highlighting lead time reduction and performance improvements.",
  },
];

const faqs = [
  {
    question: "Do you support custom grades or special tolerances?",
    answer:
      "Yes. Share your material specification and tolerance requirements—we will work with partner mills and our in-house machining teams to deliver the right solution.",
  },
  {
    question: "What documentation can you provide with each shipment?",
    answer:
      "Mill test certificates, dimensional reports, surface finish data, heat treatment charts, and pressure test records are available upon request.",
  },
  {
    question: "Do you handle export logistics?",
    answer:
      "We routinely ship to the Middle East, Europe, and Asia. Our logistics partners manage packing, customs documentation, and freight forwarding for you.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-3xl font-semibold">Resources</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Access brochures, specification sheets, and FAQs to evaluate Lasani
          Fluid Power LLP as your hydraulic supply and machining partner. For
          anything you cannot find here, reach out and we will send the details.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {resources.map((resource) => (
          <article
            key={resource.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-slate-900">
              {resource.title}
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              {resource.description}
            </p>
            {resource.href ? (
              <Link
                href={resource.href}
                className="mt-4 inline-flex items-center text-sm font-semibold text-slate-900 underline-offset-4 hover:underline"
              >
                View resource →
              </Link>
            ) : (
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-400">
                Coming soon
              </p>
            )}
            {resource.note ? (
              <p className="mt-4 text-xs text-amber-600">{resource.note}</p>
            ) : null}
          </article>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
        <div className="mt-6 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {faq.question}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
