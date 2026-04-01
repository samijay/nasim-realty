import Link from "next/link";
import { ArrowRight, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="mx-auto max-w-2xl px-4 text-center">
        {/* Large 404 with gold accent */}
        <div className="relative mb-8">
          <span className="text-[12rem] font-display font-normal tracking-wide text-border/50 leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-px w-32 bg-accent" />
          </div>
        </div>

        <h1 className="text-3xl font-normal tracking-wide uppercase text-foreground font-display md:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <Link
            href="/site"
            className="btn-glow btn-press inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark transition-all"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>
          <Link
            href="/listings"
            className="btn-press inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-all"
          >
            <Search className="h-4 w-4" />
            Browse Listings
          </Link>
          <Link
            href="/contact"
            className="btn-press inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-all"
          >
            Contact Nasim
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
