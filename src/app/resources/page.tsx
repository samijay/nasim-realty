import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Megaphone,
  Sparkles,
  Map,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { MortgageCalculator } from "@/components/tools/mortgage-calculator";
import { resources } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Real Estate Resources",
  description:
    "Free homebuyer and seller guides, mortgage calculator, and East Bay relocation resources from Nasim Realty.",
};

const iconMap: Record<string, React.ReactNode> = {
  "book-open": <BookOpen className="h-6 w-6" />,
  megaphone: <Megaphone className="h-6 w-6" />,
  sparkles: <Sparkles className="h-6 w-6" />,
  map: <Map className="h-6 w-6" />,
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Free Resources"
        subtitle="Guides, tools, and insider knowledge to help you navigate East Bay real estate with confidence"
      />

      {/* Mortgage Calculator */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              title="Mortgage Calculator"
              subtitle="See what you can afford with our interactive calculator"
            />
          </AnimatedSection>
          <AnimatedSection>
            <MortgageCalculator />
          </AnimatedSection>
        </div>
      </section>

      {/* Resource Guides */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              title="Guides & Checklists"
              subtitle="Expert advice for every stage of your real estate journey"
            />
          </AnimatedSection>

          <div className="space-y-8">
            {resources.map((resource, i) => (
              <AnimatedSection key={resource.id} delay={i * 100}>
                <div className="rounded-xl border border-border bg-card p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {iconMap[resource.icon]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-foreground">
                          {resource.title}
                        </h3>
                        <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent capitalize">
                          {resource.category}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {resource.description}
                      </p>
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {resource.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-foreground">
            Have Questions?
          </h2>
          <p className="mt-4 text-muted-foreground">
            These guides are a great start, but nothing beats personalized
            advice. Reach out and let&apos;s talk about your specific situation.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-white hover:bg-primary-light transition-colors"
          >
            Schedule a Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
