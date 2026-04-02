export const siteConfig = {
  name: "Nasim Realty",
  tagline: "Your East Bay Home Story Starts Here",
  description:
    "Nasim Realty — the East Bay's trusted real estate expert. Whether you're buying your first home in Berkeley, selling your property in Oakland, or exploring neighborhoods across the East Bay, Nasim brings local expertise and genuine care to every transaction.",
  url: "https://nasimrealty.com",
  agent: {
    name: "Nasim",
    title: "Licensed Realtor | East Bay Specialist",
    email: "n.pasallar@ggsir.com",
    phone: "(310) 339-6221",
    license: "DRE# 02178942",
    yearsExperience: 5,
    homesSold: 100,
    avgDaysOnMarket: 18,
    clientSatisfaction: 98,
  },
  social: {
    instagram: "https://instagram.com/nasimrealty",
    facebook: "https://facebook.com/nasimrealty",
    linkedin: "https://linkedin.com/in/nasim-pasallar-55a0b623",
    zillow: "https://zillow.com/profile/nasimrealty",
  },
  office: {
    address: "1901 Broadway, Suite 200",
    city: "Oakland",
    state: "CA",
    zip: "94612",
  },
} as const;

/** Public-facing nav links */
export const navLinks = [
  { label: "Home", href: "/site" },
  { label: "About", href: "/about" },
  { label: "Listings", href: "/listings" },
  { label: "Neighborhoods", href: "/neighborhoods" },
  { label: "Market Insights", href: "/market-insights" },
  { label: "Resources", href: "/resources" },
  { label: "Live CRM Demo", href: "/crm-demo" },
  { label: "Contact", href: "/contact" },
] as const;

/** Internal / agent-only nav links */
export const internalNavLinks = [
  { label: "Intelligence", href: "/intelligence" },
  { label: "Partners", href: "/vendors" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "CRM", href: "/crm" },
  { label: "Pitch", href: "/pitch" },
] as const;
