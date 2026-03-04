"use client";

import { LocaleProvider } from "@/lib/i18n/context";
import { en } from "@/lib/i18n/en";
import { es } from "@/lib/i18n/es";
import { fr } from "@/lib/i18n/fr";

const dictionaries = { en, es, fr };

export const I18nWrapper = ({ children }: { children: React.ReactNode }) => {
  return <LocaleProvider dictionaries={dictionaries}>{children}</LocaleProvider>;
};
