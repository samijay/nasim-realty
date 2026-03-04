"use client";

import { useState, useMemo } from "react";
import {
  Search,
  SlidersHorizontal,
  ArrowUpDown,
  LayoutGrid,
  List,
  X,
  Building2,
  CalendarDays,
  Hash,
} from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { PropertyCard } from "@/components/property/property-card";
import { AnimatedSection } from "@/components/shared/animated-section";
import {
  listings,
  getActiveListings,
  getSoldListings,
  getCities,
} from "@/lib/listings";
import { neighborhoods } from "@/lib/neighborhoods";
import { formatPrice } from "@/lib/utils";

type StatusFilter = "all" | "active" | "pending" | "sold";
type SortOption =
  | "price-desc"
  | "price-asc"
  | "newest"
  | "beds-desc"
  | "sqft-desc";
type ViewMode = "grid" | "list";

const PRICE_RANGES = [
  { label: "Any Price", min: 0, max: Infinity },
  { label: "Under $500K", min: 0, max: 500000 },
  { label: "$500K–$750K", min: 500000, max: 750000 },
  { label: "$750K–$1M", min: 750000, max: 1000000 },
  { label: "$1M–$1.5M", min: 1000000, max: 1500000 },
  { label: "$1.5M–$2M", min: 1500000, max: 2000000 },
  { label: "$2M+", min: 2000000, max: Infinity },
];

const PROPERTY_TYPES = [
  { value: "all", label: "All Types" },
  { value: "house", label: "House" },
  { value: "condo", label: "Condo" },
  { value: "townhouse", label: "Townhouse" },
  { value: "multi-family", label: "Multi-Family" },
];

