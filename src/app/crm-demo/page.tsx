"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Sun,
  Bell,
  Users,
  Mail,
  Star,
  Home,
  TrendingUp,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Zap,
  BarChart3,
  DollarSign,
  Phone,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Eye,
  MapPin,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════
   SCENE DATA
   ═══════════════════════════════════════════ */

const scenes = [
  {
    time: "6:45 AM",
    title: "Morning Brief",
    subtitle: "Nasim opens her CRM to a personalized dashboard",
  },
  {
    time: "7:00 AM",
    title: "Lead Triage",
    subtitle: "New leads auto-categorized and scored overnight",
  },
  {
    time: "7:30 AM",
    title: "Smart Follow-ups",
    subtitle: "AI drafts personalized messages for each client",
  },
  {
    time: "8:15 AM",
    title: "Showing Prep",
    subtitle: "Everything she needs for today's showings, in one view",
  },
  {
    time: "9:00 AM",
    title: "Pipeline at a Glance",
    subtitle: "Every deal tracked from first contact to closing",
  },
  {
    time: "12:00 PM",
    title: "Midday Check-in",
    subtitle: "Performance snapshot and weekly goal tracker",
  },
];

/* ═══════════════════════════════════════════
   SCENE COMPONENTS
   ═══════════════════════════════════════════ */

