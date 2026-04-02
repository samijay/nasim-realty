import { cn } from "@/lib/utils";

export const SectionHeader = ({
  title,
  subtitle,
  kicker,
  centered = true,
  className,
}: {
  title: string;
  subtitle?: string;
  kicker?: string;
  centered?: boolean;
  className?: string;
}) => {
  return (
    <div className={cn(centered && "text-center", "mb-14", className)}>
      {kicker && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
          {kicker}
        </p>
      )}
      <h2 className="text-3xl font-normal tracking-wide uppercase text-foreground font-display md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-5 flex items-center",
          centered && "justify-center"
        )}
      >
        <div className="h-px w-16 accent-shimmer" />
      </div>
    </div>
  );
};
