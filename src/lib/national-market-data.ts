// =============================================================================
// National Housing Market Data & Federal Reserve Indicators — 2022-2026
// Sources: S&P Case-Shiller, NAR, Census Bureau, FRED, NAHB, MBA, C.A.R.,
//          CME Group, Freddie Mac, BLS, Treasury Dept, Federal Reserve
// Last updated: March 4, 2026
// =============================================================================

// -----------------------------------------------------------------------------
// 1. NATIONAL HOUSING OVERVIEW
// -----------------------------------------------------------------------------

export interface CaseShillerIndex {
  indexName: string;
  period: string;
  value: number;
  yoyChange: number;
  momChange: number;
  releaseDate: string;
  nextReleaseDate: string;
  source: string;
  sourceUrl: string;
  notes: string;
}

export const caseShillerIndices: CaseShillerIndex[] = [
  {
    indexName: "U.S. National Composite (NSA)",
    period: "December 2025",
    value: 327.455,
    yoyChange: 1.3,
    momChange: -0.1,
    releaseDate: "2026-02-24",
    nextReleaseDate: "2026-03-31",
    source: "S&P Cotality Case-Shiller / FRED",
    sourceUrl: "https://fred.stlouisfed.org/series/CSUSHPINSA",
    notes:
      "Weakest full-year gain since 2011 (when prices fell 3.9%). " +
      "5.3 percentage points below the 6.6% 10-year annual average. " +
      "Inflation outpaced home price appreciation from June 2025 onward, " +
      "eroding real home values and reversing a decade-long trend of positive real returns.",
  },
  {
    indexName: "U.S. National Composite (SA)",
    period: "December 2025",
    value: 332.037,
    yoyChange: 1.3,
    momChange: 0.4,
    releaseDate: "2026-02-24",
    nextReleaseDate: "2026-03-31",
    source: "S&P Cotality Case-Shiller / FRED",
    sourceUrl: "https://fred.stlouisfed.org/series/CSUSHPISA",
    notes: "Seasonally adjusted version. Fifth consecutive month of price increases.",
  },
  {
    indexName: "10-City Composite",
    period: "December 2025",
    value: 352.41,
    yoyChange: 1.9,
    momChange: 0.5,
    releaseDate: "2026-02-24",
    nextReleaseDate: "2026-03-31",
    source: "S&P Cotality Case-Shiller",
    sourceUrl: "https://www.spglobal.com/spdji/en/index-family/indicators/sp-cotality-case-shiller/",
    notes: "Outperformed the national composite, driven by strength in Chicago and New York.",
  },
  {
    indexName: "20-City Composite",
    period: "December 2025",
    value: 336.89,
    yoyChange: 1.4,
    momChange: -0.1,
    releaseDate: "2026-02-24",
    nextReleaseDate: "2026-03-31",
    source: "S&P Cotality Case-Shiller / FRED",
    sourceUrl: "https://fred.stlouisfed.org/series/SPCS20RSA",
    notes:
      "Decreased from 337.34 in November. Geographic divergence widened sharply: " +
      "Midwest/Northeast markets outperforming, Sun Belt markets declining.",
  },
];

export interface CaseShillerMetroPerformance {
  metro: string;
  yoyChange: number;
  rank: "top" | "bottom";
  source: string;
}

export const caseShillerMetroPerformance2025: CaseShillerMetroPerformance[] = [
  { metro: "Chicago", yoyChange: 5.3, rank: "top", source: "S&P Case-Shiller Dec 2025" },
  { metro: "New York", yoyChange: 5.1, rank: "top", source: "S&P Case-Shiller Dec 2025" },
  { metro: "Cleveland", yoyChange: 4.0, rank: "top", source: "S&P Case-Shiller Dec 2025" },
  { metro: "Minneapolis", yoyChange: 2.7, rank: "top", source: "S&P Case-Shiller Dec 2025" },
  { metro: "Tampa", yoyChange: -2.9, rank: "bottom", source: "S&P Case-Shiller Dec 2025" },
  { metro: "Denver", yoyChange: -2.1, rank: "bottom", source: "S&P Case-Shiller Dec 2025" },
  { metro: "Phoenix", yoyChange: -1.5, rank: "bottom", source: "S&P Case-Shiller Dec 2025" },
  { metro: "Dallas", yoyChange: -1.5, rank: "bottom", source: "S&P Case-Shiller Dec 2025" },
  { metro: "Miami", yoyChange: -1.5, rank: "bottom", source: "S&P Case-Shiller Dec 2025" },
];

// NAR Existing Home Sales — Annual and Monthly
export interface NARExistingHomeSales {
  period: string;
  annualizedRate: number; // millions, seasonally adjusted annual rate (SAAR)
  medianPrice: number;
  medianPriceYoY: number;
  monthsOfSupply: number;
  monthsOfSupplySA: number | null; // seasonally adjusted
  totalInventory: number | null; // millions of units
  source: string;
  sourceUrl: string;
  notes: string;
}

export const narExistingHomeSalesHistory: NARExistingHomeSales[] = [
  {
    period: "2023 (full year)",
    annualizedRate: 4.09,
    medianPrice: 389_800,
    medianPriceYoY: -0.8,
    monthsOfSupply: 3.2,
    monthsOfSupplySA: null,
    totalInventory: null,
    source: "NAR",
    sourceUrl: "https://www.nar.realtor/research-and-statistics/housing-statistics/existing-home-sales",
    notes: "Lowest sales since 1995. Rate shock year — 30yr mortgage averaged 6.81%.",
  },
  {
    period: "2024 (full year)",
    annualizedRate: 4.06,
    medianPrice: 407_500,
    medianPriceYoY: 4.5,
    monthsOfSupply: 3.5,
    monthsOfSupplySA: null,
    totalInventory: null,
    source: "NAR",
    sourceUrl: "https://www.nar.realtor/research-and-statistics/housing-statistics/existing-home-sales",
    notes: "Essentially flat vs 2023. Second-lowest year in three decades.",
  },
  {
    period: "December 2025",
    annualizedRate: 4.35,
    medianPrice: 405_400,
    medianPriceYoY: 0.4,
    monthsOfSupply: 3.5,
    monthsOfSupplySA: 4.0,
    totalInventory: 1.21,
    source: "NAR",
    sourceUrl: "https://www.nar.realtor/newsroom/nar-existing-home-sales-report-shows-0-5-increase-in-november",
    notes:
      "Surged 5.1% MoM — sharpest increase in nearly 2 years, highest level in nearly 3 years.",
  },
  {
    period: "January 2026",
    annualizedRate: 3.91,
    medianPrice: 396_800,
    medianPriceYoY: 0.9,
    monthsOfSupply: 3.7,
    monthsOfSupplySA: 4.2,
    totalInventory: 1.18,
    source: "NAR (released Feb 12, 2026)",
    sourceUrl: "https://www.nar.realtor/newsroom/nar-existing-home-sales-report-shows-8-4-decrease-in-january",
    notes:
      "Sank 8.4% MoM to lowest since Sep 2024 — sharpest drop in nearly 4 years. " +
      "31st consecutive month of YoY price increases. " +
      "Winter storms (below-normal temps, above-normal precipitation) weighed on activity. " +
      "Next release: Feb 2026 data on March 10, 2026.",
  },
];

