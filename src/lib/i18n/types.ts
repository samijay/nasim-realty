export type Locale = "en" | "es" | "fr";

export const locales: Locale[] = ["en", "es", "fr"];

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
};

export const localeFlags: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  fr: "FR",
};
