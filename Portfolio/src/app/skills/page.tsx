import { Link } from "react-router-dom";
import { useLanguage } from "../components/useLanguage";
import ScrollReveal from "../components/ScrollReveal";

export default function SkillsPage() {
  const { t } = useLanguage();

  return (
    <section className="space-y-10 sm:space-y-12">
      <ScrollReveal className="page-head">
        <div className="space-y-4">
          <p className="section-kicker">{t.skills.label}</p>
          <h1 className="section-title">
            {t.skills.title}
          </h1>
          <p className="section-intro">{t.skills.intro}</p>
        </div>
      </ScrollReveal>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <ScrollReveal className="grid gap-6 lg:grid-cols-1">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{t.skills.categoriesTitle}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {t.skills.categories.map((category, index) => (
              <article
                key={category.title}
                className="glass-card glass-card--interactive rounded-[1.8rem] p-6"
              >
                <ScrollReveal delay={index * 70} mode="zoom">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300/75">
                    {category.title}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {category.items.map((item) => (
                    <li
                      key={item}
                      className="process-step rounded-xl px-4 py-2.5 text-sm text-slate-700 glass-card--interactive dark:text-slate-100"
                    >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-200/75">{category.note}</p>
                </ScrollReveal>
              </article>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80} className="space-y-6">
          <div className="glass-card glass-card--interactive rounded-[1.8rem] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300/70">
              {t.skills.proficiencyTitle}
            </p>
            <div className="mt-5 space-y-4">
              {t.skills.levels.map((level) => (
                <div key={level.label} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <p className="font-medium text-slate-800 dark:text-slate-100">{level.label}</p>
                    <span className="text-xs text-slate-500 dark:text-slate-300/75">{level.value}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-200/60 dark:bg-slate-700/55">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                      style={{ width: `${level.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card glass-card--interactive rounded-[1.8rem] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300/70">
              {t.skills.badgesTitle}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {t.skills.badges.map((badge) => (
                <span
                  key={badge}
                  className="skill-badge rounded-full border border-slate-300/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.08em] text-slate-700 dark:border-slate-200/25 dark:text-slate-100"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card glass-card--interactive rounded-[1.8rem] p-6">
            <p className="text-sm font-medium text-slate-800 dark:text-slate-100">
              {t.skills.ctaText}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                to="/projects"
                viewTransition
                className="btn btn-primary btn-label px-4 py-2 text-sm"
              >
                {t.hero.viewProjects}
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
