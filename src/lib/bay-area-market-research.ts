// =============================================================================
// Bay Area Real Estate Market Research Data — 2025-2026
// Sources: Redfin, Zillow, C.A.R., Compass, FRED, Bankrate, NAR, ATTOM,
//          SPUR, Red Oak Realty, Newmark, various news outlets
// Last updated: March 3, 2026
// =============================================================================

// -----------------------------------------------------------------------------
// 1. CITY-LEVEL MARKET STATISTICS
// -----------------------------------------------------------------------------

export interface CityMarketData {
  city: string;
  county: string;
  medianSalePrice: number;
  medianSalePriceSource: string;
  medianSalePriceDate: string;
  averageHomeValue: number | null;
  averageHomeValueSource: string | null;
  yoyPriceChange: number; // percentage
  avgDaysOnMarket: number;
  avgDaysOnMarketPriorYear: number;
  monthsOfSupply: number | null;
  notes: string;
}

export const cityMarketData: CityMarketData[] = [
  {
    city: "Oakland",
    county: "Alameda",
    medianSalePrice: 665_000,
    medianSalePriceSource: "Redfin",
    medianSalePriceDate: "January 2026",
    averageHomeValue: 892_500,
    averageHomeValueSource: "ATTOM (all residential types)",
    yoyPriceChange: -4.5,
    avgDaysOnMarket: 63,
    avgDaysOnMarketPriorYear: 53,
    monthsOfSupply: null,
    notes:
      "Oakland dominated 50% of Inner East Bay single-family sales in Q1 2025. " +
      "Rockridge and Montclair remain competitive at $1.2M-$1.8M. " +
      "3,771 residential properties sold in past 12 months.",
  },
  {
    city: "Berkeley",
    county: "Alameda",
    medianSalePrice: 1_300_000,
    medianSalePriceSource: "Redfin",
    medianSalePriceDate: "January 2026",
    averageHomeValue: 1_400_000,
    averageHomeValueSource: "Zillow",
    yoyPriceChange: 8.3,
    avgDaysOnMarket: 18,
    avgDaysOnMarketPriorYear: 32,
    monthsOfSupply: null,
    notes:
      "Strong demand due to schools and walkability. Q2 2025 saw 69% jump in " +
      "sales volume. Houses median $1.6M (+5.2% YoY), condos $770K (flat). " +
      "23 homes sold Jan 2026, up from 21 in Jan 2025.",
  },
  {
    city: "Alameda",
    county: "Alameda",
    medianSalePrice: 1_166_000,
    medianSalePriceSource: "Zillow (avg home value)",
    medianSalePriceDate: "Late 2025",
    averageHomeValue: 1_166_181,
    averageHomeValueSource: "Zillow",
    yoyPriceChange: -2.5,
    avgDaysOnMarket: 22,
    avgDaysOnMarketPriorYear: 19,
    monthsOfSupply: null,
    notes: "Island community with consistent demand. Values slightly softening.",
  },
  {
    city: "Richmond",
    county: "Contra Costa",
    medianSalePrice: 621_500,
    medianSalePriceSource: "Homes.com (12-month median)",
    medianSalePriceDate: "Late 2025",
    averageHomeValue: 632_136,
    averageHomeValueSource: "Zillow",
    yoyPriceChange: -4.0,
    avgDaysOnMarket: 30,
    avgDaysOnMarketPriorYear: 25,
    monthsOfSupply: null,
    notes:
      "Most affordable East Bay city on this list. Richmond Annex homes selling " +
      "81% faster than prior year and commanding 10% over list in Q2 2025. " +
      "Forecast: 2-4% price increase in 2026.",
  },
  {
    city: "Walnut Creek",
    county: "Contra Costa",
    medianSalePrice: 690_000,
    medianSalePriceSource: "Redfin (includes condos/townhomes)",
    medianSalePriceDate: "December 2025",
    averageHomeValue: 1_085_063,
    averageHomeValueSource: "Zillow (SFH-weighted)",
    yoyPriceChange: -7.4,
    avgDaysOnMarket: 39,
    avgDaysOnMarketPriorYear: 33,
    monthsOfSupply: null,
    notes:
      "Large gap between median sale price ($690K) and avg home value ($1.085M) " +
      "reflects mix of condos/townhomes and single-family homes. Downtown condos " +
      "are pulling the median sale price down.",
  },
  {
    city: "Fremont",
    county: "Alameda",
    medianSalePrice: 1_600_000,
    medianSalePriceSource: "Redfin/Steadily",
    medianSalePriceDate: "Late 2025",
    averageHomeValue: 1_606_837,
    averageHomeValueSource: "Zillow",
    yoyPriceChange: 12.0,
    avgDaysOnMarket: 9,
    avgDaysOnMarketPriorYear: 12,
    monthsOfSupply: null,
    notes:
      "Strongest price growth in the East Bay at +12%. Median price per sqft $980 " +
      "(+10% YoY). Fast-moving market driven by tech workers (Apple, Tesla proximity). " +
      "Listing price $1.4M in Oct 2025.",
  },
  {
    city: "San Leandro",
    county: "Alameda",
    medianSalePrice: 828_000,
    medianSalePriceSource: "Redfin",
    medianSalePriceDate: "Late 2025",
    averageHomeValue: 836_670,
    averageHomeValueSource: "Zillow",
    yoyPriceChange: -4.0,
    avgDaysOnMarket: 25,
    avgDaysOnMarketPriorYear: 20,
    monthsOfSupply: null,
    notes:
      "Redfin shows +4.7% YoY for houses specifically; Zillow shows -4.0% for " +
      "overall home values. Discrepancy likely due to property type mix. " +
      "List price ~$785K (Movoto).",
  },
];

