import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { NewsletterSignup } from "@/components/shared/newsletter-signup";

const footerLinks = {
  explore: [
    { label: "Listings", href: "/listings" },
    { label: "Neighborhoods", href: "/neighborhoods" },
    { label: "Market Insights", href: "/market-insights" },
    { label: "Testimonials", href: "/testimonials" },
  ],
  resources: [
    { label: "Buyer's Guide", href: "/resources" },
    { label: "Seller's Playbook", href: "/resources" },
    { label: "Mortgage Calculator", href: "/resources#calculator" },
    { label: "Oakland Relocation Guide", href: "/resources" },
  ],
  company: [
    { label: "About Nasim", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + Newsletter */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white font-bold text-lg">
                N
              </div>
              <div className="text-lg font-bold text-foreground">
                {siteConfig.name}
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Oakland&apos;s trusted real estate expert. Local knowledge, genuine
              care, proven results.
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
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Explore
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
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Resources
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
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Stay in the Loop
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get weekly Oakland market updates, new listings, and neighborhood
              insights.
            </p>
            <NewsletterSignup variant="compact" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved. {siteConfig.agent.license}
          </p>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
