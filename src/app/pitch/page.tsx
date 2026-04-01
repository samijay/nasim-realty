"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  BarChart3,
  Home,
  Users,
  BookOpen,
  Calculator,
  Moon,
  Newspaper,
  Mail,
  Handshake,
  Sparkles,
  Zap,
  Search,
  Globe,
  Shield,
  Palette,
  Rocket,
  Database,
  Languages,
  Camera,
  Link2,
  UserPlus,
  ChevronDown,
  Crown,
  Download,
} from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { StatCounter } from "@/components/shared/stat-counter";
import { siteConfig } from "@/lib/site-config";

/* ────────────────────────────────────────────
   SLIDE PROGRESS INDICATOR
   ──────────────────────────────────────────── */
const slideIds = [
  "hero",
  "problem",
  "solution",
  "features",
  "numbers",
  "tech",
  "roadmap",
  "cta",
];

const slideLabels = [
  "Intro",
  "Problem",
  "Strategy",
  "Features",
  "Numbers",
  "Tech",
  "Roadmap",
  "Launch",
];

const SlideNav = ({ activeSlide }: { activeSlide: number }) => (
  <nav className="fixed right-6 top-1/2 z-50 -translate-y-1/2 hidden lg:flex flex-col gap-3">
    {slideIds.map((id, i) => (
      <a
        key={id}
        href={`#${id}`}
        className="group flex items-center gap-3 justify-end"
        aria-label={slideLabels[i]}
      >
        <span
          className={`text-xs font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 ${
            activeSlide === i ? "opacity-100 text-accent" : "text-foreground/60"
          }`}
        >
          {slideLabels[i]}
        </span>
        <span
          className={`block rounded-full transition-all duration-300 ${
            activeSlide === i
              ? "h-4 w-4 bg-accent shadow-lg shadow-accent/30"
              : "h-2.5 w-2.5 bg-foreground/20 group-hover:bg-foreground/40"
          }`}
        />
      </a>
    ))}
  </nav>
);

/* ────────────────────────────────────────────
   FLYWHEEL COMPONENT
   ──────────────────────────────────────────── */
const flywheelSpokes = [
  {
    icon: MapPin,
    label: "Neighborhood\nIntelligence",
    detail: "12 detailed guides",
    angle: -90,
    href: "/neighborhoods",
  },
  {
    icon: BarChart3,
    label: "Market\nInsights",
    detail: "Data visualizations",
    angle: -18,
    href: "/market-insights",
  },
  {
    icon: Home,
    label: "Property\nShowcase",
    detail: "Filtered listings",
    angle: 54,
    href: "/listings",
  },
  {
    icon: Users,
    label: "Client\nSuccess",
    detail: "Testimonials",
    angle: 126,
    href: "/testimonials",
  },
  {
    icon: BookOpen,
    label: "Resource\nHub",
    detail: "Calculator & guides",
    angle: 198,
    href: "/resources",
  },
];