// NAR 2026 Forecast
export const narForecast2026 = {
  projectedExistingHomeSales: 4.65, // millions SAAR
  projectedSalesChangeYoY: 14, // percent
  projectedMedianPriceChange: 4, // percent
  source: "NAR Chief Economist Lawrence Yun",
  sourceUrl: "https://www.nar.realtor/newsroom/nar-forecast-home-sales-expected-to-jump-14-in-2026",
  notes:
    "NAR expects the most meaningful improvement in home sales since 2021, " +
    "driven by stabilizing mortgage rates, improved inventory, and pent-up demand.",
} as const;

// New Residential Construction (Housing Starts & Permits)
export interface HousingConstructionData {
  period: string;
  housingStartsSAAR: number; // thousands, seasonally adjusted annual rate
  housingStartsMoM: number; // percent
  housingStartsYoY: number; // percent
  singleFamilyStartsSAAR: number;
  multiFamilyStartsSAAR: number;
  buildingPermitsSAAR: number;
  permitsMoM: number;
  permitsYoY: number;
  completionsSAAR: number;
  source: string;
  sourceUrl: string;
  notes: string;
}

export const housingConstructionData: HousingConstructionData[] = [
  {
    period: "2025 (full year)",
    housingStartsSAAR: 1_359,
    housingStartsMoM: 0,
    housingStartsYoY: -0.6,
    singleFamilyStartsSAAR: 0, // full-year SF starts down 7.0%
    multiFamilyStartsSAAR: 0, // full-year MF starts up 16.6%
    buildingPermitsSAAR: 1_425,
    permitsMoM: 0,
    permitsYoY: -3.6,
    completionsSAAR: 1_498,
    source: "U.S. Census Bureau",
    sourceUrl: "https://www.census.gov/construction/nrc/current/index.html",
    notes:
      "Annual housing starts totaled 1,358,700 units, 0.6% below 2024. " +
      "Single-family starts fell 7.0% while multi-family starts rose 16.6%. " +
      "Completions totaled 1,497,800, down 7.9% from 2024.",
  },
  {
    period: "December 2025",
    housingStartsSAAR: 1_404,
    housingStartsMoM: 6.2,
    housingStartsYoY: -7.3,
    singleFamilyStartsSAAR: 981,
    multiFamilyStartsSAAR: 402,
    buildingPermitsSAAR: 1_448,
    permitsMoM: 4.3,
    permitsYoY: -2.2,
    completionsSAAR: 1_525,
    source: "U.S. Census Bureau (released Feb 18, 2026)",
    sourceUrl: "https://www.census.gov/construction/nrc/pdf/newresconst.pdf",
    notes:
      "December starts stronger than consensus (1.31M expected). " +
      "Single-family starts rose 4.1% MoM. Multi-family at 402K. " +
      "Next release: March 24, 2026.",
  },
];

// Housing Affordability Index
export interface HousingAffordabilitySnapshot {
  indexName: string;
  value: number;
  period: string;
  interpretation: string;
  source: string;
  sourceUrl: string;
  notes: string;
}

export const nationalAffordability: HousingAffordabilitySnapshot = {
  indexName: "NAR Housing Affordability Index",
  value: 105.2,
  period: "January 2026",
  interpretation:
    "A value of 100 means a family earning the median income has exactly enough to qualify " +
    "for a median-priced home. Above 100 = more affordable. Housing is the most affordable " +
    "since March 2022.",
  source: "NAR Housing Affordability Index",
  sourceUrl: "https://www.nar.realtor/research-and-statistics/housing-statistics/housing-affordability-index",
  notes:
    "Improvement driven by wage gains outpacing home price growth and mortgage rates " +
    "being lower than a year ago. Despite improvement, still well below historical average of ~150.",
};

// National Median Home Price
export interface NationalMedianPrice {
  medianExistingHomePrice: number;
  medianSingleFamilyPrice: number;
  period: string;
  yoyChange: number;
  consecutiveYoYIncreaseMonths: number;
  source: string;
  sourceUrl: string;
}

export const nationalMedianPrice: NationalMedianPrice = {
  medianExistingHomePrice: 396_800,
  medianSingleFamilyPrice: 400_600,
  period: "January 2026",
  yoyChange: 0.9,
  consecutiveYoYIncreaseMonths: 31,
  source: "NAR Existing Home Sales Report",
  sourceUrl: "https://www.nar.realtor/newsroom/nar-existing-home-sales-report-shows-8-4-decrease-in-january",
};

// Homeownership Rate
export interface HomeownershipRate {
  rate: number;
  seasonallyAdjusted: number;
  period: string;
  yoyChange: number;
  rentalVacancyRate: number;
  homeownerVacancyRate: number;
  source: string;
  sourceUrl: string;
  notes: string;
}

export const homeownershipRate: HomeownershipRate = {
  rate: 65.7,
  seasonallyAdjusted: 65.5,
  period: "Q4 2025",
  yoyChange: 0.0, // virtually unchanged from Q4 2024
  rentalVacancyRate: 7.2,
  homeownerVacancyRate: 1.2,
  source: "U.S. Census Bureau CPS/HVS (released Feb 3, 2026)",
  sourceUrl: "https://fred.stlouisfed.org/series/RHORUSQ156N",
  notes:
    "4-quarter moving average at 65.3%, lowest since Q1 2020. " +
    "Downward trend driven by elevated mortgage rates, rising prices, " +
    "and limited entry-level supply. " +
    "Note: Oct 2025 data missing due to federal funding lapse; " +
    "Q4 estimates based on Nov-Dec 2025 only.",
};

// National Months of Supply
export const nationalMonthsOfSupply = {
  current: 3.7,
  seasonallyAdjusted: 4.2,
  period: "January 2026",
  priorMonth: 3.5,
  priorYear: 3.5,
  balancedMarketRange: { min: 4.5, max: 6.0 },
  totalActiveListings: 1_180_000,
  activeListingsYoYChange: 3.5,
  source: "NAR / FRED",
  sourceUrl: "https://fred.stlouisfed.org/series/HOSSUPUSM673N",
  notes:
    "National active inventory grew 10.0% YoY through January 2026. " +
    "9 states now above pre-pandemic 2019 inventory levels: AZ, CO, FL, ID, NE, TN, TX, UT, WA. " +
    "Still well below the 4.5-6.0 months considered a balanced market.",
} as const;

