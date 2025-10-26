export default function ContactPage() {
  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-3xl font-semibold">Contact & RFQ</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Share your drawings, specifications, or maintenance requirements and
          our engineering team will respond with availability, machining plans,
          and delivery timelines. We typically respond within one business day.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            Upload RFQ or drawings
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Email your files and requirements to{" "}
            <a
              href="mailto:response@la-sani.com"
              className="font-semibold text-slate-900 underline-offset-4 hover:underline"
            >
              response@la-sani.com
            </a>{" "}
            or{" "}
            <a
              href="mailto:sales@la-sani.com"
              className="font-semibold text-slate-900 underline-offset-4 hover:underline"
            >
              sales@la-sani.com
            </a>
            . Please include material grade, tolerances, finish, quantity, and
            target delivery schedule.
          </p>
          <p className="mt-4 text-sm text-slate-600">
            Prefer a call? Dial +91 99000 19885 / +91 89763 37049 / +91 93248
            61346 and we will connect you with the right specialist.
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Visit us</h2>
          <p className="mt-3 text-sm text-slate-600">
            1219-T, Kalamboli Steel Market,
            <br />
            Near Khedukpada Marathi School,
            <br />
            Kalamboli, Panvel, Maharashtra, India - 410218
          </p>
          <p className="mt-4 text-sm text-slate-600">
            Working hours: <strong>09:30 AM – 06:00 PM</strong> (Monday to
            Saturday)
          </p>
          <p className="mt-4 text-sm text-slate-600">
            Use the map link below for navigation or to schedule a logistics
            pickup.
          </p>
          <a
            href="https://maps.app.goo.gl/"
            className="mt-6 inline-flex items-center text-sm font-semibold text-slate-900 underline-offset-4 hover:underline"
          >
            Get directions →
          </a>
        </article>
      </section>

      <section className="rounded-3xl bg-slate-900 px-8 py-10 text-white">
        <h2 className="text-2xl font-semibold">Need a quick consult?</h2>
        <p className="mt-3 max-w-3xl text-white/80">
          We can coordinate Microsoft Teams or WhatsApp sessions to review
          design requirements, prototype plans, or maintenance schedules. Let us
          know your preferred time and communication channel when you reach out.
        </p>
      </section>
    </div>
  );
}
