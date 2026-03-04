import Link from "next/link";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";
import type { Property } from "@/types";

export const PropertyCard = ({ property }: { property: Property }) => {
  const statusColors = {
    active: "bg-green-500",
    pending: "bg-amber-500",
    sold: "bg-red-500",
  };

  const statusLabels = {
    active: "Active",
    pending: "Pending",
    sold: property.soldPrice ? `Sold ${formatPrice(property.soldPrice)}` : "Sold",
  };

  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Image placeholder */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-primary/40">
            <Maximize className="mx-auto h-12 w-12 mb-2" />
            <p className="text-sm font-medium">{property.sqft.toLocaleString()} sqft</p>
          </div>
        </div>
        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <span
            className={cn(
              "rounded-full px-3 py-1 text-xs font-semibold text-white",
              statusColors[property.status]
            )}
          >
            {statusLabels[property.status]}
          </span>
        </div>
        {/* Price overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <p className="text-2xl font-bold text-white">
            {formatPrice(property.price)}
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="p-4">
        <p className="font-semibold text-foreground text-lg leading-tight">
          {property.address}
        </p>
        <Link
          href={`/neighborhoods/${property.neighborhoodSlug}`}
          className="mt-1 flex items-center gap-1 text-sm text-primary hover:underline"
        >
          <MapPin className="h-3 w-3" />
          {property.neighborhood}
        </Link>

        <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            {property.beds} bed{property.beds !== 1 ? "s" : ""}
          </span>
          <span className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            {property.baths} bath{property.baths !== 1 ? "s" : ""}
          </span>
          <span className="flex items-center gap-1">
            <Maximize className="h-4 w-4" />
            {property.sqft.toLocaleString()} sqft
          </span>
        </div>

        {/* Features */}
        <div className="mt-3 flex flex-wrap gap-1">
          {property.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
