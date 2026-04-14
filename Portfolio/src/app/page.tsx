import HeroBackground from "./components/HeroBackground";
import HeroContent from "./components/HeroContent";
import HeroVisual from "./components/HeroVisual";
import { Link } from "react-router-dom";
import { useLanguage } from "./components/useLanguage";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  const { t } = useLanguage();
  const exploreCards = [
    {
      to: "/about",
      section: t.nav.about,
      title: t.about.title,
      text: t.about.intro,
      cta: t.hero.exploreSkills,
      mode: "left" as const,
    },
    {
      to: "/skills",
      section: t.nav.skills,
      title: t.home.skillsCardTitle,
      text: t.home.skillsCardText,
      cta: t.hero.exploreSkills,
      mode: "left" as const,
    },
    {
      to: "/projects",
      section: t.nav.projects,
      title: t.home.projectsCardTitle,
      text: t.home.projectsCardText,
      cta: t.hero.viewProjects,
      mode: "zoom" as const,
    },
    {
      to: "/contact",
      section: t.nav.contact,
      title: t.contact.title,
      text: t.contact.intro,
      cta: t.hero.contactMe,
      mode: "up" as const,
    },
  ];

  return (
    <section className="space-y-10 sm:space-y-12">
      <section className="hero-shell glass-panel relative grid min-h-[calc(100vh-170px)] overflow-hidden rounded-[2.2rem] lg:grid-cols-[1.08fr_0.92fr]">
        <HeroBackground />
        <HeroContent />
        <HeroVisual />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="glass-panel animate-enter rounded-[2rem] p-7 sm:p-9">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="section-kicker">{t.home.label}</p>
            <div className="surface-meter">
              <span />
              <span />
              <span />
            </div>
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {t.home.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-200/80">
            {t.home.intro}
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {t.home.highlights.map((item) => (
              <article key={item.title} className="highlight-tile glass-card glass-card--interactive rounded-[1.6rem] p-5">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-200/80">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="glass-card animate-enter animate-delay-1 rounded-[2rem] p-7 sm:p-8 xl:sticky xl:top-28">
          <p className="section-kicker">{t.home.processLabel}</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            {t.home.processTitle}
          </h2>
          <div className="mt-5 space-y-4">
            {t.home.processSteps.map((step) => (
              <article
                key={step.step}
                className="process-step glass-card--interactive rounded-[1.4rem] border border-slate-300/65 bg-white/50 p-4 dark:border-slate-200/20 dark:bg-slate-900/45"
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-300/70">
                  {step.step}
                </p>
                <h3 className="mt-1.5 text-base font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-200/80">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12">
        {exploreCards.map((card, index) => (
          <ScrollReveal
            key={card.to}
            delay={index * 70}
            mode={index % 3 === 0 ? "tilt" : card.mode}
            className={index === 0 ? "lg:col-span-7" : index === 1 ? "lg:col-span-5" : "lg:col-span-6"}
          >
            <Link
              to={card.to}
              viewTransition
              className="explore-card group glass-card glass-card--interactive block rounded-[2rem] p-6"
            >
              <div className="explore-card__glow" />
              <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300/70">{card.section}</p>
              <p className="relative z-10 mt-3 text-xl font-semibold text-slate-900 dark:text-white">{card.title}</p>
              <p className="relative z-10 mt-3 max-w-xl text-sm leading-7 text-slate-700 dark:text-slate-200/80">{card.text}</p>
              <div className="relative z-10 mt-6 flex items-center justify-between gap-4">
                <p className="text-sm font-medium text-slate-900 transition-transform duration-300 group-hover:translate-x-1 dark:text-white">→ {card.cta}</p>
                <span className="explore-card__dot" />
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
