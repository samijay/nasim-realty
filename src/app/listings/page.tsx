"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { PropertyCard } from "@/components/property/property-card";
import { AnimatedSection } from "@/components/shared/animated-section";
import { listings, getActiveListings, getSoldListings } from "@/lib/listings";
import { neighborhoods } from "@/lib/neighborhoods";

type StatusFilter = "all" | "active" | "sold";

export default function ListingsPage() {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [neighborhoodFilter, setNeighborhoodFilter] = useState("all");
  const [bedsFilter, setBedsFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredListings = useMemo(() => {
    return listings.filter((listing) => {
      if (statusFilter !== "all" && listing.status !== statusFilter) return false;
      if (neighborhoodFilter !== "all" && listing.neighborhoodSlug !== neighborhoodFilter) return false;
      if (bedsFilter !== "all" && listing.beds < parseInt(bedsFilter)) return false;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          listing.address.toLowerCase().includes(query) ||
          listing.neighborhood.toLowerCase().includes(query) ||
          listing.description.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [statusFilter, neighborhoodFilter, bedsFilter, searchQuery]);

  const activeCount = getActiveListings().length;
  const soldCount = getSoldListings().length;

  return (
    <>
      <PageHero
        title="Property Listings"
        subtitle={`${activeCount} active listings across the East Bay's best neighborhoods`}
        compact
      />

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-8 rounded-xl border border-border bg-card p-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by address, neighborhood..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {/* Status */}
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
                  className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active ({activeCount})</option>
                  <option value="sold">Sold ({soldCount})</option>
                </select>

                {/* Neighborhood */}
                <select
                  value={neighborhoodFilter}
                  onChange={(e) => setNeighborhoodFilter(e.target.value)}
                  className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="all">All Neighborhoods</option>
                  {neighborhoods.map((n) => (
                    <option key={n.slug} value={n.slug}>
                      {n.name}
                    </option>
                  ))}
                </select>

                {/* Beds */}
                <select
                  value={bedsFilter}
                  onChange={(e) => setBedsFilter(e.target.value)}
                  className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="all">Any Beds</option>
                  <option value="1">1+ Beds</option>
                  <option value="2">2+ Beds</option>
                  <option value="3">3+ Beds</option>
                  <option value="4">4+ Beds</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results count */}
          <p className="mb-6 text-sm text-muted-foreground">
            <SlidersHorizontal className="inline h-4 w-4 mr-1" />
            Showing {filteredListings.length} of {listings.length} properties
          </p>

          {/* Listing Grid */}
          {filteredListings.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredListings.map((listing, i) => (
                <AnimatedSection key={listing.id} delay={i * 100}>
                  <PropertyCard property={listing} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-border bg-card p-12 text-center">
              <Search className="mx-auto h-12 w-12 text-muted-foreground/40 mb-4" />
              <p className="text-lg font-semibold text-foreground">
                No properties match your filters
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try adjusting your search criteria or{" "}
                <button
                  onClick={() => {
                    setStatusFilter("all");
                    setNeighborhoodFilter("all");
                    setBedsFilter("all");
                    setSearchQuery("");
                  }}
                  className="text-primary hover:underline"
                >
                  clear all filters
                </button>
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
