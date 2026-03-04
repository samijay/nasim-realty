"use client";

import { useState } from "react";
import {
  Star,
  Phone,
  MessageSquareQuote,
  Hammer,
  Search,
  Landmark,
  Sofa,
  Camera,
  Trees,
  Paintbrush,
  Zap,
  Droplets,
  Truck,
  Award,
} from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { NewsletterSignup } from "@/components/shared/newsletter-signup";
import {
  vendors,
  vendorCategories,
  type VendorCategory,
  type Vendor,
} from "@/lib/vendors";

const iconMap: Record<string, React.ReactNode> = {
  hammer: <Hammer className="h-5 w-5" />,
  search: <Search className="h-5 w-5" />,
  landmark: <Landmark className="h-5 w-5" />,
  sofa: <Sofa className="h-5 w-5" />,
  camera: <Camera className="h-5 w-5" />,
  trees: <Trees className="h-5 w-5" />,
  paintbrush: <Paintbrush className="h-5 w-5" />,
  zap: <Zap className="h-5 w-5" />,
  droplets: <Droplets className="h-5 w-5" />,
  truck: <Truck className="h-5 w-5" />,
};

function VendorCard({ vendor }: { vendor: Vendor }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 transition-all hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-foreground">{vendor.name}</h3>
            {vendor.featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                <Award className="h-3 w-3" />
                Top Pick
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-0.5">
            {vendor.specialty}
          </p>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <Star className="h-4 w-4 fill-accent text-accent" />
          <span className="font-semibold text-foreground">{vendor.rating}</span>
          <span className="text-muted-foreground">({vendor.reviewCount})</span>
        </div>
      </div>

      <p className="mt-3 text-sm text-muted-foreground">{vendor.description}</p>

      {/* Nasim's note */}
      <div className="mt-3 rounded-lg bg-primary/5 p-3 border-l-2 border-primary">
        <p className="text-xs font-medium text-primary flex items-center gap-1 mb-1">
          <MessageSquareQuote className="h-3 w-3" />
          Nasim&apos;s Take
        </p>
        <p className="text-xs text-muted-foreground italic">
          &ldquo;{vendor.nasimNote}&rdquo;
        </p>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <a
          href={`tel:${vendor.phone}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-light transition-colors"
        >
          <Phone className="h-4 w-4" />
          {vendor.phone}
        </a>
        <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground capitalize">
          {vendor.category}
        </span>
      </div>
    </div>
  );
}

export default function VendorsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredVendors =
    selectedCategory === "all"
      ? vendors
      : vendors.filter((v) => v.category === selectedCategory);

  return (
    <>
      <PageHero
        title="Trusted Partners"
        subtitle="Nasim's hand-picked network of contractors, lenders, and service providers. Every referral is personally vetted."
      />

      {/* Category filter */}
      <section className="border-b border-border bg-card py-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === "all"
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              All ({vendors.length})
            </button>
            {vendorCategories.map((cat) => {
              const count = vendors.filter(
                (v) => v.category === cat.value
              ).length;
              if (count === 0) return null;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    selectedCategory === cat.value
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {iconMap[cat.icon]}
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vendor grid */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {filteredVendors.map((vendor, i) => (
              <AnimatedSection key={vendor.id} delay={i * 80}>
                <VendorCard vendor={vendor} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Become a partner CTA */}
      <section className="bg-muted py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <AnimatedSection>
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="text-xl font-bold text-foreground">
                  Are You a Service Provider?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Join Nasim&apos;s trusted referral network. We send qualified
                  leads to our partners and only work with the best in the East Bay.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-accent" />
                    Qualified referrals from active buyers and sellers
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-accent" />
                    Featured placement on our partner page
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-accent" />
                    Included in client welcome packages
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-light transition-colors"
                >
                  Apply to Join
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="text-xl font-bold text-foreground">
                  Get Nasim&apos;s Weekly Vendor Picks
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Subscribe to get special deals from our partners, seasonal
                  home maintenance tips, and exclusive vendor spotlights.
                </p>
                <div className="mt-6">
                  <NewsletterSignup variant="compact" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
