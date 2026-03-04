import type { Metadata } from "next";
import { AnimatedSection } from "@/components/shared/animated-section";
import { PageHero } from "@/components/shared/page-hero";
import { NeighborhoodCard } from "@/components/neighborhood/neighborhood-card";
import { neighborhoods } from "@/lib/neighborhoods";

export const metadata: Metadata = {
  title: "Oakland Neighborhoods",
  description:
    "Explore 12 of Oakland's most desirable neighborhoods. Get local insights, median home prices, walkability scores, school ratings, and lifestyle highlights.",
};

export default function NeighborhoodsPage() {
  return (
    <>
      <PageHero
        title="Oakland Neighborhoods"
        subtitle="Every neighborhood has its own personality. Find the one that feels like home."
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {neighborhoods.map((neighborhood, i) => (
              <AnimatedSection key={neighborhood.slug} delay={i * 80}>
                <NeighborhoodCard neighborhood={neighborhood} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