const MorningBrief = () => (
  <div className="space-y-4">
    {/* Greeting */}
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-lg font-bold text-foreground">Good morning, Nasim</h3>
        <p className="text-sm text-muted-foreground">Saturday, March 22 &middot; Oakland, CA</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-accent">
          <Bell className="h-4 w-4" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">3</span>
        </span>
      </div>
    </div>

    {/* Stats row */}
    <div className="grid grid-cols-3 gap-3">
      {[
        { label: "New Leads", value: "4", icon: Users, color: "text-blue-500 bg-blue-500/10" },
        { label: "Showings Today", value: "3", icon: Calendar, color: "text-green-500 bg-green-500/10" },
        { label: "Market Alerts", value: "7", icon: TrendingUp, color: "text-amber-500 bg-amber-500/10" },
      ].map((stat) => (
        <div key={stat.label} className="rounded-lg border border-border bg-card p-3 text-center">
          <div className={cn("mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full", stat.color)}>
            <stat.icon className="h-4 w-4" />
          </div>
          <p className="text-2xl font-bold text-foreground font-display">{stat.value}</p>
          <p className="text-xs text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>

    {/* Today's schedule */}
    <div className="rounded-lg border border-border bg-card p-4">
      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
        <Clock className="h-4 w-4 text-primary" /> Today&apos;s Schedule
      </h4>
      <div className="space-y-2">
        {[
          { time: "9:00 AM", event: "Showing — 5432 College Ave, Rockridge", type: "showing" },
          { time: "10:30 AM", event: "Showing — 311 Oak St #405, Jack London", type: "showing" },
          { time: "1:00 PM", event: "Listing presentation — Chen family", type: "meeting" },
          { time: "3:00 PM", event: "Open house prep — 1789 Skyline Blvd", type: "prep" },
        ].map((item) => (
          <div key={item.time} className="flex items-center gap-3 text-sm">
            <span className="w-16 text-xs font-medium text-muted-foreground">{item.time}</span>
            <span className={cn(
              "h-2 w-2 rounded-full",
              item.type === "showing" ? "bg-blue-500" : item.type === "meeting" ? "bg-green-500" : "bg-amber-500"
            )} />
            <span className="text-foreground">{item.event}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Notifications */}
    <div className="rounded-lg border border-border bg-card p-4">
      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
        <Bell className="h-4 w-4 text-accent" /> Overnight Activity
      </h4>
      <div className="space-y-2">
        {[
          { text: "New lead from Zillow — Sarah K. interested in Rockridge", icon: Zap, ago: "2h ago" },
          { text: "Offer accepted! Patel family — 842 Alcatraz Ave", icon: CheckCircle, ago: "5h ago" },
          { text: "Mortgage rates dropped to 6.41% — 3 clients may benefit", icon: TrendingUp, ago: "6h ago" },
        ].map((note) => (
          <div key={note.text} className="flex items-start gap-2 text-sm">
            <note.icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
            <span className="text-foreground flex-1">{note.text}</span>
            <span className="text-xs text-muted-foreground whitespace-nowrap">{note.ago}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const LeadTriage = () => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
        <Target className="h-5 w-5 text-primary" /> Lead Inbox
      </h3>
      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">4 new overnight</span>
    </div>

    {[
      { name: "Sarah K.", source: "Zillow", score: 92, budget: "$1.2M", area: "Rockridge", priority: "hot", type: "Buyer", timeAgo: "2h ago" },
      { name: "Marcus & Tina J.", source: "Referral", score: 88, budget: "$850K", area: "Temescal", priority: "hot", type: "Buyer", timeAgo: "4h ago" },
      { name: "David Chen", source: "Website", score: 74, budget: "$1.8M listing", area: "Montclair", priority: "warm", type: "Seller", timeAgo: "6h ago" },
      { name: "Priya N.", source: "Instagram", score: 61, budget: "$650K", area: "Adams Point", priority: "new", type: "Buyer", timeAgo: "8h ago" },
    ].map((lead) => (
      <div key={lead.name} className="rounded-lg border border-border bg-card p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <div className="flex items-center gap-2">
              <p className="font-semibold text-foreground">{lead.name}</p>
              <span className={cn(
                "rounded-full px-2 py-0.5 text-[10px] font-semibold text-white",
                lead.type === "Buyer" ? "bg-blue-500" : "bg-green-500"
              )}>{lead.type}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">{lead.area} &middot; {lead.budget} &middot; via {lead.source}</p>
          </div>
          <span className="text-xs text-muted-foreground">{lead.timeAgo}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-muted-foreground">AI Score</span>
              <span className="font-semibold text-foreground">{lead.score}/100</span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div
                className={cn(
                  "h-full rounded-full transition-all",
                  lead.score >= 85 ? "bg-green-500" : lead.score >= 70 ? "bg-amber-500" : "bg-blue-400"
                )}
                style={{ width: `${lead.score}%` }}
              />
            </div>
          </div>
          <span className={cn(
            "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase",
            lead.priority === "hot" ? "bg-red-500/10 text-red-500" : lead.priority === "warm" ? "bg-amber-500/10 text-amber-500" : "bg-blue-500/10 text-blue-500"
          )}>{lead.priority}</span>
        </div>
      </div>
    ))}
  </div>
);

const SmartFollowups = () => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-accent" /> AI-Suggested Follow-ups
      </h3>
      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">3 drafts ready</span>
    </div>

    {[
      {
        client: "The Rivera Family",
        context: "Toured 2 homes in Rockridge last weekend. Loved the Craftsman on College Ave.",
        subject: "Re: Your Rockridge home search",
        draft: "Hi Maria & Carlos — I just heard back from the listing agent on 5432 College Ave. Great news: they're reviewing offers next Tuesday. Based on your feedback about the natural light and yard space, I think this one checks every box. Want to put together a competitive offer this weekend?",
        action: "Send offer strategy",
        channel: "email",
      },
      {
        client: "James & Nicole Patterson",
        context: "Under contract at 842 Alcatraz Ave. Inspection is Thursday.",
        subject: "Inspection prep & next steps",
        draft: "Hey James & Nicole! Quick update — your inspection at 842 Alcatraz is confirmed for Thursday at 10am. I've already flagged a few areas for the inspector to look closely at based on the disclosure. I'll be there the whole time. After that, we'll review findings together and decide on any repair requests.",
        action: "Confirm appointment",
        channel: "text",
      },
      {
        client: "David Chen",
        context: "New seller lead. Interested in listing Montclair home. No meeting set yet.",
        subject: "Complimentary home valuation",
        draft: "Hi David — thank you for reaching out about your Montclair home! I'd love to put together a complimentary market analysis. Montclair properties are seeing strong demand right now, with median prices around $1.65M. When would be a good time this week for a quick walkthrough?",
        action: "Schedule meeting",
        channel: "email",
      },
    ].map((item) => (
      <div key={item.client} className="rounded-lg border border-border bg-card p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="font-semibold text-foreground">{item.client}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{item.context}</p>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-accent">
            <Sparkles className="h-3 w-3" /> AI Draft
          </span>
        </div>
        <div className="mt-3 rounded-lg bg-muted/50 p-3">
          <p className="text-xs font-semibold text-foreground mb-1">
            {item.channel === "email" ? "✉️" : "💬"} {item.subject}
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{item.draft}</p>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex gap-2">
            <button className="rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white">{item.action}</button>
            <button className="rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-foreground">Edit draft</button>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            {item.channel === "email" ? <Mail className="h-3 w-3" /> : <MessageSquare className="h-3 w-3" />}
            {item.channel}
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ShowingPrep = () => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
        <Home className="h-5 w-5 text-primary" /> Showing Prep — 9:00 AM
      </h3>
      <span className="text-xs text-muted-foreground">For: Rivera Family</span>
    </div>

    {/* Property card */}
    <div className="rounded-lg border border-border bg-card overflow-hidden">
      <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-4 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Home className="h-8 w-8" />
        </div>
        <div>
          <p className="font-bold text-foreground text-lg">5432 College Ave</p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <MapPin className="h-3 w-3" /> Rockridge, Oakland
          </p>
          <p className="text-xl font-bold text-primary font-display mt-1">$1,495,000</p>
        </div>
      </div>
      <div className="p-4 grid grid-cols-4 gap-3 text-center text-sm border-t border-border">
        <div><p className="font-bold text-foreground">3</p><p className="text-xs text-muted-foreground">Beds</p></div>
        <div><p className="font-bold text-foreground">2</p><p className="text-xs text-muted-foreground">Baths</p></div>
        <div><p className="font-bold text-foreground">1,850</p><p className="text-xs text-muted-foreground">Sqft</p></div>
        <div><p className="font-bold text-foreground">1922</p><p className="text-xs text-muted-foreground">Built</p></div>
      </div>
    </div>

    {/* Comps table */}
    <div className="rounded-lg border border-border bg-card p-4">
      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
        <BarChart3 className="h-4 w-4 text-primary" /> Recent Comps
      </h4>
      <div className="space-y-2 text-sm">
        {[
          { addr: "5510 College Ave", price: "$1,520,000", sqft: "1,920", ratio: "103%", days: "8" },
          { addr: "5388 Boyd Ave", price: "$1,410,000", sqft: "1,780", ratio: "106%", days: "5" },
          { addr: "5601 Lawton Ave", price: "$1,475,000", sqft: "1,850", ratio: "101%", days: "12" },
        ].map((comp) => (
          <div key={comp.addr} className="flex items-center justify-between py-1 border-b border-border last:border-0">
            <span className="text-foreground">{comp.addr}</span>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">{comp.price}</span>
              <span>{comp.sqft} sqft</span>
              <span className="text-green-500 font-semibold">{comp.ratio}</span>
              <span>{comp.days}d</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Client preferences */}
    <div className="rounded-lg border border-border bg-card p-4">
      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
        <CheckCircle className="h-4 w-4 text-green-500" /> Client Preferences Match
      </h4>
      <div className="grid grid-cols-2 gap-2 text-sm">
        {[
          { pref: "3+ bedrooms", match: true },
          { pref: "Walkable to BART", match: true },
          { pref: "Under $1.5M", match: true },
          { pref: "Yard/garden space", match: true },
          { pref: "Updated kitchen", match: true },
          { pref: "Garage parking", match: false },
        ].map((p) => (
          <div key={p.pref} className="flex items-center gap-2">
            {p.match ? (
              <CheckCircle className="h-3.5 w-3.5 text-green-500" />
            ) : (
              <AlertCircle className="h-3.5 w-3.5 text-amber-500" />
            )}
            <span className={cn("text-sm", p.match ? "text-foreground" : "text-muted-foreground")}>{p.pref}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PipelineView = () => {
  const columns = [
    {
      title: "New Leads",
      color: "bg-blue-500",
      count: 4,
      cards: [
        { name: "Sarah K.", detail: "$1.2M · Rockridge", days: "2d" },
        { name: "Priya N.", detail: "$650K · Adams Point", days: "8d" },
      ],
    },
    {
      title: "Showings",
      color: "bg-purple-500",
      count: 3,
      cards: [
        { name: "Rivera Family", detail: "$1.5M · Rockridge", days: "12d" },
        { name: "Marcus & Tina", detail: "$850K · Temescal", days: "5d" },
      ],
    },
    {
      title: "Offers",
      color: "bg-amber-500",
      count: 2,
      cards: [
        { name: "Kim Family", detail: "$1.1M · Grand Lake", days: "18d" },
      ],
    },
    {
      title: "Under Contract",
      color: "bg-orange-500",
      count: 2,
      cards: [
        { name: "Pattersons", detail: "$975K · Temescal", days: "24d" },
        { name: "Patel Family", detail: "$1.3M · Montclair", days: "30d" },
      ],
    },
    {
      title: "Closed",
      color: "bg-green-500",
      count: 8,
      cards: [
        { name: "Garcia Family", detail: "$1.1M · Rockridge", days: "Closed 3/15" },
      ],
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
          <Eye className="h-5 w-5 text-primary" /> Deal Pipeline
        </h3>
        <span className="text-xs text-muted-foreground">19 active deals</span>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2">
        {columns.map((col) => (
          <div key={col.title} className="min-w-[180px] flex-1">
            <div className="flex items-center gap-2 mb-3">
              <div className={cn("h-2 w-2 rounded-full", col.color)} />
              <span className="text-xs font-semibold text-foreground">{col.title}</span>
              <span className="text-xs text-muted-foreground">({col.count})</span>
            </div>
            <div className="space-y-2">
              {col.cards.map((card) => (
                <div key={card.name} className="rounded-lg border border-border bg-card p-3">
                  <p className="text-sm font-semibold text-foreground">{card.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{card.detail}</p>
                  <p className="text-[10px] text-muted-foreground mt-1">{card.days}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MiddayCheckin = () => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
        <Sun className="h-5 w-5 text-accent" /> Midday Performance
      </h3>
      <span className="text-xs text-muted-foreground">Week of March 22</span>
    </div>

    {/* Key metrics */}
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {[
        { label: "Deals Closing", value: "3", sub: "this month", icon: CheckCircle, color: "text-green-500" },
        { label: "Commission", value: "$47.2K", sub: "projected", icon: DollarSign, color: "text-primary" },
        { label: "Avg Response", value: "12min", sub: "today", icon: Clock, color: "text-blue-500" },
        { label: "Showings Done", value: "2/3", sub: "today", icon: Home, color: "text-amber-500" },
      ].map((m) => (
        <div key={m.label} className="rounded-lg border border-border bg-card p-3 text-center">
          <m.icon className={cn("mx-auto h-5 w-5 mb-1", m.color)} />
          <p className="text-xl font-bold text-foreground font-display">{m.value}</p>
          <p className="text-[10px] text-muted-foreground">{m.label}</p>
          <p className="text-[10px] text-muted-foreground">{m.sub}</p>
        </div>
      ))}
    </div>

    {/* Weekly goals */}
    <div className="rounded-lg border border-border bg-card p-4">
      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
        <Target className="h-4 w-4 text-primary" /> Weekly Goals
      </h4>
      <div className="space-y-3">
        {[
          { goal: "New leads contacted", current: 8, target: 10, pct: 80 },
          { goal: "Showings completed", current: 6, target: 8, pct: 75 },
          { goal: "Offers submitted", current: 2, target: 3, pct: 67 },
          { goal: "Follow-ups sent", current: 14, target: 15, pct: 93 },
        ].map((g) => (
          <div key={g.goal}>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-foreground">{g.goal}</span>
              <span className="text-muted-foreground">{g.current}/{g.target}</span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div
                className={cn(
                  "h-full rounded-full",
                  g.pct >= 90 ? "bg-green-500" : g.pct >= 70 ? "bg-primary" : "bg-amber-500"
                )}
                style={{ width: `${g.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Closing this week */}
    <div className="rounded-lg border border-border bg-card p-4">
      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
        <DollarSign className="h-4 w-4 text-green-500" /> Closing This Week
      </h4>
      <div className="space-y-2">
        {[
          { client: "Patel Family", property: "842 Alcatraz Ave", price: "$1,325,000", date: "Mar 24", commission: "$19,875" },
          { client: "Garcia Family", property: "217 Grand Ave #8", price: "$725,000", date: "Mar 26", commission: "$10,875" },
        ].map((deal) => (
          <div key={deal.client} className="flex items-center justify-between py-2 border-b border-border last:border-0">
            <div>
              <p className="text-sm font-semibold text-foreground">{deal.client}</p>
              <p className="text-xs text-muted-foreground">{deal.property} &middot; {deal.date}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-foreground">{deal.price}</p>
              <p className="text-xs text-green-500 font-semibold">{deal.commission}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════
   SCENE RENDERER
   ═══════════════════════════════════════════ */

const sceneComponents = [MorningBrief, LeadTriage, SmartFollowups, ShowingPrep, PipelineView, MiddayCheckin];

/* ═══════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════ */

export default function CrmDemoPage() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((index: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(index);
      setFading(false);
    }, 300);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % scenes.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + scenes.length) % scenes.length);
  }, [current, goTo]);

  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [playing, next]);

  const scene = scenes[current];
  const SceneComponent = sceneComponents[current];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-4 py-8 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">Live Demo</p>
          <h1 className="text-3xl font-bold text-foreground font-display md:text-4xl lg:text-5xl">
            Nasim&apos;s Morning with Her CRM
          </h1>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Watch how Nasim uses her custom CRM to manage leads, prep for showings,
            and close deals — all before lunch.
          </p>
        </div>
      </div>

      {/* Scene viewer */}
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        {/* Time + title bar */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-white">
            <Clock className="h-4 w-4" />
            <span className="text-sm font-bold font-display">{scene.time}</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground font-display">{scene.title}</h2>
            <p className="text-sm text-muted-foreground">{scene.subtitle}</p>
          </div>
        </div>

        {/* Scene content */}
        <div
          className={cn(
            "rounded-2xl border border-border bg-card p-6 shadow-sm transition-opacity duration-300 min-h-[500px]",
            fading ? "opacity-0" : "opacity-100"
          )}
        >
          <SceneComponent />
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-between">
          {/* Prev/Next */}
          <button
            onClick={prev}
            className="rounded-lg border border-border p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Dots + play/pause */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPlaying(!playing)}
              className="rounded-lg border border-border p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>
            <div className="flex items-center gap-1.5">
              {scenes.map((s, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={cn(
                    "transition-all duration-300 rounded-full",
                    i === current
                      ? "h-2.5 w-8 bg-primary"
                      : "h-2.5 w-2.5 bg-border hover:bg-muted-foreground"
                  )}
                  title={`${s.time} — ${s.title}`}
                />
              ))}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="rounded-lg border border-border p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Scene labels */}
        <div className="mt-4 flex justify-center gap-1 overflow-x-auto pb-2">
          {scenes.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={cn(
                "rounded-lg px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap",
                i === current
                  ? "bg-primary text-white"
                  : "text-muted-foreground hover:bg-muted"
              )}
            >
              {s.time} {s.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