// County-level data from C.A.R. (November 2025)
export interface CountyMarketData {
  county: string;
  medianSFHomePrice: number;
  yoyChange: number;
  monthsOfSupply: number;
  source: string;
  date: string;
}

export const countyMarketData: CountyMarketData[] = [
  { county: "Alameda", medianSFHomePrice: 1_192_500, yoyChange: -7.2, monthsOfSupply: 2.3, source: "C.A.R.", date: "November 2025" },
  { county: "Contra Costa", medianSFHomePrice: 889_000, yoyChange: -0.9, monthsOfSupply: 2.8, source: "C.A.R.", date: "November 2025" },
  { county: "San Francisco", medianSFHomePrice: 1_800_000, yoyChange: 12.6, monthsOfSupply: 1.2, source: "C.A.R.", date: "November 2025" },
  { county: "San Mateo", medianSFHomePrice: 2_000_000, yoyChange: -8.8, monthsOfSupply: 1.8, source: "C.A.R.", date: "November 2025" },
  { county: "Santa Clara", medianSFHomePrice: 1_935_250, yoyChange: 0.2, monthsOfSupply: 1.5, source: "C.A.R.", date: "November 2025" },
  { county: "Solano", medianSFHomePrice: 580_000, yoyChange: -2.8, monthsOfSupply: 3.5, source: "C.A.R.", date: "November 2025" },
];

// -----------------------------------------------------------------------------
// 2. INTEREST RATE DATA
// -----------------------------------------------------------------------------

export interface MortgageRateSnapshot {
  date: string;
  thirtyYearFixed: number;
  fifteenYearFixed: number;
  thirtyYearRefi: number;
  source: string;
}

export const currentMortgageRates: MortgageRateSnapshot = {
  date: "2026-03-03",
  thirtyYearFixed: 5.87,
  fifteenYearFixed: 5.37,
  thirtyYearRefi: 6.44,
  source: "Zillow, Bankrate, Freddie Mac composite",
};

export interface RateDataPoint {
  date: string;
  rate: number;
  source: string;
}

export const mortgageRateHistory: RateDataPoint[] = [
  { date: "2023-10-01", rate: 7.79, source: "Freddie Mac (peak)" },
  { date: "2024-01-01", rate: 6.62, source: "Freddie Mac" },
  { date: "2024-06-01", rate: 6.86, source: "Freddie Mac" },
  { date: "2024-12-01", rate: 6.72, source: "Freddie Mac" },
  { date: "2025-06-01", rate: 6.40, source: "Freddie Mac" },
  { date: "2025-12-01", rate: 6.19, source: "Freddie Mac" },
  { date: "2026-02-26", rate: 5.98, source: "Freddie Mac (lowest since Sep 2022)" },
  { date: "2026-03-03", rate: 5.87, source: "Zillow" },
];

export interface FedProjection {
  source: string;
  currentFedFundsRate: string;
  nextMeetingDate: string;
  expectedAction: string;
  rateProjections: {
    period: string;
    projectedMortgageRate: number;
    notes: string;
  }[];
}

export const fedProjections: FedProjection = {
  source: "Composite: Fed, MBA, Fannie Mae, Wells Fargo, NAHB, Bankrate",
  currentFedFundsRate: "3.50%-3.75%",
  nextMeetingDate: "2026-03-17",
  expectedAction: "Hold rates steady at 3.50%-3.75%",
  rateProjections: [
    {
      period: "Q1 2026",
      projectedMortgageRate: 5.9,
      notes: "Wells Fargo projects bottom at 6.1%, actual tracking below at ~5.87%",
    },
    {
      period: "Q2 2026",
      projectedMortgageRate: 6.0,
      notes: "MBA and Fannie Mae consensus: near 6.0% through year-end",
    },
    {
      period: "Q3 2026",
      projectedMortgageRate: 6.1,
      notes: "Bankrate projects full-year average of 6.1%, range 5.7%-6.5%",
    },
    {
      period: "Q4 2026",
      projectedMortgageRate: 5.9,
      notes: "Most economists project Fed funds dropping another 50-75 bps by year-end",
    },
    {
      period: "2027 average",
      projectedMortgageRate: 6.19,
      notes: "Wells Fargo: 6.19% avg. NAHB: 6.01% avg",
    },
  ],
};

