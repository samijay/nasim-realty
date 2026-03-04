import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Heart,
  Users,
  TrendingUp,
  MapPin,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { StatCounter } from "@/components/shared/stat-counter";
import { PageHero } from "@/components/shared/page-hero";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Nasim",
  description:
    "Meet Nasim — Oakland's trusted real estate expert with 8+ years of experience and 150+ successful transactions.",
};

const values = [
  {
    icon: Heart,
    title: "Genuine Care",
    description:
      "Every client is family. I invest in relationships, not transactions.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven",
    description:
      "Market insights and analytics power every recommendation I make.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description:
      "Oakland born and raised. I know every block, every trend, every opportunity.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "Actively involved in Oakland community organizations and neighborhood advocacy.",
  },
];

const credentials = [
  "Licensed California Real Estate Agent",
  "Certified Negotiation Expert (CNE)",
  "Oakland Association of Realtors member",
  "Bay Area Real Estate Top Producer 2023-2025",
  "Specializing in first-time buyers and luxury homes",
  "Fluent in English and Farsi",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Meet Nasim"
        subtitle="Oakland neighbor. Market strategist. Your biggest advocate."
      />

      {/* Stats */}
      <section className="border-b border-border bg-card py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <StatCounter end={siteConfig.agent.homesSold} suffix="+" label="Homes Sold" />
            <StatCounter end={siteConfig.agent.yearsExperience} label="Years Experience" />
            <StatCounter end={siteConfig.agent.clientSatisfaction} suffix="%" label="Client Satisfaction" />
            <StatCounter end={72} suffix="%" label="Referral Rate" />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <AnimatedSection animation="slide-left">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center text-primary/40">
                  <Users className="mx-auto h-16 w-16 mb-3" />
                  <p className="text-lg font-medium">Professional Headshot</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-right">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                My Story
              </p>
              <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
                Why I Love What I Do
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I grew up in the East Bay and fell in love with Oakland&apos;s
                  incredible diversity, creativity, and resilience. After a
                  career in marketing, I found my true calling in real estate —
                  helping people find not just houses, but homes that transform
                  their lives.
                </p>
                <p>
                  What drives me is the moment a buyer walks into a home and
                  their eyes light up. Or when a seller sees the marketing
                  campaign I&apos;ve crafted and realizes their home is going to
                  shine. These moments never get old.
                </p>
                <p>
                  I bring a unique blend of marketing savvy, data analysis, and
                  deep neighborhood knowledge to every transaction. I don&apos;t
                  just list homes — I tell their stories. I don&apos;t just find
                  houses — I match people with the neighborhoods and communities
                  where they&apos;ll thrive.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                What I Stand For
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-accent mx-auto" />
            </div>
          </AnimatedSection>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 100}>
                <div className="rounded-xl border border-border bg-card p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <AnimatedSection>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Credentials
              </p>
              <h2 className="mt-2 text-3xl font-bold text-foreground">
                Qualifications & Expertise
              </h2>
              <ul className="mt-6 space-y-3">
                {credentials.map((credential) => (
                  <li key={credential} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">{credential}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="rounded-xl border border-border bg-card p-8">
                <Award className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground">
                  Oakland Community Involvement
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li>Oakland Heritage Alliance — Board Member</li>
                  <li>Habitat for Humanity East Bay — Volunteer Builder</li>
                  <li>Lake Merritt Breakfast Club — Founding Member</li>
                  <li>Oakland First Fridays — Community Sponsor</li>
                  <li>Rockridge District Association — Business Member</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to Start Your Oakland Home Story?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Whether you&apos;re buying, selling, or just exploring — I&apos;d
            love to chat.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white hover:bg-accent-dark transition-colors"
          >
            Get in Touch
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
