"use client";

import { Button, Layer, Stack, TextInput, Tile } from "@carbon/react";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const mailBody = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nProject details: `
  );
  const mailHref = `mailto:response@la-sani.com?subject=RFQ%20Request&body=${mailBody}`;

  return (
    <Stack gap={10}>
      <Stack gap={3}>
        <h1 className="text-3xl font-semibold text-[var(--cds-text-primary)]">
          Contact and RFQ
        </h1>
        <p className="max-w-3xl text-sm text-[var(--cds-text-secondary)]">
          Share your drawings, specifications, or maintenance requirements and
          our engineering team will respond with availability, machining plans,
          and delivery timelines. We typically reply within one business day.
        </p>
      </Stack>

      <div className="grid gap-8 lg:grid-cols-2">
        <Layer level={1}>
          <Tile className="rounded-3xl border border-solid border-[var(--cds-border-subtle)] bg-[var(--cds-layer)] p-8 text-[var(--cds-text-primary)]">
            <Stack gap={3}>
              <h2 className="text-2xl font-semibold">Upload RFQ or drawings</h2>
              <p className="text-sm text-[var(--cds-text-secondary)]">
                Email your files and requirements to{" "}
                <a
                  href="mailto:response@la-sani.com"
                  className="font-semibold text-[var(--cds-link-primary)]"
                >
                  response@la-sani.com
                </a>{" "}
                or{" "}
                <a
                  href="mailto:sales@la-sani.com"
                  className="font-semibold text-[var(--cds-link-primary)]"
                >
                  sales@la-sani.com
                </a>
                . Include material grade, tolerances, finish, quantity, and
                target delivery schedule.
              </p>
              <p className="text-sm text-[var(--cds-text-secondary)]">
                Prefer a call? Dial +91 99000 19885 / +91 89763 37049 / +91
                93248 61346 and we will connect you with the right specialist.
              </p>
            </Stack>
          </Tile>
        </Layer>

        <Layer level={1}>
          <Tile className="rounded-3xl border border-solid border-[var(--cds-border-subtle)] bg-[var(--cds-layer)] p-8 text-[var(--cds-text-primary)]">
            <Stack gap={3}>
              <h2 className="text-2xl font-semibold">Visit us</h2>
              <p className="text-sm text-[var(--cds-text-secondary)]">
                1219-T, Kalamboli Steel Market,
                <br />
                Near Khedukpada Marathi School,
                <br />
                Kalamboli, Panvel, Maharashtra, India - 410218
              </p>
              <p className="text-sm text-[var(--cds-text-secondary)]">
                Working hours: <strong>09:30 AM - 06:00 PM</strong> (Monday to
                Saturday)
              </p>
              <a
                href="https://maps.app.goo.gl/"
                className="text-sm font-semibold text-[var(--cds-link-primary)]"
              >
                Get directions
              </a>
            </Stack>
          </Tile>
        </Layer>
      </div>

      <Layer level={1}>
        <section className="rounded-3xl border border-solid border-[var(--cds-border-subtle)] bg-[var(--cds-layer)] p-8">
          <Stack gap={4}>
            <h2 className="text-2xl font-semibold text-[var(--cds-text-primary)]">
              Need a quick consult?
            </h2>
            <p className="max-w-3xl text-sm text-[var(--cds-text-secondary)]">
              We can coordinate Microsoft Teams or WhatsApp sessions to review
              design requirements, prototype plans, or maintenance schedules.
              Let us know your preferred time and communication channel when you
              reach out.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <TextInput
                id="contact-name"
                labelText="Name"
                value={name}
                onChange={(evt) => setName(evt.currentTarget.value)}
                placeholder="Your name"
              />
              <TextInput
                id="contact-email"
                labelText="Email"
                value={email}
                onChange={(evt) => setEmail(evt.currentTarget.value)}
                placeholder="you@example.com"
                type="email"
              />
            </div>
            <Button kind="primary" href={mailHref}>
              Open email draft
            </Button>
          </Stack>
        </section>
      </Layer>
    </Stack>
  );
}
