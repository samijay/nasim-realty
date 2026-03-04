import Link from "next/link";
import { MapPin, Star, Footprints, ArrowRight } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import type { Neighborhood } from "@/types";

export const NeighborhoodCard = ({
  neighborhood,
  compact = false,
}: {
  neighborhood: Neighborhood;
  compact?: boolean;
}) => {
  return (
    <Link
      href={`/neighborhoods/${neighborhood.slug}`}
      className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      {/* Gradient background */}
      <div
        className={`relative overflow-hidden bg-gradient-to-br ${neighborhood.heroColor} ${
          compact ? "p-5" : "p-6"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="relative">
          <h3 className="text-xl font-bold text-white md:text-2xl">
            {neighborhood.name}
          </h3>
          <p className="mt-1 text-sm text-white/80">{neighborhood.tagline}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            Median: {formatPrice(neighborhood.medianPrice)}
          </span>
          <span className="flex items-center gap-1 text-muted-foreground">
            <Footprints className="h-3.5 w-3.5" />
            Walk: {neighborhood.walkScore}
          </span>
        </div>

        {!compact && (
          <>
            <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="h-3.5 w-3.5 text-accent" />
              Schools: {neighborhood.schoolRating}/10
            </div>
            <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
              {neighborhood.vibe}
            </p>
          </>
        )}

        <div className="mt-3 flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
          Explore neighborhood
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
};
