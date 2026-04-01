"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const StatCounter = ({
  end,
  suffix = "",
  prefix = "",
  label,
  duration = 2000,
  className,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  className?: string;
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [hasAnimated, end, duration]);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div className={cn(
        "text-5xl font-normal text-primary font-display md:text-6xl",
        hasAnimated && "animate-counter-reveal"
      )}>
        {prefix}
        {count}
        {suffix}
      </div>
      <span className="mt-2 block text-xs font-medium text-muted-foreground uppercase tracking-[0.15em]">
        {label}
      </span>
    </div>
  );
};