// Total Fed rate cuts from peak: 6 cuts totaling 1.75 percentage points
export const fedRateCutHistory = {
  totalCutsFromPeak: 6,
  totalBasisPointsCut: 175,
  peakFedFundsRate: "5.25%-5.50%",
  currentFedFundsRate: "3.50%-3.75%",
  factorsForLowerRates: [
    "Gradual decline in 10-year Treasury yield",
    "CPI fell from 2.7% (Dec 2025) to 2.4% (Jan 2026)",
    "Cooling labor market",
  ],
  factorsForHigherRates: [
    "Military action in Iran pushing Treasury yields higher",
    "Rising oil prices fueling inflation fears",
    "Tariff-related price pressures",
  ],
};

// -----------------------------------------------------------------------------
// 3. INVENTORY LEVELS
// -----------------------------------------------------------------------------

export interface InventoryData {
  region: string;
  monthsOfSupply: number;
  activeListings: number | null;
  yoyListingChange: number | null; // percentage
  date: string;
  source: string;
  marketType: "seller" | "balanced" | "buyer";
  notes: string;
}

export const inventoryData: InventoryData[] = [
  {
    region: "Bay Area (overall)",
    monthsOfSupply: 1.6,
    activeListings: null,
    yoyListingChange: null,
    date: "December 2025",
    source: "C.A.R.",
    marketType: "seller",
    notes: "Well below balanced market threshold of 4-6 months. State avg is 2.7 months.",
  },
  {
    region: "Alameda County",
    monthsOfSupply: 2.3,
    activeListings: null,
    yoyListingChange: 47.79,
    date: "Q2 2025",
    source: "Bay East / Compass",
    marketType: "seller",
    notes:
      "Active listings up 47.79% YoY, new listings up 16.78%. " +
      "Still below balanced threshold but trending toward equilibrium.",
  },
  {
    region: "Contra Costa County",
    monthsOfSupply: 2.8,
    activeListings: null,
    yoyListingChange: null,
    date: "Q2 2025",
    source: "Bay East / Compass",
    marketType: "seller",
    notes: "Approaching balanced territory. Homes still moving in ~14 days despite 40% more time on market.",
  },
  {
    region: "San Francisco",
    monthsOfSupply: 1.2,
    activeListings: null,
    yoyListingChange: null,
    date: "December 2025",
    source: "C.A.R.",
    marketType: "seller",
    notes: "Extremely tight supply. Strongest seller's market in the Bay Area.",
  },
  {
    region: "California (statewide)",
    monthsOfSupply: 3.2,
    activeListings: 85_943,
    yoyListingChange: -2.4,
    date: "January 2026",
    source: "Redfin / C.A.R.",
    marketType: "balanced",
    notes:
      "Statewide inventory is higher than Bay Area. 85,943 homes for sale in Jan 2026, " +
      "down 2.4% YoY. Nationally, supply projected to rise ~10% in 2026.",
  },
];

// Key inventory insight
export const inventoryInsights = {
  singleFamilyMarket: "seller",
  condoMarket: "buyer",
  explanation:
    "Single-family homes in most Bay Area regions remain in a seller's market, " +
    "while the condo market generally favors buyers with higher months-of-supply inventory.",
  eastBaySalesDecline: -15.57, // percent fewer SF homes sold in May 2025 vs prior year
  eastBayListingIncrease: 47.79, // percent increase in active listings
  balancedMarketThreshold: { min: 4, max: 6, unit: "months" },
};

// -----------------------------------------------------------------------------
// 4. DAYS ON MARKET
// -----------------------------------------------------------------------------

export interface DaysOnMarketData {
  city: string;
  currentDOM: number;
  priorYearDOM: number;
  change: number; // in days
  percentChange: number;
  date: string;
  source: string;
}

