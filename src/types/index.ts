export interface Property {
  id: string;
  slug: string;
  address: string;
  city: string;
  neighborhood: string;
  neighborhoodSlug: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  lotSqft?: number;
  status: "active" | "pending" | "sold";
  propertyType: "house" | "condo" | "townhouse" | "multi-family";
  description: string;
  features: string[];
  yearBuilt: number;
  soldPrice?: number;
  soldDate?: string;
  daysOnMarket?: number;
  pricePerSqft?: number;
  garage?: number;
  stories?: number;
  hoa?: number;
  mlsNumber?: string;
  listDate?: string;
  images: string[];
}

export interface Neighborhood {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  vibe: string;
  medianPrice: number;
  walkScore: number;
  transitScore: number;
  schoolRating: number;
  highlights: NeighborhoodHighlight[];
  dining: string[];
  parks: string[];
  culture: string[];
  transit: string[];
  heroColor: string;
}

export interface NeighborhoodHighlight {
  icon: string;
  label: string;
  value: string;
}

export interface Testimonial {
  id: string;
  name: string;
  neighborhood: string;
  type: "buyer" | "seller" | "both";
  quote: string;
  story: string;
  rating: number;
  date: string;
  initials: string;
}

export interface MarketStat {
  label: string;
  value: string;
  change: number;
  changeLabel: string;
  icon: string;
}

export interface MarketNeighborhoodData {
  neighborhood: string;
  medianPrice: number;
  priceChange: number;
  avgDaysOnMarket: number;
  inventory: number;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: "buyer" | "seller" | "general";
  icon: string;
  items: string[];
}
