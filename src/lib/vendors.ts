export interface Vendor {
  id: string;
  name: string;
  category: VendorCategory;
  specialty: string;
  description: string;
  phone: string;
  website?: string;
  rating: number;
  reviewCount: number;
  nasimNote: string;
  featured: boolean;
}

export type VendorCategory =
  | "contractor"
  | "inspector"
  | "lender"
  | "stager"
  | "photographer"
  | "landscaper"
  | "painter"
  | "electrician"
  | "plumber"
  | "mover";

export const vendorCategories: { value: VendorCategory; label: string; icon: string }[] = [
  { value: "contractor", label: "General Contractors", icon: "hammer" },
  { value: "inspector", label: "Home Inspectors", icon: "search" },
  { value: "lender", label: "Mortgage Lenders", icon: "landmark" },
  { value: "stager", label: "Home Stagers", icon: "sofa" },
  { value: "photographer", label: "Photographers", icon: "camera" },
  { value: "landscaper", label: "Landscapers", icon: "trees" },
  { value: "painter", label: "Painters", icon: "paintbrush" },
  { value: "electrician", label: "Electricians", icon: "zap" },
  { value: "plumber", label: "Plumbers", icon: "droplets" },
  { value: "mover", label: "Movers", icon: "truck" },
];

export const vendors: Vendor[] = [
  {
    id: "1",
    name: "Bay Area Home Inspections",
    category: "inspector",
    specialty: "Residential inspections, foundation, and termite",
    description:
      "Thorough, detail-oriented inspections with same-day reports. Specializes in older East Bay homes — Craftsmans, Victorians, and mid-century modern.",
    phone: "(510) 555-0201",
    rating: 4.9,
    reviewCount: 127,
    nasimNote:
      "My #1 go-to inspector. Fast, thorough, and my clients love his detailed reports with photos. Never missed anything important.",
    featured: true,
  },
  {
    id: "2",
    name: "Oakland Premier Staging",
    category: "stager",
    specialty: "Luxury and mid-range home staging",
    description:
      "Full-service staging company that transforms homes for sale. Modern and transitional style furniture that appeals to East Bay buyers.",
    phone: "(510) 555-0202",
    rating: 4.8,
    reviewCount: 89,
    nasimNote:
      "Their staging has helped my listings sell for 8-12% above comparable un-staged homes. Worth every penny.",
    featured: true,
  },
  {
    id: "3",
    name: "East Bay Mortgage Group",
    category: "lender",
    specialty: "Conventional, FHA, VA, and jumbo loans",
    description:
      "Local lender who understands the East Bay's competitive market. Fast pre-approvals, competitive rates, and responsive communication throughout the process.",
    phone: "(510) 555-0203",
    rating: 4.9,
    reviewCount: 215,
    nasimNote:
      "They close on time, every time. Their pre-approval letters are strong and listing agents take them seriously. First-time buyer specialists.",
    featured: true,
  },
  {
    id: "4",
    name: "Craftsman Renovations",
    category: "contractor",
    specialty: "Kitchen/bath remodels and Craftsman restoration",
    description:
      "General contractor specializing in the East Bay's historic homes. Expert at modernizing kitchens and bathrooms while preserving original character.",
    phone: "(510) 555-0204",
    rating: 4.7,
    reviewCount: 68,
    nasimNote:
      "If you need pre-sale renovations that maximize ROI, these are your guys. They understand what East Bay buyers want.",
    featured: true,
  },
  {
    id: "5",
    name: "Capture Real Estate Photography",
    category: "photographer",
    specialty: "Real estate photography, drone, and video tours",
    description:
      "Professional real estate photography with drone shots, virtual tours, and twilight photography. 24-hour turnaround on all shoots.",
    phone: "(510) 555-0205",
    rating: 4.9,
    reviewCount: 156,
    nasimNote:
      "Every listing I do uses them. Their photos consistently outperform — more clicks, more showings, more offers.",
    featured: false,
  },
  {
    id: "6",
    name: "Green Valley Landscaping",
    category: "landscaper",
    specialty: "Curb appeal, drought-tolerant gardens, and hardscape",
    description:
      "Landscaping company focused on water-efficient Bay Area gardens. Specializes in pre-sale curb appeal transformations that wow buyers from the street.",
    phone: "(510) 555-0206",
    rating: 4.6,
    reviewCount: 42,
    nasimNote:
      "Great for sellers who need fast curb appeal upgrades. They can transform a front yard in a weekend.",
    featured: false,
  },
  {
    id: "7",
    name: "ProCoat Painting",
    category: "painter",
    specialty: "Interior/exterior residential painting",
    description:
      "Licensed, bonded, and insured painters. Clean work, on-time, and they handle everything from single rooms to full exterior repaints.",
    phone: "(510) 555-0207",
    rating: 4.8,
    reviewCount: 93,
    nasimNote:
      "Fresh paint is the highest ROI pre-sale investment. ProCoat knows the exact neutral palettes that East Bay buyers love.",
    featured: false,
  },
  {
    id: "8",
    name: "Spark Electric Oakland",
    category: "electrician",
    specialty: "Panel upgrades, EV charger installation, rewiring",
    description:
      "Full-service electrical contractor. Specializes in upgrading older East Bay homes with modern electrical panels, EV charging, and smart home wiring.",
    phone: "(510) 555-0208",
    rating: 4.7,
    reviewCount: 51,
    nasimNote:
      "Older East Bay homes often need panel upgrades. These guys are fast, licensed, and their work passes inspection every time.",
    featured: false,
  },
  {
    id: "9",
    name: "Oakland Flow Plumbing",
    category: "plumber",
    specialty: "Sewer lateral, water heater, and fixture installation",
    description:
      "Licensed plumber specializing in the East Bay's older sewer systems. Expert at sewer lateral inspections and replacements — critical for East Bay home sales.",
    phone: "(510) 555-0209",
    rating: 4.8,
    reviewCount: 72,
    nasimNote:
      "Sewer laterals are a big deal in East Bay sales. They handle the inspection, repair, and city certification all in one.",
    featured: false,
  },
  {
    id: "10",
    name: "Bay Area Moving Co.",
    category: "mover",
    specialty: "Local and regional residential moving",
    description:
      "Full-service moving company with packing, loading, and storage options. Specializes in the East Bay's tricky hillside homes and narrow Victorian staircases.",
    phone: "(510) 555-0210",
    rating: 4.6,
    reviewCount: 185,
    nasimNote:
      "I recommend them to every client. Careful with furniture, on time, and they know how to navigate the East Bay's steep driveways.",
    featured: false,
  },
];

export const getFeaturedVendors = (): Vendor[] => {
  return vendors.filter((v) => v.featured);
};

export const getVendorsByCategory = (category: VendorCategory): Vendor[] => {
  return vendors.filter((v) => v.category === category);
};
