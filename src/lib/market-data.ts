import type { MarketStat, MarketNeighborhoodData } from "@/types";

export const marketOverview: MarketStat[] = [
  {
    label: "Median Home Price",
    value: "$1,050,000",
    change: 4.2,
    changeLabel: "vs last year",
    icon: "dollar-sign",
  },
  {
    label: "Average Days on Market",
    value: "21",
    change: -3,
    changeLabel: "vs last year",
    icon: "clock",
  },
  {
    label: "Homes Sold (2025)",
    value: "3,842",
    change: 8.1,
    changeLabel: "vs 2024",
    icon: "home",
  },
  {
    label: "Sale-to-List Ratio",
    value: "104.7%",
    change: 1.2,
    changeLabel: "vs last year",
    icon: "trending-up",
  },
];

export const neighborhoodMarketData: MarketNeighborhoodData[] = [
  { neighborhood: "Rockridge", medianPrice: 1450000, priceChange: 5.1, avgDaysOnMarket: 14, inventory: 12 },
  { neighborhood: "Temescal", medianPrice: 1150000, priceChange: 6.8, avgDaysOnMarket: 11, inventory: 8 },
  { neighborhood: "Montclair", medianPrice: 1650000, priceChange: 3.2, avgDaysOnMarket: 22, inventory: 15 },
  { neighborhood: "Lake Merritt", medianPrice: 850000, priceChange: 7.4, avgDaysOnMarket: 16, inventory: 18 },
  { neighborhood: "Jack London Square", medianPrice: 750000, priceChange: 9.1, avgDaysOnMarket: 19, inventory: 22 },
  { neighborhood: "Piedmont Avenue", medianPrice: 1250000, priceChange: 4.0, avgDaysOnMarket: 17, inventory: 9 },
  { neighborhood: "Fruitvale", medianPrice: 720000, priceChange: 8.5, avgDaysOnMarket: 13, inventory: 14 },
  { neighborhood: "Grand Lake", medianPrice: 950000, priceChange: 5.9, avgDaysOnMarket: 12, inventory: 11 },
  { neighborhood: "Claremont", medianPrice: 1800000, priceChange: 2.8, avgDaysOnMarket: 28, inventory: 7 },
  { neighborhood: "Dimond", medianPrice: 980000, priceChange: 7.2, avgDaysOnMarket: 15, inventory: 10 },
  { neighborhood: "Glenview", medianPrice: 1050000, priceChange: 4.5, avgDaysOnMarket: 18, inventory: 6 },
  { neighborhood: "Adams Point", medianPrice: 680000, priceChange: 6.3, avgDaysOnMarket: 20, inventory: 16 },
];

export const marketCommentary = {
  title: "East Bay Market Update — Q1 2026",
  summary:
    "The East Bay housing market continues to show resilience heading into 2026. Demand remains strong, especially in walkable neighborhoods near BART stations. The median home price has climbed 4.2% year-over-year to $1,050,000, driven by limited inventory and sustained buyer interest from tech workers and remote professionals choosing the East Bay over San Francisco.",
  highlights: [
    "Temescal and Fruitvale saw the strongest price growth, up 6.8% and 8.5% respectively",
    "Jack London Square leads in price appreciation at 9.1%, driven by new waterfront development",
    "Days on market dropped across the board — well-priced homes sell in under 2 weeks",
    "Montclair and Claremont remain the most expensive, but offer the best school ratings",
    "First-time buyer activity is up 12%, with condos in Adams Point and Lake Merritt leading demand",
  ],
  outlook:
    "Looking ahead, I expect the East Bay to remain competitive through 2026. With interest rates stabilizing and SF prices pushing more buyers east, the East Bay's blend of culture, transit access, and relative affordability will continue to attract diverse homebuyers. My advice: if you're thinking about buying, don't wait for the market to cool — focus on getting pre-approved and being ready to move quickly.",
};

export const getMaxPrice = (): number => {
  return Math.max(...neighborhoodMarketData.map((d) => d.medianPrice));
};
