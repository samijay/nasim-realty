"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Sun,
  CloudSun,
  Bell,
  Users,
  Mail,
  Star,
  Home,
  TrendingUp,
  TrendingDown,
  Calendar,
  Clock,
  CheckCircle,
  CheckCircle2,
  AlertCircle,
  Zap,
  BarChart3,
  DollarSign,
  Phone,
  MessageSquare,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Eye,
  MapPin,
  Target,
  Route,
  Trophy,
  Send,
  Edit3,
  Timer,
  CircleDot,
  Flame,
  ThermometerSun,
  Snowflake,
  FileText,
  Activity,
  PieChart,
  Gift,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ============================================================
   CONSTANTS
   ============================================================ */

const SCENE_DURATION = 6000;
const GOLD = "#C8A55C";

/* ============================================================
   SCENE DATA
   ============================================================ */

const scenes = [
  {
    time: "6:45 AM",
    title: "Morning Dashboard",
    subtitle: "Nasim opens her CRM to a personalized command center",
  },
  {
    time: "7:00 AM",
    title: "Lead Pipeline",
    subtitle: "New leads auto-scored and organized into a visual pipeline",
  },
  {
    time: "7:15 AM",
    title: "AI Follow-ups",
    subtitle: "AI drafted personalized follow-ups overnight while Nasim slept",
  },
  {
    time: "8:00 AM",
    title: "Showing Prep",
    subtitle: "Everything she needs for today's showings, route-optimized",
  },
  {
    time: "9:00 AM",
    title: "Deal Tracker",
    subtitle: "Every active deal tracked from first contact to closing day",
  },
  {
    time: "12:00 PM",
    title: "Market Pulse",
    subtitle: "Real-time market intelligence matched to her buyer profiles",
  },
  {
    time: "5:00 PM",
    title: "Daily Wrap",
    subtitle: "Today's wins, weekly progress, and tomorrow's auto-generated plan",
  },
];

/* ============================================================
   SCENE 1 — MORNING DASHBOARD
   ============================================================ */

