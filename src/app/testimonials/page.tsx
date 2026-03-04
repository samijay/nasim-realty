import type { Metadata } from "next";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { PageHero } from "@/components/shared/page-hero";
import { TestimonialCard } from "@/components/testimonial/testimonial-card";
import { testimonials, getTestimonialStats } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description:
    "Read real stories from Oakland homebuyers and sellers who worked with Nasim. 4.9 average rating from 150+ clients.",
};

export default function TestimonialsPage() {
  const stats = getTestimonialStats();

  return (
    <>
      <PageHero
        title="Client Success Stories"
        subtitle="Real stories from real Oakland homeowners. Every review is from a verified client."
      />

      {/* Stats Bar */}
      <section className="border-b border-border bg-card py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="flex items-center gap-1 justify-center">
                <span className="text-3xl font-bold text-foreground">
                  {stats.avgRating}
                </span>
                <Star className="h-6 w-6 fill-accent text-accent" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">
                {stats.totalClients}+
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Happy Clients
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">
                {stats.referralRate}%
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Referral Rate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          <AnimatedSection>
            <TestimonialCard testimonial={testimonials[0]} featured />
          </AnimatedSection>

          {/* Grid */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {testimonials.slice(1).map((testimonial, i) => (
              <AnimatedSection key={testimonial.id} delay={i * 100}>
                <TestimonialCard testimonial={testimonial} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="mt-4 text-white/80">
            Join 150+ happy Oakland homeowners. Let&apos;s talk about your goals.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white hover:bg-accent-dark transition-colors"
          >
            Contact Nasim
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
