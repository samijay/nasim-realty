import Link from "next/link";
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
import { getFeaturedListings } from "@/lib/listings";
import { neighborhoods } from "@/lib/neighborhoods";
import { getFeaturedTestimonial } from "@/lib/testimonials";
import { marketOverview } from "@/lib/market-data";

export default function HomePage() {
  const featuredListings = getFeaturedListings();
  const spotlightNeighborhoods = neighborhoods.slice(0, 6);
  const featuredTestimonial = getFeaturedTestimonial();

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        {/* Decorative blurs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/3 h-48 w-48 rounded-full bg-accent/10 blur-2xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32 lg:py-40 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
              East Bay&apos;s Trusted Real Estate Expert
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Your East Bay Home Story{" "}
              <span className="text-accent">Starts Here</span>
            </h1>
            <div className="mt-4 text-lg text-white/80 md:text-xl">
              <HeroRotatingText />
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/listings"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent-dark"
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

          {/* Hero newsletter */}
          <div className="mt-12 max-w-md">
            <p className="mb-2 text-sm font-medium text-white/70">
              Get weekly East Bay market updates
            </p>
            <NewsletterSignup variant="hero" />
          </div>
        </div>
      </section>

      {/* ═══════════ STATS BAR ═══════════ */}
      <section className="border-b border-border bg-card py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <StatCounter
              end={siteConfig.agent.homesSold}
              suffix="+"
              label="Homes Sold"
            />
            <StatCounter
              end={siteConfig.agent.yearsExperience}
              label="Years Experience"
            />
            <StatCounter
              end={siteConfig.agent.avgDaysOnMarket}
              label="Avg Days on Market"
            />
            <StatCounter
              end={siteConfig.agent.clientSatisfaction}
              suffix="%"
              label="Client Satisfaction"
            />
          </div>
        </div>
      </section>

      {/* ═══════════ FEATURED LISTINGS ═══════════ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              title="Featured Listings"
              subtitle="Hand-picked properties in the East Bay's most desirable neighborhoods"
            />
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredListings.map((listing, i) => (
              <AnimatedSection key={listing.id} delay={i * 150}>
                <PropertyCard property={listing} />
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

      {/* ═══════════ PITCH DECK ═══════════ */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
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
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
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
                  <h3 className="text-2xl font-bold text-foreground">
                    Nasim&apos;s Pitch Deck
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    Explore the pinwheel flywheel strategy, see every feature that&apos;s been built, and discover the roadmap for what&apos;s next. Available to view online or download as a PDF.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/pitch"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-light transition-colors"
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

      {/* ═══════════ NEIGHBORHOOD SPOTLIGHT ═══════════ */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              title="Explore East Bay Neighborhoods"
              subtitle="Every neighborhood has a story. Let me help you find yours."
            />
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {spotlightNeighborhoods.map((neighborhood, i) => (
              <AnimatedSection key={neighborhood.slug} delay={i * 100}>
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
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader
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
                <AnimatedSection key={stat.label} delay={i * 100}>
                  <div className="rounded-xl border border-border bg-card p-6 text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {icons[stat.icon]}
                    </div>
                    <p className="text-3xl font-bold text-foreground">
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

      {/* ═══════════ TESTIMONIAL HIGHLIGHT ═══════════ */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              title="What Clients Say"
              subtitle="Real stories from real East Bay homeowners"
            />
          </AnimatedSection>
          <AnimatedSection>
            <TestimonialCard testimonial={featuredTestimonial} featured />
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

      {/* ═══════════ ABOUT PREVIEW ═══════════ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <AnimatedSection animation="slide-left">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center text-primary/40">
                  <Users className="mx-auto h-16 w-16 mb-3" />
                  <p className="text-lg font-medium">Nasim&apos;s Photo</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-right">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Meet Your Agent
              </p>
              <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
                Hi, I&apos;m Nasim
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                I&apos;m not just a realtor — I&apos;m an East Bay local, a
                market strategist, and your biggest advocate. With{" "}
                {siteConfig.agent.yearsExperience} years of experience and{" "}
                {siteConfig.agent.homesSold}+ successful transactions, I bring
                deep local knowledge, data-driven insights, and genuine care to
                every client relationship.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Whether you&apos;re buying your first condo in Adams Point or
                selling your family home in Rockridge, I&apos;ll guide you every
                step of the way.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-light transition-colors"
              >
                Learn more about Nasim
                <ArrowRight className="h-4 w-4" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════ RESOURCE TEASER ═══════════ */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <BookOpen className="mx-auto h-12 w-12 text-accent mb-4" />
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Free East Bay Homebuyer&apos;s Guide
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Everything you need to know about buying a home in the East Bay — from
              choosing the right neighborhood to navigating multiple offers.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white hover:bg-accent-dark transition-colors"
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

      {/* ═══════════ NEWSLETTER CTA ═══════════ */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
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
