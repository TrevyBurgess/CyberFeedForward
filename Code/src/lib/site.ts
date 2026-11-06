export const site = {
  name: "CyberFeedForward",
  tagline: "Security intelligence, fed forward.",
  description:
    "CyberFeedForward delivers proactive cybersecurity insights, threat analysis, and secure-by-design consulting.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "hello@cyberfeedforward.com",
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Insights", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type NavItem = (typeof site.nav)[number];
