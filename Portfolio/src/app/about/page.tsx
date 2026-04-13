import { type ReactNode } from "react";
import { useLanguage } from "../components/useLanguage";
import ScrollReveal from "../components/ScrollReveal";

const stack = ["Blazor", "Angular", "TypeScript", "React", "HTML", "CSS"];

type SectionCardProps = {
  title: string;
  children: ReactNode;
};

function SectionCard({ title, children }: SectionCardProps) {
  return (
    <div className="glass-card glass-card--interactive rounded-3xl p-7 sm:p-8">
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h2>
      <div className="mt-5">{children}</div>
    </div>
  );
}

type MetaItemProps = {
  label: string;
  value: string;
};

function MetaItem({ label, value }: MetaItemProps) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300/70">{label}</p>
      <p className="mt-1 text-slate-700 dark:text-slate-100">{value}</p>
    </div>
  );
}

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <section className="space-y-10 sm:space-y-12">
      <ScrollReveal className="page-head">
        <p className="section-kicker">{t.about.label}</p>
        <h1 className="section-title">
          {t.about.title}
        </h1>
        <p className="section-intro">{t.about.intro}</p>
      </ScrollReveal>

      <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
        <div className="glass-panel rounded-[2rem] p-7 sm:sticky sm:top-28 sm:p-8">
          <ScrollReveal>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{t.about.whoIAm}</h2>
          </ScrollReveal>
          <ScrollReveal delay={70} mode="up">
            <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-200/80">
              <p>{t.about.whoIAmP1}</p>
              <p>{t.about.whoIAmP2}</p>
            </div>
          </ScrollReveal>
        </div>

        <div className="space-y-6">
          <ScrollReveal mode="left">
            <SectionCard title={t.about.coreStack}>
              <div className="flex flex-wrap gap-3">
                {stack.map((item) => (
                    <span
                      key={item}
                      className="skill-badge rounded-full px-4 py-2 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
            </SectionCard>
          </ScrollReveal>

          <ScrollReveal mode="left" delay={80}>
            <SectionCard title={t.about.background}>
              <div className="space-y-4">
                <MetaItem label={t.about.focusLabel} value={t.about.focusValue} />
                <MetaItem label={t.about.locationLabel} value={t.about.locationValue} />
                <MetaItem label={t.about.languagesLabel} value={t.about.languagesValue} />
              </div>
            </SectionCard>
          </ScrollReveal>

          <ScrollReveal mode="left" delay={100}>
            <SectionCard title={t.about.principlesTitle}>
              <ul className="space-y-3">
                {t.about.principles.map((principle) => (
                  <li
                    key={principle}
                    className="process-step rounded-xl px-4 py-3 text-sm leading-7 text-slate-700 glass-card--interactive dark:text-slate-200/80"
                  >
                    {principle}
                  </li>
                ))}
              </ul>
            </SectionCard>
          </ScrollReveal>
        </div>
      </div>

      <ScrollReveal delay={70} mode="up">
        <div className="glass-panel rounded-[2rem] p-7 sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{t.about.timelineTitle}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {t.about.timeline.map((item) => (
                <ScrollReveal key={`${item.period}-${item.title}`} delay={80} mode="zoom">
                  <article
                  className="timeline-card rounded-[1.5rem] border border-slate-300/65 bg-white/52 p-5 dark:border-slate-200/20 dark:bg-slate-900/45 glass-card--interactive"
                  >
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-300/70">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-200/80">{item.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
