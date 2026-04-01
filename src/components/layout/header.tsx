"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Sun, Moon, Lock } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { siteConfig, navLinks, internalNavLinks } from "@/lib/site-config";
import { useLocale } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/shared/language-switcher";

const navTranslationKeys: Record<string, string> = {
  Pitch: "nav.pitch",
  Home: "nav.home",
  About: "nav.about",
  Listings: "nav.listings",
  Neighborhoods: "nav.neighborhoods",
  "Market Insights": "nav.market_insights",
  Testimonials: "nav.testimonials",
  Resources: "nav.resources",
  "Live CRM Demo": "nav.crm_demo",
  Contact: "nav.contact",
  Intelligence: "nav.intelligence",
  Partners: "nav.partners",
  Dashboard: "nav.dashboard",
  CRM: "nav.crm",
};

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useLocale();

  // Show internal links if user is on any internal page
  const onInternalPage = internalNavLinks.some(
    (link) => pathname === link.href || pathname.startsWith(link.href + "/")
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/site" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white font-bold text-lg">
            N
          </div>
          <div>
            <div className="text-lg font-bold text-foreground leading-tight font-display">
              {siteConfig.name}
            </div>
            <div className="text-xs text-muted-foreground leading-tight">
              {t("nav.oakland_real_estate")}
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isCrmDemo = link.label === "Live CRM Demo";
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-primary relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-4 after:rounded-full after:bg-primary"
                    : isCrmDemo
                      ? "text-accent font-semibold hover:text-accent-dark link-underline"
                      : "text-muted-foreground hover:text-foreground link-underline"
                )}
              >
                {t(navTranslationKeys[link.label] ?? link.label)}
              </Link>
            );
          })}
          {onInternalPage && (
            <>
              <div className="mx-1 h-5 w-px bg-border" />
              {internalNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-accent/20 text-accent"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {t(navTranslationKeys[link.label] ?? link.label)}
                </Link>
              ))}
            </>
          )}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-1">
          <LanguageSwitcher />

          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            aria-label={t("nav.toggle_theme")}
          >
            <Sun className="h-5 w-5 dark:hidden" />
            <Moon className="hidden h-5 w-5 dark:block" />
          </button>

          <a
            href={`tel:${siteConfig.agent.phone}`}
            className="btn-glow hidden items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-light transition-colors sm:flex"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.agent.phone}
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-foreground lg:hidden"
            aria-label={t("nav.toggle_menu")}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 py-4 lg:hidden animate-fade-in" style={{ animationDuration: "200ms" }}>
          <nav className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-lg px-4 py-3 text-sm font-medium transition-colors animate-fade-in-up",
                  pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : link.label === "Live CRM Demo"
                      ? "text-accent font-semibold"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
                style={{ animationDelay: `${i * 50}ms`, animationFillMode: "forwards", opacity: 0 }}
              >
                {t(navTranslationKeys[link.label] ?? link.label)}
              </Link>
            ))}
            {onInternalPage && (
              <>
                <div className="my-2 flex items-center gap-2 px-4">
                  <Lock className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Agent Tools
                  </span>
                  <div className="flex-1 border-t border-border" />
                </div>
                {internalNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                      pathname === link.href
                        ? "bg-accent/20 text-accent"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {t(navTranslationKeys[link.label] ?? link.label)}
                  </Link>
                ))}
              </>
            )}
          </nav>
          <a
            href={`tel:${siteConfig.agent.phone}`}
            className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white"
          >
            <Phone className="h-4 w-4" />
            {t("nav.call")} {siteConfig.agent.name}
          </a>
        </div>
      )}
    </header>
  );
};
