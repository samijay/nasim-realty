import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, TrendingDown, ArrowRight, BarChart3 } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import {
  marketOverview,
  neighborhoodMarketData,
  marketCommentary,
  getMaxPrice,
} from "@/lib/market-data";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Oakland Market Insights",
  description:
    "Oakland real estate market data and trends. Median prices, days on market, and neighborhood comparisons updated quarterly.",
};

export default function MarketInsightsPage() {
  const maxPrice = getMaxPrice();

  return (
    <>
      <PageHero
        title="Oakland Market Insights"
        subtitle="Data-driven analysis to help you make confident real estate decisions"
      />

      {/* Overview Stats */}
      <section className="border-b border-border bg-card py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {marketOverview.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </p>
                <p
                  className={`text-xs font-medium mt-1 flex items-center justify-center gap-1 ${
                    stat.change > 0 ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {stat.change > 0 ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {stat.change > 0 ? "+" : ""}
                  {stat.change}% {stat.changeLabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commentary */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-xl border border-border bg-card p-8">
              <h2 className="text-2xl font-bold text-foreground">
                {marketCommentary.title}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {marketCommentary.summary}
              </p>

              <h3 className="mt-8 text-lg font-semibold text-foreground">
                Key Takeaways
              </h3>
              <ul className="mt-3 space-y-2">
                {marketCommentary.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-lg bg-muted p-6">
                <p className="text-sm font-semibold text-foreground mb-2">
                  Nasim&apos;s Outlook
                </p>
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  &ldquo;{marketCommentary.outlook}&rdquo;
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Neighborhood Price Comparison */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              title="Neighborhood Price Comparison"
              subtitle="Median home prices and market activity across Oakland"
            />
          </AnimatedSection>

          {/* Visual bar chart */}
          <AnimatedSection>
            <div className="space-y-4">
              {neighborhoodMarketData
                .sort((a, b) => b.medianPrice - a.medianPrice)
                .map((data) => {
                  const barWidth = (data.medianPrice / maxPrice) * 100;
                  return (
                    <div key={data.neighborhood} className="group">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="font-medium text-foreground">
                          {data.neighborhood}
                        </span>
                        <span className="text-muted-foreground">
                          {formatPrice(data.medianPrice)}
                        </span>
                      </div>
                      <div className="relative h-8 rounded-lg bg-card border border-border overflow-hidden">
                        <div
                          className="absolute inset-y-0 left-0 rounded-lg bg-gradient-to-r from-primary to-primary-light transition-all duration-700 group-hover:opacity-90"
                          style={{ width: `${barWidth}%` }}
                        />
                        <div className="absolute inset-y-0 right-2 flex items-center gap-2 text-xs">
                          <span
                            className={`font-medium ${
                              data.priceChange > 0
                                ? "text-green-600"
                                : "text-red-500"
                            }`}
                          >
                            {data.priceChange > 0 ? "+" : ""}
                            {data.priceChange}%
                          </span>
                          <span className="text-muted-foreground">
                            {data.avgDaysOnMarket}d avg
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </AnimatedSection>

          {/* Data table */}
          <AnimatedSection className="mt-12">
            <div className="overflow-x-auto rounded-xl border border-border bg-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-4 py-3 text-left font-semibold text-foreground">
                      Neighborhood
                    </th>
                    <th className="px-4 py-3 text-right font-semibold text-foreground">
                      Median Price
                    </th>
                    <th className="px-4 py-3 text-right font-semibold text-foreground">
                      YoY Change
                    </th>
                    <th className="px-4 py-3 text-right font-semibold text-foreground">
                      Avg Days
                    </th>
                    <th className="px-4 py-3 text-right font-semibold text-foreground">
                      Inventory
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {neighborhoodMarketData
                    .sort((a, b) => b.medianPrice - a.medianPrice)
                    .map((data) => (
                      <tr
                        key={data.neighborhood}
                        className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                      >
                        <td className="px-4 py-3 font-medium text-foreground">
                          {data.neighborhood}
                        </td>
                        <td className="px-4 py-3 text-right text-muted-foreground">
                          {formatPrice(data.medianPrice)}
                        </td>
                        <td
                          className={`px-4 py-3 text-right font-medium ${
                            data.priceChange > 0
                              ? "text-green-600"
                              : "text-red-500"
                          }`}
                        >
                          {data.priceChange > 0 ? "+" : ""}
                          {data.priceChange}%
                        </td>
                        <td className="px-4 py-3 text-right text-muted-foreground">
                          {data.avgDaysOnMarket}
                        </td>
                        <td className="px-4 py-3 text-right text-muted-foreground">
                          {data.inventory}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <BarChart3 className="mx-auto h-12 w-12 text-primary mb-4" />
          <h2 className="text-3xl font-bold text-foreground">
            Want a Personalized Market Analysis?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Get a free, detailed analysis of your home&apos;s value or your
            target neighborhood&apos;s trends. No obligation.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-white hover:bg-primary-light transition-colors"
          >
            Request Free Analysis
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
