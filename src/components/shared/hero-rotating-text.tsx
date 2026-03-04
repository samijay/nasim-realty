"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Helping families find their dream home in the East Bay",
  "Selling homes above asking with strategic marketing",
  "First-time buyers guided from pre-approval to keys",
  "East Bay neighborhood expertise you can trust",
  "Data-driven insights for confident decisions",
];

export const HeroRotatingText = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setFade(true);
      }, 300);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`inline-block transition-opacity duration-300 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      {phrases[index]}
    </span>
  );
};
