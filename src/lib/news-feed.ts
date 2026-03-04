export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  category: "legislation" | "market" | "rates" | "development" | "policy";
  impact: "high" | "medium" | "low";
  date: string;
  source: string;
  actionItems: string[];
}

export interface CompetitiveInsight {
  id: string;
  title: string;
  metric: string;
  value: string;
  trend: "up" | "down" | "stable";
  context: string;
  advantage: string;
}

export const newsFeed: NewsItem[] = [
  {
    id: "1",
    title: "California AB 1033 — ADU Sales Now Legal",
    summary:
      "Governor signed AB 1033, allowing homeowners to sell accessory dwelling units (ADUs) as condos. This opens a new class of affordable housing inventory in Oakland and creates opportunities for homeowners to monetize backyard units.",
    category: "legislation",
    impact: "high",
    date: "2026-02-28",
    source: "California Legislature",
    actionItems: [
      "Review ADU-eligible properties in your pipeline",
      "Consider ADU conversion as a selling point for larger lots",
      "Update buyer clients on new condo-style ADU inventory",
    ],
  },
  {
    id: "2",
    title: "Fed Holds Rates Steady at 4.25-4.50%",
    summary:
      "The Federal Reserve maintained the federal funds rate at 4.25-4.50% at its March meeting, signaling patience amid mixed economic data. Mortgage rates remain near 6.5%, with modest downward pressure expected in Q2.",
    category: "rates",
    impact: "high",
    date: "2026-03-01",
    source: "Federal Reserve",
    actionItems: [
      "Reassure buyers that rates are stabilizing — now is a good time to lock",
      "Share rate comparison data showing 6.5% is historically moderate",
      "Emphasize: waiting for lower rates means competing with more buyers",
    ],
  },
  {
    id: "3",
    title: "Oakland Approves Massive Howard Terminal Project",
    summary:
      "Oakland City Council gave final approval for the Howard Terminal mixed-use development on the waterfront. The $12B project includes 3,000+ housing units, a ballpark, office space, and retail. Construction begins 2027.",
    category: "development",
    impact: "high",
    date: "2026-02-20",
    source: "Oakland City Council",
    actionItems: [
      "Jack London Square and West Oakland properties will appreciate — flag to investors",
      "Create content about waterfront development impact on values",
      "Share timeline with clients interested in the area",
    ],
  },
  {
    id: "4",
    title: "Alameda County Property Tax Reassessment Notices",
    summary:
      "Annual reassessment notices are going out in April. Under Prop 13, assessed values increase max 2% annually, but recent sales may trigger significant reassessments for new purchasers. Important for buyer education.",
    category: "policy",
    impact: "medium",
    date: "2026-02-15",
    source: "Alameda County Assessor",
    actionItems: [
      "Prepare property tax explainer for new buyer clients",
      "Calculate estimated property tax for active listings",
      "Remind sellers: Prop 13 protection transfers to qualified buyers (Prop 19)",
    ],
  },
  {
    id: "5",
    title: "Oakland Rent Ordinance Update — CPI Adjustment 3.2%",
    summary:
      "Oakland's annual rent adjustment for 2026 is set at 3.2% (based on CPI). Landlords of units built before 1983 may increase rent by this amount starting July 1. Important for investment property clients.",
    category: "policy",
    impact: "medium",
    date: "2026-02-10",
    source: "Oakland Rent Adjustment Program",
    actionItems: [
      "Update investor clients on allowable rent increases",
      "Factor into cap rate calculations for multi-family listings",
      "Note: newer units (post-1983) are exempt from rent control",
    ],
  },
  {
    id: "6",
    title: "Bay Area Median Home Price Hits $1.2M — Oakland Still Affordable",
    summary:
      "The Bay Area median home price reached $1.2M in February, with SF at $1.5M and Oakland at $1.05M. Oakland remains the most affordable major city in the Bay Area, attracting price-conscious buyers from SF and the Peninsula.",
    category: "market",
    impact: "medium",
    date: "2026-02-25",
    source: "California Association of Realtors",
    actionItems: [
      "Use this data in listing presentations — Oakland is a value play",
      "Share on social media to attract SF buyers",
      "Update market comparison slides",
    ],
  },
  {
    id: "7",
    title: "SB 9 Lot Split Activity Increasing in Oakland Hills",
    summary:
      "California's SB 9, which allows lot splits on single-family parcels, is seeing increased activity in Oakland Hills neighborhoods. Montclair and Claremont lots are prime candidates for splitting into two parcels.",
    category: "legislation",
    impact: "medium",
    date: "2026-02-05",
    source: "Oakland Planning Department",
    actionItems: [
      "Identify large lots in Montclair/Claremont that qualify for SB 9 splits",
      "Offer lot split analysis as a value-add for seller clients",
      "Connect with architects who specialize in SB 9 projects",
    ],
  },
  {
    id: "8",
    title: "BART Second Transbay Tube Advances — Oakland Impact",
    summary:
      "BART's second Transbay Tube project received $2.5B in federal funding. The new tube will dramatically improve Oakland-SF connectivity and is expected to boost property values along the corridor by 10-15% when completed in 2035.",
    category: "development",
    impact: "low",
    date: "2026-01-30",
    source: "BART Board of Directors",
    actionItems: [
      "Long-term value play for properties near BART stations",
      "Share with investors looking at 5-10 year holds",
      "West Oakland and Lake Merritt areas stand to benefit most",
    ],
  },
];

export const competitiveInsights: CompetitiveInsight[] = [
  {
    id: "1",
    title: "Days on Market vs. Market Average",
    metric: "Avg Days on Market",
    value: "18 days",
    trend: "down",
    context: "Oakland average is 21 days. Top agents average 16 days.",
    advantage:
      "Nasim's listings sell 14% faster than the Oakland average, driven by strategic pricing and aggressive marketing.",
  },
  {
    id: "2",
    title: "Sale-to-List Price Ratio",
    metric: "Avg Sale/List",
    value: "106.3%",
    trend: "up",
    context: "Oakland average is 104.7%. Top agents achieve 105-108%.",
    advantage:
      "Nasim's sellers consistently receive 6.3% above asking — that's $66K more on a $1M home compared to list price.",
  },
  {
    id: "3",
    title: "Client Satisfaction Score",
    metric: "Rating",
    value: "4.9/5.0",
    trend: "stable",
    context: "Industry average is 4.2/5.0. Top agents score 4.7+.",
    advantage:
      "Nasim's 4.9 rating and 72% referral rate place her in the top 2% of Oakland agents for client satisfaction.",
  },
  {
    id: "4",
    title: "Inventory Knowledge",
    metric: "Neighborhoods Covered",
    value: "12 of 12",
    trend: "stable",
    context: "Most agents specialize in 2-3 neighborhoods.",
    advantage:
      "Full Oakland coverage means Nasim can match clients to their ideal neighborhood rather than just what she knows.",
  },
  {
    id: "5",
    title: "Multiple Offer Rate",
    metric: "Listings w/ Multiple Offers",
    value: "87%",
    trend: "up",
    context: "Oakland average is 62% of listings receiving multiple offers.",
    advantage:
      "Nasim's marketing and pricing strategy generates competitive bidding on nearly 9 out of 10 listings.",
  },
];

export const getHighImpactNews = (): NewsItem[] => {
  return newsFeed.filter((n) => n.impact === "high");
};

export const getNewsByCategory = (category: NewsItem["category"]): NewsItem[] => {
  return newsFeed.filter((n) => n.category === category);
};