// Q4 2025 Metro Area Price Performance
export const q4MetroPricePerformance = {
  metrosWithPriceIncreases: 73, // percent
  metrosWithPriceDeclines: 27, // percent
  period: "Q4 2025",
  source: "NAR",
  sourceUrl: "https://www.nar.realtor/newsroom/home-prices-increased-in-73-of-metro-areas-in-fourth-quarter-of-2025",
  notes:
    "73% of metro areas posted YoY price increases in Q4 2025, " +
    "down from prior quarters, reflecting broadening softness.",
} as const;

// -----------------------------------------------------------------------------
// 2. FEDERAL RESERVE & INTEREST RATES
// -----------------------------------------------------------------------------

export interface FOMCMeeting {
  dates: string;
  month: string;
  hasSEP: boolean; // Summary of Economic Projections (dot plot)
  status: "completed" | "upcoming";
  decision: string | null;
  voteSplit: string | null;
  notes: string;
}

export const fomcSchedule2026: FOMCMeeting[] = [
  {
    dates: "January 27-28, 2026",
    month: "January",
    hasSEP: false,
    status: "completed",
    decision: "Hold at 3.50%-3.75%",
    voteSplit: "10-2 (Miran and Waller dissented, preferring a 25bp cut)",
    notes:
      "First meeting of 2026. Held steady after three consecutive cuts in Sep-Dec 2025. " +
      "Statement noted economic activity continued to expand at a solid pace.",
  },
  {
    dates: "March 17-18, 2026",
    month: "March",
    hasSEP: true,
    status: "upcoming",
    decision: null,
    voteSplit: null,
    notes:
      "Will include updated Summary of Economic Projections and dot plot. " +
      "CME FedWatch shows ~94% probability of hold, ~6% chance of 25bp cut. " +
      "Markets now pricing next cut for September rather than July.",
  },
  {
    dates: "April 28-29, 2026",
    month: "April",
    hasSEP: false,
    status: "upcoming",
    decision: null,
    voteSplit: null,
    notes: "No SEP or dot plot at this meeting.",
  },
  {
    dates: "June 16-17, 2026",
    month: "June",
    hasSEP: true,
    status: "upcoming",
    decision: null,
    voteSplit: null,
    notes: "Will include updated SEP. Key meeting for mid-year rate reassessment.",
  },
  {
    dates: "July 28-29, 2026",
    month: "July",
    hasSEP: false,
    status: "upcoming",
    decision: null,
    voteSplit: null,
    notes: "Previously seen as likely cut date; markets have since pushed expectations to September.",
  },
  {
    dates: "September 15-16, 2026",
    month: "September",
    hasSEP: true,
    status: "upcoming",
    decision: null,
    voteSplit: null,
    notes:
      "Market consensus for next rate cut has shifted here. " +
      "Two 25bp cuts still priced in before year-end.",
  },
  {
    dates: "October 27-28, 2026",
    month: "October",
    hasSEP: false,
    status: "upcoming",
    decision: null,
    voteSplit: null,
    notes: "No SEP at this meeting.",
  },
  {
    dates: "December 8-9, 2026",
    month: "December",
    hasSEP: true,
    status: "upcoming",
    decision: null,
    voteSplit: null,
    notes: "Final meeting of 2026. Will include year-end updated projections.",
  },
];

export interface FedFundsRateHistoryEntry {
  date: string;
  targetRangeUpper: number;
  targetRangeLower: number;
  action: string;
  bpsChange: number;
  source: string;
}

export const fedFundsRateHistory: FedFundsRateHistoryEntry[] = [
  // 2022: Aggressive hiking cycle begins
  { date: "2022-03-17", targetRangeLower: 0.25, targetRangeUpper: 0.50, action: "Hike", bpsChange: 25, source: "Federal Reserve" },
  { date: "2022-05-05", targetRangeLower: 0.75, targetRangeUpper: 1.00, action: "Hike", bpsChange: 50, source: "Federal Reserve" },
  { date: "2022-06-16", targetRangeLower: 1.50, targetRangeUpper: 1.75, action: "Hike", bpsChange: 75, source: "Federal Reserve" },
  { date: "2022-07-27", targetRangeLower: 2.25, targetRangeUpper: 2.50, action: "Hike", bpsChange: 75, source: "Federal Reserve" },
  { date: "2022-09-21", targetRangeLower: 3.00, targetRangeUpper: 3.25, action: "Hike", bpsChange: 75, source: "Federal Reserve" },
  { date: "2022-11-02", targetRangeLower: 3.75, targetRangeUpper: 4.00, action: "Hike", bpsChange: 75, source: "Federal Reserve" },
  { date: "2022-12-14", targetRangeLower: 4.25, targetRangeUpper: 4.50, action: "Hike", bpsChange: 50, source: "Federal Reserve" },
  // 2023: Final hikes, then extended pause
  { date: "2023-02-01", targetRangeLower: 4.50, targetRangeUpper: 4.75, action: "Hike", bpsChange: 25, source: "Federal Reserve" },
  { date: "2023-03-22", targetRangeLower: 4.75, targetRangeUpper: 5.00, action: "Hike", bpsChange: 25, source: "Federal Reserve" },
  { date: "2023-05-03", targetRangeLower: 5.00, targetRangeUpper: 5.25, action: "Hike", bpsChange: 25, source: "Federal Reserve" },
  { date: "2023-07-26", targetRangeLower: 5.25, targetRangeUpper: 5.50, action: "Hike (peak)", bpsChange: 25, source: "Federal Reserve" },
  // 2023 Aug - 2024 Aug: Hold at 5.25%-5.50% for 14 months
  // 2024: The pivot to rate cuts
  { date: "2024-09-18", targetRangeLower: 4.75, targetRangeUpper: 5.00, action: "Cut", bpsChange: -50, source: "Federal Reserve" },
  { date: "2024-11-07", targetRangeLower: 4.50, targetRangeUpper: 4.75, action: "Cut", bpsChange: -25, source: "Federal Reserve" },
  { date: "2024-12-18", targetRangeLower: 4.25, targetRangeUpper: 4.50, action: "Cut", bpsChange: -25, source: "Federal Reserve" },
  // 2025: Continued easing — three more 25bp cuts
  { date: "2025-09-17", targetRangeLower: 4.00, targetRangeUpper: 4.25, action: "Cut", bpsChange: -25, source: "Federal Reserve" },
  { date: "2025-10-29", targetRangeLower: 3.75, targetRangeUpper: 4.00, action: "Cut", bpsChange: -25, source: "Federal Reserve" },
  { date: "2025-12-17", targetRangeLower: 3.50, targetRangeUpper: 3.75, action: "Cut", bpsChange: -25, source: "Federal Reserve" },
  // 2026: Holding steady
  { date: "2026-01-28", targetRangeLower: 3.50, targetRangeUpper: 3.75, action: "Hold", bpsChange: 0, source: "Federal Reserve" },
];

