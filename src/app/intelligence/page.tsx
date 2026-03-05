"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Scale,
  TrendingUp,
  TrendingDown,
  Award,
  Users,
  BookOpen,
  Calendar,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Building2,
  DollarSign,
  BarChart3,
  Landmark,
  FileText,
  ArrowRight,
  LayoutDashboard,
  Globe2,
  MapPin,
  Receipt,
  Home,
} from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { formatPrice } from "@/lib/utils";

import {
  caseShillerIndices,
  caseShillerMetroPerformance2025,
  narExistingHomeSalesHistory,
  narForecast2026,
  nationalAffordability,
  nationalMedianPrice,
  homeownershipRate,
  nationalMonthsOfSupply,
  fomcSchedule2026,
  fedFundsRateHistory,
  fedFundsRateSummary,
  tenYearTreasuryYield,
  cmeFedWatch,
  nahbBuilderConfidence,
  pendingHomeSalesIndex,
  californiaMarketOverview,
  californiaAffordabilityByRegion,
  topCaliforniaMetrosByPrice,
  millionDollarCounties2026,
  californiaSalesVolume,
  californiaHousingLegislation,
  californiaLegislationSummary,
  upcomingDataReleases,
  nationalMarketSummary,
} from "@/lib/national-market-data";

import {
  cityMarketData,
  currentMortgageRates,
  fedProjections,
  inventoryData,
  commissionData,
  nationalCommissionAvg,
  commissionByPriceRange,
  narSettlement,
  agentIncomeData,
  californiaAffordability,
  transactionVolume,
  techLayoffImpact,
  aduTrends,
  commercialToResidential,
  tariffImpact,
  caseStudies,
} from "@/lib/bay-area-market-research";

import {
  prop13Explainer,
  countyTaxRates,
  melloRoosInfo,
  supplementalTaxInfo,
  prop19Info,
  taxSavingsPrograms,
  taxExamples,
  propertyTaxCalendarDates,
  saltCapInfo,
  transferTaxRates,
} from "@/lib/property-taxes";

import {
  ab1482Info,
  localRentControlOrdinances,
  costaHawkinsInfo,
  keyTenantRights,
  recentAndUpcomingChanges,
  realtorGuidance,
  rentControlSummaryTable,
} from "@/lib/rent-control-data";

import {
  stateLegislation,
  localOrdinances,
  pendingLegislation,
  keyDates,
  categoryLabels,
  impactColors,
} from "@/lib/intelligence-legislation";
import type {
  Legislation,
  LegislationCategory,
  ImpactLevel,
} from "@/lib/intelligence-legislation";

import {
  certifications,
  influencers,
  industryResources,
} from "@/lib/intelligence-resources";

// ─── Tab Navigation ──────────────────────────────────────────────
const tabs = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "national", label: "National", icon: Globe2 },
  { id: "california", label: "California", icon: MapPin },
  { id: "bayarea", label: "Bay Area", icon: BarChart3 },
  { id: "rates", label: "Interest Rates", icon: TrendingUp },
  { id: "legislation", label: "Legislation", icon: Scale },
  { id: "taxes", label: "Property Taxes", icon: Receipt },
  { id: "rentcontrol", label: "Rent Control", icon: Home },
  { id: "economics", label: "Agent Economics", icon: DollarSign },
  { id: "resources", label: "Resources", icon: BookOpen },
] as const;

type TabId = (typeof tabs)[number]["id"];

