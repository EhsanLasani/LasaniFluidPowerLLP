import { Layer, Link as CarbonLink, Stack, Tile } from "@carbon/react";

const resources = [
  {
    title: "Company Brochure",
    description:
      "Overview of Lasani Fluid Power LLP, product portfolio, and machining services.",
    href: "/designInputs/Lasani%20Presentation%20for%20Website%20Rev1.pdf",
    note: "Upload the final brochure PDF to the public folder before launch.",
  },
  {
    title: "Product Specification Sheets",
    description:
      "Detailed specs for honed tubes, ready-to-hone tubes, chrome plated bars, and hydraulic line pipes.",
    href: "/products#specifications",
  },
  {
    title: "Service Capability Matrix",
    description:
      "Process window for machining, support processes, and cylinder repair services.",
    href: "/services",
  },
  {
    title: "Case Studies and Testimonials",
    description:
      "Coming soon: success stories highlighting lead time reduction and performance improvements.",
  },
];

const faqs = [
  {
    question: "Do you support custom grades or special tolerances?",
    answer:
      "Yes. Share your material specification and tolerance requirements and we will work with partner mills and our in-house machining teams to deliver the right solution.",
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
    <Stack gap={10}>
      <Stack gap={3}>
        <h1 className="text-3xl font-semibold text-[var(--cds-text-primary)]">
          Resources
        </h1>
        <p className="max-w-3xl text-sm text-[var(--cds-text-secondary)]">
          Access brochures, specification sheets, and FAQs to evaluate Lasani
          Fluid Power LLP as your hydraulic supply and machining partner. For
          anything you cannot find here, reach out and we will send the details.
        </p>
      </Stack>

      <div className="grid gap-6 md:grid-cols-2">
        {resources.map((resource) => (
          <Layer key={resource.title} level={1}>
            <Tile className="h-full rounded-3xl border border-solid border-[var(--cds-border-subtle)] bg-[var(--cds-layer)] p-6 text-[var(--cds-text-primary)]">
              <Stack gap={3}>
                <h2 className="text-xl font-semibold">{resource.title}</h2>
                <p className="text-sm text-[var(--cds-text-secondary)]">
                  {resource.description}
                </p>
                {resource.href ? (
                  <CarbonLink href={resource.href}>View resource</CarbonLink>
                ) : (
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--cds-text-secondary)]">
                    Coming soon
                  </p>
                )}
                {resource.note ? (
                  <p className="text-xs text-amber-600">{resource.note}</p>
                ) : null}
              </Stack>
            </Tile>
          </Layer>
        ))}
      </div>

      <Stack gap={4}>
        <h2 className="text-2xl font-semibold text-[var(--cds-text-primary)]">
          Frequently asked questions
        </h2>
        <Stack gap={4}>
          {faqs.map((faq) => (
            <Layer key={faq.question} level={1}>
              <Tile className="rounded-3xl border border-solid border-[var(--cds-border-subtle)] bg-[var(--cds-layer)] p-6 text-[var(--cds-text-primary)]">
                <Stack gap={2}>
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <p className="text-sm text-[var(--cds-text-secondary)]">
                    {faq.answer}
                  </p>
                </Stack>
              </Tile>
            </Layer>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
