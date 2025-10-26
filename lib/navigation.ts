export type NavItem = {
  title: string;
  href: string;
  description?: string;
};

export const primaryNav: NavItem[] = [
  { title: "Home", href: "/" },
  {
    title: "Products",
    href: "/products",
    description: "Hydraulic tubes, chrome plated bars, and line pipes.",
  },
  {
    title: "Machining Services",
    href: "/machining",
    description: "Deep hole drilling, honing, boring, trepanning, grinding.",
  },
  {
    title: "Cylinder Repair",
    href: "/repair",
    description: "OEM-grade rebuilds and refurbishment programs.",
  },
  {
    title: "Industries",
    href: "/industries",
    description: "Verticals we support across India and worldwide.",
  },
  {
    title: "About",
    href: "/about",
    description: "Vision, leadership, facilities, and compliance.",
  },
  {
    title: "Resources",
    href: "/resources",
    description: "Spec sheets, brochures, and case studies.",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "RFQ upload, phone / email, and warehouse location.",
  },
];