export const daysOnMarketData: DaysOnMarketData[] = [
  { city: "Oakland", currentDOM: 63, priorYearDOM: 53, change: 10, percentChange: 18.9, date: "Jan 2026", source: "Redfin" },
  { city: "Berkeley", currentDOM: 18, priorYearDOM: 32, change: -14, percentChange: -43.8, date: "Jan 2026", source: "Redfin" },
  { city: "Walnut Creek", currentDOM: 39, priorYearDOM: 33, change: 6, percentChange: 18.2, date: "Dec 2025", source: "Redfin" },
  { city: "Fremont", currentDOM: 9, priorYearDOM: 12, change: -3, percentChange: -25.0, date: "Late 2025", source: "Zillow/Steadily" },
  { city: "San Leandro", currentDOM: 25, priorYearDOM: 20, change: 5, percentChange: 25.0, date: "Late 2025", source: "Estimated from trends" },
  { city: "Richmond", currentDOM: 30, priorYearDOM: 25, change: 5, percentChange: 20.0, date: "Late 2025", source: "Estimated from trends" },
  { city: "San Jose", currentDOM: 18, priorYearDOM: 14, change: 4, percentChange: 28.6, date: "Q1 2025", source: "Market reports" },
  { city: "Palo Alto", currentDOM: 16, priorYearDOM: 13, change: 3, percentChange: 23.1, date: "Q1 2025", source: "Market reports" },
  { city: "Mountain View", currentDOM: 21, priorYearDOM: 16, change: 5, percentChange: 31.3, date: "Q1 2025", source: "Market reports" },
];

// Inner East Bay aggregate trend
export const innerEastBayDOMTrend = {
  q2_2024_avg: 19,
  q2_2025_avg: 25,
  changeInDays: 6,
  percentChange: 31.6,
  source: "Red Oak Realty Q2 2025 Report",
  note:
    "Sales surged 50% YoY (1,025 to 1,537 homes), but homes took longer to sell. " +
    "Median sale prices declined 6.8% to $1,007,000.",
};

// -----------------------------------------------------------------------------
// 5. REALTOR ECONOMICS
// -----------------------------------------------------------------------------

export interface CommissionData {
  region: string;
  avgTotalCommission: number; // percentage
  avgListingCommission: number;
  avgBuyerAgentCommission: number;
  date: string;
  source: string;
}

export const commissionData: CommissionData = {
  region: "California",
  avgTotalCommission: 5.03,
  avgListingCommission: 2.73,
  avgBuyerAgentCommission: 2.43,
  date: "September 2025",
  source: "Clever Real Estate (survey of 96 CA agents) / Redfin",
};

export const commissionByCity: { city: string; avgTotalCommission: number; source: string }[] = [
  { city: "San Francisco", avgTotalCommission: 5.04, source: "Clever Real Estate 2026 Survey" },
  { city: "Los Angeles", avgTotalCommission: 5.67, source: "Clever Real Estate 2026 Survey" },
];

export const nationalCommissionAvg = 5.57; // 2025 national average

export const commissionByPriceRange: { priceRange: string; avgBuyerAgentCommission: number }[] = [
  { priceRange: "Under $500K", avgBuyerAgentCommission: 2.52 },
  { priceRange: "$500K-$1M", avgBuyerAgentCommission: 2.40 },
  { priceRange: "Over $1M", avgBuyerAgentCommission: 2.21 },
];

export const commissionTrend: { quarter: string; avgBuyerAgentCommission: number; source: string }[] = [
  { quarter: "Q1 2024 (pre-settlement announcement)", avgBuyerAgentCommission: 2.40, source: "Redfin" },
  { quarter: "Q3 2024 (settlement effective Aug 17)", avgBuyerAgentCommission: 2.36, source: "Redfin" },
  { quarter: "Q4 2024", avgBuyerAgentCommission: 2.37, source: "Redfin" },
  { quarter: "Q1 2025", avgBuyerAgentCommission: 2.40, source: "Redfin" },
  { quarter: "Q2 2025", avgBuyerAgentCommission: 2.43, source: "Redfin" },
];

// California transaction volume
export interface TransactionVolume {
  year: number;
  existingSFHomesSold: number;
  yoyChange: number; // percentage
  totalResidentialSales: number | null;
  source: string;
  notes: string;
}

export const transactionVolume: TransactionVolume[] = [
  {
    year: 2023,
    existingSFHomesSold: 258_000,
    yoyChange: -19.0,
    totalResidentialSales: null,
    source: "C.A.R. estimate",
    notes: "Post-rate-hike trough.",
  },
  {
    year: 2024,
    existingSFHomesSold: 269_030,
    yoyChange: 4.3,
    totalResidentialSales: 379_866,
    source: "C.A.R. / ATTOM",
    notes: "Modest recovery. Total residential includes all property types.",
  },
  {
    year: 2025,
    existingSFHomesSold: 269_000,
    yoyChange: 0.3,
    totalResidentialSales: null,
    source: "C.A.R.",
    notes:
      "Virtually flat vs 2024. Still 27% below 2019 (pre-pandemic). " +
      "22,100 escrows closed in Dec 2025 alone.",
  },
  {
    year: 2026,
    existingSFHomesSold: 274_400,
    yoyChange: 2.0,
    totalResidentialSales: null,
    source: "C.A.R. forecast",
    notes: "Forecast: 2% increase. Median price projected at $905,000 (new record, +3.6%).",
  },
];

