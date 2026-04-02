import Image from "next/image";
import { cn } from "@/lib/utils";

export const PageHero = ({
  title,
  subtitle,
  gradient = "from-primary-dark/90 to-primary/70",
  backgroundImage,
  children,
  compact = false,
}: {
  title: string;
  subtitle?: string;
  gradient?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
  compact?: boolean;
}) => {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        !backgroundImage && `bg-gradient-to-br ${gradient} bg-gradient-animated`,
        compact ? "py-16 md:py-20" : "py-24 md:py-32"
      )}
    >
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </>
      )}

      {!backgroundImage && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-white blur-3xl" />
        </div>
      )}

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-normal tracking-wide uppercase text-white font-display md:text-5xl lg:text-6xl">
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
