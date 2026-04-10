"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageSwitch() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="lang-switch" role="radiogroup" aria-label="Language switch">
      <button
        type="button"
        role="radio"
        aria-checked={locale === "en"}
        className={`lang-switch__option ${locale === "en" ? "is-active" : ""}`}
        onClick={() => setLocale("en")}
      >
        EN
      </button>
      <button
        type="button"
        role="radio"
        aria-checked={locale === "pl"}
        className={`lang-switch__option ${locale === "pl" ? "is-active" : ""}`}
        onClick={() => setLocale("pl")}
      >
        PL
      </button>
    </div>
  );
}
