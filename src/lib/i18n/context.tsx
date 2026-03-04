"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { Locale } from "./types";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

// Flat dictionary cache
let dictCache: Record<Locale, Record<string, string> | null> = {
  en: null,
  es: null,
  fr: null,
};

export const LocaleProvider = ({
  children,
  dictionaries,
}: {
  children: React.ReactNode;
  dictionaries: Record<Locale, Record<string, string>>;
}) => {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Load saved locale on mount
  useEffect(() => {
    const saved = localStorage.getItem("nasim-locale") as Locale | null;
    if (saved && ["en", "es", "fr"].includes(saved)) {
      setLocaleState(saved);
    }
  }, []);

  // Cache dictionaries
  useEffect(() => {
    dictCache = {
      en: dictionaries.en,
      es: dictionaries.es,
      fr: dictionaries.fr,
    };
  }, [dictionaries]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("nasim-locale", newLocale);
  }, []);

  const t = useCallback(
    (key: string): string => {
      const dict = dictionaries[locale];
      return dict?.[key] ?? dictionaries.en?.[key] ?? key;
    },
    [locale, dictionaries]
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextValue => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};
