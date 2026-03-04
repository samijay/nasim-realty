// =============================================================================
// Real Estate Professional Resources, Certifications & Influencers
// Last updated: March 3, 2026
// =============================================================================

export interface Certification {
  id: string;
  acronym: string;
  name: string;
  organization: string;
  description: string;
  idealFor: string;
  requirements: string;
  cost: string;
  website: string;
}

export interface Influencer {
  id: string;
  name: string;
  role: string;
  focus: string;
  platform: string;
  followers: string;
  whyFollow: string;
}

export interface IndustryResource {
  id: string;
  name: string;
  type: "podcast" | "newsletter" | "publication" | "organization" | "tool" | "education";
  description: string;
  url: string;
  whyValuable: string;
}

export const certifications: Certification[] = [
  {
    id: "abr",
    acronym: "ABR",
    name: "Accredited Buyer's Representative",
    organization: "Real Estate Buyer's Agent Council (REBAC/NAR)",
    description: "Specialized training in buyer representation, negotiation, and advocacy.",
    idealFor: "Agents focused on buyer representation",
    requirements: "2-day course + 5 completed buyer transactions",
    cost: "$295-$450",
    website: "https://www.nar.realtor/education/designations-and-certifications/abr",
  },
  {
    id: "srs",
    acronym: "SRS",
    name: "Seller Representative Specialist",
    organization: "Real Estate Business Institute (NAR)",
    description: "Advanced listing strategies, pricing, marketing, and seller advocacy.",
    idealFor: "Listing-focused agents",
    requirements: "2-day course + exam",
    cost: "$295-$395",
    website: "https://www.nar.realtor/education/designations-and-certifications/srs",
  },
  {
    id: "crs",
    acronym: "CRS",
    name: "Certified Residential Specialist",
    organization: "Residential Real Estate Council",
    description: "The highest credential in residential real estate. Requires significant production history.",
    idealFor: "Experienced agents wanting elite designation",
    requirements: "150+ transaction sides or $30M+ volume, education credits",
    cost: "$195/year dues",
    website: "https://crs.com",
  },
  {
    id: "gri",
    acronym: "GRI",
    name: "Graduate, REALTOR Institute",
    organization: "State REALTOR Associations",
    description: "Comprehensive business training covering contracts, finance, marketing, and technology.",
    idealFor: "Agents building a strong foundation (years 2-5)",
    requirements: "90+ hours of coursework through state association",
    cost: "$1,200-$1,800 total",
    website: "https://www.nar.realtor/education/designations-and-certifications/gri",
  },
  {
    id: "ccim",
    acronym: "CCIM",
    name: "Certified Commercial Investment Member",
    organization: "CCIM Institute",
    description: "Premier designation for commercial and investment real estate professionals.",
    idealFor: "Commercial and investment-focused agents",
    requirements: "160 hours coursework + portfolio review + $10M in transactions",
    cost: "$8,000-$12,000 total",
    website: "https://www.ccim.com",
  },
  {
    id: "sres",
    acronym: "SRES",
    name: "Seniors Real Estate Specialist",
    organization: "SRES Council (NAR)",
    description: "Training on senior-specific needs: downsizing, Prop 19, reverse mortgages, estate planning.",
    idealFor: "Agents serving 55+ clients (huge Bay Area demographic)",
    requirements: "2-day course + exam",
    cost: "$295",
    website: "https://www.nar.realtor/education/designations-and-certifications/sres",
  },
  {
    id: "cips",
    acronym: "CIPS",
    name: "Certified International Property Specialist",
    organization: "NAR Global",
    description: "International transaction expertise: currency, tax treaties, visa requirements.",
    idealFor: "Agents with international clients (Bay Area has huge international buyer pool)",
    requirements: "5 full-day courses + exam",
    cost: "$1,500-$2,000",
    website: "https://www.nar.realtor/education/designations-and-certifications/cips",
  },
  {
    id: "e-pro",
    acronym: "e-PRO",
    name: "e-PRO Certification",
    organization: "NAR",
    description: "Digital marketing, social media strategy, and technology tools for real estate.",
    idealFor: "Tech-savvy agents wanting to formalize digital skills",
    requirements: "Online self-paced course",
    cost: "$219",
    website: "https://www.nar.realtor/education/designations-and-certifications/e-pro",
  },
  {
    id: "mrp",
    acronym: "MRP",
    name: "Military Relocation Professional",
    organization: "NAR",
    description: "Specialized in military relocations, VA loans, and PCS moves.",
    idealFor: "Agents near military installations (Alameda, Travis AFB, Coast Guard Island)",
    requirements: "1-day course",
    cost: "$195",
    website: "https://www.nar.realtor/education/designations-and-certifications/mrp",
  },
  {
    id: "green",
    acronym: "GREEN",
    name: "GREEN Designation",
    organization: "NAR",
    description: "Sustainable/green building practices, energy efficiency, and eco-friendly features.",
    idealFor: "Bay Area agents (huge demand for green features and solar)",
    requirements: "2-day course",
    cost: "$295",
    website: "https://www.nar.realtor/education/designations-and-certifications/green",
  },
  {
    id: "psa",
    acronym: "PSA",
    name: "Pricing Strategy Advisor",
    organization: "NAR",
    description: "CMA methodology, appraisal processes, and pricing strategy in complex markets.",
    idealFor: "Agents in volatile markets (East Bay's micro-market complexity)",
    requirements: "Online course + exam",
    cost: "$175",
    website: "https://www.nar.realtor/education/designations-and-certifications/psa",
  },
  {
    id: "ahwd",
    acronym: "AHWD",
    name: "At Home With Diversity",
    organization: "NAR",
    description: "Fair housing best practices, cultural competency, and serving diverse communities.",
    idealFor: "All agents, especially in diverse markets like the East Bay",
    requirements: "1-day course",
    cost: "$125",
    website: "https://www.nar.realtor/education/designations-and-certifications/ahwd",
  },
];