// California affordability
export const californiaAffordability = {
  percentHouseholdsCanAffordMedian: 15,
  medianPriceForCalculation: 874_290,
  quarter: "Q4 2024",
  source: "C.A.R. Housing Affordability Index",
};

// Agent income data
export interface AgentIncomeData {
  source: string;
  averageAnnualIncome: number;
  notes: string;
}

export const agentIncomeData: AgentIncomeData[] = [
  { source: "Glassdoor", averageAnnualIncome: 187_706, notes: "Includes high earners in luxury markets" },
  { source: "Indeed", averageAnnualIncome: 118_292, notes: "Self-reported by agents" },
  { source: "Bureau of Labor Statistics (via CE Shop)", averageAnnualIncome: 97_243, notes: "Official government data" },
  { source: "ZipRecruiter (Licensed Agent)", averageAnnualIncome: 89_943, notes: "Job posting data" },
  { source: "ZipRecruiter (General Agent)", averageAnnualIncome: 84_669, notes: "Job posting data" },
  { source: "Salary.com", averageAnnualIncome: 53_019, notes: "Likely includes part-time agents" },
];

export const agentIncomeByExperience = {
  newAgents: {
    yearsExperience: "0-3",
    averageIncome: 53_000,
    source: "Allied Real Estate School 2024 alumni survey",
  },
  midCareerAgents: {
    yearsExperience: "4-10",
    incomeRange: { min: 150_000, max: 199_000 },
    percentInRange: 43,
    source: "Allied Schools 2025 alumni survey",
  },
  topEarners: {
    description: "Full-time experienced agents in premium markets",
    incomeFloor: 500_000,
    source: "Various industry reports",
  },
  partTimeAgents: {
    averageIncome: 23_500,
    source: "Industry estimates",
  },
};

export const perTransactionEarnings = {
  exampleSalePrice: 800_000,
  totalCommissionRate: 5.14,
  totalCommissionAmount: 41_120,
  agentTakeHome: { min: 16_000, max: 20_000 },
  effectiveAgentRate: { min: 2.0, max: 2.5 },
  explanation: "After brokerage splits, individual agent earns ~2-2.5% of sale price",
  source: "FastExpert",
};

// -----------------------------------------------------------------------------
// 6. NAR SETTLEMENT IMPACT
// -----------------------------------------------------------------------------

export interface NARSettlementData {
  settlementDate: string;
  effectiveDate: string;
  finalApprovalDate: string;
  settlementAmount: number; // in dollars
  keyChanges: {
    change: string;
    details: string;
    impact: string;
  }[];
  commissionImpact: {
    preSettlementAvgBuyerCommission: number;
    postSettlementLow: number;
    currentAvgBuyerCommission: number;
    netChange: string;
  };
  buyerImpact: string[];
  sellerImpact: string[];
  industryResponse: string[];
}

export const narSettlement: NARSettlementData = {
  settlementDate: "2024-03-15",
  effectiveDate: "2024-08-17",
  finalApprovalDate: "2024-11-26",
  settlementAmount: 418_000_000,
  keyChanges: [
    {
      change: "Seller commission decoupling",
      details:
        "Sellers are no longer automatically responsible for paying the buyer's agent commission.",
      impact:
        "In practice, most sellers in competitive markets still offer buyer agent compensation " +
        "to attract more buyers.",
    },
    {
      change: "MLS compensation ban",
      details:
        "Listing agents can no longer advertise buyer-agent compensation offers on the MLS. " +
        "Any offer to pay must be negotiated separately.",
      impact:
        "Compensation is now discussed off-MLS, but information still flows through agent networks.",
    },
    {
      change: "Mandatory buyer agreements",
      details:
        "Buyers must sign a written agreement with their agent before touring homes, " +
        "clearly outlining agent fees and services.",
      impact:
        "Adds friction to the buyer-agent relationship. Some buyers skipping agent representation " +
        "to avoid fees.",
    },
    {
      change: "Commission negotiability disclosure",
      details:
        "Agents must disclose that broker compensation is not set by law and is fully negotiable. " +
        "Must appear in listing agreements, buyer agreements, and pre-closing documents.",
      impact: "Increased transparency, but actual rates have not declined as expected.",
    },
  ],
  commissionImpact: {
    preSettlementAvgBuyerCommission: 2.40,
    postSettlementLow: 2.36,
    currentAvgBuyerCommission: 2.43,
    netChange:
      "Commissions dipped briefly after settlement (to 2.36% in Q3 2024) " +
      "then rebounded to 2.43% by Q2 2025 — back to pre-settlement levels. " +
      "Commissions increased in 39 states from 2024 to 2025.",
  },
  buyerImpact: [
    "Must sign written buyer-agent agreement before touring homes",
    "May need to pay agent commission directly (2-3% of sale price) if seller doesn't offer it",
    "Some buyers choosing to go unrepresented to save on commission",
    "Buyers negotiating commission credits in their offers to offset agent fees",
  ],
  sellerImpact: [
    "No longer required to pay buyer's agent commission",
    "Many sellers still offering buyer-agent comp to attract more buyers",
    "In less competitive areas, not offering comp can mean fewer showings and longer DOM",
    "94% of sellers surveyed support the commission changes (Clever Real Estate)",
  ],
  industryResponse: [
    "Agents slow to adopt new approaches; many still operating under traditional model",
    "Discount brokerages gaining market share by offering lower flat-fee options",
    "Some agents leaving the industry due to reduced transaction volume",
    "New emphasis on demonstrating value to justify commission rates",
  ],
};

