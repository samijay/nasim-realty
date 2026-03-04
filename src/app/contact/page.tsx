"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Clock,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PageHero } from "@/components/shared/page-hero";
import { AnimatedSection } from "@/components/shared/animated-section";
import { siteConfig } from "@/lib/site-config";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  inquiryType: z.enum(["buying", "selling", "general", "neighborhood"]),
  neighborhood: z.string().optional(),
  message: z.string().min(10, "Please provide a bit more detail"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let's Talk"
        subtitle="Whether you're buying, selling, or just curious — I'm here to help."
        compact
      />

      <Suspense fallback={<div className="py-16 text-center text-muted-foreground">Loading...</div>}>
        <ContactFormSection />
      </Suspense>
    </>
  );
}

function ContactFormSection() {
  const searchParams = useSearchParams();
  const preselectedNeighborhood = searchParams.get("neighborhood") || "";
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactForm | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      inquiryType: preselectedNeighborhood ? "neighborhood" : "general",
      neighborhood: preselectedNeighborhood,
    },
  });

  const inquiryType = watch("inquiryType");

  const onSubmit = async (data: ContactForm) => {
    console.log("Contact form submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmittedData(data);
    setSubmitted(true);
  };

  return (
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Form */}
            <AnimatedSection className="lg:col-span-2">
              {submitted && submittedData ? (
                <div className="rounded-xl border border-green-200 bg-green-50 p-8 sm:p-12 dark:border-green-800 dark:bg-green-900/20">
                  <div className="text-center mb-6">
                    <CheckCircle className="mx-auto h-16 w-16 text-green-600 mb-4" />
                    <h2 className="text-2xl font-bold text-foreground">
                      Message Sent!
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                      Thanks, {submittedData.name.split(" ")[0]}! Nasim will get back to you within 24 hours.
                    </p>
                  </div>
                  <div className="rounded-lg bg-white/60 dark:bg-white/5 border border-green-100 dark:border-green-800 p-4 space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Reply to:</span>{" "}
                      {submittedData.email}
                      {submittedData.phone && ` · ${submittedData.phone}`}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Topic:</span>{" "}
                      {submittedData.inquiryType === "buying" ? "Buying a home" :
                       submittedData.inquiryType === "selling" ? "Selling my home" :
                       submittedData.inquiryType === "neighborhood" ? "Neighborhood info" :
                       "General inquiry"}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setSubmittedData(null);
                    }}
                    className="mt-6 mx-auto block text-sm text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Name *
                      </label>
                      <input
                        {...register("name")}
                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Email *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="you@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Phone
                        {inquiryType === "selling" && (
                          <span className="text-xs font-normal text-primary ml-1">(recommended for sellers)</span>
                        )}
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="(510) 555-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        I&apos;m interested in...
                      </label>
                      <select
                        {...register("inquiryType")}
                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="buying">Buying a home</option>
                        <option value="selling">Selling my home</option>
                        <option value="neighborhood">
                          Neighborhood info
                        </option>
                        <option value="general">General inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Message *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell me about your goals — timeline, budget, neighborhoods you're interested in..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-light transition-colors disabled:opacity-50"
                  >
                    <Send className="h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </AnimatedSection>

            {/* Contact Info Sidebar */}
            <AnimatedSection delay={200}>
              <div className="space-y-6">
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    Get in Touch Directly
                  </h3>
                  <div className="space-y-4">
                    <a
                      href={`tel:${siteConfig.agent.phone}`}
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <p>{siteConfig.agent.phone}</p>
                      </div>
                    </a>
                    <a
                      href={`mailto:${siteConfig.agent.email}`}
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p>{siteConfig.agent.email}</p>
                      </div>
                    </a>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Office</p>
                        <p>
                          {siteConfig.office.address}
                          <br />
                          {siteConfig.office.city}, {siteConfig.office.state}{" "}
                          {siteConfig.office.zip}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">
                      Response Time
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I respond to all inquiries within 24 hours — usually much
                    faster. For urgent matters, call or text directly.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
  );
}