const FlywheelDiagram = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsSpinning(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative mx-auto h-[420px] w-[420px] sm:h-[500px] sm:w-[500px]">
      {/* Outer ring */}
      <div
        className={`absolute inset-0 rounded-full border-2 border-dashed border-accent/30 transition-transform duration-[3000ms] ease-in-out ${
          isSpinning ? "rotate-[360deg]" : ""
        }`}
      />

      {/* Center hub */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative h-36 w-36 sm:h-44 sm:w-44 rounded-full bg-gradient-to-br from-primary via-primary-dark to-primary flex items-center justify-center shadow-2xl shadow-primary/30">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-transparent" />
          <div className="text-center relative z-10">
            <div className="text-white font-bold text-sm sm:text-base leading-tight">
              Trust
            </div>
            <div className="text-accent font-bold text-xs sm:text-sm">
              Leads
            </div>
            <div className="text-white/80 font-medium text-xs sm:text-sm">
              Referrals
            </div>
            <div className="text-accent-light font-bold text-xs sm:text-sm">
              Growth
            </div>
          </div>
        </div>
      </div>

      {/* Spokes */}
      {flywheelSpokes.map((spoke, i) => {
        const radius = 170;
        const smRadius = 200;
        const angleRad = (spoke.angle * Math.PI) / 180;
        const Icon = spoke.icon;
        return (
          <div
            key={spoke.label}
            className="absolute left-1/2 top-1/2 z-20"
            style={{
              transform: `translate(-50%, -50%)`,
            }}
          >
            {/* Connecting line */}
            <div
              className="absolute left-1/2 top-1/2 origin-center"
              style={{
                width: `${radius}px`,
                height: "2px",
                background:
                  "linear-gradient(to right, transparent, var(--accent), transparent)",
                transform: `rotate(${spoke.angle}deg)`,
                transformOrigin: "0 0",
              }}
            />
            {/* Node */}
            <div
              className="absolute flex flex-col items-center gap-1"
              style={{
                left: `${Math.cos(angleRad) * radius}px`,
                top: `${Math.sin(angleRad) * radius}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <AnimatedSection delay={i * 200 + 400}>
                <Link href={spoke.href} className="group/spoke flex flex-col items-center">
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-card border border-border shadow-lg transition-all duration-300 group-hover/spoke:shadow-xl group-hover/spoke:border-primary group-hover/spoke:scale-110">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                  </div>
                  <p className="mt-1 text-center text-[10px] sm:text-xs font-bold text-foreground leading-tight whitespace-pre-line group-hover/spoke:text-primary transition-colors">
                    {spoke.label}
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-muted-foreground text-center">
                    {spoke.detail}
                  </p>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        );
      })}
    </div>
  );
};

/* ────────────────────────────────────────────
   FEATURE CARDS
   ──────────────────────────────────────────── */
const features = [
  {
    icon: UserPlus,
    title: "Custom CRM Portal",
    description:
      "Full client pipeline with Kanban board, activity feed, task management, performance metrics, and revenue tracking. Manage your entire business in one place.",
    color: "from-violet-500/20 to-purple-500/20",
    link: "/crm",
  },
  {
    icon: Globe,
    title: "Real Estate Intelligence Hub",
    description:
      "Executive dashboard with national & local market data, legislation tracking, interest rates, property taxes, rent control laws, and agent economics — all cited.",
    color: "from-emerald-500/20 to-teal-500/20",
    link: "/intelligence",
  },
  {
    icon: MapPin,
    title: "12 East Bay Neighborhood Guides",
    description:
      "Deep-dive profiles for every major East Bay neighborhood. Walk scores, median prices, vibes, and insider tips.",
    color: "from-teal-500/20 to-emerald-500/20",
    link: "/neighborhoods",
  },
  {
    icon: Calculator,
    title: "Interactive Mortgage Calculator",
    description:
      "Clients can estimate monthly payments instantly. Keeps them on YOUR site instead of going to Zillow.",
    color: "from-amber-500/20 to-orange-500/20",
    link: "/resources#calculator",
  },
  {
    icon: BarChart3,
    title: "Client Dashboard + Market Intel",
    description:
      "A private dashboard with real-time market data, news feed, and personalized insights. Shows you're tech-forward.",
    color: "from-blue-500/20 to-indigo-500/20",
    link: "/dashboard",
  },
  {
    icon: Handshake,
    title: "Vendor/Partner Marketplace",
    description:
      "A curated directory of trusted vendors and partners. Generates referral revenue and strengthens your network.",
    color: "from-purple-500/20 to-pink-500/20",
    link: "/vendors",
  },
  {
    icon: Mail,
    title: "Newsletter Lead Capture",
    description:
      "6 strategic touchpoints throughout the site. Turns browsers into subscribers, subscribers into clients.",
    color: "from-rose-500/20 to-red-500/20",
    link: "/site",
  },
  {
    icon: Moon,
    title: "Dark Mode Support",
    description:
      "Because a modern real estate brand needs to look stunning at any hour. Toggle it now in the header!",
    color: "from-slate-500/20 to-zinc-500/20",
    link: "/site",
  },
];

/* ────────────────────────────────────────────
   TECH STACK DATA
   ──────────────────────────────────────────── */
const techStack = [
  {
    name: "Next.js 16",
    why: "Blazing-fast page loads. Server-side rendering for SEO. The same framework used by Netflix, TikTok, and Notion.",
    icon: Zap,
    color: "bg-black text-white dark:bg-white dark:text-black",
  },
  {
    name: "React 19",
    why: "The world's most popular UI library. Powers Facebook, Instagram, and Airbnb. Makes the site feel instant and interactive.",
    icon: Sparkles,
    color: "bg-sky-500 text-white",
  },
  {
    name: "TypeScript",
    why: "Type-safe code means fewer bugs. Enterprise-grade reliability for a professional site that just works.",
    icon: Shield,
    color: "bg-blue-600 text-white",
  },
  {
    name: "Tailwind CSS",
    why: "Pixel-perfect design without bloated CSS files. Responsive on every device. Beautiful by default.",
    icon: Palette,
    color: "bg-cyan-500 text-white",
  },
];

/* ────────────────────────────────────────────
   ROADMAP DATA
   ──────────────────────────────────────────── */
const roadmapItems = [
  {
    icon: Database,
    title: "Real Supabase Auth",
    description: "Secure login for client dashboard access",
    phase: "Phase 1",
  },
  {
    icon: Search,
    title: "MLS Integration",
    description: "Real property data, auto-updating listings",
    phase: "Phase 1",
  },
  {
    icon: Newspaper,
    title: "Newsletter Service",
    description: "ConvertKit or Mailchimp integration",
    phase: "Phase 1",
  },
  {
    icon: Globe,
    title: "Custom Domain",
    description: "nasimrealty.com with SSL",
    phase: "Phase 2",
  },
  {
    icon: Camera,
    title: "Real Photos & Headshots",
    description: "Professional photography for every page",
    phase: "Phase 2",
  },
  {
    icon: Languages,
    title: "Bilingual Support",
    description: "Full Spanish + French translations",
    phase: "Phase 2",
  },
  {
    icon: UserPlus,
    title: "Custom CRM",
    description: "Client pipeline, tasks, activity feed — already built!",
    phase: "Done!",
  },
];

/* ════════════════════════════════════════════
   PITCH PAGE
   ════════════════════════════════════════════ */
export default function PitchPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSlide = 0;

      slideIds.forEach((id, index) => {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            currentSlide = index;
          }
        }
      });

      setActiveSlide(currentSlide);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="-mt-[1px]">
      <SlideNav activeSlide={activeSlide} />

      {/* Floating download button */}
      <button
        onClick={handleDownloadPDF}
        className="no-print fixed left-6 bottom-6 z-50 flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-white shadow-lg shadow-accent/30 hover:bg-accent-dark transition-all hover:shadow-xl hover:-translate-y-0.5"
        aria-label="Download as PDF"
      >
        <Download className="h-4 w-4" />
        <span className="hidden sm:inline">Download PDF</span>
      </button>

      {/* ══════════════════════════════════════
         SLIDE 1: HERO — "Built for Nasim"
         ══════════════════════════════════════ */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light bg-gradient-animated"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[100px]" />
          <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-white/5 blur-[120px]" />
          <div className="absolute top-1/3 left-1/4 h-64 w-64 rounded-full bg-accent/10 blur-[80px]" />
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="animate-fade-in" style={{ animationDelay: "0ms", animationFillMode: "forwards" }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white/90 backdrop-blur-sm mb-8">
              <Crown className="h-4 w-4 text-accent" />
              Exclusive Presentation
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "200ms", animationFillMode: "forwards", opacity: 0 }}>
            <h1 className="text-5xl font-normal tracking-wide uppercase text-white font-display sm:text-6xl md:text-7xl lg:text-8xl">
              Built for{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-gradient">Nasim</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-accent/20 rounded-full blur-sm" />
              </span>
            </h1>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "500ms", animationFillMode: "forwards", opacity: 0 }}>
            <p className="mt-6 text-xl text-white/70 sm:text-2xl md:text-3xl font-light max-w-3xl mx-auto">
              Your East Bay real estate empire starts here.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "800ms", animationFillMode: "forwards", opacity: 0 }}>
            <div className="mt-10 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-accent/40" />
              <span className="text-accent font-semibold tracking-[0.2em] text-sm uppercase">
                {siteConfig.name}
              </span>
              <div className="h-px w-12 bg-accent/40" />
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "1100ms", animationFillMode: "forwards", opacity: 0 }}>
            <p className="mt-12 text-white/50 text-sm">
              Scroll to explore the strategy
            </p>
            <ChevronDown className="mx-auto mt-2 h-6 w-6 text-white/30 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
         SLIDE 2: THE PROBLEM
         ══════════════════════════════════════ */}
      <section
        id="problem"
        className="min-h-screen flex items-center bg-background py-20"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
              The Problem
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h2 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
              Every other realtor in the East Bay has a{" "}
              <span className="text-muted-foreground/50 line-through decoration-accent/60">
                generic template
              </span>{" "}
              website.
            </h2>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                emoji: "X",
                title: "Cookie-cutter templates",
                desc: "Same layout. Same stock photos. Same boring bio. Zero differentiation from competitors.",
              },
              {
                emoji: "X",
                title: "No lead generation",
                desc: "Beautiful brochure sites that look nice but never convert visitors into actual clients.",
              },
              {
                emoji: "X",
                title: "No trust building",
                desc: "No neighborhood expertise. No market data. No reason for clients to choose YOU over anyone else.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 200 + 400}>
                <div className="rounded-2xl border border-border bg-card p-8 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500 font-bold text-lg mb-4">
                    {item.emoji}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={1000} className="mt-16 text-center">
            <p className="text-2xl font-bold text-foreground sm:text-3xl">
              Nasim deserves{" "}
              <span className="text-accent">something extraordinary.</span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════
         SLIDE 3: THE SOLUTION — PINWHEEL FLYWHEEL
         ══════════════════════════════════════ */}
      <section
        id="solution"
        className="min-h-screen flex items-center bg-muted py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AnimatedSection>
              <p className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
                The Strategy
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
                The Pinwheel Flywheel
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Five content pillars that work together to generate trust,
                capture leads, earn referrals, and drive unstoppable growth.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={600}>
            <FlywheelDiagram />
          </AnimatedSection>

          <AnimatedSection delay={1000}>
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 rounded-full bg-card border border-border px-6 py-3 shadow-lg">
                <span className="text-sm font-medium text-muted-foreground">
                  Every page feeds the flywheel.
                </span>
                <ArrowRight className="h-4 w-4 text-accent" />
                <span className="text-sm font-bold text-primary">
                  Every visit builds momentum.
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════
         SLIDE 4: FEATURE SHOWCASE
         ══════════════════════════════════════ */}
      <section
        id="features"
        className="min-h-screen flex items-center bg-background py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection>
              <p className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
                What&apos;s Built
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
                Feature Showcase
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Every feature is designed to position Nasim as the East Bay&apos;s
                most trusted, most knowledgeable realtor.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <AnimatedSection key={feature.title} delay={i * 150}>
                  <Link href={feature.link} className="group block h-full">
                    <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 h-full transition-all duration-300 hover:shadow-xl hover:border-accent/30 hover:-translate-y-1">
                      {/* Gradient background accent */}
                      <div
                        className={`absolute top-0 right-0 h-32 w-32 rounded-bl-[80px] bg-gradient-to-bl ${feature.color} opacity-50 transition-opacity group-hover:opacity-100`}
                      />
                      <div className="relative z-10">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-5">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                        <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                          See it live
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
         SLIDE 5: BY THE NUMBERS
         ══════════════════════════════════════ */}
      <section
        id="numbers"
        className="min-h-screen flex items-center bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <AnimatedSection>
              <p className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
                By The Numbers
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <h2 className="text-4xl font-bold text-white sm:text-5xl">
                What We&apos;ve Built
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
                A complete digital real estate platform, designed and developed
                from scratch.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {[
              { end: 29, label: "Pages", suffix: "" },
              { end: 12, label: "Neighborhoods", suffix: "" },
              { end: 10, label: "Property Listings", suffix: "" },
              { end: 6, label: "Testimonials", suffix: "" },
              { end: 10, label: "Vendor Partners", suffix: "" },
              { end: 8, label: "News Articles", suffix: "" },
              { end: 1, label: "Mortgage Calculator", suffix: "" },
              { end: 100, label: "Percent Custom", suffix: "%" },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 100}>
                <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 p-6 text-center">
                  <StatCounter
                    end={stat.end}
                    suffix={stat.suffix}
                    label={stat.label}
                    duration={1500}
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Override StatCounter colors for dark bg */}
          <style>{`
            #numbers .text-primary { color: white !important; }
            #numbers .text-muted-foreground { color: rgba(255,255,255,0.6) !important; }
          `}</style>
        </div>
      </section>

      {/* ══════════════════════════════════════
         SLIDE 6: TECH STACK
         ══════════════════════════════════════ */}
      <section
        id="tech"
        className="min-h-screen flex items-center bg-background py-20"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <AnimatedSection>
              <p className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
                Under The Hood
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
                Enterprise-Grade Tech Stack
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                The same technologies used by the world&apos;s biggest companies
                -- now powering your real estate brand.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {techStack.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <AnimatedSection key={tech.name} delay={i * 200}>
                  <div className="flex items-start gap-5 rounded-2xl border border-border bg-card p-8">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${tech.color}`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {tech.name}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {tech.why}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection delay={900} className="mt-12">
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-8 text-center">
              <p className="text-lg font-bold text-foreground">
                Plus: Supabase (Database) + Vercel (Hosting) + shadcn/ui
                (Components)
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                A modern stack that&apos;s fast to load, easy to maintain, and
                built to scale.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════
         SLIDE 7: WHAT'S NEXT — ROADMAP
         ══════════════════════════════════════ */}
      <section
        id="roadmap"
        className="min-h-screen flex items-center bg-muted py-20"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <AnimatedSection>
              <p className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
                What&apos;s Next
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
                The Roadmap
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                This is just the beginning. Here&apos;s where we take it next.
              </p>
            </AnimatedSection>
          </div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2" />

            <div className="space-y-8">
              {roadmapItems.map((item, i) => {
                const Icon = item.icon;
                const isLeft = i % 2 === 0;
                return (
                  <AnimatedSection
                    key={item.title}
                    delay={i * 150}
                    animation={isLeft ? "slide-left" : "slide-right"}
                  >
                    <div
                      className={`relative flex items-start gap-6 ${
                        isLeft
                          ? "md:flex-row md:text-right"
                          : "md:flex-row-reverse md:text-left"
                      }`}
                    >
                      {/* Content card */}
                      <div className="ml-16 flex-1 md:ml-0">
                        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                          <div
                            className={`flex items-center gap-3 ${
                              isLeft ? "md:justify-end" : "md:justify-start"
                            }`}
                          >
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 md:hidden">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <span className="text-xs font-bold uppercase tracking-wider text-accent">
                                {item.phase}
                              </span>
                              <h3 className="text-lg font-bold text-foreground">
                                {item.title}
                              </h3>
                            </div>
                          </div>
                          <p
                            className={`mt-2 text-sm text-muted-foreground ${
                              isLeft ? "md:text-right" : "md:text-left"
                            }`}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Timeline node */}
                      <div className="absolute left-4 md:static md:flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/20 z-10">
                        <Icon className="h-5 w-5" />
                      </div>

                      {/* Spacer for the other side */}
                      <div className="hidden md:block flex-1" />
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
         SLIDE 8: CTA — "Ready to Dominate?"
         ══════════════════════════════════════ */}
      <section
        id="cta"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/20 blur-[100px]" />
          <div className="absolute bottom-1/4 left-1/4 h-72 w-72 rounded-full bg-white/10 blur-[80px]" />
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center py-20">
          <AnimatedSection>
            <Rocket className="mx-auto h-16 w-16 text-accent mb-8" />
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Ready to dominate
              <br />
              <span className="text-accent">East Bay real estate?</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={600}>
            <p className="mt-6 text-xl text-white/60 max-w-2xl mx-auto">
              Your website is live. Your brand is polished. Your flywheel is
              ready to spin. Explore everything that&apos;s been built for you.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={900}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/site"
                className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-bold text-white shadow-xl shadow-accent/30 transition-all hover:bg-accent-dark hover:shadow-2xl hover:shadow-accent/40 hover:-translate-y-0.5"
              >
                Explore the Full Site
                <ArrowRight className="h-5 w-5" />
              </Link>
              <button
                onClick={handleDownloadPDF}
                className="no-print inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <Download className="h-5 w-5" />
                Download as PDF
              </button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={1200}>
            <div className="mt-16 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-white/20" />
              <p className="text-sm text-white/40">
                Designed and developed with care for{" "}
                <span className="text-accent font-semibold">
                  {siteConfig.name}
                </span>
              </p>
              <div className="h-px w-16 bg-white/20" />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
