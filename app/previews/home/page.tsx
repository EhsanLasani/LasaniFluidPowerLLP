import Image from "next/image";
import { Button } from "@carbon/react";

const HERO_TAGS = ["OEM Ready", "ISO 9001:2015", "Export Support"] as const;

const FEATURE_CARDS = [
  {
    title: "Inventory engineered for uptime",
    copy: "Chrome plated bars and hydraulic tubes staged with mill traceability, ready for immediate machining or direct shipment.",
  },
  {
    title: "Applications team on-call",
    copy: "Surface finishing, tolerance stack-up, and packaging guidance from engineers who ship production components daily.",
  },
] as const;

export default function HomePreview() {
  return (
    <main className="flex flex-col gap-20 pb-24">
      <PreviewHero />
      <PreviewFeatures />
    </main>
  );
}

function PreviewHero() {
  return (
    <section
      className="relative isolate overflow-hidden px-6 pb-24 pt-24 sm:px-10 lg:px-16"
      style={{
        background:
          "linear-gradient(140deg, color-mix(in srgb, var(--color-bg) 92%, var(--color-interactive) 8%) 0%, color-mix(in srgb, var(--color-accent) 18%, var(--color-bg)) 70%, var(--color-bg) 100%)",
      }}
    >
      <div className="absolute inset-y-0 right-0 hidden w-2/5 max-w-xl translate-x-1/3 rounded-[3rem] bg-[color-mix(in srgb, var(--color-interactive) 18%, transparent)] blur-3xl md:block" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-end">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-2">
            {HERO_TAGS.map((tag) => (
              <span
                key={tag}
                className="badge-label inline-flex items-center gap-1 rounded-full border border-subtle bg-[color-mix(in srgb, var(--color-bg) 88%, var(--color-interactive) 12%)] px-4 py-2 text-secondary"
                style={{ borderColor: "color-mix(in srgb, var(--color-border) 60%, transparent)" }}
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="type-display text-balance max-w-3xl">
            Hydraulic supply and machining programs engineered for OEM velocity.
          </h1>
          <p className="type-body-lg max-w-2xl text-secondary">
            Prototype hero exploring a full-bleed layout with generous white space, tightened typography, and balanced
            imagery. Use this to tune token choices before promoting to the live home page.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button kind="primary" size="lg">
              Explore catalogue
            </Button>
            <Button kind="secondary" size="lg">
              View machining stack
            </Button>
          </div>
        </div>
        <div className="relative flex justify-end">
          <div className="relative ml-auto w-full max-w-lg overflow-hidden rounded-[2.75rem] bg-[var(--color-surface)] shadow-[0_40px_120px_-60px_rgba(15,23,42,0.55)] ring-1 ring-[color-mix(in srgb, var(--color-border) 60%, transparent)]">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[color-mix(in srgb, var(--color-interactive) 12%, transparent)]" />
            <Image
              src="/Images/home1.png"
              alt="Hydraulic tube bundle visual exploration"
              width={720}
              height={520}
              className="relative z-10 h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PreviewFeatures() {
  return (
    <section className="px-6 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12 text-center">
        <div className="flex flex-col gap-4">
          <span className="badge-label text-muted" data-compact="true">
            Prototype section
          </span>
          <h2 className="type-title">A modular layout for product messaging.</h2>
          <p className="type-body-lg text-secondary">
            Mirrors the second block on Apple Books with centered typography and evenly spaced feature cards. Adjust
            padding, corner radius, and shadows until it matches the preferred art direction.
          </p>
        </div>
        <div className="grid w-full gap-6 lg:grid-cols-2">
          {FEATURE_CARDS.map((card) => (
            <article
              key={card.title}
              className="flex h-full flex-col gap-4 rounded-[2rem] bg-[var(--color-surface)] p-8 shadow-[0_25px_60px_-40px_rgba(15,23,42,0.45)] ring-1 ring-[color-mix(in srgb, var(--color-border) 50%, transparent)]"
            >
              <h3 className="type-subtitle">{card.title}</h3>
              <p className="type-body text-secondary">{card.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