export const fedFundsRateSummary = {
  currentRange: "3.50%-3.75%",
  peakRange: "5.25%-5.50%",
  peakDate: "July 2023",
  peakHeldMonths: 14,
  totalCutsFromPeak: 6,
  totalBasisPointsCut: 175,
  cuttingCycleStart: "September 2024",
  source: "Federal Reserve / Bankrate",
  sourceUrl: "https://www.bankrate.com/banking/federal-reserve/history-of-federal-funds-rate/",
  forwardGuidance:
    "Fed divided: some members favor further cuts if inflation declines, " +
    "others advocate holding steady, a few raised possibility of hikes if inflation persists. " +
    "Morningstar expects 0.75% in cuts during 2026, reaching 2.25%-2.50% by end of 2027.",
} as const;

// 10-Year Treasury Yield
export interface TreasuryYieldSnapshot {
  yield: number;
  date: string;
  oneMonthChange: number;
  oneYearChange: number;
  recentRange: { low: number; high: number };
  source: string;
  sourceUrl: string;
  keyDrivers: string[];
  notes: string;
}

export const tenYearTreasuryYield: TreasuryYieldSnapshot = {
  yield: 4.08,
  date: "2026-03-04",
  oneMonthChange: -0.10,
  oneYearChange: -0.20,
  recentRange: { low: 4.04, high: 4.10 },
  source: "U.S. Treasury / Trading Economics",
  sourceUrl: "https://fred.stlouisfed.org/series/DGS10",
  keyDrivers: [
    "U.S.-Iran conflict causing oil price surge — pushing yields higher on inflation fears",
    "Iran reportedly closed Strait of Hormuz, threatening energy supply",
    "Global 15% tariff starting this week, with expected 5-month reversion",
    "Traders scaling back rate cut expectations — next cut priced for September vs July",
  ],
  notes:
    "Normally geopolitical conflict drives Treasury demand (lower yields), but energy-driven " +
    "inflation fears are having the opposite effect. Analysts watching 4.50% as key breakout level. " +
    "A hotter-than-expected CPI or failed auction could push past 4.50%; " +
    "a growth scare could see retreat to 3.75%.",
};

// CME FedWatch Probabilities
export interface FedWatchProbabilities {
  meetingDate: string;
  asOfDate: string;
  holdProbability: number;
  cutProbability25bp: number;
  cutProbability50bp: number;
  hikeProbability: number;
  impliedTargetRate: string;
  source: string;
  sourceUrl: string;
  notes: string;
}

export const cmeFedWatch: FedWatchProbabilities = {
  meetingDate: "March 17-18, 2026",
  asOfDate: "2026-03-04",
  holdProbability: 94.1,
  cutProbability25bp: 5.9,
  cutProbability50bp: 0,
  hikeProbability: 0,
  impliedTargetRate: "3.50%-3.75%",
  source: "CME FedWatch Tool",
  sourceUrl: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
  notes:
    "Market overwhelmingly pricing in a hold at March meeting. " +
    "Two 25bp cuts still anticipated before year-end, with September " +
    "now seen as the most likely meeting for the next cut. " +
    "CME FedWatch has 88% predictive accuracy 30 days prior to meetings.",
};

export const fedWatchEvolution = [
  { date: "2025-12-20", marchCutProb: 42.2, notes: "Market initially saw reasonable chance of March cut" },
  { date: "2026-02-05", marchCutProb: 23.2, notes: "Cut probability declining as inflation concerns rose" },
  { date: "2026-02-15", marchCutProb: 21.7, notes: "78.3% hold probability" },
  { date: "2026-02-28", marchCutProb: 5.9, notes: "Near certainty of hold; 94.1% hold probability" },
  { date: "2026-03-04", marchCutProb: 5.9, notes: "Stable — Iran conflict and tariffs keeping Fed cautious" },
] as const;

// -----------------------------------------------------------------------------
// 3. NATIONAL MARKET INDICATORS
// -----------------------------------------------------------------------------

// NAHB Builder Confidence Index (Housing Market Index)
export interface NAHBBuilderConfidence {
  overallIndex: number;
  currentSalesConditions: number;
  futureSalesExpectations: number;
  prospectiveBuyerTraffic: number;
  period: string;
  momChange: number;
  breakeven: number;
  consecutiveNegativeMonths: number;
  priceReductions: { percent: number; avgReduction: number };
  salesIncentives: number; // percent of builders offering
  regional: {
    northeast: number;
    midwest: number;
    south: number;
    west: number;
  };
  source: string;
  sourceUrl: string;
  notes: string;
}

export const nahbBuilderConfidence: NAHBBuilderConfidence = {
  overallIndex: 36,
  currentSalesConditions: 41,
  futureSalesExpectations: 46,
  prospectiveBuyerTraffic: 22,
  period: "February 2026",
  momChange: -1,
  breakeven: 50,
  consecutiveNegativeMonths: 22,
  priceReductions: { percent: 36, avgReduction: 6 },
  salesIncentives: 65,
  regional: {
    northeast: 43,
    midwest: 43,
    south: 35,
    west: 33,
  },
  source: "NAHB/Wells Fargo Housing Market Index",
  sourceUrl: "https://www.nahb.org/news-and-economics/press-releases/2026/02/builder-sentiment-edges-lower-on-affordability-concerns",
  notes:
    "Softest reading in 5 months. 22nd consecutive month below the breakeven level of 50. " +
    "NAHB Chief Economist Robert Dietz: 'Housing affordability remains an ongoing challenge.' " +
    "36% of builders cut prices (down from 40% in Jan), avg reduction 6%. " +
    "65% offering sales incentives — 11th consecutive month above 60%.",
};

// NAR Pending Home Sales Index
export interface PendingHomeSalesIndex {
  indexValue: number;
  momChange: number;
  yoyChange: number;
  period: string;
  source: string;
  sourceUrl: string;
  regional: {
    region: string;
    trend: "up" | "down" | "flat";
    notes: string;
  }[];
  notes: string;
}

export const pendingHomeSalesIndex: PendingHomeSalesIndex = {
  indexValue: 70.9,
  momChange: -0.8,
  yoyChange: -0.4,
  period: "January 2026",
  source: "NAR Pending Home Sales Report (released Feb 19, 2026)",
  sourceUrl: "https://www.nar.realtor/newsroom/nar-pending-home-sales-report-shows-0-8-decrease-in-january",
  regional: [
    { region: "Northeast", trend: "down", notes: "MoM decline" },
    { region: "Midwest", trend: "up", notes: "MoM increase" },
    { region: "South", trend: "down", notes: "MoM decline; YoY up" },
    { region: "West", trend: "up", notes: "MoM increase; YoY up" },
  ],
  notes:
    "Lowest level in series history (70.9). Significantly worse than expected 1.4% growth. " +
    "NAR Chief Economist Yun: 'Improving affordability conditions have yet to induce more buying activity.' " +
    "With rates near 6%, an additional 5.5M households could now qualify vs one year ago. " +
    "Next release: February 2026 data on March 17, 2026.",
};