// ─── Legislation Expandable Card ────────────────────────────────
const LegislationCard = ({ bill }: { bill: Legislation }) => {
  const [expanded, setExpanded] = useState(false);

  const statusIcon = {
    effective: <CheckCircle2 className="h-4 w-4 text-green-600" />,
    signed_into_law: <CheckCircle2 className="h-4 w-4 text-blue-600" />,
    pending: <Clock className="h-4 w-4 text-amber-600" />,
    defeated: <AlertTriangle className="h-4 w-4 text-red-600" />,
    signature_gathering: <Clock className="h-4 w-4 text-purple-600" />,
  };

  const statusLabel = {
    effective: "In Effect",
    signed_into_law: "Signed Into Law",
    pending: "Pending",
    defeated: "Defeated",
    signature_gathering: "Signature Gathering",
  };

  return (
    <div className="rounded-xl border border-border bg-card p-5 transition-all hover:shadow-md">
      <div
        className="flex cursor-pointer items-start justify-between gap-4"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-bold text-primary bg-primary/10 rounded-full px-2.5 py-0.5">
              {bill.billNumber}
            </span>
            <span
              className={`text-xs font-medium rounded-full px-2.5 py-0.5 ${impactColors[bill.impactLevel]}`}
            >
              {bill.impactLevel.toUpperCase()} IMPACT
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              {statusIcon[bill.status]}
              {statusLabel[bill.status]}
            </span>
          </div>
          <h3 className="text-base font-semibold text-foreground">
            {bill.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{bill.summary}</p>
        </div>
        <button className="mt-1 shrink-0 text-muted-foreground">
          {expanded ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
      </div>

      {expanded && (
        <div className="mt-4 space-y-3 border-t border-border pt-4">
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
              Key Provisions
            </h4>
            <ul className="space-y-1">
              {bill.keyProvisions.map((p, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
              Realtor Impact
            </h4>
            <p className="text-sm text-foreground">{bill.realtorImpact}</p>
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Effective: {bill.effectiveDate}</span>
            <a
              href={bill.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-primary hover:underline"
            >
              Source <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── Collapsible Section Helper ─────────────────────────────────
const CollapsibleSection = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-border bg-card">
      <button
        className="flex w-full items-center justify-between p-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <h3 className="font-semibold text-foreground">{title}</h3>
        {open ? (
          <ChevronUp className="h-5 w-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        )}
      </button>
      {open && <div className="px-5 pb-5 pt-0">{children}</div>}
    </div>
  );
};

// ─── Main Page ──────────────────────────────────────────────────
export default function IntelligencePage() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const [legFilter, setLegFilter] = useState<LegislationCategory | "all">(
    "all"
  );

  const filteredLegislation =
    legFilter === "all"
      ? stateLegislation
      : stateLegislation.filter((b) => b.category === legFilter);

  const highImpactCount = stateLegislation.filter(
    (b) => b.impactLevel === "high"
  ).length;

  return (
    <>
      <PageHero
        title="Real Estate Intelligence"
        subtitle="National market data, California trends, Bay Area analysis, legislation tracking, and professional resources — your comprehensive real estate command center"
      />

      {/* Quick Stats Bar */}
      <section className="border-b border-border bg-card py-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">
                {stateLegislation.length}
              </p>
              <p className="text-xs text-muted-foreground">
                Active Laws Tracked
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600">
                {highImpactCount}
              </p>
              <p className="text-xs text-muted-foreground">
                High-Impact Bills
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">
                {certifications.length}
              </p>
              <p className="text-xs text-muted-foreground">
                Certifications Tracked
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">
                {cityMarketData.length}
              </p>
              <p className="text-xs text-muted-foreground">
                Cities Monitored
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">
                {countyTaxRates.length}
              </p>
              <p className="text-xs text-muted-foreground">
                Counties Tracked
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-[73px] z-40 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-none">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {/* ─── OVERVIEW TAB ────────────────────────────────── */}
        {activeTab === "overview" && (
          <div className="space-y-12">
            <AnimatedSection>
              <SectionHeader
                title="Executive Dashboard"
                subtitle="Key metrics across national, state, and local markets"
              />
              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    National Median Price
                  </p>
                  <p className="text-2xl font-bold text-foreground mt-2">
                    {formatPrice(nationalMedianPrice.medianExistingHomePrice)}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span
                      className={
                        nationalMedianPrice.yoyChange > 0
                          ? "text-green-600"
                          : "text-red-500"
                      }
                    >
                      {nationalMedianPrice.yoyChange > 0 ? "+" : ""}
                      {nationalMedianPrice.yoyChange}% YoY
                    </span>{" "}
                    — {nationalMedianPrice.period}
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Case-Shiller YoY
                  </p>
                  <p className="text-2xl font-bold text-foreground mt-2">
                    +{nationalMarketSummary.keyMetrics.caseShillerNationalYoY}%
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Weakest since 2011
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    30-Year Mortgage
                  </p>
                  <p className="text-2xl font-bold text-foreground mt-2">
                    {currentMortgageRates.thirtyYearFixed}%
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    As of {currentMortgageRates.date}
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Fed Funds Rate
                  </p>
                  <p className="text-2xl font-bold text-foreground mt-2">
                    {fedFundsRateSummary.currentRange}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {fedFundsRateSummary.totalCutsFromPeak} cuts from peak
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Months of Supply
                  </p>
                  <p className="text-2xl font-bold text-foreground mt-2">
                    {nationalMonthsOfSupply.current} mo
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Balanced: {nationalMonthsOfSupply.balancedMarketRange.min}-
                    {nationalMonthsOfSupply.balancedMarketRange.max} mo
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Pending Home Sales
                  </p>
                  <p className="text-2xl font-bold text-foreground mt-2">
                    {pendingHomeSalesIndex.indexValue}
                  </p>
                  <p className="text-xs text-red-500 mt-1">
                    Record low — {pendingHomeSalesIndex.period}
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    CA Median Price
                  </p>
                  <p className="text-2xl font-bold text-foreground mt-2">
                    {formatPrice(californiaMarketOverview.medianHomePrice)}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span
                      className={
                        californiaMarketOverview.medianHomePriceYoY > 0
                          ? "text-green-600"
                          : "text-red-500"
                      }
                    >
                      {californiaMarketOverview.medianHomePriceYoY > 0
                        ? "+"
                        : ""}
                      {californiaMarketOverview.medianHomePriceYoY}% YoY
                    </span>
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    CA Affordability
                  </p>
                  <p className="text-2xl font-bold text-foreground mt-2">
                    {californiaMarketOverview.housingAffordabilityIndex}%
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Can afford median home
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="rounded-xl border border-border bg-muted/30 p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Market Outlook
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {nationalMarketSummary.outlook}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Top Trends
              </h3>
              <ul className="space-y-2">
                {nationalMarketSummary.topTrends.map((trend, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    {trend}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Upcoming Data Releases
              </h3>
              <div className="space-y-3">
                {upcomingDataReleases.map((release, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-xl border border-border bg-card p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold text-foreground">
                          {release.report}
                        </h4>
                        <span className="text-xs font-medium text-primary">
                          {new Date(release.releaseDate).toLocaleDateString(
                            "en-US",
                            { month: "short", day: "numeric" }
                          )}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {release.notes}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        )}

        {/* ─── NATIONAL TAB ────────────────────────────────── */}
        {activeTab === "national" && (
          <div className="space-y-12">
            <AnimatedSection>
              <SectionHeader
                title="S&P Case-Shiller Home Price Indices"
                subtitle="National and composite home price index data"
              />
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="pb-3 pr-4 font-semibold text-foreground">Index</th>
                      <th className="pb-3 pr-4 font-semibold text-foreground">Period</th>
                      <th className="pb-3 pr-4 font-semibold text-foreground text-right">Value</th>
                      <th className="pb-3 pr-4 font-semibold text-foreground text-right">YoY</th>
                      <th className="pb-3 font-semibold text-foreground text-right">MoM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {caseShillerIndices.map((idx) => (
                      <tr key={idx.indexName} className="border-b border-border/50 hover:bg-muted/30">
                        <td className="py-3 pr-4 font-medium text-foreground">{idx.indexName}</td>
                        <td className="py-3 pr-4 text-muted-foreground">{idx.period}</td>
                        <td className="py-3 pr-4 text-right font-semibold text-foreground">{idx.value.toFixed(2)}</td>
                        <td className="py-3 pr-4 text-right">
                          <span className={`inline-flex items-center gap-1 font-medium ${idx.yoyChange > 0 ? "text-green-600" : "text-red-500"}`}>
                            {idx.yoyChange > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                            {idx.yoyChange > 0 ? "+" : ""}{idx.yoyChange}%
                          </span>
                        </td>
                        <td className="py-3 text-right text-muted-foreground">{idx.momChange > 0 ? "+" : ""}{idx.momChange}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <SectionHeader title="Metro Performance" subtitle="Top vs. bottom metros by YoY price change (Dec 2025)" />
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold text-green-600 mb-3 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" /> Leaders
                  </h4>
                  <div className="space-y-2">
                    {caseShillerMetroPerformance2025.filter((m) => m.rank === "top").map((m) => (
                      <div key={m.metro} className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-2.5">
                        <span className="text-sm font-medium text-foreground">{m.metro}</span>
                        <span className="text-sm font-bold text-green-600">+{m.yoyChange}%</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-red-500 mb-3 flex items-center gap-2">
                    <TrendingDown className="h-4 w-4" /> Laggards
                  </h4>
                  <div className="space-y-2">
                    {caseShillerMetroPerformance2025.filter((m) => m.rank === "bottom").map((m) => (
                      <div key={m.metro} className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-2.5">
                        <span className="text-sm font-medium text-foreground">{m.metro}</span>
                        <span className="text-sm font-bold text-red-500">{m.yoyChange}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <SectionHeader title="NAR Existing Home Sales" subtitle="Historical sales pace and median prices" />
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="pb-3 pr-4 font-semibold text-foreground">Period</th>
                      <th className="pb-3 pr-4 font-semibold text-foreground text-right">SAAR (M)</th>
                      <th className="pb-3 pr-4 font-semibold text-foreground text-right">Median Price</th>
                      <th className="pb-3 pr-4 font-semibold text-foreground text-right">Price YoY</th>
                      <th className="pb-3 font-semibold text-foreground text-right">Supply (mo)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {narExistingHomeSalesHistory.map((row) => (
                      <tr key={row.period} className="border-b border-border/50 hover:bg-muted/30">
                        <td className="py-3 pr-4 font-medium text-foreground">{row.period}</td>
                        <td className="py-3 pr-4 text-right text-foreground">{row.annualizedRate.toFixed(2)}M</td>
                        <td className="py-3 pr-4 text-right font-semibold text-foreground">{formatPrice(row.medianPrice)}</td>
                        <td className="py-3 pr-4 text-right">
                          <span className={`font-medium ${row.medianPriceYoY > 0 ? "text-green-600" : "text-red-500"}`}>
                            {row.medianPriceYoY > 0 ? "+" : ""}{row.medianPriceYoY}%
                          </span>
                        </td>
                        <td className="py-3 text-right text-muted-foreground">{row.monthsOfSupply}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="rounded-xl border border-border bg-primary/5 p-5">
                <h3 className="font-semibold text-foreground">NAR 2026 Forecast</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Projected existing home sales: <span className="font-bold text-foreground">{narForecast2026.projectedExistingHomeSales}M SAAR</span> (+{narForecast2026.projectedSalesChangeYoY}% YoY).
                  Median price change: <span className="font-bold text-green-600">+{narForecast2026.projectedMedianPriceChange}%</span>.
                </p>
                <p className="text-xs text-muted-foreground mt-2 italic">{narForecast2026.notes}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground text-sm">Housing Affordability</h3>
                  <p className="text-2xl font-bold text-foreground mt-2">{nationalAffordability.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{nationalAffordability.period}</p>
                  <p className="text-xs text-muted-foreground mt-2">{nationalAffordability.interpretation.slice(0, 120)}...</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground text-sm">Builder Confidence (NAHB)</h3>
                  <p className="text-2xl font-bold text-foreground mt-2">{nahbBuilderConfidence.overallIndex}</p>
                  <p className="text-xs text-muted-foreground mt-1">{nahbBuilderConfidence.period} — {nahbBuilderConfidence.consecutiveNegativeMonths} months below breakeven</p>
                  <div className="mt-2 text-xs text-muted-foreground space-y-0.5">
                    <p>Current Sales: {nahbBuilderConfidence.currentSalesConditions}</p>
                    <p>Future Expectations: {nahbBuilderConfidence.futureSalesExpectations}</p>
                    <p>Buyer Traffic: {nahbBuilderConfidence.prospectiveBuyerTraffic}</p>
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground text-sm">Pending Home Sales</h3>
                  <p className="text-2xl font-bold text-foreground mt-2">{pendingHomeSalesIndex.indexValue}</p>
                  <p className="text-xs text-red-500 mt-1">{pendingHomeSalesIndex.momChange}% MoM, {pendingHomeSalesIndex.yoyChange}% YoY</p>
                  <p className="text-xs text-muted-foreground mt-2">Lowest level in series history.</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground">National Inventory</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Active listings: <span className="font-bold text-foreground">{(nationalMonthsOfSupply.totalActiveListings / 1_000_000).toFixed(2)}M</span> — up {nationalMonthsOfSupply.activeListingsYoYChange}% YoY.
                  Homeownership rate: <span className="font-bold text-foreground">{homeownershipRate.rate}%</span> ({homeownershipRate.period}).
                </p>
                <p className="text-xs text-muted-foreground mt-1">{nationalMonthsOfSupply.notes}</p>
              </div>
            </AnimatedSection>
          </div>
        )}

        {/* ─── CALIFORNIA TAB ──────────────────────────────── */}
        {activeTab === "california" && (
          <div className="space-y-12">
            <AnimatedSection>
              <SectionHeader
                title="California Market Overview"
                subtitle="Statewide housing data and forecasts from C.A.R."
              />
              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Median Price</p>
                  <p className="text-2xl font-bold text-foreground mt-2">{formatPrice(californiaMarketOverview.medianHomePrice)}</p>
                  <p className="text-xs mt-1"><span className={californiaMarketOverview.medianHomePriceYoY > 0 ? "text-green-600" : "text-red-500"}>{californiaMarketOverview.medianHomePriceYoY > 0 ? "+" : ""}{californiaMarketOverview.medianHomePriceYoY}%</span> <span className="text-muted-foreground">{californiaMarketOverview.period}</span></p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">2026 Forecast</p>
                  <p className="text-2xl font-bold text-foreground mt-2">{formatPrice(californiaMarketOverview.forecastMedianPrice2026)}</p>
                  <p className="text-xs text-green-600 mt-1">+{californiaMarketOverview.forecastPriceChangeYoY}% — Record high</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Affordability</p>
                  <p className="text-2xl font-bold text-foreground mt-2">{californiaMarketOverview.housingAffordabilityIndex}%</p>
                  <p className="text-xs text-muted-foreground mt-1">Income needed: {formatPrice(californiaMarketOverview.incomeRequiredForMedian)}</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Locked-In Rate</p>
                  <p className="text-2xl font-bold text-foreground mt-2">{californiaMarketOverview.pctMortgagesUnder5Pct}%</p>
                  <p className="text-xs text-muted-foreground mt-1">Of owners below 5% rate</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <SectionHeader title="Top CA Metros by Price" subtitle="County-level median prices" />
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="pb-3 pr-4 font-semibold text-foreground">Metro</th>
                      <th className="pb-3 pr-4 font-semibold text-foreground text-right">Median Price</th>
                      <th className="pb-3 pr-4 font-semibold text-foreground text-right">YoY</th>
                      <th className="pb-3 font-semibold text-foreground">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topCaliforniaMetrosByPrice.map((m) => (
                      <tr key={m.metro} className="border-b border-border/50 hover:bg-muted/30">
                        <td className="py-3 pr-4 font-medium text-foreground">{m.metro}</td>
                        <td className="py-3 pr-4 text-right font-semibold text-foreground">{formatPrice(m.medianPrice)}</td>
                        <td className="py-3 pr-4 text-right">
                          <span className={`font-medium ${m.yoyChange > 0 ? "text-green-600" : "text-red-500"}`}>
                            {m.yoyChange > 0 ? "+" : ""}{m.yoyChange}%
                          </span>
                        </td>
                        <td className="py-3 text-xs text-muted-foreground max-w-xs">{m.notes.slice(0, 80)}...</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="rounded-xl border border-border bg-primary/5 p-5">
                <h3 className="font-semibold text-foreground">Million Dollar Club — {millionDollarCounties2026.period}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  <span className="font-bold text-foreground">{millionDollarCounties2026.count} counties</span> now have median home prices above $1M (up from {millionDollarCounties2026.priorYearCount} last year).
                  New additions: <span className="font-bold text-primary">{millionDollarCounties2026.newAdditions.join(", ")}</span>.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {millionDollarCounties2026.counties.map((c) => (
                    <span key={c} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{c}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <SectionHeader title="CA Affordability by Region" subtitle="Percent of households able to afford the median home" />
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {californiaAffordabilityByRegion.map((r) => (
                  <div key={r.region} className="flex items-center justify-between rounded-xl border border-border bg-card px-5 py-3">
                    <div>
                      <p className="text-sm font-medium text-foreground">{r.region}</p>
                      {r.incomeRequired && <p className="text-xs text-muted-foreground">Income needed: {formatPrice(r.incomeRequired)}</p>}
                    </div>
                    <p className="text-lg font-bold text-foreground">{r.affordabilityIndex}%</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <SectionHeader title="CA Sales Volume" subtitle="Existing single-family home sales history" />
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="pb-3 pr-4 font-semibold text-foreground">Year</th>
                      <th className="pb-3 pr-4 font-semibold text-foreground text-right">Sales</th>
                      <th className="pb-3 pr-4 font-semibold text-foreground text-right">YoY</th>
                      <th className="pb-3 font-semibold text-foreground">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {californiaSalesVolume.map((row) => (
                      <tr key={row.year} className="border-b border-border/50 hover:bg-muted/30">
                        <td className="py-2.5 pr-4 font-medium text-foreground">{row.year}</td>
                        <td className="py-2.5 pr-4 text-right text-foreground">{row.existingSFHomesSold.toLocaleString()}</td>
                        <td className="py-2.5 pr-4 text-right">
                          <span className={`font-medium ${row.yoyChange > 0 ? "text-green-600" : row.yoyChange < 0 ? "text-red-500" : "text-muted-foreground"}`}>
                            {row.yoyChange > 0 ? "+" : ""}{row.yoyChange}%
                          </span>
                        </td>
                        <td className="py-2.5 text-xs text-muted-foreground">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <SectionHeader title="CA Housing Legislation" subtitle={californiaLegislationSummary.headline} />
              <div className="mt-4 space-y-2">
                {californiaLegislationSummary.keyThemes.map((theme, i) => (
                  <p key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {theme}
                  </p>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                {californiaHousingLegislation.map((bill) => (
                  <CollapsibleSection key={bill.billNumber} title={`${bill.billNumber} — ${bill.title}`}>
                    <p className="text-sm text-muted-foreground">{bill.summary}</p>
                    <p className="text-xs text-primary mt-2 italic">{bill.realtorImpact}</p>
                    <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                      <span className={`rounded-full px-2 py-0.5 ${bill.status === "signed" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" : bill.status === "effective" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"}`}>
                        {bill.status.replace(/-/g, " ")}
                      </span>
                      <span>Effective: {bill.effectiveDate}</span>
                    </div>
                  </CollapsibleSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        )}

        {/* ─── BAY AREA TAB ────────────────────────────────── */}
        {activeTab === "bayarea" && (
          <div className="space-y-12">
            <AnimatedSection>
              <SectionHeader
                title="East Bay City Market Data"
                subtitle="Median prices, days on market, and year-over-year trends across the East Bay"
              />
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="pb-3 pr-4 font-semibold text-foreground">City</th>
                      <th className="pb-3 pr-4 font-semibold text-foreground">County</th>
                      <th className="pb-3 pr-4 font-semibold text-foreground text-right">Median Price</th>
                      <th className="pb-3 pr-4 font-semibold text-foreground text-right">YoY Change</th>
                      <th className="pb-3 pr-4 font-semibold text-foreground text-right">Avg DOM</th>
                      <th className="pb-3 font-semibold text-foreground text-right">Prior DOM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cityMarketData.map((city) => (
                      <tr key={city.city} className="border-b border-border/50 hover:bg-muted/30">
                        <td className="py-3 pr-4 font-medium text-foreground">{city.city}</td>
                        <td className="py-3 pr-4 text-muted-foreground">{city.county}</td>
                        <td className="py-3 pr-4 text-right font-semibold text-foreground">{formatPrice(city.medianSalePrice)}</td>
                        <td className="py-3 pr-4 text-right">
                          <span className={`inline-flex items-center gap-1 font-medium ${city.yoyPriceChange > 0 ? "text-green-600" : "text-red-500"}`}>
                            {city.yoyPriceChange > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                            {city.yoyPriceChange > 0 ? "+" : ""}{city.yoyPriceChange}%
                          </span>
                        </td>
                        <td className="py-3 pr-4 text-right text-foreground">{city.avgDaysOnMarket}d</td>
                        <td className="py-3 text-right text-muted-foreground">{city.avgDaysOnMarketPriorYear}d</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Sources: Redfin, Zillow, C.A.R. — Data as of January-March 2026
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <SectionHeader title="Mortgage Rates" subtitle="Current rates and 2026 outlook" />
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">30-Year Fixed</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{currentMortgageRates.thirtyYearFixed}%</p>
                  <p className="text-xs text-muted-foreground mt-1">As of {currentMortgageRates.date}</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">15-Year Fixed</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{currentMortgageRates.fifteenYearFixed}%</p>
                  <p className="text-xs text-muted-foreground mt-1">As of {currentMortgageRates.date}</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Fed Funds Rate</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{fedProjections.currentFedFundsRate}</p>
                  <p className="text-xs text-muted-foreground mt-1">Next FOMC: {fedProjections.nextMeetingDate}</p>
                </div>
              </div>
              <div className="mt-4 rounded-xl border border-border bg-muted/30 p-4">
                <p className="text-sm font-semibold text-foreground">2026 Outlook</p>
                <p className="text-sm text-muted-foreground mt-1">{fedProjections.expectedAction}. Consensus forecast: rates near 6.0% through year-end, range 5.7%-6.5%.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <SectionHeader title="Housing Inventory" subtitle="Supply levels across the Bay Area" />
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {inventoryData.map((item) => (
                  <div key={item.region} className="rounded-xl border border-border bg-card p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-foreground">{item.region}</h3>
                      <span className={`text-lg font-bold ${item.monthsOfSupply < 2 ? "text-red-500" : item.monthsOfSupply < 4 ? "text-amber-500" : "text-green-600"}`}>
                        {item.monthsOfSupply} mo
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{item.notes}</p>
                    {item.yoyListingChange && (
                      <p className="text-xs text-muted-foreground mt-2">
                        Active listings YoY: <span className="font-medium text-foreground">+{item.yoyListingChange}%</span>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <SectionHeader title="Bay Area Trends" subtitle="Key themes shaping the market in 2026" />
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-primary" /> Tech Layoff Impact
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {techLayoffImpact.totalJobsEliminated} jobs eliminated ({techLayoffImpact.period}). Housing cooling but not collapsing.
                  </p>
                  <ul className="mt-3 space-y-1">
                    {techLayoffImpact.migrationTrends.slice(0, 3).map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-foreground">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-primary" /> ADU Boom
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {aduTrends.statePermits2023.toLocaleString()} CA permits in 2023. {aduTrends.growthFromBase}.
                  </p>
                  <ul className="mt-3 space-y-1">
                    {aduTrends.keyLawChanges2026.slice(0, 3).map((law, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-foreground">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <strong>{law.bill}:</strong>&nbsp;{law.change}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-primary" /> Office-to-Residential Conversions
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    SF office vacancy: {commercialToResidential.sfOfficeVacancyRate}. Major projects underway.
                  </p>
                  <ul className="mt-3 space-y-1">
                    {commercialToResidential.keyProjects.slice(0, 3).map((proj, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-foreground">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {proj.location}: {proj.units?.toLocaleString()} units — {proj.status}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-primary" /> Tariff Impact on Construction
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Construction costs up {tariffImpact.constructionCostIncrease} from {tariffImpact.period}.
                  </p>
                  <ul className="mt-3 space-y-1">
                    {tariffImpact.effects.map((effect, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-foreground">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{effect}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <SectionHeader title="Notable Market Movements" subtitle="Case studies and standout transactions from the East Bay" />
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {caseStudies.map((cs) => (
                  <div key={cs.title} className="rounded-xl border border-border bg-card p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground text-sm">{cs.title}</h3>
                      <span className="text-[10px] text-muted-foreground">{cs.date}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{cs.details}</p>
                    <p className="text-xs text-primary mt-2 italic">{cs.significance}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        )}

        {/* ─── INTEREST RATES TAB ──────────────────────────── */}
        {activeTab === "rates" && (
          <div className="space-y-12">
            <AnimatedSection>
              <SectionHeader title="Current Interest Rates" subtitle="Mortgage rates and Federal Reserve indicators" />
              <div className="mt-6 grid gap-4 md:grid-cols-4">
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">30-Year Fixed</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{currentMortgageRates.thirtyYearFixed}%</p>
                  <p className="text-xs text-muted-foreground mt-1">As of {currentMortgageRates.date}</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">15-Year Fixed</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{currentMortgageRates.fifteenYearFixed}%</p>
                  <p className="text-xs text-muted-foreground mt-1">As of {currentMortgageRates.date}</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Fed Funds Rate</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{fedFundsRateSummary.currentRange}</p>
                  <p className="text-xs text-muted-foreground mt-1">{fedFundsRateSummary.totalBasisPointsCut} bps cut from peak</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">10-Year Treasury</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{tenYearTreasuryYield.yield}%</p>
                  <p className="text-xs text-muted-foreground mt-1">Range: {tenYearTreasuryYield.recentRange.low}%-{tenYearTreasuryYield.recentRange.high}%</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-3">CME FedWatch — {cmeFedWatch.meetingDate}</h3>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">{cmeFedWatch.holdProbability}%</p>
                    <p className="text-xs text-muted-foreground">Hold</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">{cmeFedWatch.cutProbability25bp}%</p>
                    <p className="text-xs text-muted-foreground">25bp Cut</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">{cmeFedWatch.cutProbability50bp}%</p>
                    <p className="text-xs text-muted-foreground">50bp Cut</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">{cmeFedWatch.hikeProbability}%</p>
                    <p className="text-xs text-muted-foreground">Hike</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3">{cmeFedWatch.notes}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <SectionHeader title="FOMC 2026 Meeting Schedule" subtitle="Federal Reserve policy meeting dates and decisions" />
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="pb-3 pr-4 font-semibold text-foreground">Dates</th>
                      <th className="pb-3 pr-4 font-semibold text-foreground">SEP</th>
                      <th className="pb-3 pr-4 font-semibold text-foreground">Status</th>
                      <th className="pb-3 pr-4 font-semibold text-foreground">Decision</th>
                      <th className="pb-3 font-semibold text-foreground">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fomcSchedule2026.map((mtg) => (
                      <tr key={mtg.dates} className="border-b border-border/50 hover:bg-muted/30">
                        <td className="py-3 pr-4 font-medium text-foreground">{mtg.dates}</td>
                        <td className="py-3 pr-4 text-muted-foreground">{mtg.hasSEP ? "Yes" : "No"}</td>
                        <td className="py-3 pr-4">
                          <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${mtg.status === "completed" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"}`}>
                            {mtg.status}
                          </span>
                        </td>
                        <td className="py-3 pr-4 text-sm text-foreground">{mtg.decision || "—"}</td>
                        <td className="py-3 text-xs text-muted-foreground max-w-xs">{mtg.notes.slice(0, 80)}...</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <SectionHeader title="Fed Funds Rate History" subtitle="The complete hiking and cutting cycle" />
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="pb-3 pr-4 font-semibold text-foreground">Date</th>
                      <th className="pb-3 pr-4 font-semibold text-foreground">Target Range</th>
                      <th className="pb-3 pr-4 font-semibold text-foreground">Action</th>
                      <th className="pb-3 font-semibold text-foreground text-right">Change (bps)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fedFundsRateHistory.map((entry) => (
                      <tr key={entry.date} className="border-b border-border/50 hover:bg-muted/30">
                        <td className="py-2.5 pr-4 font-medium text-foreground">{entry.date}</td>
                        <td className="py-2.5 pr-4 text-foreground">{entry.targetRangeLower.toFixed(2)}%-{entry.targetRangeUpper.toFixed(2)}%</td>
                        <td className="py-2.5 pr-4">
                          <span className={`text-xs font-medium ${entry.action.includes("Hike") ? "text-red-500" : entry.action.includes("Cut") ? "text-green-600" : "text-muted-foreground"}`}>
                            {entry.action}
                          </span>
                        </td>
                        <td className="py-2.5 text-right">
                          <span className={`font-medium ${entry.bpsChange > 0 ? "text-red-500" : entry.bpsChange < 0 ? "text-green-600" : "text-muted-foreground"}`}>
                            {entry.bpsChange > 0 ? "+" : ""}{entry.bpsChange}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="rounded-xl border border-border bg-muted/30 p-5">
                <h3 className="font-semibold text-foreground">2026 Rate Outlook</h3>
                <p className="text-sm text-muted-foreground mt-2">{fedFundsRateSummary.forwardGuidance}</p>
                <div className="mt-3 space-y-1">
                  {tenYearTreasuryYield.keyDrivers.map((driver, i) => (
                    <p key={i} className="flex items-start gap-2 text-xs text-foreground">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{driver}
                    </p>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        )}

        {/* ─── LEGISLATION TAB ─────────────────────────────── */}
        {activeTab === "legislation" && (
          <div className="space-y-8">
            <AnimatedSection>
              <SectionHeader
                title="California Legislation Tracker"
                subtitle="Bills, laws, and regulations impacting Bay Area real estate in 2025-2026"
              />
              <div className="mt-6 flex flex-wrap gap-2">
                <button
                  onClick={() => setLegFilter("all")}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${legFilter === "all" ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:text-foreground"}`}
                >
                  All ({stateLegislation.length})
                </button>
                {(Object.entries(categoryLabels) as [LegislationCategory, string][]).map(([key, label]) => {
                  const count = stateLegislation.filter((b) => b.category === key).length;
                  if (count === 0) return null;
                  return (
                    <button
                      key={key}
                      onClick={() => setLegFilter(key)}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${legFilter === key ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:text-foreground"}`}
                    >
                      {label} ({count})
                    </button>
                  );
                })}
              </div>
              <div className="mt-6 space-y-3">
                {filteredLegislation.map((bill) => (
                  <LegislationCard key={bill.id} bill={bill} />
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <SectionHeader title="Local Ordinances" subtitle="City-specific rules across the East Bay" />
              <div className="mt-6 space-y-3">
                {localOrdinances.map((ord) => (
                  <div key={ord.id} className="rounded-xl border border-border bg-card p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Landmark className="h-4 w-4 text-primary" />
                      <span className="text-xs font-bold text-primary">{ord.jurisdiction}</span>
                      <span className="text-xs text-muted-foreground">Effective {ord.effectiveDate}</span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground">{ord.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{ord.summary}</p>
                    <ul className="mt-3 space-y-1">
                      {ord.keyDetails.map((d, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-foreground">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{d}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-muted-foreground mt-3 italic">{ord.realtorImpact}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <SectionHeader title="Bills to Watch" subtitle="Pending legislation and two-year bills" />
              <div className="mt-6 space-y-3">
                {pendingLegislation.map((bill) => (
                  <div key={bill.id} className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-amber-600" />
                      <span className="text-xs font-bold text-amber-600">{bill.billNumber}</span>
                      <span className="text-xs text-muted-foreground capitalize">{bill.status.replace(/_/g, " ")}</span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground">{bill.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{bill.summary}</p>
                    <p className="text-xs text-muted-foreground mt-2 italic">{bill.realtorImpact}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        )}

        {/* ─── PROPERTY TAXES TAB ──────────────────────────── */}
        {activeTab === "taxes" && (
          <div className="space-y-8">
            <AnimatedSection>
              <SectionHeader title="Property Tax Guide" subtitle="Comprehensive Bay Area property tax reference" />
            </AnimatedSection>

            <AnimatedSection>
              <CollapsibleSection title={`Proposition 13 — ${prop13Explainer.title}`} defaultOpen>
                <p className="text-sm text-muted-foreground mb-4">{prop13Explainer.summary}</p>
                <div className="space-y-3">
                  {prop13Explainer.keyRules.map((rule, i) => (
                    <div key={i} className="border-t border-border pt-3">
                      <h4 className="text-sm font-semibold text-foreground">{rule.rule}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{rule.details}</p>
                      {rule.example && <p className="text-xs text-primary mt-1 italic">{rule.example}</p>}
                    </div>
                  ))}
                </div>
              </CollapsibleSection>
            </AnimatedSection>

            <AnimatedSection>
              <SectionHeader title="County Tax Rates" subtitle="Effective tax rates across Bay Area counties" />
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="pb-3 pr-4 font-semibold text-foreground">County</th>
                      <th className="pb-3 pr-4 font-semibold text-foreground text-right">Base</th>
                      <th className="pb-3 pr-4 font-semibold text-foreground text-right">Effective Range</th>
                      <th className="pb-3 font-semibold text-foreground">Key Bonds</th>
                    </tr>
                  </thead>
                  <tbody>
                    {countyTaxRates.map((county) => (
                      <tr key={county.county} className="border-b border-border/50 hover:bg-muted/30">
                        <td className="py-3 pr-4 font-medium text-foreground">{county.county}</td>
                        <td className="py-3 pr-4 text-right text-foreground">{county.baseRate}%</td>
                        <td className="py-3 pr-4 text-right text-foreground">{county.typicalEffectiveRateLow}%-{county.typicalEffectiveRateHigh}%</td>
                        <td className="py-3 text-xs text-muted-foreground max-w-xs">{county.voterApprovedBonds.slice(0, 80)}...</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <CollapsibleSection title="Mello-Roos / Community Facilities Districts">
                <p className="text-sm text-muted-foreground mb-4">{melloRoosInfo.summary}</p>
                <h4 className="text-sm font-semibold text-foreground mb-2">Common Bay Area CFDs</h4>
                <div className="space-y-2">
                  {melloRoosInfo.commonBayAreaCFDs.map((cfd, i) => (
                    <div key={i} className="flex items-start justify-between gap-4 border-t border-border pt-2">
                      <div>
                        <p className="text-sm font-medium text-foreground">{cfd.area}</p>
                        <p className="text-xs text-muted-foreground">{cfd.county} County — {cfd.notes.slice(0, 60)}...</p>
                      </div>
                      <span className="shrink-0 text-xs font-semibold text-primary">{cfd.typicalAnnualCharge}</span>
                    </div>
                  ))}
                </div>
              </CollapsibleSection>
            </AnimatedSection>

            <AnimatedSection>
              <CollapsibleSection title="Supplemental Tax Bills">
                <p className="text-sm text-muted-foreground mb-4">{supplementalTaxInfo.summary}</p>
                <div className="rounded-lg border border-border bg-muted/30 p-4 mt-3">
                  <h4 className="text-sm font-semibold text-foreground">Worked Example: {supplementalTaxInfo.calculationExample.scenario}</h4>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                    <p className="text-muted-foreground">Purchase Price:</p>
                    <p className="text-foreground font-medium">{formatPrice(supplementalTaxInfo.calculationExample.purchasePrice)}</p>
                    <p className="text-muted-foreground">Previous Assessed Value:</p>
                    <p className="text-foreground font-medium">{formatPrice(supplementalTaxInfo.calculationExample.previousAssessedValue)}</p>
                    <p className="text-muted-foreground">Supplemental Assessment:</p>
                    <p className="text-foreground font-medium">{formatPrice(supplementalTaxInfo.calculationExample.supplementalAssessment)}</p>
                    <p className="text-muted-foreground">Pro-Rated Tax:</p>
                    <p className="text-foreground font-bold text-primary">{formatPrice(supplementalTaxInfo.calculationExample.proRatedTax)}</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">{supplementalTaxInfo.calculationExample.explanation}</p>
                </div>
              </CollapsibleSection>
            </AnimatedSection>

            <AnimatedSection>
              <CollapsibleSection title="Proposition 19 — Parent-Child Exclusion & Portability">
                <p className="text-sm text-muted-foreground mb-3">{prop19Info.summary}</p>
                <div className="border-t border-border pt-3">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Parent-Child Exclusion</h4>
                  <p className="text-xs text-muted-foreground mb-2">{prop19Info.parentChildExclusion.description}</p>
                  <p className="text-xs font-medium text-primary">Current exclusion amount: {formatPrice(prop19Info.parentChildExclusion.exclusionAmount)}</p>
                </div>
                <div className="border-t border-border pt-3 mt-3">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Senior Portability (55+)</h4>
                  <p className="text-xs text-muted-foreground">{prop19Info.seniorPortability.description}</p>
                  <ul className="mt-2 space-y-1">
                    {prop19Info.seniorPortability.keyRules.slice(0, 4).map((rule, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-foreground">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{rule}
                      </li>
                    ))}
                  </ul>
                </div>
              </CollapsibleSection>
            </AnimatedSection>

            <AnimatedSection>
              <SectionHeader title="Tax Examples" subtitle="What Bay Area homeowners actually pay" />
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {taxExamples.map((ex, i) => (
                  <div key={i} className="rounded-xl border border-border bg-card p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-semibold text-foreground">{ex.location}</h4>
                      <span className="text-xs text-muted-foreground">{ex.county} Co.</span>
                    </div>
                    <p className="text-lg font-bold text-foreground">{formatPrice(ex.homeValue)} home</p>
                    <div className="mt-3 grid grid-cols-2 gap-1 text-xs">
                      <p className="text-muted-foreground">Base Tax (1%):</p>
                      <p className="text-foreground text-right">{formatPrice(ex.baseTax)}</p>
                      <p className="text-muted-foreground">Bonds/Assessments:</p>
                      <p className="text-foreground text-right">{formatPrice(ex.estimatedBondsAssessments)}</p>
                      <p className="text-muted-foreground">Mello-Roos:</p>
                      <p className="text-foreground text-right">{formatPrice(ex.estimatedMelloRoos)}</p>
                      <p className="text-muted-foreground font-semibold border-t border-border pt-1">Total Annual:</p>
                      <p className="text-foreground font-bold text-right border-t border-border pt-1">{formatPrice(ex.estimatedTotalAnnual)}</p>
                      <p className="text-muted-foreground">Monthly:</p>
                      <p className="text-primary font-bold text-right">{formatPrice(ex.estimatedMonthly)}/mo</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <SectionHeader title="Transfer Tax Rates" subtitle="City and county transfer taxes on property sales" />
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="pb-3 pr-4 font-semibold text-foreground">Jurisdiction</th>
                      <th className="pb-3 pr-4 font-semibold text-foreground">Rate</th>
                      <th className="pb-3 font-semibold text-foreground">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transferTaxRates.map((tx) => (
                      <tr key={tx.jurisdiction} className="border-b border-border/50 hover:bg-muted/30">
                        <td className="py-3 pr-4 font-medium text-foreground">{tx.jurisdiction}</td>
                        <td className="py-3 pr-4 text-xs text-foreground">{tx.rate}</td>
                        <td className="py-3 text-xs text-muted-foreground max-w-sm">{tx.details.slice(0, 100)}...</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="rounded-xl border border-border bg-muted/30 p-5">
                <h3 className="font-semibold text-foreground">SALT Cap</h3>
                <p className="text-sm text-muted-foreground mt-2">{saltCapInfo.description}</p>
                <p className="text-xs text-muted-foreground mt-2 italic">{saltCapInfo.impact}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <SectionHeader title="Property Tax Calendar" subtitle="Key dates for California property owners" />
              <div className="mt-6 relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
                <div className="space-y-4">
                  {propertyTaxCalendarDates.map((item, i) => (
                    <div key={i} className="relative flex gap-4 pl-12">
                      <div className="absolute left-4 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-primary/20" />
                      <div className="flex-1 rounded-xl border border-border bg-card p-3">
                        <span className="text-xs font-bold text-primary">{item.date}</span>
                        <p className="text-sm text-foreground mt-0.5">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        )}

        {/* ─── RENT CONTROL TAB ────────────────────────────── */}
        {activeTab === "rentcontrol" && (
          <div className="space-y-8">
            <AnimatedSection>
              <SectionHeader title="Rent Control & Tenant Protection Guide" subtitle="California statewide and local rent control laws" />
            </AnimatedSection>

            <AnimatedSection>
              <CollapsibleSection title={ab1482Info.title} defaultOpen>
                <p className="text-sm text-muted-foreground mb-3">{ab1482Info.summary}</p>
                <div className="rounded-lg border border-border bg-primary/5 p-4 mb-3">
                  <h4 className="text-sm font-semibold text-foreground">Rent Cap Formula</h4>
                  <p className="text-lg font-bold text-primary mt-1">{ab1482Info.rentCapRules.formula}</p>
                  <p className="text-xs text-muted-foreground mt-1">Current allowable increase: <span className="font-bold text-foreground">{ab1482Info.rentCapRules.currentAllowableIncrease}%</span> ({ab1482Info.rentCapRules.cpiEffectivePeriod})</p>
                </div>
                <div className="space-y-1 mt-3">
                  {ab1482Info.keyFacts.map((fact, i) => (
                    <p key={i} className="flex items-start gap-2 text-xs text-foreground">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{fact}
                    </p>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3">Sunset: {ab1482Info.sunsetDate}</p>
              </CollapsibleSection>
            </AnimatedSection>

            <AnimatedSection>
              <SectionHeader title="Rent Control Quick Reference" subtitle="City-by-city comparison" />
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="pb-3 pr-4 font-semibold text-foreground">City</th>
                      <th className="pb-3 pr-4 font-semibold text-foreground">Annual Cap</th>
                      <th className="pb-3 pr-4 font-semibold text-foreground">Coverage</th>
                      <th className="pb-3 pr-4 font-semibold text-foreground text-center">Just Cause</th>
                      <th className="pb-3 pr-4 font-semibold text-foreground text-center">Banking</th>
                      <th className="pb-3 font-semibold text-foreground">Key Takeaway</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rentControlSummaryTable.map((row) => (
                      <tr key={row.city} className="border-b border-border/50 hover:bg-muted/30">
                        <td className="py-2.5 pr-4 font-medium text-foreground">{row.city}</td>
                        <td className="py-2.5 pr-4 text-foreground text-xs">{row.annualCap}</td>
                        <td className="py-2.5 pr-4 text-xs text-muted-foreground">{row.coveredUnits}</td>
                        <td className="py-2.5 pr-4 text-center">{row.justCauseRequired ? <CheckCircle2 className="h-4 w-4 text-green-600 mx-auto" /> : "—"}</td>
                        <td className="py-2.5 pr-4 text-center">{row.bankingAllowed ? <CheckCircle2 className="h-4 w-4 text-green-600 mx-auto" /> : "—"}</td>
                        <td className="py-2.5 text-xs text-muted-foreground max-w-xs">{row.realtorKeyTakeaway}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <CollapsibleSection title="Costa-Hawkins Rental Housing Act">
                <p className="text-sm text-muted-foreground mb-3">{costaHawkinsInfo.summary}</p>
                <div className="space-y-3">
                  {costaHawkinsInfo.keyProvisions.map((prov, i) => (
                    <div key={i} className="border-t border-border pt-3">
                      <h4 className="text-sm font-semibold text-foreground">{prov.provision}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{prov.details}</p>
                      <p className="text-xs text-primary mt-1 italic">{prov.practicalEffect}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 border-t border-border pt-3">
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Repeal Attempts</h4>
                  {costaHawkinsInfo.repealAttempts.map((attempt, i) => (
                    <p key={i} className="text-xs text-foreground">
                      {attempt.measure} ({attempt.year}): <span className="text-red-500">{attempt.result}</span> — {attempt.voteMargin}
                    </p>
                  ))}
                </div>
              </CollapsibleSection>
            </AnimatedSection>

            <AnimatedSection>
              <SectionHeader title="Key Tenant Rights" subtitle="What agents need to know about tenant protections" />
              <div className="mt-6 space-y-3">
                {keyTenantRights.map((right, i) => (
                  <CollapsibleSection key={i} title={right.right}>
                    <p className="text-sm text-muted-foreground mb-2">{right.description}</p>
                    <ul className="space-y-1">
                      {right.details.map((d, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-foreground">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{d}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-primary mt-2 italic">{right.realtorRelevance}</p>
                  </CollapsibleSection>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <SectionHeader title="Recent & Upcoming Changes" subtitle="Legislative updates affecting rent control" />
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {recentAndUpcomingChanges.map((change, i) => (
                  <div key={i} className="rounded-xl border border-border bg-card p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                        change.status === "active" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                        : change.status === "pending" ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
                        : change.status === "proposed" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                        : change.status === "sunset_scheduled" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                        : "bg-muted text-muted-foreground"
                      }`}>
                        {change.status.replace(/_/g, " ")}
                      </span>
                      <span className="text-xs text-muted-foreground">{change.effectiveDate}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-foreground">{change.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{change.summary}</p>
                    <p className="text-xs text-primary mt-2 italic">{change.impact.slice(0, 120)}...</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <SectionHeader title="Realtor Guidance" subtitle="Practical advice for agents working with rental properties" />
              <div className="mt-6 space-y-3">
                {realtorGuidance.map((section, i) => (
                  <CollapsibleSection key={i} title={section.topic}>
                    <ul className="space-y-1.5">
                      {section.guidance.map((point, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-foreground">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{point}
                        </li>
                      ))}
                    </ul>
                  </CollapsibleSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        )}

        {/* ─── AGENT ECONOMICS TAB ─────────────────────────── */}
        {activeTab === "economics" && (
          <div className="space-y-12">
            <AnimatedSection>
              <SectionHeader
                title="Realtor Economics"
                subtitle="Commission trends, income data, and the post-NAR settlement landscape"
              />
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-border bg-card p-5 text-center">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">CA Avg Total Commission</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{commissionData.avgTotalCommission}%</p>
                  <p className="text-xs text-muted-foreground mt-1">National avg: {nationalCommissionAvg}%</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5 text-center">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Avg Listing Commission</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{commissionData.avgListingCommission}%</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5 text-center">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Avg Buyer Agent Commission</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{commissionData.avgBuyerAgentCommission}%</p>
                  <p className="text-xs text-muted-foreground mt-1">Up from post-settlement low of 2.36%</p>
                </div>
              </div>
              <div className="mt-6 rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-4">Buyer Agent Commission by Price Range</h3>
                <div className="space-y-3">
                  {commissionByPriceRange.map((tier) => (
                    <div key={tier.priceRange} className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground w-32 shrink-0">{tier.priceRange}</span>
                      <div className="flex-1 h-6 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full bg-primary/80 flex items-center justify-end pr-2"
                          style={{ width: `${(tier.avgBuyerAgentCommission / 3) * 100}%` }}
                        >
                          <span className="text-[10px] font-bold text-white">{tier.avgBuyerAgentCommission}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <SectionHeader title="NAR Settlement Impact" subtitle="How the $418M settlement is reshaping the industry" />
              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-border bg-card p-5">
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Settlement Amount</p>
                      <p className="text-lg font-bold text-foreground">${(narSettlement.settlementAmount / 1_000_000).toFixed(0)}M</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Effective Date</p>
                      <p className="text-lg font-bold text-foreground">{narSettlement.effectiveDate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Final Approval</p>
                      <p className="text-lg font-bold text-foreground">{narSettlement.finalApprovalDate}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {narSettlement.keyChanges.map((change, i) => (
                      <div key={i} className="border-t border-border pt-3">
                        <h4 className="text-sm font-semibold text-foreground">{change.change}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{change.details}</p>
                        <p className="text-xs text-primary mt-1 italic">{change.impact}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <SectionHeader title="Agent Income Data" subtitle="California real estate agent earnings" />
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="pb-3 pr-4 font-semibold text-foreground">Source</th>
                      <th className="pb-3 pr-4 font-semibold text-foreground text-right">Avg Annual Income</th>
                      <th className="pb-3 font-semibold text-foreground">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {agentIncomeData.map((d) => (
                      <tr key={d.source} className="border-b border-border/50">
                        <td className="py-2.5 pr-4 font-medium text-foreground">{d.source}</td>
                        <td className="py-2.5 pr-4 text-right font-semibold text-foreground">${d.averageAnnualIncome.toLocaleString()}</td>
                        <td className="py-2.5 text-xs text-muted-foreground">{d.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground">Transaction Volume</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    CA existing SF home sales: {transactionVolume[transactionVolume.length - 1]?.existingSFHomesSold.toLocaleString()} forecast for {transactionVolume[transactionVolume.length - 1]?.year}
                    ({transactionVolume[transactionVolume.length - 1]?.notes})
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground">Affordability Index</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Only {californiaAffordability.percentHouseholdsCanAffordMedian}% of CA households can afford the median-priced home (${californiaAffordability.medianPriceForCalculation.toLocaleString()}, {californiaAffordability.quarter}).
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        )}

        {/* ─── RESOURCES TAB ───────────────────────────────── */}
        {activeTab === "resources" && (
          <div className="space-y-12">
            <AnimatedSection>
              <SectionHeader
                title="Professional Certifications"
                subtitle="Designations that set you apart in the East Bay market"
              />
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {certifications.map((cert) => (
                  <div key={cert.id} className="rounded-xl border border-border bg-card p-5">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Award className="h-4 w-4 text-accent" />
                          <span className="text-lg font-bold text-primary">{cert.acronym}</span>
                        </div>
                        <h3 className="text-sm font-semibold text-foreground">{cert.name}</h3>
                      </div>
                      <a href={cert.website} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">{cert.description}</p>
                    <div className="mt-3 space-y-1 text-xs">
                      <p><span className="font-medium text-foreground">Ideal for:</span> <span className="text-muted-foreground">{cert.idealFor}</span></p>
                      <p><span className="font-medium text-foreground">Requirements:</span> <span className="text-muted-foreground">{cert.requirements}</span></p>
                      <p><span className="font-medium text-foreground">Cost:</span> <span className="text-muted-foreground">{cert.cost}</span></p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <SectionHeader
                title="Industry Influencers"
                subtitle="Key voices shaping Bay Area and national real estate"
              />
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {influencers.map((inf) => (
                  <div key={inf.id} className="rounded-xl border border-border bg-card p-5">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
                        {inf.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-foreground">{inf.name}</h3>
                        <p className="text-xs text-muted-foreground">{inf.role}</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">{inf.whyFollow}</p>
                    <div className="mt-3 flex items-center gap-3 text-xs">
                      <span className="text-primary font-medium">{inf.platform}</span>
                      <span className="text-muted-foreground">{inf.followers} followers</span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <SectionHeader
                title="Publications & Tools"
                subtitle="Essential resources for real estate professionals"
              />
              {(["publication", "podcast", "newsletter", "tool", "organization", "education"] as const).map((type) => {
                const items = industryResources.filter((r) => r.type === type);
                if (items.length === 0) return null;
                const typeLabels = {
                  publication: "Publications & Blogs",
                  podcast: "Podcasts",
                  newsletter: "Newsletters",
                  tool: "Data Tools & MLS",
                  organization: "Industry Organizations",
                  education: "Education",
                };
                return (
                  <div key={type} className="mt-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      {typeLabels[type]}
                    </h3>
                    <div className="grid gap-3 md:grid-cols-2">
                      {items.map((res) => (
                        <a
                          key={res.id}
                          href={res.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-xl border border-border bg-card p-4 transition-all hover:shadow-md hover:border-primary/30 group"
                        >
                          <div className="flex items-start justify-between">
                            <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{res.name}</h4>
                            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground shrink-0 mt-0.5" />
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{res.description}</p>
                          <p className="text-xs text-primary/80 mt-2 italic">{res.whyValuable}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                );
              })}
            </AnimatedSection>

            <AnimatedSection>
              <SectionHeader
                title="Key Dates Timeline"
                subtitle="Important dates for Bay Area realtors to track"
              />
              <div className="mt-6 relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
                <div className="space-y-6">
                  {keyDates.map((item, i) => {
                    const isPast = new Date(item.date) < new Date();
                    const isNow = new Date(item.date).toISOString().slice(0, 7) === new Date().toISOString().slice(0, 7);
                    return (
                      <div key={i} className="relative flex gap-4 pl-12">
                        <div className={`absolute left-4 top-1 h-4 w-4 rounded-full border-2 ${
                          isNow ? "border-primary bg-primary animate-pulse"
                          : isPast ? "border-green-500 bg-green-500"
                          : "border-muted-foreground bg-background"
                        }`} />
                        <div className="flex-1 rounded-xl border border-border bg-card p-4">
                          <div className="flex items-center justify-between mb-1">
                            <span className={`text-xs font-bold ${isPast ? "text-green-600" : isNow ? "text-primary" : "text-muted-foreground"}`}>
                              {new Date(item.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                            </span>
                            <span className="text-[10px] text-muted-foreground">{item.billReference}</span>
                          </div>
                          <p className="text-sm text-foreground">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
          </div>
        )}

        {/* CTA */}
        <AnimatedSection>
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-primary-dark to-primary p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Need Personalized Market Intelligence?
            </h2>
            <p className="mt-3 text-white/80 max-w-xl mx-auto">
              Nasim provides custom market analysis, neighborhood comparisons, and investment
              strategy sessions tailored to your goals.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-primary hover:bg-white/90 transition-colors"
            >
              Get a Custom Analysis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
      </main>
    </>
  );
}
