export const siteConfig = {
  name: "Nasim Realty",
  tagline: "Your East Bay Home Story Starts Here",
  description:
    "Nasim Realty — the East Bay's trusted real estate expert. Whether you're buying your first home in Berkeley, selling your property in Oakland, or exploring neighborhoods across the East Bay, Nasim brings local expertise and genuine care to every transaction.",
  url: "https://nasimrealty.com",
  agent: {
    name: "Nasim",
    title: "Licensed Realtor | East Bay Specialist",
    email: "nasim@nasimrealty.com",
    phone: "(510) 555-0123",
    license: "DRE# 0XXXXXXX",
    yearsExperience: 8,
    homesSold: 150,
    avgDaysOnMarket: 18,
    clientSatisfaction: 98,
  },
  social: {
    instagram: "https://instagram.com/nasimrealty",
    facebook: "https://facebook.com/nasimrealty",
    linkedin: "https://linkedin.com/in/nasimrealty",
    zillow: "https://zillow.com/profile/nasimrealty",
  },
  office: {
    address: "1901 Broadway, Suite 200",
    city: "Oakland",
    state: "CA",
    zip: "94612",
  },
} as const;

export const navLinks = [
  { label: "Pitch", href: "/" },
  { label: "Home", href: "/site" },
  { label: "About", href: "/about" },
  { label: "Listings", href: "/listings" },
  { label: "Neighborhoods", href: "/neighborhoods" },
  { label: "Market Insights", href: "/market-insights" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
  { label: "Intelligence", href: "/intelligence" },
  { label: "Partners", href: "/vendors" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "CRM", href: "/crm" },
] as const;