// MBA Mortgage Application Index
export interface MortgageApplicationData {
  period: string;
  compositeIndexChange: number; // WoW percent
  purchaseIndexChange: number;
  refinanceIndexChange: number;
  refinanceShareOfTotal: number;
  refinanceYoYChange: number;
  purchaseYoYChange: number;
  avgRate30yrFixed: number;
  source: string;
  sourceUrl: string;
  notes: string;
}

export const mortgageApplicationData: MortgageApplicationData[] = [
  {
    period: "Week ending Feb 20, 2026",
    compositeIndexChange: 0.4,
    purchaseIndexChange: -5.0,
    refinanceIndexChange: 4.0,
    refinanceShareOfTotal: 58.6,
    refinanceYoYChange: 150,
    purchaseYoYChange: 12,
    avgRate30yrFixed: 6.09,
    source: "MBA Weekly Mortgage Applications Survey",
    sourceUrl: "https://www.mba.org/news-and-research/newsroom/news/2026/02/25/mortgage-applications-increase-in-latest-mba-weekly-survey",
    notes:
      "Refi applications surging — 150% higher than same week one year ago, reflecting rate drops. " +
      "Purchase applications down 5% WoW but up 12% YoY. " +
      "Refi share at 58.6%, reflecting dominant refinancing activity.",
  },
  {
    period: "Week ending Feb 13, 2026",
    compositeIndexChange: 2.8,
    purchaseIndexChange: -3.0,
    refinanceIndexChange: 7.0,
    refinanceShareOfTotal: 57.4,
    refinanceYoYChange: 130,
    purchaseYoYChange: 8,
    avgRate30yrFixed: 6.17,
    source: "MBA Weekly Mortgage Applications Survey",
    sourceUrl: "https://www.mba.org/news-and-research/newsroom/news/2026/02/11/mortgage-applications-decrease-in-latest-mba-weekly-survey",
    notes: "Refinance demand jumped 7%, insufficient new supply driving purchase buyers to sidelines.",
  },
  {
    period: "Week ending Feb 6, 2026",
    compositeIndexChange: -0.3,
    purchaseIndexChange: -2.0,
    refinanceIndexChange: 1.0,
    refinanceShareOfTotal: 55.8,
    refinanceYoYChange: 101,
    purchaseYoYChange: 5,
    avgRate30yrFixed: 6.21,
    source: "MBA Weekly Mortgage Applications Survey",
    sourceUrl: "https://www.mba.org/news-and-research/newsroom/news/2026/02/11/mortgage-applications-decrease-in-latest-mba-weekly-survey",
    notes: "Slight decline. 30yr rate held at 6.21%.",
  },
];

export const mortgageAffordabilitySnapshot = {
  medianPaymentAppliedFor: 2_070,
  medianPurchaseAmount: 332_000,
  period: "January 2026",
  priorMonthPayment: 2_025,
  priorMonthPurchaseAmount: 320_000,
  source: "MBA PAPI Report (Feb 2026)",
  notes:
    "Homebuyer affordability declined in January despite lower rates, " +
    "as the median purchase application amount rose from $320K to $332K.",
} as const;

// National Existing Home Inventory
export const nationalInventoryTrends = {
  totalActiveListings: 1_180_000,
  activeListingsYoYChange: 10.0,
  period: "January 2026",
  statesAbovePrePandemicLevels: [
    "Arizona",
    "Colorado",
    "Florida",
    "Idaho",
    "Nebraska",
    "Tennessee",
    "Texas",
    "Utah",
    "Washington",
  ] as const,
  statesAbovePrePandemicCount: 9,
  source: "ResiClub Analytics / NAR",
  sourceUrl: "https://www.resiclubanalytics.com/p/state-inventory-update-housing-market-february-2026",
  notes:
    "National active inventory grew 10.0% YoY through January 2026. " +
    "Growth is slowing compared to mid-2025 pace. " +
    "Sun Belt markets (FL, TX, AZ) seeing the largest inventory recoveries. " +
    "Northeast and Midwest remain significantly below pre-pandemic levels.",
} as const;

// -----------------------------------------------------------------------------
// 4. STATE-LEVEL CALIFORNIA DATA
// -----------------------------------------------------------------------------

// C.A.R. Statewide Overview
export interface CaliforniaMarketOverview {
  medianHomePrice: number;
  medianHomePriceYoY: number;
  period: string;
  forecastMedianPrice2026: number;
  forecastPriceChangeYoY: number;
  existingHomeSales2025: number; // annual units
  forecastSales2026: number;
  forecastSalesChangeYoY: number;
  housingAffordabilityIndex: number; // percent who can afford median
  incomeRequiredForMedian: number;
  medianHouseholdIncome: number;
  pctMortgagesUnder5Pct: number;
  monthsOfSupply: number;
  activeListings: number;
  activeListingsYoYChange: number;
  avgMortgageRate30yr: number;
  source: string;
  sourceUrl: string;
  notes: string;
}

export const californiaMarketOverview: CaliforniaMarketOverview = {
  medianHomePrice: 850_680,
  medianHomePriceYoY: -1.2,
  period: "December 2025",
  forecastMedianPrice2026: 905_000,
  forecastPriceChangeYoY: 3.6,
  existingHomeSales2025: 269_000,
  forecastSales2026: 274_400,
  forecastSalesChangeYoY: 2.0,
  housingAffordabilityIndex: 18,
  incomeRequiredForMedian: 222_000,
  medianHouseholdIncome: 100_600,
  pctMortgagesUnder5Pct: 80,
  monthsOfSupply: 3.2,
  activeListings: 85_943,
  activeListingsYoYChange: -2.4,
  avgMortgageRate30yr: 6.35,
  source: "California Association of REALTORS (C.A.R.)",
  sourceUrl: "https://www.car.org/aboutus/mediacenter/newsreleases/2025releases/2026forecast",
  notes:
    "Statewide median fell 1.2% YoY to $850,680 in December 2025, but C.A.R. forecasts " +
    "a recovery to a record $905,000 in 2026 (+3.6%). " +
    "82% of California households cannot afford the median home. " +
    "80% of homeowners locked in at rates below 5% — 'golden handcuff' effect. " +
    "2025 sales essentially flat at 269K, still 27% below pre-pandemic 2019 levels. " +
    "C.A.R. Chief Economist Jordan Levine: economic uncertainty clearing and mortgage rates " +
    "declining should improve housing sentiment, but tariffs, insurance crisis, and " +
    "stock market volatility remain headwinds.",
};

// California Housing Affordability by Region
export interface CaliforniaAffordabilityData {
  region: string;
  affordabilityIndex: number;
  period: string;
  incomeRequired: number | null;
  source: string;
}

