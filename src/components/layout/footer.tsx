"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { NewsletterSignup } from "@/components/shared/newsletter-signup";
import { useLocale } from "@/lib/i18n";

export const Footer = () => {
  const { t } = useLocale();

  const footerLinks = {
    explore: [
      { label: t("nav.listings"), href: "/listings" },
      { label: t("nav.neighborhoods"), href: "/neighborhoods" },
      { label: t("nav.market_insights"), href: "/market-insights" },
      { label: t("nav.testimonials"), href: "/testimonials" },
    ],
    resources: [
      { label: t("footer.buyers_guide"), href: "/resources" },
      { label: t("footer.sellers_playbook"), href: "/resources" },
      { label: t("footer.mortgage_calculator"), href: "/resources#calculator" },
      { label: t("footer.relocation_guide"), href: "/resources" },
    ],
  };

  return (
    <footer className="bg-card border-t-2 border-accent">
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + Contact */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white font-bold text-lg">
                N
              </div>
              <div className="text-lg font-bold text-foreground font-display">
                {siteConfig.name}
              </div>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
              East Bay Real Estate
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              {t("footer.tagline")}
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a
                href={`tel:${siteConfig.agent.phone}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.agent.phone}
              </a>
              <a
                href={`mailto:${siteConfig.agent.email}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.agent.email}
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>
                  {siteConfig.office.address}, {siteConfig.office.city},{" "}
                  {siteConfig.office.state} {siteConfig.office.zip}
                </span>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              {t("footer.explore")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              {t("footer.resources")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              {t("footer.stay_in_loop")}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t("footer.stay_in_loop_desc")}
            </p>
            <NewsletterSignup variant="compact" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="mt-0 flex flex-col items-center justify-between gap-4 pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. {t("footer.all_rights")}{" "}
            {siteConfig.agent.license}
          </p>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6 transition-transform hover:scale-110" />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6 transition-transform hover:scale-110" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 transition-transform hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
