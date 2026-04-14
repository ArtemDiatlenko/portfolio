import { Link } from "react-router-dom";
import { useLanguage } from "./useLanguage";

export default function HeroContent() {
  const { t } = useLanguage();
  const capabilityTags = [
    t.hero.focusValue,
    t.hero.stackValue,
    t.hero.city,
  ];

  return (
    <div className="relative z-10 flex items-center px-7 py-10 sm:px-10 lg:px-12">
      <div className="relative z-10 max-w-2xl space-y-8">
        <div className="animate-enter flex flex-wrap items-center gap-3">
          <p className="section-kicker">{t.hero.role}</p>
          <span className="hero-inline-note">{t.hero.availabilityNote}</span>
        </div>

        <div className="animate-enter animate-delay-1 space-y-6">
          <h1 className="hero-display">
            <span className="block text-slate-900 dark:text-white">Artem</span>
            <span className="shine-text block">Diatlenko</span>
          </h1>
          <p className="max-w-xl text-[1.04rem] leading-8 text-slate-700/90 dark:text-slate-200/80 sm:text-[1.08rem]">
            {t.hero.intro}
          </p>
          <div className="flex flex-wrap gap-2.5">
            {capabilityTags.map((item) => (
              <span key={item} className="hero-capability-pill">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="animate-enter animate-delay-2 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            to="/projects"
            viewTransition
            className="group btn btn-primary btn-label inline-flex items-center gap-2 px-7 py-3.5 text-sm"
          >
            {t.hero.viewProjects}
            <svg
              aria-hidden
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path d="M5 12h13" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </Link>

          <Link
            to="/contact"
            viewTransition
            className="btn btn-secondary btn-label inline-flex items-center px-7 py-3.5 text-sm"
          >
            {t.hero.contactMe}
          </Link>
          <span className="hero-side-kicker">{t.hero.visualNote}</span>
        </div>

        <div className="animate-enter animate-delay-3 grid gap-3 md:grid-cols-3">
          {t.hero.quickFacts.map((item) => (
            <div
              key={item.label}
              className="glass-card glass-card--interactive premium-stat rounded-[1.6rem] px-4 py-4"
            >
              <p className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">{item.value}</p>
              <p className="mt-2 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-300/75">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
