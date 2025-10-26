# Lasani Fluid Power LLP — Home Page Wireframe

> **Goal:** Fast clarity for engineers & procurement, strong credibility, and clear conversion paths.
> **Tech Notes:** Tailwind-friendly; easily mapped to Next.js components. Use subtle motion on scroll (fade/slide). Primary accent color: `#005DAA`.

---

## 1) Hero (Above the Fold)
**Component:** Full-bleed media banner (video or image) with gradient overlay.

- **Headline (H1):** *Precision Tubes. Reliable Power. Global Reach.*
- **Subcopy (1–2 lines):** With 40+ years of excellence, Lasani delivers world‑class hydraulic tubes, rods, and ISO‑certified machining services for the fluid power industry.
- **Primary CTAs:**
  - Button (primary): **Explore Products** → /products
  - Button (secondary, outline): **Speak to an Expert** → contact modal (call/Teams/WhatsApp)
- **Utility CTAs (inline):** Download Brochure (PDF) | View Stock Range
- **Badges (inline):** ISO 9001:2015 • MSME • GST

**UI Hints:**
- `min-h-[80vh] grid place-content-center text-white`
- Gradient overlay: `bg-gradient-to-b from-black/60 to-black/20`
- Use compressed, muted industrial b-roll (machining/honing/chrome rods).

---

## 2) Value Props (3 or 4 Pillars)
**Component:** IconCardGrid (3–4 cols, responsive)

- **“Stock & Scale”** — 500 MT+ stocked range; quick dispatch.
- **“Engineering Precision”** — Deep hole drilling, honing, SRB, boring.
- **“Quality Assured”** — Sourcing from top mills; strict QA.
- **“On‑Time Delivery”** — Reliable pan‑India & global logistics.

**UI Hints:**
- `grid md:grid-cols-4 gap-6` • cards with subtle hover lift • outline icons (pipes/wrench/globe/shield).

---

## 3) Core Offerings (Category Cards)
**Component:** 3 Feature Cards with images

1) **Professional Tube Source**  
   *Seamless & welded tubes, honed/ready‑to‑hone cylinders, chrome‑plated bars.*  
   CTA: **Explore Products** → /products

2) **Machining Services**  
   *ISO‑certified deep hole drilling, boring, honing, SRB, grinding, trepanning.*  
   CTA: **See Capabilities** → /machining

3) **Cylinder Repair Services**  
   *Restore any hydraulic cylinder to full function; fast, cost‑effective.*  
   CTA: **Repair Details** → /repair

**UI Hints:**
- `grid md:grid-cols-3 gap-6`
- Card layout with image top, content bottom, “Learn more” chevron.

---

## 4) Featured Product Snapshot (Technical Teaser)
**Component:** Horizontal tabs or segmented control

- **Tabs:** Honed/Skived Tube | Chrome Plated Bar | Hydraulic Line Pipe | Smooth Bore
- Each tab shows: short spec highlights (sizes, tolerances, finishes) + **View full specs** link to the respective PDP.

**UI Hints:**
- `Tabs` (underlined) with minimal latency; show 3–4 bullet specs + thumbnail.

---

## 5) Capabilities Overview (Icon Grid + Microcopy)
**Component:** IconGrid (2 rows)

- Material Stocking & Supply Chain
- Deep Hole Drilling (BTA & Gun Drilling)
- Honing / SRB
- Boring / Fine Boring
- OD Turning & Grinding
- Trepanning
- Welding & Cladding (as needed)
- Custom OEM Products

CTA (centered): **Full Capability Range** → /machining

**UI Hints:**
- `grid md:grid-cols-4 gap-6 text-center` • Keep copy concise; add tooltips for definitions.

---

## 6) Industries We Serve
**Component:** Icon or photo tile grid (3×3)

Oil & Gas • Hydraulic Cylinder • Aerospace • Mining • Automotive • Power & Energy • Petrochemical • Rail/Heavy Engg • Defense

CTA: **Talk to an Industry Specialist** → contact form with industry dropdown

**UI Hints:**
- Each tile shows icon + label; hover shows 1‑line use‑case.

---

## 7) Global Reach / Logistics
**Component:** World map with animated markers

