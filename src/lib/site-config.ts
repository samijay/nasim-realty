export const siteConfig = {
  name: "Nasim Realty",
  tagline: "Your Oakland Home Story Starts Here",
  description:
    "Nasim Realty — Oakland's trusted real estate expert. Whether you're buying your first home, selling your property, or exploring Oakland neighborhoods, Nasim brings local expertise and genuine care to every transaction.",
  url: "https://nasimrealty.com",
  agent: {
    name: "Nasim",
    title: "Licensed Realtor | Oakland Specialist",
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
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Listings", href: "/listings" },
  { label: "Neighborhoods", href: "/neighborhoods" },
  { label: "Market Insights", href: "/market-insights" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
  { label: "Partners", href: "/vendors" },
  { label: "Dashboard", href: "/dashboard" },
] as const;
