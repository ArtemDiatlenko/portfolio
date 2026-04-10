"use client";

import { useLanguage } from "../components/LanguageProvider";

const stack = ["Blazor", "Angular", "TypeScript", "React", "HTML", "CSS"];

type SectionCardProps = {
  title: string;
  children: React.ReactNode;
};

function SectionCard({ title, children }: SectionCardProps) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-white/[0.03] p-8 transition duration-300 hover:border-zinc-700 hover:bg-white/[0.04]">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
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
      <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">{label}</p>
      <p className="mt-1">{value}</p>
    </div>
  );
}

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <section className="space-y-12">
      <div className="animate-enter space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">{t.about.label}</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{t.about.title}</h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-400">{t.about.intro}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="animate-enter animate-delay-1 rounded-3xl border border-zinc-800 bg-white/[0.03] p-8">
          <h2 className="text-2xl font-semibold text-white">{t.about.whoIAm}</h2>
          <div className="mt-5 space-y-5 text-zinc-400 leading-8">
            <p>{t.about.whoIAmP1}</p>
            <p>{t.about.whoIAmP2}</p>
          </div>
        </div>

        <div className="animate-enter animate-delay-2 space-y-6">
          <SectionCard title={t.about.coreStack}>
            <div className="flex flex-wrap gap-3">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-zinc-700 bg-white/5 px-4 py-2 text-sm text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </SectionCard>

          <SectionCard title={t.about.background}>
            <div className="space-y-4 text-zinc-400">
              <MetaItem label={t.about.focusLabel} value={t.about.focusValue} />
              <MetaItem label={t.about.locationLabel} value={t.about.locationValue} />
              <MetaItem label={t.about.languagesLabel} value={t.about.languagesValue} />
            </div>
          </SectionCard>
        </div>
      </div>
    </section>
  );
}