// -----------------------------------------------------------------------------
// 7. BAY AREA SPECIFIC TRENDS
// -----------------------------------------------------------------------------

export interface TechLayoffImpact {
  totalJobsEliminated: string;
  period: string;
  earlyToMid2025Layoffs: number;
  keyCompanies: string[];
  housingImpact: {
    metric: string;
    value: string;
    source: string;
  }[];
  stayAndPivotPhenomenon: string;
  migrationTrends: string[];
  outlook: string;
}

export const techLayoffImpact: TechLayoffImpact = {
  totalJobsEliminated: "200,000+",
  period: "Q1 2023 - Q2 2025",
  earlyToMid2025Layoffs: 11_000,
  keyCompanies: ["Google", "Meta", "Salesforce", "Amazon", "Intel"],
  housingImpact: [
    {
      metric: "Alameda County median home price",
      value: "~$1.1M, down 3.7% YoY — controlled decline, not collapse",
      source: "Market reports",
    },
    {
      metric: "San Mateo County median",
      value: "$1.68M, down 3.2% from Q1 2024",
      source: "County data",
    },
    {
      metric: "Santa Clara County median",
      value: "Down only 1.1%",
      source: "County data",
    },
    {
      metric: "Projected total decline",
      value: "8-12% from 2024 peaks by mid-2026 (Alameda Co.)",
      source: "Economic forecasters",
    },
  ],
  stayAndPivotPhenomenon:
    "Many laid-off tech workers staying put rather than selling. Transitioning to remote work, " +
    "startups, health tech, climate tech, or public sector roles. Underwater mortgages for " +
    "recent buyers and community ties keeping people in place.",
  migrationTrends: [
    "Nearly 1/3 of homebuyers nationwide searched outside their metro area (Sep-Nov 2025)",
    "Tennessee rising as top destination for Bay Area outmigration",
    "Most impacted cities: San Francisco, Mountain View, Palo Alto",
    "East Bay seeing relative inflow as SF workers seek affordability",
    "AI boom creating new demand pockets — startups clustering in Oakland and SF SOMA",
  ],
  outlook:
    "WARN-triggered layoffs declining by early 2026, suggesting stabilization. " +
    "AI replacing some roles but creating new demand. Core high-income workforce remains, " +
    "keeping prices elevated. Key wildcard: if rates decline, buyer activity could surge.",
};

export interface ADUTrends {
  statePermits2023: number;
  bayAreaPermits2023: number;
  growthFromBase: string;
  projectedGrowth2026: string;
  keyLawChanges2026: {
    bill: string;
    change: string;
  }[];
  rentalIncome: { region: string; monthlyRange: { min: number; max: number } };
  designTrends: string[];
  keyInsight: string;
}

