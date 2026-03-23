import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

export const TestimonialCard = ({
  testimonial,
  featured = false,
}: {
  testimonial: Testimonial;
  featured?: boolean;
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg",
        "border-l-4 border-l-accent",
        featured && "md:col-span-2 md:flex md:gap-8 md:p-8"
      )}
    >
      {/* Star rating strip */}
      <div className={cn("flex items-center gap-2 px-6 pt-5 pb-0", featured && "md:hidden")}>
        <div className="flex gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
          ))}
        </div>
        <span className="text-xs text-muted-foreground ml-auto">
          {testimonial.type === "both" ? "Buyer & Seller" : testimonial.type} &middot; {testimonial.neighborhood}
        </span>
      </div>

      {featured && (
        <div className="hidden md:flex flex-shrink-0 flex-col items-center justify-center md:w-1/4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white font-bold text-2xl">
            {testimonial.initials}
          </div>
          <p className="mt-3 font-semibold text-foreground text-center">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground capitalize text-center">
            {testimonial.type === "both" ? "Buyer & Seller" : testimonial.type}
          </p>
          <p className="text-xs text-muted-foreground">{testimonial.neighborhood}</p>
          <div className="mt-2 flex gap-0.5">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
            ))}
          </div>
        </div>
      )}

      <div className={cn("p-6", featured ? "pt-3 md:pt-0 md:pl-0" : "pt-3")}>
        <blockquote className={cn(
          "font-medium text-foreground italic leading-relaxed font-display",
          featured ? "text-xl md:text-2xl" : "text-base"
        )}>
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {testimonial.story}
        </p>
        <div className={cn("mt-4 flex items-center gap-3", featured && "md:hidden")}>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold text-sm">
            {testimonial.initials}
          </div>
          <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
        </div>
      </div>
    </div>
  );
};
