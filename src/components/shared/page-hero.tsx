import { cn } from "@/lib/utils";

export const PageHero = ({
  title,
  subtitle,
  gradient = "from-primary-dark/90 to-primary/70",
  children,
  compact = false,
}: {
  title: string;
  subtitle?: string;
  gradient?: string;
  children?: React.ReactNode;
  compact?: boolean;
}) => {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-br",
        gradient,
        compact ? "py-16 md:py-20" : "py-24 md:py-32"
      )}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-white/80 md:text-xl">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
};