export const influencers: Influencer[] = [
  {
    id: "steve-mun",
    name: "Steve Mun",
    role: "Bay Area Real Estate Agent & YouTube Educator",
    focus: "Bay Area market analysis, neighborhood tours, buyer/seller education",
    platform: "YouTube",
    followers: "50K+",
    whyFollow: "Deep Bay Area market expertise with data-driven videos. Covers Oakland, Berkeley, and East Bay extensively.",
  },
  {
    id: "spencer-hsu",
    name: "Spencer Hsu",
    role: "Bay Area Luxury Agent & Content Creator",
    focus: "Luxury market trends, Silicon Valley, investment strategy",
    platform: "YouTube / Instagram",
    followers: "100K+",
    whyFollow: "High-production content on Bay Area luxury market. Great for understanding high-end buyer psychology.",
  },
  {
    id: "tom-ferry",
    name: "Tom Ferry",
    role: "Real Estate Coach & Industry Speaker",
    focus: "Agent coaching, business development, marketing strategies",
    platform: "YouTube / Podcast",
    followers: "500K+",
    whyFollow: "Top real estate coach in the nation. Essential for agent business development and marketing strategies.",
  },
  {
    id: "jason-pantana",
    name: "Jason Pantana",
    role: "Marketing Coach (Tom Ferry Organization)",
    focus: "Social media, digital marketing, video strategy for realtors",
    platform: "Instagram / YouTube",
    followers: "75K+",
    whyFollow: "Cutting-edge marketing tactics specific to real estate. Practical, actionable content.",
  },
  {
    id: "brandon-turner",
    name: "Brandon Turner",
    role: "BiggerPockets Co-Founder & Investor",
    focus: "Real estate investing, creative financing, rental properties",
    platform: "BiggerPockets / YouTube",
    followers: "1M+",
    whyFollow: "Essential for understanding investor clients. Massive influence on how investors evaluate markets.",
  },
  {
    id: "javier-vidana",
    name: "Javier Vidana",
    role: "Real Estate Agent & Educator",
    focus: "First-time buyers, agent tips, market analysis",
    platform: "YouTube",
    followers: "400K+",
    whyFollow: "Excellent first-time buyer content. Great for agents serving diverse, younger demographics.",
  },
  {
    id: "katie-lance",
    name: "Katie Lance",
    role: "Social Media Strategist for RE",
    focus: "Social media strategy, personal branding, content creation",
    platform: "Instagram / LinkedIn",
    followers: "50K+",
    whyFollow: "Leading social media strategist specifically for real estate professionals.",
  },
  {
    id: "ryan-serhant",
    name: "Ryan Serhant",
    role: "Serhant CEO, Author, TV Personality",
    focus: "Luxury sales, personal branding, team building",
    platform: "YouTube / Instagram",
    followers: "2M+",
    whyFollow: "Master of personal branding and content-driven real estate marketing.",
  },
  {
    id: "mark-wong",
    name: "Mark Wong",
    role: "Red Oak Realty — East Bay Market Analyst",
    focus: "East Bay market data, quarterly reports, neighborhood insights",
    platform: "Blog / Reports",
    followers: "Local authority",
    whyFollow: "Best source for hyperlocal East Bay market data. Quarterly reports are industry standard for the region.",
  },
  {
    id: "car-research",
    name: "C.A.R. Research & Economics",
    role: "California Association of REALTORS",
    focus: "Statewide market data, affordability index, forecasts",
    platform: "Reports / Webinars",
    followers: "200K+ members",
    whyFollow: "Authoritative source for California market data. Monthly reports essential for market presentations.",
  },
];

