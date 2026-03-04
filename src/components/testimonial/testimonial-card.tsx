import { Star, Quote } from "lucide-react";
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
        "rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-md",
        featured && "md:col-span-2 md:flex md:gap-8 md:p-8"
      )}
    >
      <div className={cn("flex-shrink-0", featured && "md:w-1/3")}>
        {/* Avatar */}
        <div
          className={cn(
            "flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold",
            featured ? "h-20 w-20 text-2xl" : "h-14 w-14 text-lg"
          )}
        >
          {testimonial.initials}
        </div>
        <div className="mt-3">
          <p className="font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground capitalize">
            {testimonial.type === "both"
              ? "Buyer & Seller"
              : testimonial.type}{" "}
            &middot; {testimonial.neighborhood}
          </p>
          {/* Stars */}
          <div className="mt-1 flex gap-0.5">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-accent text-accent"
              />
            ))}
          </div>
        </div>
      </div>

      <div className={cn(featured ? "mt-0" : "mt-4")}>
        <Quote className="h-8 w-8 text-accent/30 mb-2" />
        <blockquote className="text-lg font-semibold text-foreground italic">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {testimonial.story}
        </p>
      </div>
    </div>
  );
};