const MorningDashboard = () => (
  <div className="space-y-5">
    {/* Greeting row */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#C8A55C] to-[#A68A3E]">
          <span className="text-lg font-bold text-white">N</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Good morning, Nasim</h3>
          <div className="flex items-center gap-2 text-sm text-white/50">
            <CloudSun className="h-4 w-4 text-amber-400" />
            <span>68 F &middot; Oakland, CA &middot; Tuesday, April 1</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-white/15 transition-colors cursor-pointer">
          <Bell className="h-4 w-4" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">5</span>
        </span>
      </div>
    </div>

    {/* Stats row */}
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {[
        { label: "New Leads", value: "4", icon: Users, accent: "text-blue-400 bg-blue-400/10", change: "+2 from yesterday" },
        { label: "Showings Today", value: "3", icon: Calendar, accent: "text-emerald-400 bg-emerald-400/10", change: "Next at 9:00 AM" },
        { label: "Offers Pending", value: "2", icon: FileText, accent: "text-amber-400 bg-amber-400/10", change: "1 response expected" },
        { label: "Pipeline Value", value: "$4.2M", icon: DollarSign, accent: "text-[#C8A55C] bg-[#C8A55C]/10", change: "+$380K this week" },
      ].map((stat) => (
        <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between mb-2">
            <div className={cn("flex h-8 w-8 items-center justify-center rounded-lg", stat.accent)}>
              <stat.icon className="h-4 w-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-white">{stat.value}</p>
          <p className="text-xs text-white/40 mt-0.5">{stat.label}</p>
          <p className="text-[10px] text-emerald-400/80 mt-1">{stat.change}</p>
        </div>
      ))}
    </div>

    {/* Priority tasks */}
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
        <Target className="h-4 w-4 text-[#C8A55C]" /> Priority Tasks
      </h4>
      <div className="space-y-2">
        {[
          { task: "Review & send AI-drafted follow-up to Sarah K. (Rockridge buyer)", done: false, urgent: true },
          { task: "Prep CMA for David Chen listing presentation (Montclair)", done: false, urgent: true },
          { task: "Confirm inspection time with Patterson family (842 Alcatraz)", done: true, urgent: false },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-sm">
            <div className={cn(
              "flex h-5 w-5 items-center justify-center rounded border transition-colors cursor-pointer",
              item.done
                ? "border-emerald-500 bg-emerald-500/20"
                : "border-white/20 hover:border-white/40"
            )}>
              {item.done && <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />}
            </div>
            <span className={cn("flex-1", item.done ? "text-white/30 line-through" : "text-white/80")}>
              {item.task}
            </span>
            {item.urgent && !item.done && (
              <span className="rounded-full bg-red-500/15 px-2 py-0.5 text-[10px] font-semibold text-red-400">Urgent</span>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* Recent activity */}
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
        <Activity className="h-4 w-4 text-blue-400" /> Recent Activity
      </h4>
      <div className="space-y-2.5">
        {[
          { text: "New Zillow lead — Sarah K. interested in Rockridge 3BR homes", icon: Zap, time: "2h ago", color: "text-blue-400" },
          { text: "Offer accepted! Patel family at 842 Alcatraz Ave ($1.33M)", icon: Trophy, time: "5h ago", color: "text-emerald-400" },
          { text: "Mortgage rates dropped to 6.41% — 3 clients may benefit", icon: TrendingDown, time: "6h ago", color: "text-amber-400" },
        ].map((note, i) => (
          <div key={i} className="flex items-start gap-3 text-sm">
            <div className={cn("mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/5", note.color)}>
              <note.icon className="h-3.5 w-3.5" />
            </div>
            <span className="text-white/70 flex-1">{note.text}</span>
            <span className="text-xs text-white/30 whitespace-nowrap">{note.time}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ============================================================
   SCENE 2 — LEAD PIPELINE (KANBAN)
   ============================================================ */

const LeadPipeline = () => {
  const columns = [
    {
      title: "New",
      count: 3,
      color: "bg-blue-500",
      cards: [
        { name: "Sarah K.", interest: "3BR Craftsman, Rockridge", score: "hot", source: "Zillow", budget: "$1.2M" },
        { name: "Priya Nair", interest: "1BR condo, Adams Point", score: "warm", source: "Instagram", budget: "$650K" },
        { name: "Tom & Lisa W.", interest: "4BR family home, Montclair", score: "warm", source: "Website", budget: "$1.6M" },
      ],
    },
    {
      title: "Contacted",
      count: 5,
      color: "bg-purple-500",
      cards: [
        { name: "Marcus & Tina J.", interest: "2BR+ near BART, Temescal", score: "hot", source: "Referral", budget: "$850K" },
        { name: "David Chen", interest: "Listing — Montclair home", score: "hot", source: "Website", budget: "$1.8M" },
        { name: "Jennifer Liu", interest: "Investment duplex, Grand Lake", score: "warm", source: "Open House", budget: "$1.1M" },
      ],
    },
    {
      title: "Showing",
      count: 4,
      color: "bg-amber-500",
      cards: [
        { name: "Rivera Family", interest: "3BR Craftsman, Rockridge", score: "hot", source: "Referral", budget: "$1.5M" },
        { name: "Kim Family", interest: "Townhome, Grand Lake", score: "warm", source: "Zillow", budget: "$975K" },
      ],
    },
    {
      title: "Offer",
      count: 2,
      color: "bg-orange-500",
      cards: [
        { name: "Pattersons", interest: "842 Alcatraz Ave, Temescal", score: "hot", source: "Referral", budget: "$975K" },
        { name: "Okonkwo Family", interest: "1221 Park Blvd, Piedmont", score: "hot", source: "Sphere", budget: "$2.1M" },
      ],
    },
    {
      title: "Closing",
      count: 1,
      color: "bg-emerald-500",
      cards: [
        { name: "Patel Family", interest: "3417 Piedmont Ave", score: "hot", source: "Referral", budget: "$1.33M" },
      ],
    },
  ];

  const scoreConfig: Record<string, { bg: string; text: string; icon: typeof Flame }> = {
    hot: { bg: "bg-red-500/15", text: "text-red-400", icon: Flame },
    warm: { bg: "bg-amber-500/15", text: "text-amber-400", icon: ThermometerSun },
    cold: { bg: "bg-blue-400/15", text: "text-blue-300", icon: Snowflake },
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Eye className="h-5 w-5 text-[#C8A55C]" /> Lead Pipeline
        </h3>
        <span className="text-xs text-white/40">15 active leads &middot; $12.8M total interest</span>
      </div>

      {/* Column headers summary */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {columns.map((col) => (
          <div key={col.title} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <div className={cn("h-2 w-2 rounded-full", col.color)} />
            <span className="text-xs font-medium text-white/70">{col.title}</span>
            <span className="text-xs font-bold text-white">{col.count}</span>
          </div>
        ))}
      </div>

      {/* Kanban board */}
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">
        {columns.map((col) => (
          <div key={col.title} className="min-w-[200px] flex-1">
            <div className="flex items-center gap-2 mb-2 px-1">
              <div className={cn("h-2 w-2 rounded-full", col.color)} />
              <span className="text-xs font-semibold text-white/80">{col.title}</span>
              <span className="ml-auto text-[10px] text-white/30">{col.count}</span>
            </div>
            <div className="space-y-2">
              {col.cards.map((card) => {
                const sc = scoreConfig[card.score];
                const ScoreIcon = sc.icon;
                return (
                  <div key={card.name} className="rounded-xl border border-white/10 bg-white/[0.04] p-3 hover:bg-white/[0.07] transition-colors cursor-pointer group">
                    <div className="flex items-start justify-between mb-1.5">
                      <p className="text-sm font-semibold text-white group-hover:text-[#C8A55C] transition-colors">{card.name}</p>
                      <span className={cn("flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase", sc.bg, sc.text)}>
                        <ScoreIcon className="h-2.5 w-2.5" />
                        {card.score}
                      </span>
                    </div>
                    <p className="text-xs text-white/50 mb-1.5">{card.interest}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-white/70">{card.budget}</span>
                      <span className="text-[10px] text-white/30">via {card.source}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ============================================================
   SCENE 3 — AI FOLLOW-UPS
   ============================================================ */

const AIFollowups = () => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-bold text-white flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-[#C8A55C]" /> AI Follow-ups
      </h3>
      <span className="flex items-center gap-1.5 rounded-full bg-[#C8A55C]/10 px-3 py-1 text-xs font-semibold text-[#C8A55C]">
        <Sparkles className="h-3 w-3" /> 3 drafts ready
      </span>
    </div>

    <div className="rounded-xl border border-[#C8A55C]/20 bg-[#C8A55C]/5 p-3">
      <p className="text-xs text-[#C8A55C]/80 flex items-center gap-2">
        <Sparkles className="h-3.5 w-3.5" />
        Based on Sarah&apos;s search history, I&apos;ve drafted a message about the new Rockridge listing that matches her criteria.
      </p>
    </div>

    {[
      {
        client: "Sarah K.",
        context: "New lead from Zillow, interested in 3BR Craftsman homes in Rockridge. Budget $1.2M.",
        subject: "A Rockridge home I think you'll love",
        draft: "Hi Sarah! I noticed you've been looking at Craftsman-style homes in Rockridge. I wanted to share a listing that just came on the market at 5432 College Ave — it's a beautifully restored 1922 Craftsman with 3 beds, 2 baths, and a sun-drenched backyard. It's listed at $1,495,000 but given current comps, there may be room to negotiate. Would you like to schedule a private showing this week?",
        channel: "email",
        priority: "High — hot lead, respond within 2 hours",
      },
      {
        client: "Rivera Family",
        context: "Toured 2 homes in Rockridge last weekend. Loved 5432 College Ave Craftsman.",
        subject: "Re: Your Rockridge home search — offer strategy",
        draft: "Hi Maria & Carlos — I just heard back from the listing agent on 5432 College Ave. Great news: they're reviewing offers next Tuesday. Based on your feedback about the natural light and yard space, I think this one checks every box. I've prepared a comp analysis showing recent sales in the $1.4-1.5M range. Want to meet Saturday to put together a competitive offer?",
        channel: "email",
        priority: "High — offer deadline approaching",
      },
      {
        client: "David Chen",
        context: "New seller lead interested in listing his Montclair home. No meeting set yet.",
        subject: "Complimentary home valuation — Montclair",
        draft: "Hi David, thank you for reaching out about your Montclair home! Montclair is one of the strongest micro-markets in Oakland right now — median sale price has climbed to $1.65M with homes selling in under 14 days. I'd love to do a complimentary walkthrough and prepare a detailed market analysis. Are you available this Thursday or Friday afternoon?",
        channel: "email",
        priority: "Medium — nurture new seller lead",
      },
    ].map((item) => (
      <div key={item.client} className="rounded-xl border border-white/10 bg-white/[0.04] overflow-hidden">
        <div className="p-4">
          <div className="flex items-start justify-between mb-1">
            <div>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-white">{item.client}</p>
                <span className="rounded-full bg-[#C8A55C]/10 px-2 py-0.5 text-[10px] font-semibold text-[#C8A55C] flex items-center gap-1">
                  <Sparkles className="h-2.5 w-2.5" /> AI Draft
                </span>
              </div>
              <p className="text-xs text-white/40 mt-0.5">{item.context}</p>
            </div>
          </div>

          {/* Email preview */}
          <div className="mt-3 rounded-lg bg-white/[0.06] border border-white/5 p-3">
            <div className="flex items-center gap-2 text-xs text-white/50 mb-2 pb-2 border-b border-white/5">
              <Mail className="h-3 w-3" />
              <span className="font-medium text-white/70">{item.subject}</span>
            </div>
            <p className="text-xs text-white/50 leading-relaxed">{item.draft}</p>
          </div>

          <p className="text-[10px] text-amber-400/70 mt-2 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {item.priority}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center border-t border-white/5 divide-x divide-white/5">
          <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-emerald-400 hover:bg-emerald-400/5 transition-colors">
            <Send className="h-3.5 w-3.5" /> Send
          </button>
          <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-white/50 hover:bg-white/5 transition-colors">
            <Edit3 className="h-3.5 w-3.5" /> Edit
          </button>
          <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-white/50 hover:bg-white/5 transition-colors">
            <Timer className="h-3.5 w-3.5" /> Schedule
          </button>
        </div>
      </div>
    ))}
  </div>
);

/* ============================================================
   SCENE 4 — SHOWING PREP
   ============================================================ */

const ShowingPrep = () => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-bold text-white flex items-center gap-2">
        <Home className="h-5 w-5 text-[#C8A55C]" /> Today&apos;s Showings
      </h3>
      <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
        <Route className="h-3 w-3" /> Route optimized — 12 min between stops
      </span>
    </div>

    {/* Timeline */}
    <div className="relative space-y-4 pl-8">
      {/* Vertical timeline line */}
      <div className="absolute left-[13px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500" />

      {[
        {
          time: "9:00 AM",
          address: "5432 College Ave",
          neighborhood: "Rockridge",
          client: "Rivera Family",
          price: "$1,495,000",
          beds: 3, baths: 2, sqft: "1,850",
          prepNotes: "Clients love natural light — highlight the south-facing sunroom. Bring comp sheet from Boyd Ave.",
          clientPrefs: "Walkable to BART, 3+ beds, yard, under $1.5M",
          color: "bg-blue-500",
          dotColor: "border-blue-500",
        },
        {
          time: "10:30 AM",
          address: "311 41st St #12",
          neighborhood: "Temescal",
          client: "Marcus & Tina J.",
          price: "$875,000",
          beds: 2, baths: 2, sqft: "1,150",
          prepNotes: "First-time buyers, emphasize HOA includes earthquake insurance. Close to Temescal Alley dining.",
          clientPrefs: "Near BART, 2BR+, modern kitchen, under $900K",
          color: "bg-purple-500",
          dotColor: "border-purple-500",
        },
        {
          time: "12:00 PM",
          address: "4501 Park Blvd",
          neighborhood: "Grand Lake",
          client: "Kim Family",
          price: "$1,150,000",
          beds: 3, baths: 2, sqft: "1,620",
          prepNotes: "Near Grand Lake Farmer's Market. Updated kitchen 2023. Good schools (Crocker Highlands).",
          clientPrefs: "Good schools, 3BR, walkable neighborhood, garage",
          color: "bg-emerald-500",
          dotColor: "border-emerald-500",
        },
      ].map((showing) => (
        <div key={showing.time} className="relative">
          {/* Timeline dot */}
          <div className={cn("absolute -left-8 top-3 h-[10px] w-[10px] rounded-full border-2", showing.dotColor, "bg-[#0A0F1A]")} />

          <div className="rounded-xl border border-white/10 bg-white/[0.04] overflow-hidden hover:bg-white/[0.06] transition-colors">
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-bold text-white", showing.color)}>{showing.time}</span>
                    <span className="text-xs text-white/40">{showing.client}</span>
                  </div>
                  <p className="text-base font-bold text-white flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-white/30" />
                    {showing.address}
                  </p>
                  <p className="text-xs text-white/40">{showing.neighborhood}, Oakland</p>
                </div>
                <p className="text-lg font-bold text-[#C8A55C]">{showing.price}</p>
              </div>

              {/* Property specs */}
              <div className="flex gap-4 text-xs text-white/50 mb-3 mt-2">
                <span>{showing.beds} beds</span>
                <span>{showing.baths} baths</span>
                <span>{showing.sqft} sqft</span>
              </div>

              {/* Prep notes */}
              <div className="rounded-lg bg-white/[0.04] border border-white/5 p-2.5 text-xs">
                <p className="text-white/30 uppercase tracking-wider text-[10px] font-semibold mb-1">Prep Notes</p>
                <p className="text-white/60 leading-relaxed">{showing.prepNotes}</p>
              </div>

              {/* Client prefs */}
              <div className="mt-2 flex items-center gap-2 text-[10px] text-white/30">
                <Users className="h-3 w-3" />
                <span>Client wants: {showing.clientPrefs}</span>
              </div>
            </div>

            {/* Quick actions */}
            <div className="flex border-t border-white/5 divide-x divide-white/5">
              <button className="flex-1 flex items-center justify-center gap-1 py-2 text-[11px] text-white/40 hover:text-white/70 hover:bg-white/5 transition-colors">
                <Home className="h-3 w-3" /> Details
              </button>
              <button className="flex-1 flex items-center justify-center gap-1 py-2 text-[11px] text-white/40 hover:text-white/70 hover:bg-white/5 transition-colors">
                <BarChart3 className="h-3 w-3" /> Comps
              </button>
              <button className="flex-1 flex items-center justify-center gap-1 py-2 text-[11px] text-white/40 hover:text-white/70 hover:bg-white/5 transition-colors">
                <Users className="h-3 w-3" /> Client
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ============================================================
   SCENE 5 — DEAL TRACKER
   ============================================================ */

const DealTracker = () => {
  const deals = [
    { property: "5432 College Ave", client: "Rivera Family", stage: "Showing", price: "$1,495,000", commission: "$22,425", days: 12, pct: 25, neighborhood: "Rockridge" },
    { property: "842 Alcatraz Ave", client: "Patterson Family", stage: "Under Contract", price: "$975,000", commission: "$14,625", days: 24, pct: 75, neighborhood: "Temescal" },
    { property: "3417 Piedmont Ave", client: "Patel Family", stage: "Closing", price: "$1,330,000", commission: "$19,950", days: 38, pct: 95, neighborhood: "Piedmont" },
    { property: "1221 Park Blvd", client: "Okonkwo Family", stage: "Offer", price: "$2,100,000", commission: "$31,500", days: 18, pct: 50, neighborhood: "Piedmont" },
    { property: "4501 Park Blvd", client: "Kim Family", stage: "Showing", price: "$1,150,000", commission: "$17,250", days: 8, pct: 20, neighborhood: "Grand Lake" },
  ];

  const stageColors: Record<string, string> = {
    Showing: "bg-amber-500/15 text-amber-400",
    Offer: "bg-orange-500/15 text-orange-400",
    "Under Contract": "bg-blue-500/15 text-blue-400",
    Closing: "bg-emerald-500/15 text-emerald-400",
  };

  const barColors: Record<string, string> = {
    Showing: "bg-amber-500",
    Offer: "bg-orange-500",
    "Under Contract": "bg-blue-500",
    Closing: "bg-emerald-500",
  };

  const totalPipeline = "$7.05M";
  const totalCommission = "$105,750";

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-[#C8A55C]" /> Deal Tracker
        </h3>
        <div className="text-right">
          <p className="text-xs text-white/40">Pipeline Value</p>
          <p className="text-lg font-bold text-[#C8A55C]">{totalPipeline}</p>
        </div>
      </div>

      {/* Summary bar */}
      <div className="flex gap-3 text-center">
        {[
          { label: "Active Deals", value: "5", color: "text-white" },
          { label: "Projected Commission", value: totalCommission, color: "text-emerald-400" },
          { label: "Avg. Days Active", value: "20", color: "text-blue-400" },
        ].map((s) => (
          <div key={s.label} className="flex-1 rounded-xl border border-white/10 bg-white/5 p-3">
            <p className={cn("text-xl font-bold", s.color)}>{s.value}</p>
            <p className="text-[10px] text-white/40">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Deals table */}
      <div className="rounded-xl border border-white/10 bg-white/[0.04] overflow-hidden">
        {/* Table header */}
        <div className="grid grid-cols-12 gap-2 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-white/30 border-b border-white/5">
          <div className="col-span-3">Property</div>
          <div className="col-span-2">Client</div>
          <div className="col-span-2">Stage</div>
          <div className="col-span-2 text-right">Price</div>
          <div className="col-span-1 text-right">Days</div>
          <div className="col-span-2">Progress</div>
        </div>

        {/* Table rows */}
        {deals.map((deal) => (
          <div key={deal.property} className="grid grid-cols-12 gap-2 items-center px-4 py-3 border-b border-white/5 last:border-0 hover:bg-white/[0.03] transition-colors cursor-pointer">
            <div className="col-span-3">
              <p className="text-sm font-medium text-white">{deal.property}</p>
              <p className="text-[10px] text-white/30">{deal.neighborhood}</p>
            </div>
            <div className="col-span-2 text-xs text-white/60">{deal.client}</div>
            <div className="col-span-2">
              <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-semibold", stageColors[deal.stage])}>
                {deal.stage}
              </span>
            </div>
            <div className="col-span-2 text-right">
              <p className="text-sm font-semibold text-white">{deal.price}</p>
              <p className="text-[10px] text-emerald-400/70">{deal.commission}</p>
            </div>
            <div className="col-span-1 text-right text-xs text-white/40">{deal.days}d</div>
            <div className="col-span-2">
              <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div className={cn("h-full rounded-full transition-all", barColors[deal.stage])} style={{ width: `${deal.pct}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ============================================================
   SCENE 6 — MARKET PULSE
   ============================================================ */

const MarketPulse = () => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-bold text-white flex items-center gap-2">
        <TrendingUp className="h-5 w-5 text-[#C8A55C]" /> Market Pulse
      </h3>
      <span className="text-xs text-white/40">Oakland &middot; Live</span>
    </div>

    {/* Hot alert */}
    <div className="rounded-xl border border-[#C8A55C]/30 bg-gradient-to-r from-[#C8A55C]/10 to-transparent p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C8A55C]/20">
          <Zap className="h-5 w-5 text-[#C8A55C]" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-white">New listing in Rockridge matches 3 buyer profiles</p>
          <p className="text-xs text-white/50 mt-1">5891 Claremont Ave — 3BR/2BA, 1,920 sqft, listed at $1,375,000. Matches criteria for Sarah K., Rivera Family, and Tom & Lisa W.</p>
          <div className="mt-2 flex gap-2">
            <button className="rounded-lg bg-[#C8A55C] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#B8953C] transition-colors">Notify Clients</button>
            <button className="rounded-lg border border-white/10 px-3 py-1.5 text-xs font-semibold text-white/60 hover:bg-white/5 transition-colors">View Listing</button>
          </div>
        </div>
      </div>
    </div>

    {/* Price change alerts */}
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
      <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
        <Bell className="h-4 w-4 text-amber-400" /> Price Changes Today
      </h4>
      <div className="space-y-2.5">
        {[
          { address: "2218 Encinal Ave, Alameda", change: "-$25,000", from: "$1,100,000", to: "$1,075,000", direction: "down", days: "21 DOM" },
          { address: "688 Haddon Rd, Piedmont", change: "-$50,000", from: "$2,450,000", to: "$2,400,000", direction: "down", days: "34 DOM" },
        ].map((alert) => (
          <div key={alert.address} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
            <div>
              <p className="text-sm text-white/80">{alert.address}</p>
              <p className="text-[10px] text-white/30">{alert.days} &middot; {alert.from} &rarr; {alert.to}</p>
            </div>
            <span className="flex items-center gap-1 text-sm font-bold text-red-400">
              <TrendingDown className="h-3.5 w-3.5" />
              {alert.change}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Neighborhood stats */}
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
      <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
        <BarChart3 className="h-4 w-4 text-blue-400" /> Oakland Neighborhood Snapshot
      </h4>
      <div className="space-y-3">
        {[
          { name: "Rockridge", median: "$1.52M", dom: "11", newThisWeek: 4, trend: "+3.2%" },
          { name: "Temescal", median: "$985K", dom: "14", newThisWeek: 6, trend: "+1.8%" },
          { name: "Montclair", median: "$1.65M", dom: "9", newThisWeek: 3, trend: "+4.1%" },
          { name: "Grand Lake", median: "$1.12M", dom: "16", newThisWeek: 5, trend: "+2.4%" },
          { name: "Piedmont", median: "$2.35M", dom: "18", newThisWeek: 2, trend: "-0.5%" },
        ].map((n) => (
          <div key={n.name} className="grid grid-cols-5 gap-2 items-center text-sm py-1.5 border-b border-white/5 last:border-0">
            <span className="font-medium text-white">{n.name}</span>
            <span className="text-white/60 text-center">{n.median}</span>
            <span className="text-white/40 text-center">{n.dom} days</span>
            <span className="text-white/40 text-center">{n.newThisWeek} new</span>
            <span className={cn(
              "text-right font-semibold text-xs",
              n.trend.startsWith("+") ? "text-emerald-400" : "text-red-400"
            )}>{n.trend}</span>
          </div>
        ))}
        {/* Column headers */}
        <div className="grid grid-cols-5 gap-2 text-[10px] uppercase tracking-wider text-white/20 pt-1">
          <span>Area</span>
          <span className="text-center">Median</span>
          <span className="text-center">Avg DOM</span>
          <span className="text-center">New/Wk</span>
          <span className="text-right">YoY</span>
        </div>
      </div>
    </div>

    {/* Mini trend chart (ASCII representation) */}
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
      <h4 className="text-sm font-semibold text-white mb-3">Oakland Median Price — 6 Month Trend</h4>
      <div className="flex items-end gap-1 h-20">
        {[62, 64, 63, 67, 70, 72, 71, 74, 76, 78, 80, 82].map((val, i) => (
          <div
            key={i}
            className={cn(
              "flex-1 rounded-t transition-all",
              i === 11 ? "bg-[#C8A55C]" : "bg-white/10"
            )}
            style={{ height: `${val}%` }}
          />
        ))}
      </div>
      <div className="flex justify-between text-[10px] text-white/20 mt-2">
        <span>Oct</span>
        <span>Nov</span>
        <span>Dec</span>
        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
      </div>
    </div>
  </div>
);

/* ============================================================
   SCENE 7 — DAILY WRAP
   ============================================================ */

const DailyWrap = () => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-bold text-white flex items-center gap-2">
        <Sun className="h-5 w-5 text-[#C8A55C]" /> Daily Wrap-up
      </h3>
      <span className="text-xs text-white/40">Tuesday, April 1</span>
    </div>

    {/* Today's accomplishments */}
    <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
      <h4 className="text-sm font-semibold text-emerald-400 mb-3 flex items-center gap-2">
        <Trophy className="h-4 w-4" /> Today&apos;s Wins
      </h4>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "Showings", value: "3", sub: "completed" },
          { label: "Follow-ups", value: "5", sub: "sent" },
          { label: "Offers", value: "1", sub: "submitted" },
          { label: "New Leads", value: "2", sub: "contacted" },
        ].map((w) => (
          <div key={w.label} className="text-center">
            <p className="text-2xl font-bold text-white">{w.value}</p>
            <p className="text-xs text-white/40">{w.label} {w.sub}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Weekly goal progress */}
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-semibold text-white flex items-center gap-2">
          <Target className="h-4 w-4 text-blue-400" /> Weekly Goal Progress
        </h4>
        <span className="text-lg font-bold text-[#C8A55C]">68%</span>
      </div>

      {/* Main progress bar */}
      <div className="h-3 rounded-full bg-white/10 overflow-hidden mb-4">
        <div className="h-full rounded-full bg-gradient-to-r from-[#C8A55C] to-amber-400 transition-all" style={{ width: "68%" }} />
      </div>

      <div className="space-y-2.5">
        {[
          { goal: "Leads contacted", current: 8, target: 12, pct: 67 },
          { goal: "Showings completed", current: 7, target: 10, pct: 70 },
          { goal: "Offers submitted", current: 2, target: 3, pct: 67 },
          { goal: "Listings acquired", current: 1, target: 2, pct: 50 },
          { goal: "Follow-ups sent", current: 18, target: 20, pct: 90 },
        ].map((g) => (
          <div key={g.goal}>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-white/60">{g.goal}</span>
              <span className="text-white/40">{g.current}/{g.target}</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div
                className={cn(
                  "h-full rounded-full",
                  g.pct >= 80 ? "bg-emerald-500" : g.pct >= 60 ? "bg-[#C8A55C]" : "bg-amber-500"
                )}
                style={{ width: `${g.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Revenue tracker */}
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
      <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
        <DollarSign className="h-4 w-4 text-emerald-400" /> Revenue Tracker
      </h4>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-white/[0.04] border border-white/5 p-3 text-center">
          <p className="text-xs text-white/40 mb-1">This Month</p>
          <p className="text-2xl font-bold text-white">$42K</p>
          <p className="text-[10px] text-emerald-400">+$19.9K from Patel closing</p>
        </div>
        <div className="rounded-lg bg-white/[0.04] border border-white/5 p-3 text-center">
          <p className="text-xs text-white/40 mb-1">Quarterly Target</p>
          <p className="text-2xl font-bold text-white">$120K</p>
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden mt-2">
            <div className="h-full rounded-full bg-[#C8A55C]" style={{ width: "35%" }} />
          </div>
          <p className="text-[10px] text-white/40 mt-1">35% ($42K / $120K)</p>
        </div>
      </div>
    </div>

    {/* Tomorrow's priorities */}
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
      <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-[#C8A55C]" /> Tomorrow&apos;s Top Priorities
        <span className="text-[10px] text-[#C8A55C]/60 font-normal">(AI-generated)</span>
      </h4>
      <div className="space-y-2">
        {[
          "Submit offer for Rivera Family on 5432 College Ave (deadline Tuesday)",
          "Schedule listing presentation with David Chen (Montclair seller lead)",
          "Send inspection report summary to Patterson family",
          "Follow up with 3 new Rockridge listing matches",
        ].map((task, i) => (
          <div key={i} className="flex items-start gap-2.5 text-sm">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-white/50 mt-0.5">
              {i + 1}
            </span>
            <span className="text-white/60">{task}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ============================================================
   SCENE COMPONENTS ARRAY
   ============================================================ */

const sceneComponents = [
  MorningDashboard,
  LeadPipeline,
  AIFollowups,
  ShowingPrep,
  DealTracker,
  MarketPulse,
  DailyWrap,
];

/* ============================================================
   MAIN PAGE
   ============================================================ */

export default function CrmDemoPage() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [transitioning, setTransitioning] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (transitioning) return;
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setTransitioning(false);
        setProgressKey((k) => k + 1);
      }, 400);
    },
    [transitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % scenes.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + scenes.length) % scenes.length);
  }, [current, goTo]);

  // Auto-advance
  useEffect(() => {
    if (!playing) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      next();
    }, SCENE_DURATION);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [playing, next]);

  // Reset progress bar when scene changes
  useEffect(() => {
    setProgressKey((k) => k + 1);
  }, [current]);

  const scene = scenes[current];
  const SceneComponent = sceneComponents[current];

  return (
    <div className="min-h-screen bg-background">
      {/* ====== Hero Banner ====== */}
      <section className="bg-gradient-to-r from-primary-dark via-primary to-primary-dark py-16 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60 mb-3">Interactive Demo</p>
          <h1 className="text-3xl font-normal tracking-wide uppercase text-white font-display md:text-4xl lg:text-5xl">
            See Your CRM in Action
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            Watch how Nasim&apos;s morning transforms with a custom-built CRM —
            from lead triage to deal tracking, all before lunch.
          </p>
        </div>
      </section>

      {/* ====== Demo Area ====== */}
      <div className="bg-[#0A0F1A] min-h-screen">
        {/* Top progress bar */}
        <div className="h-1 bg-white/5">
          <div
            key={`progress-${progressKey}-${playing}`}
            className="h-full bg-[#C8A55C] rounded-r-full"
            style={{
              width: playing && !transitioning ? "100%" : "0%",
              transition: playing && !transitioning ? `width ${SCENE_DURATION}ms linear` : "none",
            }}
          />
        </div>

        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
          {/* Time + title bar */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2 rounded-full bg-[#C8A55C] px-4 py-2 text-white shadow-lg shadow-[#C8A55C]/20">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-bold">{scene.time}</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{scene.title}</h2>
              <p className="text-sm text-white/40">{scene.subtitle}</p>
            </div>
            <div className="ml-auto flex items-center gap-1 text-xs text-white/20">
              <span>{current + 1}</span>
              <span>/</span>
              <span>{scenes.length}</span>
            </div>
          </div>

          {/* Scene content with crossfade */}
          <div
            className={cn(
              "rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 min-h-[560px] transition-all duration-400",
              transitioning
                ? "opacity-0 translate-y-2"
                : "opacity-100 translate-y-0"
            )}
          >
            <SceneComponent />
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between">
            {/* Prev */}
            <button
              onClick={prev}
              className="rounded-full border border-white/10 p-2.5 text-white/40 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Previous scene"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Center: Play/pause + dots */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setPlaying(!playing)}
                className="rounded-full border border-white/10 p-2.5 text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                aria-label={playing ? "Pause" : "Play"}
              >
                {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </button>

              <div className="flex items-center gap-2">
                {scenes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={cn(
                      "transition-all duration-300 rounded-full",
                      i === current
                        ? "h-2.5 w-8 bg-[#C8A55C]"
                        : "h-2.5 w-2.5 bg-white/15 hover:bg-white/30"
                    )}
                    aria-label={`Go to scene ${i + 1}: ${scenes[i].title}`}
                  />
                ))}
              </div>
            </div>

            {/* Next */}
            <button
              onClick={next}
              className="rounded-full border border-white/10 p-2.5 text-white/40 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Next scene"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Scene quick-nav labels */}
          <div className="mt-4 flex justify-center gap-1 overflow-x-auto pb-2 scrollbar-hide">
            {scenes.map((s, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-medium transition-all whitespace-nowrap",
                  i === current
                    ? "bg-[#C8A55C] text-white"
                    : "text-white/30 hover:text-white/60 hover:bg-white/5"
                )}
              >
                {s.time}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ====== CTA Section ====== */}
      <section className="bg-gradient-to-r from-primary-dark via-primary to-primary-dark py-20 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-normal tracking-wide uppercase text-white font-display md:text-4xl">
            Ready to Transform Your Workflow?
          </h2>
          <p className="mt-4 text-lg text-white/60 leading-relaxed">
            This is just a glimpse of what a custom CRM can do. Every feature is tailored
            to the way you actually work — no bloat, no learning curve.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#C8A55C] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white hover:bg-[#B8953C] transition-colors shadow-lg shadow-[#C8A55C]/20"
          >
            Let&apos;s Build Yours
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
