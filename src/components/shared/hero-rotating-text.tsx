"use client";

import { useEffect, useState, useCallback } from "react";

const phrases = [
  "Helping families find their dream home in the East Bay",
  "Selling homes above asking with strategic marketing",
  "First-time buyers guided from pre-approval to keys",
  "East Bay neighborhood expertise you can trust",
  "Data-driven insights for confident decisions",
];

export const HeroRotatingText = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const typePhrase = useCallback((phrase: string, onComplete: () => void) => {
    let i = 0;
    setIsTyping(true);
    const typeInterval = setInterval(() => {
      setDisplayText(phrase.slice(0, i + 1));
      i++;
      if (i >= phrase.length) {
        clearInterval(typeInterval);
        setIsTyping(false);
        onComplete();
      }
    }, 35);
    return typeInterval;
  }, []);

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    const intervalId = typePhrase(phrase, () => {
      // Hold the completed text for 2 seconds, then fade out and move to next
      timeout = setTimeout(() => {
        setDisplayText("");
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 2500);
    });

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeout);
    };
  }, [phraseIndex, typePhrase]);

  return (
    <span className="inline-block min-h-[1.5em]">
      {displayText}
      <span
        className={`inline-block w-[2px] h-[1em] bg-accent ml-0.5 align-middle ${
          isTyping ? "animate-pulse" : "opacity-0"
        }`}
      />
    </span>
  );
};
