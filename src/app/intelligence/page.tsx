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
} from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import {
  stateLegislation,
  localOrdinances,
  pendingLegislation,
  keyDates,
  categoryLabels,
  impactColors,
} from "@/lib/intelligence-legislation";
import type { Legislation, LegislationCategory, ImpactLevel } from "@/lib/intelligence-legislation";
import {
  certifications,
  influencers,
  industryResources,
} from "@/lib/intelligence-resources";
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
import { formatPrice } from "@/lib/utils";

// ─── Tab Navigation ──────────────────────────────────────────────
const tabs = [
  { id: "market", label: "Market Data", icon: BarChart3 },
  { id: "legislation", label: "Legislation", icon: Scale },
  { id: "economics", label: "Agent Economics", icon: DollarSign },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "influencers", label: "Influencers", icon: Users },
  { id: "resources", label: "Resources", icon: BookOpen },
  { id: "timeline", label: "Timeline", icon: Calendar },
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
            <span className={`text-xs font-medium rounded-full px-2.5 py-0.5 ${impactColors[bill.impactLevel]}`}>
              {bill.impactLevel.toUpperCase()} IMPACT
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              {statusIcon[bill.status]}
              {statusLabel[bill.status]}
            </span>
          </div>
          <h3 className="text-base font-semibold text-foreground">{bill.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{bill.summary}</p>
        </div>
        <button className="mt-1 shrink-0 text-muted-foreground">
          {expanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>
      </div>

      {expanded && (
        <div className="mt-4 space-y-3 border-t border-border pt-4">
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Key Provisions</h4>
            <ul className="space-y-1">
              {bill.keyProvisions.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Realtor Impact</h4>
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

// ─── Main Page ──────────────────────────────────────────────────
export default function IntelligencePage() {
  const [activeTab, setActiveTab] = useState<TabId>("market");
  const [legFilter, setLegFilter] = useState<LegislationCategory | "all">("all");

  const filteredLegislation =
    legFilter === "all"
      ? stateLegislation
      : stateLegislation.filter((b) => b.category === legFilter);

  const highImpactCount = stateLegislation.filter((b) => b.impactLevel === "high").length;

  return (
    <>
      <PageHero
        title="Real Estate Intelligence"
        subtitle="Comprehensive Bay Area market data, legislation tracking, certifications, and industry resources — everything a top-performing agent needs"
      />

      {/* Quick Stats Bar */}
      <section className="border-b border-border bg-card py-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{stateLegislation.length}</p>
              <p className="text-xs text-muted-foreground">Active Laws Tracked</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600">{highImpactCount}</p>
              <p className="text-xs text-muted-foreground">High-Impact Bills</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{certifications.length}</p>
              <p className="text-xs text-muted-foreground">Certifications Tracked</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{cityMarketData.length}</p>
              <p className="text-xs text-muted-foreground">Cities Monitored</p>
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
        {/* ─── MARKET DATA TAB ───────────────────────────────── */}
        {activeTab === "market" && (
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
                        <td className="py-3 pr-4 text-right font-semibold text-foreground">
                          {formatPrice(city.medianSalePrice)}
                        </td>
                        <td className="py-3 pr-4 text-right">
                          <span className={`inline-flex items-center gap-1 font-medium ${
                            city.yoyPriceChange > 0 ? "text-green-600" : "text-red-500"
                          }`}>
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

            {/* Interest Rates */}
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

            {/* Inventory */}
            <AnimatedSection>
              <SectionHeader title="Housing Inventory" subtitle="Supply levels across the Bay Area" />
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {inventoryData.map((item) => (
                  <div key={item.region} className="rounded-xl border border-border bg-card p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-foreground">{item.region}</h3>
                      <span className={`text-lg font-bold ${
                        item.monthsOfSupply < 2 ? "text-red-500" : item.monthsOfSupply < 4 ? "text-amber-500" : "text-green-600"
                      }`}>
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

            {/* Bay Area Trends */}
            <AnimatedSection>
              <SectionHeader title="Bay Area Trends" subtitle="Key themes shaping the market in 2026" />
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-primary" />
                    Tech Layoff Impact
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {techLayoffImpact.totalJobsEliminated} jobs eliminated ({techLayoffImpact.period}). Housing cooling but not collapsing.
                  </p>
                  <ul className="mt-3 space-y-1">
                    {techLayoffImpact.migrationTrends.slice(0, 3).map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-foreground">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-primary" />
                    ADU Boom
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
                    <Building2 className="h-4 w-4 text-primary" />
                    Office-to-Residential Conversions
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
                    <Building2 className="h-4 w-4 text-primary" />
                    Tariff Impact on Construction
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Construction costs up {tariffImpact.constructionCostIncrease} from {tariffImpact.period}.
                  </p>
                  <ul className="mt-3 space-y-1">
                    {tariffImpact.effects.map((effect, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-foreground">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {effect}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Case Studies */}
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

        {/* ─── LEGISLATION TAB ───────────────────────────────── */}
        {activeTab === "legislation" && (
          <div className="space-y-8">
            <AnimatedSection>
              <SectionHeader
                title="California Legislation Tracker"
                subtitle="Bills, laws, and regulations impacting Bay Area real estate in 2025-2026"
              />

              {/* Category Filter */}
              <div className="mt-6 flex flex-wrap gap-2">
                <button
                  onClick={() => setLegFilter("all")}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                    legFilter === "all" ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
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
                      className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                        legFilter === key ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {label} ({count})
                    </button>
                  );
                })}
              </div>

              {/* Legislation Cards */}
              <div className="mt-6 space-y-3">
                {filteredLegislation.map((bill) => (
                  <LegislationCard key={bill.id} bill={bill} />
                ))}
              </div>
            </AnimatedSection>

            {/* Local Ordinances */}
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
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-muted-foreground mt-3 italic">{ord.realtorImpact}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Pending */}
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

        {/* ─── AGENT ECONOMICS TAB ───────────────────────────── */}
        {activeTab === "economics" && (
          <div className="space-y-12">
            <AnimatedSection>
              <SectionHeader
                title="Realtor Economics"
                subtitle="Commission trends, income data, and the post-NAR settlement landscape"
              />

              {/* Commission Data */}
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

              {/* Commission by Price */}
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

            {/* NAR Settlement Impact */}
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

            {/* Agent Income */}
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
                        <td className="py-2.5 pr-4 text-right font-semibold text-foreground">
                          ${d.averageAnnualIncome.toLocaleString()}
                        </td>
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

        {/* ─── CERTIFICATIONS TAB ────────────────────────────── */}
        {activeTab === "certifications" && (
          <div className="space-y-8">
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
                      <a
                        href={cert.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
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
          </div>
        )}

        {/* ─── INFLUENCERS TAB ───────────────────────────────── */}
        {activeTab === "influencers" && (
          <div className="space-y-8">
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
                        {inf.name.split(" ").map(n => n[0]).join("")}
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
          </div>
        )}

        {/* ─── RESOURCES TAB ─────────────────────────────────── */}
        {activeTab === "resources" && (
          <div className="space-y-8">
            <AnimatedSection>
              <SectionHeader
                title="Industry Resources & Bibliography"
                subtitle="Publications, podcasts, tools, and organizations for real estate professionals"
              />

              {/* Group by type */}
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
                            <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                              {res.name}
                            </h4>
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
          </div>
        )}

        {/* ─── TIMELINE TAB ──────────────────────────────────── */}
        {activeTab === "timeline" && (
          <div className="space-y-8">
            <AnimatedSection>
              <SectionHeader
                title="Key Dates Timeline"
                subtitle="Important dates for Bay Area realtors to track"
              />
              <div className="mt-6 relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

                <div className="space-y-6">
                  {keyDates.map((item, i) => {
                    const isPast = new Date(item.date) < new Date();
                    const isNow = new Date(item.date).toISOString().slice(0, 7) === new Date().toISOString().slice(0, 7);
                    return (
                      <div key={i} className="relative flex gap-4 pl-12">
                        <div className={`absolute left-4 top-1 h-4 w-4 rounded-full border-2 ${
                          isNow
                            ? "border-primary bg-primary animate-pulse"
                            : isPast
                            ? "border-green-500 bg-green-500"
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
