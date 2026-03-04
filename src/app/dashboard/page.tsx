"use client";

import { useState } from "react";
import {
  Shield,
  Newspaper,
  TrendingUp,
  TrendingDown,
  Minus,
  AlertTriangle,
  CheckCircle,
  Info,
  Flame,
  Filter,
  ArrowRight,
  Lock,
  Mail,
  Eye,
  EyeOff,
  BarChart3,
  Lightbulb,
  Gavel,
  Building,
  Percent,
  FileText,
} from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import {
  newsFeed,
  competitiveInsights,
  type NewsItem,
} from "@/lib/news-feed";
import { siteConfig } from "@/lib/site-config";

const categoryIcons: Record<string, React.ReactNode> = {
  legislation: <Gavel className="h-4 w-4" />,
  market: <BarChart3 className="h-4 w-4" />,
  rates: <Percent className="h-4 w-4" />,
  development: <Building className="h-4 w-4" />,
  policy: <FileText className="h-4 w-4" />,
};

const categoryColors: Record<string, string> = {
  legislation: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  market: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  rates: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  development: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  policy: "bg-stone-100 text-stone-700 dark:bg-stone-900/30 dark:text-stone-300",
};

const impactColors: Record<string, string> = {
  high: "border-l-red-500",
  medium: "border-l-amber-500",
  low: "border-l-blue-500",
};

const impactIcons: Record<string, React.ReactNode> = {
  high: <Flame className="h-4 w-4 text-red-500" />,
  medium: <AlertTriangle className="h-4 w-4 text-amber-500" />,
  low: <Info className="h-4 w-4 text-blue-500" />,
};

// Login gate component
function LoginGate({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) onLogin();
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Lock className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">Client Dashboard</h1>
          <p className="mt-2 text-muted-foreground">
            Exclusive market intelligence and insights for Nasim&apos;s clients
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@email.com"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background pl-10 pr-10 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter any password (demo)"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-primary-light transition-colors"
            >
              Sign In to Dashboard
            </button>
          </form>

          <div className="mt-4 rounded-lg bg-muted p-3">
            <p className="text-xs text-muted-foreground text-center">
              <Shield className="inline h-3 w-3 mr-1" />
              Demo mode — enter any email and password to explore the dashboard
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Dashboard content
function DashboardContent() {
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [expandedNews, setExpandedNews] = useState<string | null>(null);

  const filteredNews =
    categoryFilter === "all"
      ? newsFeed
      : newsFeed.filter((n) => n.category === categoryFilter);

  const categories = ["all", "legislation", "market", "rates", "development", "policy"];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Dashboard Header */}
      <div className="mb-8">
        <p className="text-sm font-medium text-accent uppercase tracking-wider">
          Client Dashboard
        </p>
        <h1 className="mt-1 text-3xl font-bold text-foreground">
          Welcome back
        </h1>
        <p className="mt-1 text-muted-foreground">
          Your personalized Oakland real estate intelligence feed
        </p>
      </div>

      {/* Competitive Insights */}
      <AnimatedSection>
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="h-5 w-5 text-accent" />
            <h2 className="text-xl font-bold text-foreground">
              Your Competitive Edge
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {competitiveInsights.slice(0, 3).map((insight) => (
              <div
                key={insight.id}
                className="rounded-xl border border-border bg-card p-5"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {insight.metric}
                  </span>
                  {insight.trend === "up" && (
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  )}
                  {insight.trend === "down" && (
                    <TrendingDown className="h-4 w-4 text-green-500" />
                  )}
                  {insight.trend === "stable" && (
                    <Minus className="h-4 w-4 text-blue-500" />
                  )}
                </div>
                <p className="text-2xl font-bold text-primary">{insight.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {insight.context}
                </p>
                <div className="mt-3 rounded-lg bg-primary/5 p-2">
                  <p className="text-xs text-primary font-medium">
                    <CheckCircle className="inline h-3 w-3 mr-1" />
                    {insight.advantage}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* More insights expandable */}
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {competitiveInsights.slice(3).map((insight) => (
              <div
                key={insight.id}
                className="rounded-xl border border-border bg-card p-4 flex items-center gap-4"
              >
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">
                    {insight.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {insight.advantage}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-primary">{insight.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* News & Legislation Feed */}
      <AnimatedSection delay={200}>
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Newspaper className="h-5 w-5 text-accent" />
              <h2 className="text-xl font-bold text-foreground">
                Market Intelligence Feed
              </h2>
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  categoryFilter === cat
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat !== "all" && categoryIcons[cat]}
                {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* News items */}
          <div className="space-y-4">
            {filteredNews.map((item) => (
              <NewsCard
                key={item.id}
                item={item}
                expanded={expandedNews === item.id}
                onToggle={() =>
                  setExpandedNews(expandedNews === item.id ? null : item.id)
                }
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Quick Actions */}
      <AnimatedSection delay={300}>
        <div className="mt-8 rounded-xl bg-gradient-to-br from-primary-dark to-primary p-8 text-white">
          <h3 className="text-xl font-bold">Need Personalized Advice?</h3>
          <p className="mt-2 text-white/80">
            These insights are curated for the Oakland market. For advice tailored
            to your specific situation, let&apos;s talk.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={`tel:${siteConfig.agent.phone}`}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent-dark transition-colors"
            >
              Call Nasim
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Send a Message
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

function NewsCard({
  item,
  expanded,
  onToggle,
}: {
  item: NewsItem;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-xl border border-border bg-card border-l-4 ${impactColors[item.impact]} transition-all`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left p-5"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${categoryColors[item.category]}`}
              >
                {categoryIcons[item.category]}
                {item.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                {impactIcons[item.impact]}
                {item.impact} impact
              </span>
              <span className="text-xs text-muted-foreground">
                {new Date(item.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
              {item.summary}
            </p>
          </div>
        </div>
      </button>

      {expanded && (
        <div className="px-5 pb-5 border-t border-border pt-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {item.summary}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Source: {item.source}
          </p>

          <div className="mt-4">
            <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-primary" />
              Action Items for You
            </p>
            <ul className="space-y-1.5">
              {item.actionItems.map((action) => (
                <li
                  key={action}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <ArrowRight className="mt-0.5 h-3 w-3 flex-shrink-0 text-accent" />
                  {action}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

// Main page with auth gate
export default function DashboardPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LoginGate onLogin={() => setIsLoggedIn(true)} />;
  }

  return <DashboardContent />;
}
