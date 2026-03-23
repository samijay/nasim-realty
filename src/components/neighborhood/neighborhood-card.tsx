import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
      className="group relative block overflow-hidden rounded-xl aspect-[3/4] sm:aspect-[4/5]"
    >
      {neighborhood.stockPhoto ? (
        <Image
          src={neighborhood.stockPhoto}
          alt={`${neighborhood.name} neighborhood`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${neighborhood.heroColor}`} />
      )}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Content pinned to bottom */}
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="text-xl font-bold text-white font-display md:text-2xl">
          {neighborhood.name}
        </h3>
        <p className="mt-1 text-sm text-white/80">{neighborhood.tagline}</p>

        <div className="mt-3 flex items-center gap-4 text-xs text-white/70">
          <span>Median: {formatPrice(neighborhood.medianPrice)}</span>
          <span>Walk: {neighborhood.walkScore}</span>
        </div>

        {!compact && (
          <p className="mt-2 text-sm text-white/60 line-clamp-2">
            {neighborhood.vibe}
          </p>
        )}

        <div className="mt-3 flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
          Explore <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
};