export const aduTrends: ADUTrends = {
  statePermits2023: 26_924,
  bayAreaPermits2023: 2_761,
  growthFromBase: "More than double 2020 levels",
  projectedGrowth2026: "10%+ growth continuing, 1,300+ new ADUs proposed in early 2025",
  keyLawChanges2026: [
    { bill: "SB 543", change: "Clarifies sizing rules (interior livable sqft), allows detached + converted ADU on same lot" },
    { bill: "AB 1154", change: "Expands design flexibility — two-story ADUs, mono-pitched roofs for solar" },
    { bill: "AB 462", change: "Streamlines permitting with strict 60-day decision deadlines" },
    { bill: "AB 2533", change: "Legalize unpermitted ADUs built before Jan 1, 2020 without extra fees (effective 2025)" },
    { bill: "SB 9", change: "Clarifications enabling lot splits and duplexes on single-family lots" },
  ],
  rentalIncome: {
    region: "Silicon Valley / Bay Area",
    monthlyRange: { min: 2_500, max: 3_500 },
  },
  designTrends: [
    "Organic warmth: white oak cabinetry, clay walls, neutral tones",
    "Indoor-outdoor living: glass sliders, folding doors, patios",
    "Smart technology: smart lighting, thermostats, voice-activated appliances",
    "Sustainability: solar-ready roofs, all-electric systems, advanced insulation",
    "Multi-purpose spaces: office/bedroom combos for remote work era",
    "Prefab ADUs gaining traction for faster, cheaper construction",
  ],
  keyInsight:
    "The 'stay and expand' trend: with high mortgage rates discouraging trade-ups, " +
    "Bay Area homeowners are building ADUs instead of moving. ADUs under 750 sqft " +
    "are exempt from development impact fees; under 500 sqft exempt from school fees.",
};

export interface CommercialToResidential {
  sfOfficeVacancyRate: string;
  keyProjects: {
    location: string;
    project: string;
    units: number | null;
    status: string;
    details: string;
  }[];
  policyChanges: {
    jurisdiction: string;
    policy: string;
    date: string;
  }[];
  outlook: string;
}

export const commercialToResidential: CommercialToResidential = {
  sfOfficeVacancyRate: "33%+ (more than a third of SF offices remain empty)",
  keyProjects: [
    {
      location: "San Francisco Downtown",
      project: "Downtown Revitalization Financing District",
      units: 4_000,
      status: "Legislation signed by Mayor Lurie",
      details: "50 properties identified for conversion within the district",
    },
    {
      location: "San Jose (CityView Plaza)",
      project: "Jay Paul Co. office-to-residential conversion",
      units: 680,
      status: "Plans filed",
      details:
        "First phase of CityView Plaza. City granted incentives: eliminated affordable " +
        "housing requirement and reduced fees/taxes.",
    },
    {
      location: "San Jose (South First Street)",
      project: "Office-to-apartment conversion",
      units: 47,
      status: "Proposed",
      details: "Three-story mixed-use building.",
    },
    {
      location: "San Mateo",
      project: "Tourbineau Real Estate Partners conversion",
      units: 156,
      status: "Application filed",
      details:
        "121,144 sqft office building to multifamily. Studios, 1BR, 2BR averaging 553 sqft. " +
        "15% income-restricted.",
    },
    {
      location: "Novato (Marin County)",
      project: "Former Fireman's Fund Insurance campus",
      units: 1_300,
      status: "Demolition started",
      details: "711,000 sqft campus on 65 acres being converted to housing.",
    },
  ],
  policyChanges: [
    {
      jurisdiction: "San Francisco",
      policy: "Eliminated affordable housing fees for office-to-housing conversions",
      date: "March 2025",
    },
    {
      jurisdiction: "San Francisco",
      policy: "Proposition C: waived transfer taxes on conversions",
      date: "2024",
    },
    {
      jurisdiction: "California (AB 2488)",
      policy: "Enabled downtown revitalization financing districts",
      date: "2024",
    },
    {
      jurisdiction: "San Francisco",
      policy: "Implemented all 6 SPUR recommendations for removing conversion barriers",
      date: "2025",
    },
  ],
  outlook:
    "Class B and C office buildings are primary targets. Premium Class A offices still leasing. " +
    "Cities simplifying approval processes. East Bay commercial vacancy at 22.8% " +
    "(14 of last 15 quarters negative net absorption).",
};

// Tariff impact on construction
export const tariffImpact = {
  constructionCostIncrease: "15-22%",
  period: "2024-2025 tariff wave",
  effects: [
    "New housing project delays and permit stalls",
    "Mid-tier housing projects paused in Fremont, Hayward, Santa Clara",
    "Shifted investor confidence away from new construction",
    "Exacerbated existing supply constraints",
  ],
};

// -----------------------------------------------------------------------------
// 8. CASE STUDIES & NOTABLE TRANSACTIONS
// -----------------------------------------------------------------------------

export interface MarketCaseStudy {
  title: string;
  location: string;
  date: string;
  details: string;
  significance: string;
}