export const californiaAffordabilityByRegion: CaliforniaAffordabilityData[] = [
  { region: "California (statewide)", affordabilityIndex: 18, period: "Q4 2025", incomeRequired: 222_000, source: "C.A.R." },
  { region: "Bay Area", affordabilityIndex: 21, period: "Q4 2025", incomeRequired: 321_000, source: "C.A.R." },
  { region: "San Mateo County", affordabilityIndex: 12, period: "Q4 2025", incomeRequired: 500_000, source: "C.A.R. / LAO" },
  { region: "Southern California", affordabilityIndex: 16, period: "Q4 2025", incomeRequired: 235_000, source: "C.A.R." },
  { region: "Central Valley", affordabilityIndex: 28, period: "Q4 2025", incomeRequired: 140_000, source: "C.A.R." },
  { region: "Inland Empire", affordabilityIndex: 22, period: "Q4 2025", incomeRequired: 175_000, source: "C.A.R." },
];

export const californiaAffordabilityTrend = {
  q4_2024: 16,
  q1_2025: 16,
  q2_2025: 17,
  q3_2025: 17,
  q4_2025: 18,
  historicalPeak: { value: 56, period: "Q4 2012" },
  source: "C.A.R. Housing Affordability Index",
  sourceUrl: "https://www.livingincalifornia.com/california-housing-affordability-hits-18-percent-car-data-2026/",
  notes:
    "First genuine improvement in years. Income required to buy median home " +
    "has exceeded $200K for 12 of the past 13 quarters.",
} as const;

// Top 10 CA Metro Areas by Median Home Price
export interface CaliforniaMetroPrice {
  metro: string;
  county: string;
  medianPrice: number;
  yoyChange: number;
  period: string;
  incomeRequiredToBuy: number | null;
  source: string;
  notes: string;
}

export const topCaliforniaMetrosByPrice: CaliforniaMetroPrice[] = [
  {
    metro: "San Mateo",
    county: "San Mateo",
    medianPrice: 2_000_000,
    yoyChange: -8.8,
    period: "November 2025",
    incomeRequiredToBuy: 500_000,
    source: "C.A.R.",
    notes: "Arguably the least affordable county in the nation. Buying requires income over $500K/yr.",
  },
  {
    metro: "Santa Clara (San Jose/Silicon Valley)",
    county: "Santa Clara",
    medianPrice: 1_935_250,
    yoyChange: 0.2,
    period: "November 2025",
    incomeRequiredToBuy: 420_000,
    source: "C.A.R.",
    notes: "Essentially flat YoY. Down 3.5% by Jan 2026 per Redfin. Tech layoffs tempering demand.",
  },
  {
    metro: "San Francisco",
    county: "San Francisco",
    medianPrice: 1_800_000,
    yoyChange: 12.6,
    period: "November 2025",
    incomeRequiredToBuy: 321_000,
    source: "C.A.R.",
    notes: "Strong rebound after 2023-2024 weakness. Tight supply (1.2 months). Down 5.9% MoM in Dec.",
  },
  {
    metro: "Marin",
    county: "Marin",
    medianPrice: 1_575_000,
    yoyChange: 2.4,
    period: "Late 2025",
    incomeRequiredToBuy: 350_000,
    source: "C.A.R. / Redfin",
    notes: "Steady appreciation. Fireman's Fund campus conversion (1,300 homes) could shift supply dynamics.",
  },
  {
    metro: "Bay Area (composite)",
    county: "Multi-county",
    medianPrice: 1_200_000,
    yoyChange: -5.9,
    period: "December 2025",
    incomeRequiredToBuy: 321_000,
    source: "C.A.R.",
    notes: "Composite dropped 5.9% MoM in December. Sales volume fell 9.3%. Only 21% can afford.",
  },
  {
    metro: "Alameda (Oakland/Berkeley)",
    county: "Alameda",
    medianPrice: 1_192_500,
    yoyChange: -7.2,
    period: "November 2025",
    incomeRequiredToBuy: 280_000,
    source: "C.A.R.",
    notes: "Significant decline. January 2026 showed 11 counties at $1M+ including Alameda.",
  },
  {
    metro: "Orange County",
    county: "Orange",
    medianPrice: 1_150_000,
    yoyChange: 1.8,
    period: "Late 2025",
    incomeRequiredToBuy: 270_000,
    source: "C.A.R. / KTLA",
    notes: "Joined the million-dollar club. Steady demand from job growth and lifestyle factors.",
  },
  {
    metro: "San Diego",
    county: "San Diego",
    medianPrice: 1_000_000,
    yoyChange: 2.6,
    period: "December 2025",
    incomeRequiredToBuy: 235_000,
    source: "C.A.R. / Redfin",
    notes: "Just crossed the $1M mark in December 2025. First time at this threshold.",
  },
  {
    metro: "Santa Barbara",
    county: "Santa Barbara",
    medianPrice: 1_050_000,
    yoyChange: 3.2,
    period: "Late 2025",
    incomeRequiredToBuy: 248_000,
    source: "C.A.R. / KTLA",
    notes: "Joined the million-dollar club alongside Mono and Napa counties.",
  },
  {
    metro: "Los Angeles",
    county: "Los Angeles",
    medianPrice: 943_000,
    yoyChange: -2.4,
    period: "December 2025",
    incomeRequiredToBuy: 224_000,
    source: "C.A.R. / KTLA",
    notes:
      "Sales soared 20.2% MoM in December despite annual price decline. " +
      "New-home closings and starts down 30% and 24% respectively — lowest since mid-2012.",
  },
];

export const millionDollarCounties2026 = {
  count: 11,
  period: "January 2026",
  priorYearCount: 9,
  counties: [
    "Alameda",
    "Marin",
    "Mono",
    "Napa",
    "Orange",
    "San Diego",
    "San Francisco",
    "San Mateo",
    "Santa Barbara",
    "Santa Clara",
    "Santa Cruz",
  ] as const,
  newAdditions: ["Mono", "Napa"],
  source: "KTLA / C.A.R.",
  sourceUrl: "https://ktla.com/news/california/california-home-prices-january-2026/",
} as const;

// California Sales Volume
export interface CaliforniaSalesVolume {
  year: number;
  existingSFHomesSold: number;
  yoyChange: number;
  source: string;
  notes: string;
}

export const californiaSalesVolume: CaliforniaSalesVolume[] = [
  { year: 2019, existingSFHomesSold: 370_000, yoyChange: 0, source: "C.A.R.", notes: "Pre-pandemic baseline." },
  { year: 2020, existingSFHomesSold: 380_000, yoyChange: 2.7, source: "C.A.R.", notes: "Pandemic boom began." },
  { year: 2021, existingSFHomesSold: 444_000, yoyChange: 16.8, source: "C.A.R.", notes: "Peak pandemic-era sales." },
  { year: 2022, existingSFHomesSold: 318_000, yoyChange: -28.4, source: "C.A.R.", notes: "Rate shock — steep decline." },
  { year: 2023, existingSFHomesSold: 258_000, yoyChange: -18.9, source: "C.A.R.", notes: "Multi-decade low." },
  { year: 2024, existingSFHomesSold: 269_030, yoyChange: 4.3, source: "C.A.R. / ATTOM", notes: "Modest recovery." },
  { year: 2025, existingSFHomesSold: 269_000, yoyChange: 0.0, source: "C.A.R.", notes: "Essentially flat. Still 27% below 2019." },
  { year: 2026, existingSFHomesSold: 274_400, yoyChange: 2.0, source: "C.A.R. forecast", notes: "Forecast: 2% increase. $905K median projected." },
];