export const industryResources: IndustryResource[] = [
  {
    id: "inman",
    name: "Inman News",
    type: "publication",
    description: "Premier real estate industry news covering technology, trends, and market analysis.",
    url: "https://www.inman.com",
    whyValuable: "Breaking industry news, NAR coverage, tech trends. Required reading for serious agents.",
  },
  {
    id: "biggerpockets",
    name: "BiggerPockets",
    type: "publication",
    description: "Largest real estate investing community with forums, podcasts, and educational content.",
    url: "https://www.biggerpockets.com",
    whyValuable: "Understanding investor psychology and strategies. Essential for serving investor clients.",
  },
  {
    id: "housingwire",
    name: "HousingWire",
    type: "publication",
    description: "Mortgage, housing, and fintech news for real estate professionals.",
    url: "https://www.housingwire.com",
    whyValuable: "Mortgage rate analysis, lending trends, regulatory changes. Key for understanding financing landscape.",
  },
  {
    id: "car-reports",
    name: "C.A.R. Monthly Market Reports",
    type: "organization",
    description: "California Association of REALTORS county-level market data, affordability indices, and forecasts.",
    url: "https://www.car.org/marketdata",
    whyValuable: "Authoritative California market data. Monthly county reports essential for client presentations.",
  },
  {
    id: "bay-east",
    name: "Bay East Association of REALTORS",
    type: "organization",
    description: "Local REALTOR association serving Alameda and Contra Costa counties.",
    url: "https://bayeast.org",
    whyValuable: "Local MLS access, market statistics, networking events, and CE courses specific to East Bay.",
  },
  {
    id: "bridgeMLS",
    name: "bridgeMLS",
    type: "tool",
    description: "Primary MLS serving the East Bay, including Alameda and Contra Costa counties.",
    url: "https://www.bridgemls.com",
    whyValuable: "The primary listing database for East Bay real estate transactions.",
  },
  {
    id: "redfin-data",
    name: "Redfin Data Center",
    type: "tool",
    description: "Free public housing market data including median prices, DOM, inventory by metro and city.",
    url: "https://www.redfin.com/news/data-center/",
    whyValuable: "Best free source for hyperlocal market stats. Great for CMAs and market presentations.",
  },
  {
    id: "tom-ferry-podcast",
    name: "Tom Ferry Podcast Experience",
    type: "podcast",
    description: "Weekly podcast on agent business development, marketing, and industry trends.",
    url: "https://www.tomferry.com/podcast",
    whyValuable: "Top-ranked RE podcast. Practical business advice and interviews with top producers.",
  },
  {
    id: "massive-agent",
    name: "Massive Agent Podcast",
    type: "podcast",
    description: "Marketing-focused podcast for real estate agents covering SEO, PPC, social media.",
    url: "https://massiveagent.com/podcast",
    whyValuable: "Tactical digital marketing strategies specifically for real estate lead generation.",
  },
  {
    id: "keeping-current",
    name: "Keeping Current Matters",
    type: "newsletter",
    description: "Daily market insights and shareable content for real estate professionals.",
    url: "https://www.keepingcurrentmatters.com",
    whyValuable: "Pre-made client-facing content and market commentary. Great for social media and email campaigns.",
  },
  {
    id: "spur",
    name: "SPUR (SF Bay Area Planning)",
    type: "organization",
    description: "Bay Area urban planning and policy research organization.",
    url: "https://www.spur.org",
    whyValuable: "Deep analysis of Bay Area housing policy, transportation, and development trends.",
  },
  {
    id: "zillow-research",
    name: "Zillow Research",
    type: "tool",
    description: "Housing market data, forecasts, and research reports.",
    url: "https://www.zillow.com/research/",
    whyValuable: "National and local market forecasts. Home value indices used widely in industry analysis.",
  },
  {
    id: "ca-dre",
    name: "California DRE",
    type: "organization",
    description: "California Department of Real Estate — licensing, regulations, and enforcement.",
    url: "https://www.dre.ca.gov",
    whyValuable: "Official source for licensing requirements, law changes, and disciplinary actions.",
  },
  {
    id: "nar-library",
    name: "NAR Research Library",
    type: "publication",
    description: "National Association of REALTORS research reports on market trends, demographics, and technology.",
    url: "https://www.nar.realtor/research-and-statistics",
    whyValuable: "Comprehensive national data. Annual profiles of buyers/sellers essential for understanding market demographics.",
  },
  {
    id: "red-oak-blog",
    name: "Red Oak Realty Market Blog",
    type: "publication",
    description: "Hyperlocal East Bay market analysis and quarterly reports.",
    url: "https://www.redoakrealty.com/posts",
    whyValuable: "Best hyperlocal East Bay analysis. Quarterly reports are the gold standard for the East Bay market.",
  },
  {
    id: "norada",
    name: "Norada Real Estate Investments",
    type: "publication",
    description: "Market-by-market analysis and forecasts for real estate investors.",
    url: "https://www.noradarealestate.com",
    whyValuable: "Detailed city-level market forecasts. Popular with out-of-state investors evaluating Bay Area markets.",
  },
];
