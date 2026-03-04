import type { Property } from "@/types";

export const listings: Property[] = [
  {
    id: "1",
    slug: "craftsman-charm-rockridge",
    address: "5432 College Ave",
    neighborhood: "Rockridge",
    neighborhoodSlug: "rockridge",
    price: 1495000,
    beds: 3,
    baths: 2,
    sqft: 1850,
    status: "active",
    propertyType: "house",
    description:
      "Stunning Craftsman bungalow on tree-lined College Ave. Original details lovingly preserved — built-in bookcases, box-beam ceilings, and a gorgeous stone fireplace. Updated kitchen with quartz counters opens to a sun-drenched back garden. Two blocks from Rockridge BART.",
    features: ["Craftsman details", "Updated kitchen", "Garden", "Near BART", "Hardwood floors"],
    yearBuilt: 1922,
    images: [],
  },
  {
    id: "2",
    slug: "modern-loft-jack-london",
    address: "311 Oak St #405",
    neighborhood: "Jack London Square",
    neighborhoodSlug: "jack-london-square",
    price: 685000,
    beds: 1,
    baths: 1,
    sqft: 920,
    status: "active",
    propertyType: "condo",
    description:
      "Sleek, sun-filled loft in the heart of Jack London Square. 14-foot ceilings, floor-to-ceiling windows with Bay Bridge views, and an open chef's kitchen. Building amenities include rooftop deck, gym, and secure parking. Walk to ferry, restaurants, and waterfront.",
    features: ["Bay views", "14ft ceilings", "Rooftop deck", "Gym", "Secure parking"],
    yearBuilt: 2019,
    images: [],
  },
  {
    id: "3",
    slug: "hillside-retreat-montclair",
    address: "1789 Skyline Blvd",
    neighborhood: "Montclair",
    neighborhoodSlug: "montclair",
    price: 1875000,
    beds: 4,
    baths: 3,
    sqft: 2650,
    status: "active",
    propertyType: "house",
    description:
      "Perched in the Oakland Hills with jaw-dropping panoramic Bay views. This mid-century modern gem features walls of glass, a spacious deck overlooking the Bay, and direct trail access to Joaquin Miller Park. Montclair Village shops and dining just minutes away.",
    features: ["Panoramic Bay views", "Mid-century modern", "Trail access", "Large deck", "2-car garage"],
    yearBuilt: 1958,
    images: [],
  },
  {
    id: "4",
    slug: "lakeside-gem-lake-merritt",
    address: "246 Lakeshore Ave #302",
    neighborhood: "Lake Merritt",
    neighborhoodSlug: "lake-merritt",
    price: 625000,
    beds: 2,
    baths: 1,
    sqft: 1100,
    status: "active",
    propertyType: "condo",
    description:
      "Charming art deco condo overlooking Lake Merritt. Wake up to lake views, walk to the Saturday farmers market, and enjoy the 3.4-mile lakeside path at your doorstep. Updated bath, in-unit laundry, and deeded parking.",
    features: ["Lake views", "Art deco", "In-unit laundry", "Deeded parking", "Near BART"],
    yearBuilt: 1936,
    images: [],
  },
  {
    id: "5",
    slug: "creative-live-work-temescal",
    address: "4721 Telegraph Ave",
    neighborhood: "Temescal",
    neighborhoodSlug: "temescal",
    price: 899000,
    beds: 2,
    baths: 2,
    sqft: 1350,
    status: "active",
    propertyType: "townhouse",
    description:
      "Live-work townhouse on vibrant Telegraph Ave. Ground floor studio/office space, two bedrooms upstairs, private rooftop deck with Oakland Hills views. Steps to Temescal's best restaurants, shops, and the MacArthur BART station.",
    features: ["Live-work space", "Rooftop deck", "Hills views", "Near BART", "Modern finishes"],
    yearBuilt: 2015,
    images: [],
  },
  {
    id: "6",
    slug: "grand-victorian-piedmont-ave",
    address: "108 Piedmont Ave",
    neighborhood: "Piedmont Avenue",
    neighborhoodSlug: "piedmont-ave",
    price: 1325000,
    beds: 3,
    baths: 2.5,
    sqft: 2100,
    status: "pending",
    propertyType: "house",
    description:
      "Grand Victorian on prestigious Piedmont Avenue with classic period details — ornate moldings, stained glass, and a wraparound porch. Thoughtfully updated with modern kitchen and baths while preserving original character. Walk to shops and restaurants.",
    features: ["Victorian charm", "Wraparound porch", "Stained glass", "Updated kitchen", "Walkable"],
    yearBuilt: 1895,
    images: [],
  },
  {
    id: "7",
    slug: "sunny-bungalow-dimond",
    address: "2156 Fruitvale Ave",
    neighborhood: "Dimond",
    neighborhoodSlug: "dimond",
    price: 875000,
    beds: 3,
    baths: 1.5,
    sqft: 1450,
    status: "active",
    propertyType: "house",
    description:
      "Sun-drenched bungalow in the heart of the Dimond district. Bright open floor plan, refinished hardwood floors, and a landscaped backyard with mature fruit trees. Walking distance to La Farine Bakery, Dimond Park, and canyon trails.",
    features: ["Fruit trees", "Hardwood floors", "Open floor plan", "Near trails", "Quiet street"],
    yearBuilt: 1940,
    images: [],
  },
  {
    id: "8",
    slug: "waterfront-condo-adams-point",
    address: "1800 Lakeshore Dr #601",
    neighborhood: "Adams Point",
    neighborhoodSlug: "adams-point",
    price: 545000,
    beds: 1,
    baths: 1,
    sqft: 780,
    status: "active",
    propertyType: "condo",
    description:
      "Top-floor Adams Point condo with sweeping Lake Merritt views. Open floor plan, updated kitchen, floor-to-ceiling windows. Walk to Grand Avenue dining, 19th Street BART, and the lakeside path. Perfect starter home or investment.",
    features: ["Lake views", "Top floor", "Updated kitchen", "Walk to BART", "Doorman building"],
    yearBuilt: 1965,
    images: [],
  },
  // Sold properties
  {
    id: "9",
    slug: "sold-craftsman-grand-lake",
    address: "3421 Grand Ave",
    neighborhood: "Grand Lake",
    neighborhoodSlug: "grand-lake",
    price: 1100000,
    beds: 3,
    baths: 2,
    sqft: 1650,
    status: "sold",
    propertyType: "house",
    description:
      "Beautiful Craftsman near the Grand Lake Theatre. Sold above asking with multiple offers in just 9 days. Original built-ins, remodeled kitchen, and a private backyard. Nasim's marketing strategy attracted 14 offers.",
    features: ["Multiple offers", "9 days on market", "Sold above asking"],
    yearBuilt: 1915,
    soldPrice: 1287000,
    soldDate: "2025-11",
    images: [],
  },
  {
    id: "10",
    slug: "sold-modern-temescal",
    address: "4900 Clarke St",
    neighborhood: "Temescal",
    neighborhoodSlug: "temescal",
    price: 975000,
    beds: 3,
    baths: 2,
    sqft: 1550,
    status: "sold",
    propertyType: "house",
    description:
      "Modern renovated home in the heart of Temescal. Sold in 7 days with 11 offers. Open concept with designer finishes, ADU potential in the garage. Nasim's staging and photography made this listing stand out.",
    features: ["11 offers", "7 days on market", "ADU potential"],
    yearBuilt: 1948,
    soldPrice: 1142000,
    soldDate: "2025-09",
    images: [],
  },
];

export const getActiveListings = (): Property[] => {
  return listings.filter((l) => l.status === "active");
};

export const getSoldListings = (): Property[] => {
  return listings.filter((l) => l.status === "sold");
};

export const getFeaturedListings = (): Property[] => {
  return listings.filter((l) => l.status === "active").slice(0, 3);
};

export const getListingsByNeighborhood = (slug: string): Property[] => {
  return listings.filter((l) => l.neighborhoodSlug === slug);
};