// California Housing Legislation Summary (2025-2026)
export interface CaliforniaLegislation {
  billNumber: string;
  title: string;
  category: string;
  status: "signed" | "effective" | "pending" | "two-year-bill";
  effectiveDate: string;
  summary: string;
  realtorImpact: string;
  source: string;
  sourceUrl: string;
}

export const californiaHousingLegislation: CaliforniaLegislation[] = [
  {
    billNumber: "AB 130 / SB 131",
    title: "CEQA Housing Exemption & Streamlining",
    category: "CEQA Reform",
    status: "signed",
    effectiveDate: "2025",
    summary:
      "Most significant CEQA housing reform in decades. AB 130 creates new CEQA exemption for " +
      "housing projects on 20 acres or less with expedited approval. SB 131 addresses 'near miss' " +
      "projects that fail a single condition, limiting review scope and waiving analysis of " +
      "alternatives, cumulative impacts, and growth-inducing effects.",
    realtorImpact:
      "Faster project approvals mean more inventory in the pipeline. Could add thousands " +
      "of housing units statewide over the next 3-5 years.",
    source: "Governor's Office / Holland & Knight",
    sourceUrl: "https://www.hklaw.com/en/insights/publications/2025/12/californias-2026-housing-laws-what-you-need-to-know",
  },
  {
    billNumber: "SB 79",
    title: "Transit-Oriented Development (TOD) Reform",
    category: "Zoning & Density",
    status: "signed",
    effectiveDate: "2026-07-01",
    summary:
      "Authored by Sen. Scott Wiener. Overrides local ordinances for TOD projects near major " +
      "transit stations. Requires 8 'urban transit counties' to adopt minimum zoning standards " +
      "allowing taller, denser housing with affordability and labor requirements near " +
      "qualified rail and bus rapid transit stops.",
    realtorImpact:
      "Major zoning changes near transit. Properties near rail/BRT stations may see " +
      "significant value increases. New development opportunities in transit corridors.",
    source: "Holland & Knight / KQED",
    sourceUrl: "https://www.kqed.org/news/12068746/2025-was-a-blockbuster-year-for-housing-laws-what-does-that-mean-for-2026",
  },
  {
    billNumber: "SB 786",
    title: "Housing Element Enforcement",
    category: "Housing Accountability",
    status: "signed",
    effectiveDate: "2026-01-01",
    summary:
      "Authored by Sen. Arreguín. Clarifies that the most recently adopted housing element controls " +
      "conflicting standards. Establishes consequences for local governments missing deadlines " +
      "and expedites judicial procedures for housing element cases.",
    realtorImpact:
      "Stronger enforcement tools. Cities face real penalties for blocking housing development. " +
      "Greater certainty for developers and agents working with new construction.",
    source: "Holland & Knight",
    sourceUrl: "https://www.hklaw.com/en/insights/publications/2025/12/californias-2026-housing-laws-what-you-need-to-know",
  },
  {
    billNumber: "AB 712",
    title: "Housing Reform Enforcement (Attorney's Fees)",
    category: "Housing Accountability",
    status: "signed",
    effectiveDate: "2026-01-01",
    summary:
      "Entitles housing development applicants to reasonable attorney's fees and costs " +
      "if a public agency violates housing reform laws.",
    realtorImpact:
      "Creates financial incentive for developers to challenge illegal project denials. " +
      "Should reduce local government obstruction of approved housing developments.",
    source: "Brownstein",
    sourceUrl: "https://www.bhfs.com/insight/whats-new-in-california-housing-law-an-overview-of-the-latest-signed-bills/",
  },
  {
    billNumber: "AB 462",
    title: "Coastal ADU Streamlining",
    category: "ADU",
    status: "effective",
    effectiveDate: "2025-10-10",
    summary:
      "Urgency measure taking immediate effect. Requires local agencies with Certified Local " +
      "Coastal Programs to approve or deny ADU Coastal Development Permit applications within " +
      "60 days. Eliminates appeals to the Coastal Commission.",
    realtorImpact:
      "Major win for coastal property owners wanting to add ADUs. Removes a significant " +
      "bureaucratic barrier in coastal zones.",
    source: "Governor's Office",
    sourceUrl: "https://www.gov.ca.gov/2025/10/10/governor-newsom-builds-on-this-years-historic-housing-reforms-signs-legislation-to-accelerate-housing-and-affordability/",
  },
  {
    billNumber: "SB 543",
    title: "ADU Application Review Timelines",
    category: "ADU",
    status: "signed",
    effectiveDate: "2026-01-01",
    summary:
      "Requires local agencies to review ADU/JADU applications for completeness within " +
      "15 business days, review resubmissions within 15 business days, and provide " +
      "written appeal processes.",
    realtorImpact:
      "Faster, more predictable ADU approval timelines for homeowner clients.",
    source: "Holland & Knight",
    sourceUrl: "https://www.hklaw.com/en/insights/publications/2025/12/californias-2026-housing-laws-what-you-need-to-know",
  },
  {
    billNumber: "AB 920",
    title: "Online Development Application Portals",
    category: "Permit Streamlining",
    status: "signed",
    effectiveDate: "2026-01-01",
    summary:
      "Requires cities and counties with populations of 150,000+ to create centralized online " +
      "portals for housing development applications with online submittal and status tracking.",
    realtorImpact:
      "Greater transparency into project pipeline. Agents can track new development " +
      "status more easily for client advisory.",
    source: "Brownstein / Fennemore",
    sourceUrl: "https://www.fennemorelaw.com/legislative-update-california-adopts-new-housing-laws/",
  },
  {
    billNumber: "SB 625",
    title: "Disaster Recovery Housing Streamlining",
    category: "Disaster Recovery",
    status: "signed",
    effectiveDate: "2026-01-01",
    summary:
      "Creates streamlined 90-day approval process for housing on disaster-damaged sites. " +
      "Invalidates local ordinances restricting temporary housing (e.g., mobile homes) " +
      "post-disaster for 3 years.",
    realtorImpact:
      "Critical for wildfire-affected areas. Faster rebuilding means fewer displaced " +
      "families competing in an already tight market.",
    source: "Holland & Knight",
    sourceUrl: "https://www.hklaw.com/en/insights/publications/2025/12/californias-2026-housing-laws-what-you-need-to-know",
  },
  {
    billNumber: "SB 840",
    title: "Affordable Housing Funding (Cap-and-Invest)",
    category: "Affordable Housing",
    status: "signed",
    effectiveDate: "2026",
    summary:
      "Authored by Sen. Gonzalez. Reauthorizes the Cap-and-Invest program and allocates " +
      "$800 million annually for the Affordable Housing and Sustainable Communities Program.",
    realtorImpact:
      "Major new funding source for affordable housing projects. Could help ease price " +
      "pressure at the lower end of the market.",
    source: "Legislature / CSAC",
    sourceUrl: "https://www.counties.org/news-and-media-article/2025-26-legislative-session-key-developments-in-housing-land-use-and-transportation-policy-area/",
  },
  {
    billNumber: "Affordable Rent Act",
    title: "Statewide Rent Control Expansion",
    category: "Rent Control",
    status: "two-year-bill",
    effectiveDate: "TBD (2026 session)",
    summary:
      "Would expand the 2019 Tenant Protection Act to more renters, lower allowable " +
      "annual rent increases, and make changes permanent by removing the 2030 sunset date. " +
      "Became a two-year bill after heavy opposition.",
    realtorImpact:
      "If passed, would significantly affect investor calculus for rental properties. " +
      "Key bill to watch in 2026 legislative session.",
    source: "KQED / CalMatters",
    sourceUrl: "https://www.kqed.org/news/12068746/2025-was-a-blockbuster-year-for-housing-laws-what-does-that-mean-for-2026",
  },
];

