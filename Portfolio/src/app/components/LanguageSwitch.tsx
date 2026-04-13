import { type KeyboardEvent } from "react";
import { useLanguage } from "./useLanguage";

const locales = [
  { code: "en", label: "EN", title: "Switch language to English" },
  { code: "pl", label: "PL", title: "Przełącz język na polski" },
] as const;

function getNextLocale(currentCode: string, direction: 1 | -1) {
  const currentIndex = locales.findIndex((item) => item.code === currentCode);
  const maxIndex = locales.length - 1;
  return locales[(currentIndex + direction + locales.length) % (maxIndex + 1)].code;
}

export default function LanguageSwitch() {
  const { locale, setLocale, t } = useLanguage();
  const currentIndex = locales.findIndex((item) => item.code === locale);
  const focusedIndex = currentIndex === -1 ? 0 : currentIndex;

  function handleLanguageKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const direction =
      event.key === "ArrowLeft" || event.key === "ArrowUp"
        ? -1
        : event.key === "ArrowRight" || event.key === "ArrowDown"
          ? 1
          : event.key === "Home"
            ? "home"
            : event.key === "End"
              ? "end"
              : null;

    if (direction === null) {
      return;
    }

    event.preventDefault();

    const nextCode =
      direction === "home" || direction === "end"
        ? locales[direction === "home" ? 0 : locales.length - 1].code
        : getNextLocale(locale, direction);

    setLocale(nextCode);

    const nextButton = event.currentTarget.querySelector<HTMLButtonElement>(
      `button[data-locale="${nextCode}"]`,
    );
    nextButton?.focus();
  }

  return (
    <div
      className="lang-switch"
      role="radiogroup"
      aria-label={t.nav.languageSwitch}
      onKeyDown={handleLanguageKeyDown}
    >
      {locales.map((item, index) => (
        <button
          key={item.code}
          type="button"
          role="radio"
          aria-checked={locale === item.code}
          aria-label={item.title}
          className={`lang-switch__option ${locale === item.code ? "is-active" : ""}`}
          onClick={() => setLocale(item.code)}
          tabIndex={index === focusedIndex ? 0 : -1}
          data-locale={item.code}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
