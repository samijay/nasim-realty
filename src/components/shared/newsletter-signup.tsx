"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export const NewsletterSignup = ({
  variant = "default",
}: {
  variant?: "default" | "compact" | "hero";
}) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  if (submitted) {
    return (
      <div className={variant === "hero" ? "text-white" : "text-foreground"}>
        <p className="text-lg font-semibold">You&apos;re in!</p>
        <p className="text-sm opacity-80 mt-1">
          Check your inbox for a welcome from Nasim.
        </p>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
          className="flex-1 rounded-lg border border-border bg-card px-4 py-2 text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-light transition-colors"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email for Oakland market updates"
        required
        className={`flex-1 rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
          variant === "hero"
            ? "border-white/30 bg-white/10 text-white placeholder:text-white/60 backdrop-blur-sm"
            : "border-border bg-card text-card-foreground placeholder:text-muted-foreground"
        }`}
      />
      <button
        type="submit"
        className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark transition-colors flex items-center justify-center gap-2"
      >
        <Send className="h-4 w-4" />
        Subscribe
      </button>
    </form>
  );
};