export const californiaLegislationSummary = {
  asOf: "2026-03-04",
  headline:
    "2025 was a landmark year for California housing legislation — " +
    "most significant CEQA reform in decades, major TOD expansion, and streamlined permitting.",
  keyThemes: [
    "CEQA reform: AB 130 & SB 131 create the most significant housing exemptions in the law's history",
    "Transit-oriented development: SB 79 mandates taller, denser housing near transit (effective July 2026)",
    "ADU acceleration: Multiple bills streamlining coastal ADUs, review timelines, and design flexibility",
    "Enforcement teeth: AB 712 and SB 786 create real consequences for cities blocking development",
    "Disaster recovery: SB 625 and SB 676 streamline post-wildfire rebuilding",
    "Affordable housing funding: $800M annually via SB 840 Cap-and-Invest reauthorization",
    "Rent control expansion pending: Affordable Rent Act carried over as a two-year bill",
  ],
  expertQuote: {
    speaker: "Matt Lewis, California YIMBY",
    quote: "2025 was a landmark year on the substance.",
    source: "KQED",
  },
} as const;

// -----------------------------------------------------------------------------
// 5. KEY DATA RELEASE CALENDAR (Upcoming as of March 4, 2026)
// -----------------------------------------------------------------------------

export interface DataRelease {
  report: string;
  releaseDate: string;
  dataPeriod: string;
  source: string;
  notes: string;
}

export const upcomingDataReleases: DataRelease[] = [
  {
    report: "NAR Existing Home Sales (February 2026)",
    releaseDate: "2026-03-10",
    dataPeriod: "February 2026",
    source: "NAR",
    notes: "Key watch: Will January's sharp 8.4% decline reverse?",
  },
  {
    report: "FOMC Meeting + SEP + Dot Plot",
    releaseDate: "2026-03-18",
    dataPeriod: "March 2026 decision",
    source: "Federal Reserve",
    notes: "Updated economic projections and interest rate path. ~94% hold probability.",
  },
  {
    report: "NAR Pending Home Sales (February 2026)",
    releaseDate: "2026-03-17",
    dataPeriod: "February 2026",
    source: "NAR",
    notes: "After January's historic low of 70.9, any improvement would be significant.",
  },
  {
    report: "New Residential Construction (January 2026)",
    releaseDate: "2026-03-24",
    dataPeriod: "January 2026",
    source: "Census Bureau",
    notes: "Housing starts and building permits.",
  },
  {
    report: "S&P Case-Shiller Home Price Index (January 2026)",
    releaseDate: "2026-03-31",
    dataPeriod: "January 2026",
    source: "S&P Global / FRED",
    notes: "Following weakest annual gain since 2011.",
  },
];

// -----------------------------------------------------------------------------
// NATIONAL MARKET SUMMARY
// -----------------------------------------------------------------------------

export const nationalMarketSummary = {
  asOf: "2026-03-04",
  headline: "National Market in Transition: Slowing Appreciation, Improving Affordability, Persistent Supply Gap",
  keyMetrics: {
    nationalMedianPrice: 396_800,
    caseShillerNationalYoY: 1.3,
    existingHomeSalesSAAR: 3.91, // millions
    monthsOfSupply: 3.7,
    thirtyYearMortgageRate: 5.87,
    fedFundsRate: "3.50%-3.75%",
    tenYearTreasuryYield: 4.08,
    nahbBuilderConfidence: 36,
    pendingHomeSalesIndex: 70.9,
    homeownershipRate: 65.7,
    housingStarts: 1_404, // thousands SAAR
  },
  topTrends: [
    "Case-Shiller national index posted just 1.3% annual gain — weakest since 2011 and 5.3 points below the 10-year average",
    "Sharp geographic divergence: Chicago (+5.3%) and New York (+5.1%) leading while Tampa (-2.9%) and Denver (-2.1%) declining",
    "Pending home sales hit record low of 70.9 in January despite most affordable conditions since March 2022",
    "Existing home sales fell 8.4% in January to 3.91M SAAR — weather and persistent supply constraints cited",
    "Fed holding at 3.50%-3.75% with 94% probability of hold at March meeting; next cut priced for September",
    "10-Year Treasury at 4.08% — Iran conflict and tariffs creating upward pressure on yields",
    "Mortgage rates at ~5.87-6.09% depending on source — lowest since Sep 2022 but still 2x pandemic lows",
    "Refinance applications surging 150% YoY while purchase applications lag — classic rate-transition pattern",
    "Builder confidence at 36, 22nd consecutive month below breakeven — 36% cutting prices, 65% offering incentives",
    "National inventory up 10% YoY but still below balanced market threshold; 9 states above pre-pandemic levels",
    "California median forecast to hit record $905K in 2026; 82% of households still cannot afford median home",
    "2025 was a landmark year for CA housing legislation — most significant CEQA reform in decades",
  ],
  outlook:
    "The national housing market is at a crossroads. Affordability is improving (best since March 2022) " +
    "but failing to generate meaningful sales activity. Geopolitical risks (Iran, tariffs) are complicating " +
    "the Fed's path, keeping Treasury yields elevated and delaying rate cuts. The disconnect between " +
    "pending home sales (historic low) and affordability improvement (best in 4 years) suggests " +
    "significant pent-up demand that could unleash if rates break decisively below 6%. " +
    "Watch the March 18 FOMC meeting for updated rate projections, and the March 10 existing home " +
    "sales report for signs of whether January's sharp decline was weather-related or structural.",
} as const;