export const caseStudies: MarketCaseStudy[] = [
  {
    title: "Piedmont Price Surge",
    location: "Piedmont, CA",
    date: "Q1 2025",
    details:
      "Piedmont experienced the largest median price increase in the Inner East Bay at 27% YoY.",
    significance:
      "Demonstrates that premium, low-inventory neighborhoods continue to defy broader cooling trends.",
  },
  {
    title: "Richmond Annex Hot Pocket",
    location: "Richmond Annex, CA",
    date: "Q2 2025",
    details:
      "Homes selling 81% faster than prior year and commanding 10% over list price on average.",
    significance:
      "Affordability-driven demand pocket. Shows that even in a cooling market, specific " +
      "neighborhoods can dramatically outperform.",
  },
  {
    title: "Inner East Bay Q2 Sales Surge",
    location: "Oakland-Berkeley-Alameda",
    date: "Q2 2025",
    details:
      "Single-family home sales surged 50% YoY (1,025 to 1,537 transactions), " +
      "while median price declined 6.8% to $1,007,000.",
    significance:
      "Volume up but prices down — classic sign of a market transitioning from seller-dominated " +
      "to balanced. More buyers entering at lower price points.",
  },
  {
    title: "El Cerrito Surprise",
    location: "El Cerrito, CA",
    date: "Q2 2025",
    details:
      "Posted 13% YoY price increase despite only a small inventory bump.",
    significance:
      "BART-adjacent, relatively affordable neighborhood attracting buyer interest. " +
      "Demonstrates strong demand for transit-accessible communities.",
  },
  {
    title: "Albany Over-Ask Persistence",
    location: "Albany, CA",
    date: "Q2 2025",
    details:
      "Despite a 7% median price dip, homes sold 35% over asking on average.",
    significance:
      "List-price strategy at work: agents pricing low to generate bidding wars. " +
      "Actual sale prices remain strong in desirable school districts.",
  },
  {
    title: "Berkeley Sales Volume Explosion",
    location: "Berkeley, CA",
    date: "Q2 2025",
    details:
      "11% increase in median price accompanied by a 69% jump in sales volume.",
    significance:
      "Berkeley schools and walkability continue to drive outsized demand. One of the few " +
      "East Bay markets with both rising prices AND rising volume.",
  },
  {
    title: "East Bay Commercial Vacancy Crisis",
    location: "Greater Oakland/East Bay",
    date: "Q4 2025",
    details:
      "Net absorption totaled negative 31,964 sqft — the 14th negative quarter out of the " +
      "last 15. Vacancy reached 22.8%.",
    significance:
      "Commercial real estate continues to struggle post-pandemic. Creates opportunities " +
      "for residential conversions. Contrast with tight residential inventory.",
  },
  {
    title: "Fireman's Fund Campus Conversion",
    location: "Novato, Marin County",
    date: "Early 2026",
    details:
      "Demolition began on the 711,000 sqft former insurance campus. " +
      "1,300 homes planned on the 65-acre site.",
    significance:
      "Largest Bay Area commercial-to-residential conversion project. Signals shifting " +
      "economics: housing development now more valuable than office space.",
  },
  {
    title: "Investor Expansion in Affordable Counties",
    location: "Statewide (least-expensive counties)",
    date: "Q3 2025",
    details:
      "Investors owned 30% more houses in California's least-expensive counties compared to prior period.",
    significance:
      "Institutional investors targeting affordable areas, potentially competing with " +
      "first-time buyers and driving up entry-level prices.",
  },
];

// -----------------------------------------------------------------------------
// SUMMARY & KEY TAKEAWAYS
// -----------------------------------------------------------------------------

export const marketSummary = {
  asOf: "2026-03-03",
  headline: "East Bay Market Shifting Toward Balance After Years of Seller Dominance",
  keyMetrics: {
    bayAreaMedianPrice: 1_250_000,
    mortgageRate30yr: 5.87,
    bayAreaMonthsOfSupply: 1.6,
    californiaAffordabilityIndex: 15, // percent who can afford median home
    caExistingHomeSales2025: 269_000,
    caForecastSales2026: 274_400,
    avgCaliforniaCommission: 5.03,
    eastBayDOMTrend: "increasing (19 → 25 days in Inner East Bay)",
  },
  topTrends: [
    "Mortgage rates at lowest since Sep 2022 (~5.87%), but still nearly 2x pandemic-era lows",
    "East Bay inventory up ~48% YoY, shifting toward buyer-friendly conditions",
    "NAR settlement changed commission structure but rates have not declined — buyer agent commissions back to 2.43%",
    "Tech layoffs caused cooling, not collapse — 'stay and pivot' phenomenon keeping inventory tight",
    "ADU boom accelerating: 26,924 state permits in 2023, new 2026 laws streamlining further",
    "Office-to-residential conversions gaining momentum — SF 33%+ vacancy driving policy changes",
    "Fremont strongest East Bay market (+12% YoY, 9 DOM); Oakland weakest (-4.5%, 63 DOM)",
    "Construction costs up 15-22% from tariffs, stalling new development",
    "California home sales volume flat for 3 years, still 27% below pre-pandemic 2019 levels",
    "Q1 2026 seen as strategic window: stabilizing prices + easing rates + improved inventory",
  ],
};
