import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  TrendingUp,
  Home,
  Clock,
  Users,
  ChevronRight,
  BookOpen,
  Presentation,
  Sparkles,
  ChevronDown,
  DollarSign,
} from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { StatCounter } from "@/components/shared/stat-counter";
import { SectionHeader } from "@/components/shared/section-header";
import { NewsletterSignup } from "@/components/shared/newsletter-signup";
import { PropertyCard } from "@/components/property/property-card";
import { NeighborhoodCard } from "@/components/neighborhood/neighborhood-card";
import { TestimonialCard } from "@/components/testimonial/testimonial-card";
import { HeroRotatingText } from "@/components/shared/hero-rotating-text";
import { siteConfig } from "@/lib/site-config";
import { getFeaturedListings, getSoldListings } from "@/lib/listings";
import { neighborhoods } from "@/lib/neighborhoods";
import { getFeaturedTestimonial } from "@/lib/testimonials";
import { marketOverview } from "@/lib/market-data";

export default function HomePage() {
  const featuredListings = getFeaturedListings();
  const soldListings = getSoldListings();
  const spotlightNeighborhoods = neighborhoods.slice(0, 6);
  const featuredTestimonial = getFeaturedTestimonial();

  return (
    <>
      {/* ═══════════ HERO — Full viewport with background image ═══════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Beautiful East Bay home"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25" />
        {/* Floating gold decorative circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] right-[10%] h-64 w-64 rounded-full bg-accent/8 blur-[80px]" />
          <div className="absolute bottom-[20%] left-[5%] h-48 w-48 rounded-full bg-accent/6 blur-[60px]" />
          <div className="absolute top-[60%] right-[30%] h-32 w-32 rounded-full bg-primary-light/10 blur-[50px]" />
        </div>
        {/* Accent strip at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
              East Bay&apos;s Trusted Real Estate Expert
            </p>
            <h1 className="text-4xl font-normal tracking-wide leading-tight text-white font-display md:text-5xl lg:text-7xl">
              Your East Bay Home Story{" "}
              <span className="text-gradient">Starts Here</span>
            </h1>
            <div className="mt-4 text-lg text-white/80 md:text-xl">
              <HeroRotatingText />
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/listings"
                className="btn-glow btn-glow-pulse btn-press inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-accent-dark"
              >
                Browse Listings
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                Work With Nasim
              </Link>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ═══════════ STATS BAR — Gradient background ═══════════ */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-dark via-primary to-primary-light py-16 border-t-2 border-accent">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-10 right-0 h-48 w-48 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <StatCounter
              end={siteConfig.agent.homesSold}
              suffix="+"
              label="Deals Advised"
              className="text-white [&_span]:text-white/70"
            />
            <StatCounter
              end={siteConfig.agent.yearsExperience}
              label="Years Experience"
              className="text-white [&_span]:text-white/70"
            />
            <StatCounter
              end={siteConfig.agent.avgDaysOnMarket}
              label="Avg Days on Market"
              className="text-white [&_span]:text-white/70"
            />
            <StatCounter
              end={siteConfig.agent.clientSatisfaction}
              suffix="%"
              label="Client Satisfaction"
              className="text-white [&_span]:text-white/70"
            />
          </div>
        </div>
      </section>

      {/* ═══════════ TRUST BAR — Affiliation ═══════════ */}
      <section className="border-b border-border py-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8">
            <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Affiliated with
            </span>
            <div className="flex items-center gap-2">
              <div className="h-6 w-px bg-border hidden sm:block" />
              <span className="text-sm font-semibold text-foreground tracking-wide">
                Golden Gate Sotheby&apos;s International Realty
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>DRE# 02178942</span>
              <span className="h-3 w-px bg-border" />
              <span>Berkeley Office</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FEATURED LISTINGS — Asymmetric layout ═══════════ */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              kicker="Properties"
              title="Featured Listings"
              subtitle="Hand-picked properties in the East Bay's most desirable neighborhoods"
            />
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredListings.map((listing, i) => (
              <AnimatedSection key={listing.id} delay={i * 150} animation="scale">
                <PropertyCard property={listing} featured={i === 0} />
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-8 text-center">
            <Link
              href="/listings"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View all listings
              <ChevronRight className="h-5 w-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════ RECENTLY SOLD — Track record ═══════════ */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              kicker="Track Record"
              title="Recently Sold"
              subtitle="A selection of homes Nasim has recently helped clients buy and sell"
            />
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {soldListings.slice(0, 4).map((listing, i) => (
              <AnimatedSection key={listing.id} delay={i * 100} animation="scale">
                <PropertyCard property={listing} />
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-8 text-center">
            <Link
              href="/listings"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View full portfolio
              <ChevronRight className="h-5 w-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════ PITCH DECK ═══════════ */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="blur">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card card-hover">
              <div className="grid md:grid-cols-2">
                {/* Left — preview mockup */}
                <div className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light p-8 sm:p-12 flex flex-col justify-center min-h-[280px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-accent/20 blur-[60px]" />
                    <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white/10 blur-[50px]" />
                  </div>
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm mb-6">
                      <Sparkles className="h-3.5 w-3.5 text-accent" />
                      Exclusive Presentation
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight font-display">
                      Built for{" "}
                      <span className="text-accent">Nasim</span>
                    </h3>
                    <p className="mt-3 text-white/70 text-sm sm:text-base max-w-sm">
                      The complete strategy, technology, and vision behind Nasim Realty&apos;s digital platform.
                    </p>
                    <div className="mt-6 flex items-center gap-4 text-xs text-white/50">
                      <span>8 Slides</span>
                      <span className="h-1 w-1 rounded-full bg-white/30" />
                      <span>Full Strategy</span>
                      <span className="h-1 w-1 rounded-full bg-white/30" />
                      <span>Tech Stack</span>
                      <span className="h-1 w-1 rounded-full bg-white/30" />
                      <span>Roadmap</span>
                    </div>
                  </div>
                </div>

                {/* Right — CTA */}
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                  <Presentation className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-foreground font-display">
                    Nasim&apos;s Pitch Deck
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    Explore the pinwheel flywheel strategy, see every feature that&apos;s been built, and discover the roadmap for what&apos;s next. Available to view online or download as a PDF.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/pitch"
                      className="btn-glow inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-light transition-colors"
                    >
                      View Pitch Deck
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/pitch"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
                    >
                      <Presentation className="h-4 w-4" />
                      Download PDF
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════ NEIGHBORHOOD SPOTLIGHT — Image tiles ═══════════ */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              kicker="Explore"
              title="East Bay Neighborhoods"
              subtitle="Every neighborhood has a story. Let me help you find yours."
            />
          </AnimatedSection>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {spotlightNeighborhoods.map((neighborhood, i) => (
              <AnimatedSection key={neighborhood.slug} delay={i * 100} animation="scale">
                <NeighborhoodCard neighborhood={neighborhood} compact />
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-8 text-center">
            <Link
              href="/neighborhoods"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Explore all 12 neighborhoods
              <ChevronRight className="h-5 w-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════ MARKET SNAPSHOT ═══════════ */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              kicker="Market Data"
              title="East Bay Market Snapshot"
              subtitle="Real-time insights to help you make confident decisions"
            />
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {marketOverview.map((stat, i) => {
              const icons: Record<string, React.ReactNode> = {
                "dollar-sign": <TrendingUp className="h-6 w-6" />,
                clock: <Clock className="h-6 w-6" />,
                home: <Home className="h-6 w-6" />,
                "trending-up": <TrendingUp className="h-6 w-6" />,
              };
              return (
                <AnimatedSection key={stat.label} delay={i * 100} animation="blur">
                  <div className="rounded-xl border border-border bg-card p-6 text-center card-hover">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {icons[stat.icon]}
                    </div>
                    <p className="text-3xl font-bold text-foreground font-display">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                    <p
                      className={`mt-2 text-xs font-medium ${
                        stat.change > 0 ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {stat.change > 0 ? "+" : ""}
                      {stat.change}% {stat.changeLabel}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
          <AnimatedSection className="mt-8 text-center">
            <Link
              href="/market-insights"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Deep dive into market data
              <ChevronRight className="h-5 w-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════ TESTIMONIAL — Full-width pull quote ═══════════ */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              kicker="Client Stories"
              title="What Clients Say"
              subtitle="Real stories from real East Bay homeowners"
            />
          </AnimatedSection>

          {/* Featured pull-quote style */}
          <AnimatedSection animation="blur">
            <div className="relative py-8 text-center max-w-3xl mx-auto">
              <span className="absolute -top-4 left-0 text-[100px] leading-none text-accent/15 font-display select-none">
                &ldquo;
              </span>
              <blockquote className="relative z-10 text-xl md:text-2xl lg:text-3xl font-display italic text-foreground leading-relaxed">
                {featuredTestimonial.quote}
              </blockquote>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">
                  {featuredTestimonial.initials}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">{featuredTestimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {featuredTestimonial.type === "both" ? "Buyer & Seller" : featuredTestimonial.type} &middot; {featuredTestimonial.neighborhood}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-8 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Read more success stories
              <ChevronRight className="h-5 w-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════ ABOUT PREVIEW — With background image + floating card ═══════════ */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <AnimatedSection animation="slide-left">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                  alt="Modern Bay Area home interior"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                {/* Floating glass stats card */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/90 dark:bg-card/90 backdrop-blur-md p-4 shadow-lg">
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-center">
                      <p className="text-xl font-bold text-primary font-display">100+</p>
                      <p className="text-xs text-muted-foreground">Deals</p>
                    </div>
                    <div className="h-8 w-px bg-border" />
                    <div className="text-center">
                      <p className="text-xl font-bold text-primary font-display">20+</p>
                      <p className="text-xs text-muted-foreground">Yrs in Bay</p>
                    </div>
                    <div className="h-8 w-px bg-border" />
                    <div className="text-center">
                      <p className="text-xl font-bold text-primary font-display">98%</p>
                      <p className="text-xs text-muted-foreground">Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-right">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Meet Your Agent
              </p>
              <h2 className="mt-2 text-3xl font-bold text-foreground font-display md:text-4xl">
                Hi, I&apos;m Nasim
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                I&apos;m an LA native who&apos;s called the Bay Area home for
                over 20 years. With a keen design eye, a deep network, and{" "}
                {siteConfig.agent.homesSold}+ deals advised across{" "}
                {siteConfig.agent.yearsExperience} years in the game, I bring a
                unique blend of market intelligence, design sensibility, and
                genuine care to every client relationship.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Whether you&apos;re buying your first condo in Adams Point or
                selling your family home in Rockridge, I&apos;ve closed dozens
                on both sides and I&apos;ll guide you every step of the way.
              </p>
              <Link
                href="/about"
                className="btn-glow mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-light transition-colors"
              >
                Learn more about Nasim
                <ArrowRight className="h-4 w-4" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════ RESOURCE TEASER ═══════════ */}
      <section className="relative overflow-hidden py-24">
        <Image
          src="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1920&q=75"
          alt="East Bay hills"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/80 to-primary-light/70" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <BookOpen className="mx-auto h-12 w-12 text-accent mb-4" />
            <h2 className="text-3xl font-bold text-white font-display md:text-4xl lg:text-5xl">
              Free East Bay Homebuyer&apos;s Guide
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Everything you need to know about buying a home in the East Bay — from
              choosing the right neighborhood to navigating multiple offers.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/resources"
                className="btn-glow inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white hover:bg-accent-dark transition-colors"
              >
                Get the Free Guide
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/resources#calculator"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                Mortgage Calculator
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════ WHAT'S MY HOME WORTH? — Lead capture ═══════════ */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-dark via-primary to-primary-light p-8 sm:p-12 lg:p-16">
              {/* Decorative elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent/10 blur-[60px]" />
                <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white/5 blur-[50px]" />
              </div>
              <div className="relative z-10 grid items-center gap-8 md:grid-cols-2">
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/20 text-accent mb-6">
                    <DollarSign className="h-7 w-7" />
                  </div>
                  <h2 className="text-3xl font-normal tracking-wide uppercase text-white font-display md:text-4xl lg:text-5xl">
                    What&apos;s My Home Worth?
                  </h2>
                  <p className="mt-4 text-lg text-white/70 leading-relaxed">
                    Get a complimentary market analysis from Nasim. Data-driven
                    insights, local expertise, and a realistic price range —
                    no obligation.
                  </p>
                  <div className="mt-3 flex items-center gap-3 text-sm text-white/50">
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Free analysis
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      24hr turnaround
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      No obligation
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center md:items-end gap-4">
                  <Link
                    href="/contact"
                    className="btn-glow inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white hover:bg-accent-dark transition-colors"
                  >
                    Get Your Free Valuation
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <p className="text-xs text-white/40">
                    Response within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════ NEWSLETTER CTA ═══════════ */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-foreground font-display md:text-4xl">
              Stay Ahead of the Market
            </h2>
            <p className="mt-4 text-muted-foreground">
              Get weekly East Bay real estate insights, new listings, and
              neighborhood updates delivered to your inbox.
            </p>
            <div className="mt-8">
              <NewsletterSignup />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
