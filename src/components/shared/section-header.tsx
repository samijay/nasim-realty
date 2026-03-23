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
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
          {kicker}
        </p>
      )}
      <h2 className="text-3xl font-bold text-foreground font-display md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-5 flex items-center gap-2",
          centered && "justify-center"
        )}
      >
        <div className="h-px w-8 bg-accent/40" />
        <div className="h-1.5 w-1.5 rounded-full bg-accent" />
        <div className="h-px w-8 bg-accent/40" />
      </div>
    </div>
  );
};
