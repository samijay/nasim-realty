import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  MapPin,
  Footprints,
  GraduationCap,
  Train,
  Utensils,
  Trees,
  Palette,
  ArrowRight,
  DollarSign,
} from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { PropertyCard } from "@/components/property/property-card";
import { SectionHeader } from "@/components/shared/section-header";
import { neighborhoods, getNeighborhood } from "@/lib/neighborhoods";
import { getListingsByNeighborhood } from "@/lib/listings";
import { formatPrice } from "@/lib/utils";

export async function generateStaticParams() {
  return neighborhoods.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const neighborhood = getNeighborhood(slug);
  if (!neighborhood) return { title: "Not Found" };
  return {
    title: `${neighborhood.name} — Oakland Neighborhood Guide`,
    description: neighborhood.description,
  };
}

export default async function NeighborhoodDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const neighborhood = getNeighborhood(slug);
  if (!neighborhood) notFound();

  const localListings = getListingsByNeighborhood(slug);

  const categoryIcons = {
    dining: Utensils,
    parks: Trees,
    culture: Palette,
    transit: Train,
  };

  return (
    <>
      {/* Hero */}
      <section
        className={`relative overflow-hidden bg-gradient-to-br ${neighborhood.heroColor} py-24 md:py-32`}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-white/70 uppercase tracking-wider">
            Oakland Neighborhood Guide
          </p>
          <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {neighborhood.name}
          </h1>
          <p className="mt-2 text-xl text-white/80">{neighborhood.tagline}</p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-b border-border bg-card py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <DollarSign className="mx-auto h-6 w-6 text-primary mb-1" />
              <p className="text-2xl font-bold text-foreground">
                {formatPrice(neighborhood.medianPrice)}
              </p>
              <p className="text-xs text-muted-foreground">Median Price</p>
            </div>
            <div className="text-center">
              <Footprints className="mx-auto h-6 w-6 text-primary mb-1" />
              <p className="text-2xl font-bold text-foreground">
                {neighborhood.walkScore}
              </p>
              <p className="text-xs text-muted-foreground">Walk Score</p>
            </div>
            <div className="text-center">
              <Train className="mx-auto h-6 w-6 text-primary mb-1" />
              <p className="text-2xl font-bold text-foreground">
                {neighborhood.transitScore}
              </p>
              <p className="text-xs text-muted-foreground">Transit Score</p>
            </div>
            <div className="text-center">
              <GraduationCap className="mx-auto h-6 w-6 text-primary mb-1" />
              <p className="text-2xl font-bold text-foreground">
                {neighborhood.schoolRating}/10
              </p>
              <p className="text-xs text-muted-foreground">School Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <AnimatedSection className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground">
                About {neighborhood.name}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
                {neighborhood.description}
              </p>

              {/* Local highlights */}
              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {(
                  ["dining", "parks", "culture", "transit"] as const
                ).map((category) => {
                  const Icon = categoryIcons[category];
                  const items = neighborhood[category];
                  return (
                    <div
                      key={category}
                      className="rounded-xl border border-border bg-card p-5"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold text-foreground capitalize">
                          {category}
                        </h3>
                      </div>
                      <ul className="space-y-1.5">
                        {items.map((item) => (
                          <li
                            key={item}
                            className="text-sm text-muted-foreground"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>

            {/* CTA Sidebar */}
            <AnimatedSection delay={200}>
              <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-bold text-foreground">
                  Interested in {neighborhood.name}?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  I&apos;d love to show you around and share insider tips about
                  this neighborhood.
                </p>
                <Link
                  href={`/contact?neighborhood=${neighborhood.slug}`}
                  className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-primary-light transition-colors"
                >
                  Ask Nasim About {neighborhood.name}
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <div className="mt-6 border-t border-border pt-6">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                    Neighborhood Vibe
                  </p>
                  <p className="text-sm text-foreground italic">
                    &ldquo;{neighborhood.vibe}&rdquo;
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Listings in this neighborhood */}
      {localListings.length > 0 && (
        <section className="bg-muted py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title={`Homes in ${neighborhood.name}`}
              subtitle={`${localListings.length} properties available`}
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {localListings.map((listing, i) => (
                <AnimatedSection key={listing.id} delay={i * 100}>
                  <PropertyCard property={listing} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