export default function ListingsPage() {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [cityFilter, setCityFilter] = useState("all");
  const [neighborhoodFilter, setNeighborhoodFilter] = useState("all");
  const [bedsFilter, setBedsFilter] = useState("all");
  const [priceRange, setPriceRange] = useState(0);
  const [propertyType, setPropertyType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const cities = useMemo(() => getCities(), []);

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (statusFilter !== "all") count++;
    if (cityFilter !== "all") count++;
    if (neighborhoodFilter !== "all") count++;
    if (bedsFilter !== "all") count++;
    if (priceRange !== 0) count++;
    if (propertyType !== "all") count++;
    if (searchQuery) count++;
    return count;
  }, [
    statusFilter,
    cityFilter,
    neighborhoodFilter,
    bedsFilter,
    priceRange,
    propertyType,
    searchQuery,
  ]);

  const clearAllFilters = () => {
    setStatusFilter("all");
    setCityFilter("all");
    setNeighborhoodFilter("all");
    setBedsFilter("all");
    setPriceRange(0);
    setPropertyType("all");
    setSearchQuery("");
  };

  // Filter neighborhoods based on selected city
  const availableNeighborhoods = useMemo(() => {
    if (cityFilter === "all") return neighborhoods;
    const cityNeighborhoodSlugs = new Set(
      listings
        .filter((l) => l.city === cityFilter)
        .map((l) => l.neighborhoodSlug)
    );
    return neighborhoods.filter((n) => cityNeighborhoodSlugs.has(n.slug));
  }, [cityFilter]);

  const filteredListings = useMemo(() => {
    const range = PRICE_RANGES[priceRange];
    let results = listings.filter((listing) => {
      if (statusFilter !== "all" && listing.status !== statusFilter)
        return false;
      if (cityFilter !== "all" && listing.city !== cityFilter) return false;
      if (
        neighborhoodFilter !== "all" &&
        listing.neighborhoodSlug !== neighborhoodFilter
      )
        return false;
      if (bedsFilter !== "all" && listing.beds < parseInt(bedsFilter))
        return false;
      if (range && (listing.price < range.min || listing.price >= range.max))
        return false;
      if (propertyType !== "all" && listing.propertyType !== propertyType)
        return false;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          listing.address.toLowerCase().includes(query) ||
          listing.neighborhood.toLowerCase().includes(query) ||
          listing.city.toLowerCase().includes(query) ||
          listing.description.toLowerCase().includes(query) ||
          (listing.mlsNumber?.toLowerCase().includes(query) ?? false)
        );
      }
      return true;
    });

    // Sort
    results.sort((a, b) => {
      switch (sortBy) {
        case "price-desc":
          return b.price - a.price;
        case "price-asc":
          return a.price - b.price;
        case "newest":
          return (b.listDate ?? "").localeCompare(a.listDate ?? "");
        case "beds-desc":
          return b.beds - a.beds;
        case "sqft-desc":
          return b.sqft - a.sqft;
        default:
          return 0;
      }
    });

    return results;
  }, [
    statusFilter,
    cityFilter,
    neighborhoodFilter,
    bedsFilter,
    priceRange,
    propertyType,
    searchQuery,
    sortBy,
  ]);

  const activeCount = getActiveListings().length;
  const soldCount = getSoldListings().length;
  const pendingCount = listings.filter((l) => l.status === "pending").length;

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
          <div className="mb-8 rounded-xl border border-border bg-card p-4 space-y-3">
            {/* Top row: Search + Filter toggle + Sort + View toggle */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search address, city, MLS#..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                {/* Mobile filter toggle */}
                <button
                  onClick={() => setFiltersOpen(!filtersOpen)}
                  className="sm:hidden flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                      {activeFiltersCount}
                    </span>
                  )}
                </button>

                {/* Sort */}
                <div className="flex items-center gap-1.5">
                  <ArrowUpDown className="hidden sm:block h-4 w-4 text-muted-foreground" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="newest">Newest</option>
                    <option value="price-desc">Price: High → Low</option>
                    <option value="price-asc">Price: Low → High</option>
                    <option value="beds-desc">Most Beds</option>
                    <option value="sqft-desc">Largest</option>
                  </select>
                </div>

                {/* View toggle */}
                <div className="flex rounded-lg border border-border overflow-hidden">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2.5 transition-colors ${
                      viewMode === "grid"
                        ? "bg-primary text-white"
                        : "bg-background text-muted-foreground hover:text-foreground"
                    }`}
                    aria-label="Grid view"
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2.5 transition-colors ${
                      viewMode === "list"
                        ? "bg-primary text-white"
                        : "bg-background text-muted-foreground hover:text-foreground"
                    }`}
                    aria-label="List view"
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Filter row — always visible on desktop, collapsible on mobile */}
            <div
              className={`flex flex-wrap gap-2 overflow-hidden transition-all duration-300 ${
                filtersOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 sm:max-h-96 sm:opacity-100"
              }`}
            >
              {/* Status */}
              <select
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(e.target.value as StatusFilter)
                }
                className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary max-sm:flex-1"
              >
                <option value="all">All Status</option>
                <option value="active">Active ({activeCount})</option>
                <option value="pending">Pending ({pendingCount})</option>
                <option value="sold">Sold ({soldCount})</option>
              </select>

              {/* City */}
              <select
                value={cityFilter}
                onChange={(e) => {
                  setCityFilter(e.target.value);
                  setNeighborhoodFilter("all");
                }}
                className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary max-sm:flex-1"
              >
                <option value="all">All Cities</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>

              {/* Neighborhood */}
              <select
                value={neighborhoodFilter}
                onChange={(e) => setNeighborhoodFilter(e.target.value)}
                className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary max-sm:w-full"
              >
                <option value="all">All Neighborhoods</option>
                {availableNeighborhoods.map((n) => (
                  <option key={n.slug} value={n.slug}>
                    {n.name}
                  </option>
                ))}
              </select>

              {/* Price Range */}
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary max-sm:flex-1"
              >
                {PRICE_RANGES.map((range, i) => (
                  <option key={i} value={i}>
                    {range.label}
                  </option>
                ))}
              </select>

              {/* Beds */}
              <select
                value={bedsFilter}
                onChange={(e) => setBedsFilter(e.target.value)}
                className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary max-sm:flex-1"
              >
                <option value="all">Any Beds</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>

              {/* Property Type */}
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary max-sm:w-full"
              >
                {PROPERTY_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>

              {/* Clear filters */}
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/5 px-3 py-2.5 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                  Clear ({activeFiltersCount})
                </button>
              )}
            </div>
          </div>

          {/* Results count */}
          <p className="mb-6 text-sm text-muted-foreground">
            <SlidersHorizontal className="inline h-4 w-4 mr-1" />
            Showing {filteredListings.length} of {listings.length} properties
            {sortBy !== "newest" && (
              <span className="ml-2 text-xs">
                · Sorted by{" "}
                {sortBy === "price-desc"
                  ? "price (high to low)"
                  : sortBy === "price-asc"
                    ? "price (low to high)"
                    : sortBy === "beds-desc"
                      ? "bedrooms"
                      : "size"}
              </span>
            )}
          </p>

          {/* Listing Grid */}
          {filteredListings.length > 0 ? (
            viewMode === "grid" ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredListings.map((listing, i) => (
                  <AnimatedSection key={listing.id} delay={i * 80}>
                    <PropertyCard property={listing} />
                  </AnimatedSection>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredListings.map((listing, i) => (
                  <AnimatedSection key={listing.id} delay={i * 60}>
                    <PropertyListItem property={listing} />
                  </AnimatedSection>
                ))}
              </div>
            )
          ) : (
            <div className="rounded-xl border border-border bg-card p-12 text-center">
              <Search className="mx-auto h-12 w-12 text-muted-foreground/40 mb-4" />
              <p className="text-lg font-semibold text-foreground">
                No properties match your filters
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try adjusting your search criteria or{" "}
                <button
                  onClick={clearAllFilters}
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

/* ─── List View Item ─────────────────────────────────────────── */

import Link from "next/link";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Property } from "@/types";

const PropertyListItem = ({ property }: { property: Property }) => {
  const statusColors = {
    active: "bg-green-500",
    pending: "bg-amber-500",
    sold: "bg-red-500",
  };

  return (
    <div className="group flex flex-col sm:flex-row overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg">
      {/* Image placeholder */}
      <div className="relative w-full sm:w-64 aspect-[4/3] sm:aspect-auto sm:min-h-[180px] flex-shrink-0 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-primary/40">
            <Building2 className="mx-auto h-8 w-8 mb-1" />
            <p className="text-xs font-medium capitalize">
              {property.propertyType}
            </p>
          </div>
        </div>
        <div className="absolute top-3 left-3">
          <span
            className={cn(
              "rounded-full px-3 py-1 text-xs font-semibold text-white",
              statusColors[property.status]
            )}
          >
            {property.status === "sold" && property.soldPrice
              ? `Sold ${formatPrice(property.soldPrice)}`
              : property.status.charAt(0).toUpperCase() +
                property.status.slice(1)}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-2xl font-bold text-primary">
                {formatPrice(property.price)}
              </p>
              <p className="font-semibold text-foreground mt-0.5">
                {property.address}
              </p>
              <Link
                href={`/neighborhoods/${property.neighborhoodSlug}`}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mt-0.5"
              >
                <MapPin className="h-3 w-3" />
                {property.neighborhood}, {property.city}
              </Link>
            </div>
            {property.mlsNumber && (
              <span className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground bg-muted rounded-md px-2 py-1">
                <Hash className="h-3 w-3" />
                {property.mlsNumber}
              </span>
            )}
          </div>

          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {property.description}
          </p>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Bed className="h-4 w-4" /> {property.beds} bed
            {property.beds !== 1 ? "s" : ""}
          </span>
          <span className="flex items-center gap-1">
            <Bath className="h-4 w-4" /> {property.baths} bath
            {property.baths !== 1 ? "s" : ""}
          </span>
          <span className="flex items-center gap-1">
            <Maximize className="h-4 w-4" /> {property.sqft.toLocaleString()}{" "}
            sqft
          </span>
          {property.pricePerSqft && (
            <span className="text-xs">
              ${property.pricePerSqft}/sqft
            </span>
          )}
          {property.daysOnMarket !== undefined && property.status !== "sold" && (
            <span className="flex items-center gap-1 text-xs">
              <CalendarDays className="h-3 w-3" />
              {property.daysOnMarket} days
            </span>
          )}
          {property.hoa !== undefined && (
            <span className="text-xs">
              HOA ${property.hoa}/mo
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
