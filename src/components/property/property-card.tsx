import Link from "next/link";
import Image from "next/image";
import {
  Bed,
  Bath,
  Maximize,
  MapPin,
  CalendarDays,
  Car,
  Building2,
  Hash,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";
import { neighborhoods } from "@/lib/neighborhoods";
import type { Property } from "@/types";

export const PropertyCard = ({
  property,
  featured = false,
}: {
  property: Property;
  featured?: boolean;
}) => {
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

  const neighborhood = neighborhoods.find(
    (n) => n.slug === property.neighborhoodSlug
  );

  return (
    <div
      className={cn(
        "group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        featured && "lg:col-span-2 lg:row-span-2"
      )}
    >
      {/* Image */}
      <div
        className={cn(
          "relative overflow-hidden",
          featured ? "aspect-[16/10]" : "aspect-[4/3]"
        )}
      >
        {neighborhood?.stockPhoto ? (
          <Image
            src={neighborhood.stockPhoto}
            alt={property.address}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <div className="text-center text-primary/40">
              <Building2 className="mx-auto h-10 w-10 mb-1" />
              <p className="text-xs font-medium">
                {property.sqft.toLocaleString()} sqft
              </p>
            </div>
          </div>
        )}
        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <span
            className={cn(
              "rounded-full px-3 py-1 text-xs font-semibold text-white shadow-sm",
              statusColors[property.status]
            )}
          >
            {statusLabels[property.status]}
          </span>
        </div>
        {/* Days on market badge */}
        {property.daysOnMarket !== undefined && property.status !== "sold" && (
          <div className="absolute top-3 right-3">
            <span className="flex items-center gap-1 rounded-full bg-black/50 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-white">
              <CalendarDays className="h-3 w-3" />
              {property.daysOnMarket}d
            </span>
          </div>
        )}
        {/* Price overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-8">
          <div className="flex items-end justify-between">
            <p className="text-2xl font-bold text-white">
              {formatPrice(property.price)}
            </p>
            {property.pricePerSqft && (
              <p className="text-xs text-white/80">
                ${property.pricePerSqft}/sqft
              </p>
            )}
          </div>
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
          {property.neighborhood}, {property.city}
        </Link>

        <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            {property.beds}
          </span>
          <span className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            {property.baths}
          </span>
          <span className="flex items-center gap-1">
            <Maximize className="h-4 w-4" />
            {property.sqft.toLocaleString()}
          </span>
          {property.garage !== undefined && property.garage > 0 && (
            <span className="flex items-center gap-1">
              <Car className="h-4 w-4" />
              {property.garage}
            </span>
          )}
        </div>

        {/* MLS details row */}
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          {property.mlsNumber && (
            <span className="flex items-center gap-1">
              <Hash className="h-3 w-3" />
              {property.mlsNumber}
            </span>
          )}
          {property.yearBuilt && (
            <span>Built {property.yearBuilt}</span>
          )}
          {property.lotSqft && (
            <span>{(property.lotSqft / 43560).toFixed(2)} acre lot</span>
          )}
          {property.hoa !== undefined && (
            <span>HOA ${property.hoa}/mo</span>
          )}
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
          {property.features.length > 3 && (
            <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              +{property.features.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