- Headline: *We Deliver, Worldwide.*
- Copy: Global logistics to India, Middle East, Europe & Asia with assured timelines.
- CTA: **Request Shipping ETA** → contact modal with location fields

**UI Hints:**
- Subtle pulse animation on key regions; no heavy motion for performance.

---

## 8) Quality & Partnerships (Social Proof)
**Component:** Logo carousel + Cert badges

- **Mill/Partner Logos:** Jindal, ISMT, United, …
- **Certifications:** ISO 9001:2015, MSME, GST
- Microcopy: *Trusted sourcing, audited processes, reliable outcomes.*

**UI Hints:**
- Auto‑scroll carousel; pause on hover; grayscale logos that colorize on hover.

---

## 9) Testimonial / Case Highlight
**Component:** Quote card or mini‑case

- 1–2 client quotes (procurement/plant head).  
- Optional mini‑case: *Lead time reduced by 22% for hydraulic OEM via ready‑to‑hone stocking + in‑house honing.*

**UI Hints:**
- Use pull‑quote with large quotation mark; include role + industry.

---

## 10) Featured Equipment & Specs (Credibility Strip)
**Component:** Horizontal spec strip with icons

- *Deep Hole Drilling:* Ø 50–100 mm, OAL up to 5,500 mm, 0.7 Ra (drill)
- *Boring:* Ø 50–360 mm, OAL up to 5,500 mm, 1.2 Ra
- *Trepanning:* Ø 80–230 mm, OAL up to 5,500 mm, 1.0 Ra
- *Honing:* Ø 25–700 mm, OAL up to 12,000 mm, H8/H9, <0.4 Ra

CTA: **See Full Equipment List** → /machining#equipment

**UI Hints:**
- Use a slim band with monochrome icons; link to a gallery page.

---

## 11) Conversion Band
**Component:** Split CTA band (dark background)

- Left: *Have a drawing or spec?* → **Upload RFQ** (file upload)
- Right: *Prefer to talk?* → **Speak to an Expert** (options: Call | Microsoft Teams | WhatsApp)

**UI Hints:**
- `grid md:grid-cols-2 gap-6 items-center`

---

## 12) Contact & Hours
**Component:** Contact card + map embed

- Address: 1219‑T, Kalamboli Steel Market, Panvel, Maharashtra 410218
- Phone: +91 99000 19885 • +91 89763 37049 • +91 93248 61346
- Emails: info@la-sani.com • response@la-sani.com • sales@la-sani.com
- **Working Hours:** **09:30 AM – 06:00 PM** (Mon–Sat)
- CTA: **Get Directions** (maps link)

**UI Hints:**
- Two‑column layout; left contact details, right map embed with pin.

---

## Footer
- Quick Links: Home • About • Products • Machining • Repair • Contact
- Certifications/Badges
- Social (LinkedIn)
- Copyright & Legal

---

## SEO & Content Notes
- **H1:** Use once in hero.
- **H2s:** For each major section (Products, Machining, Repair, Industries, Logistics, Contact).
- **Meta Description (home):** “Lasani Fluid Power LLP supplies precision hydraulic tubes, chrome‑plated rods, and ISO‑certified machining—deep hole drilling, honing, boring—with global logistics and on‑time delivery.”
- **Schema:** Organization + Product + Service; embed address & hours.

---

## Accessibility & Performance
- Provide alt text for all images (e.g., “honed tube close‑up showing mirror finish”).
- Respect color contrast (WCAG AA). Avoid text over busy imagery; keep gradient overlay.
- Lazy‑load carousels and below‑the‑fold media; compress video.

---

## Content Slots (to map from existing docs)
- Product snippets for tabs (Honed/Skived Tube, Chrome Plated Bar, Hydraulic Line Pipe, Smooth Bore).
- Capabilities bullets (BTA drilling, gun drilling, honing, boring, SRB, grinding, trepanning, OD turning, welding/cladding).
- Industries list and use‑cases.
- Logistics/global reach copy + map.
- Equipment spec strip values.

---

## Optional Enhancements
- **Stock Check Widget:** Simple form → “Check availability by ID/OD/length.”
- **Download Center:** Spec sheets, mill certs, brochures.
- **Quote Estimator:** Basic inputs → email lead. (No pricing exposed.)

