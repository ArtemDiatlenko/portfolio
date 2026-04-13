import { useEffect, useMemo, useState, type ReactNode } from "react";
import { defaultLocale, translations, type Locale } from "../i18n/translations";
import { LanguageContext } from "./useLanguage";

function isLocale(value: string): value is Locale {
  return value === "en" || value === "pl";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return defaultLocale;
    }

    const stored = window.localStorage.getItem("portfolio-locale");
    if (stored && isLocale(stored)) {
      return stored;
    }

    return navigator.language.toLowerCase().startsWith("pl") ? "pl" : defaultLocale;
  });

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem("portfolio-locale", locale);
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
    }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
