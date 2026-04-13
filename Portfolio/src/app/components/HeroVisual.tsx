import { useLanguage } from "./useLanguage";

export default function HeroVisual() {
  const { t } = useLanguage();
  const statPreview = t.hero.quickFacts.slice(0, 2);

  return (
    <div className="relative z-10 flex min-h-[420px] flex-col justify-between overflow-hidden p-7 sm:p-10 lg:min-h-full lg:p-12">
      <div className="animate-enter relative z-10 self-start">
        <span className="hero-status-pill">
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.95)]" />
          {t.hero.openToWork}
        </span>
      </div>

      <div className="animate-enter animate-delay-1 relative z-10 w-full max-w-md self-end space-y-4">
        <div className="hero-visual-frame glass-card glass-card--interactive rounded-[2rem] p-6 sm:p-7">
          <div className="hero-visual-grid" />
          <p className="relative z-10 text-xs font-medium uppercase tracking-[0.24em] text-slate-500 dark:text-slate-300/70">
            {t.hero.basedIn}
          </p>
          <p className="relative z-10 mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {t.hero.city}
          </p>
          <p className="relative z-10 mt-3 max-w-xs text-sm leading-7 text-slate-600 dark:text-slate-200/80">
            {t.hero.visualNote}
          </p>

          <div className="hero-visual-rings" />
          <div className="hero-visual-node hero-visual-node--one" />
          <div className="hero-visual-node hero-visual-node--two" />
          <div className="hero-visual-node hero-visual-node--three" />
        </div>

        <div className="grid gap-3 sm:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-card glass-card--interactive rounded-[1.6rem] p-4">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300/70">
              {t.hero.focusLabel}
            </p>
            <p className="mt-2 text-sm font-medium leading-6 text-slate-800 dark:text-slate-100">{t.hero.focusValue}</p>

            <div className="mt-5 space-y-2">
              {statPreview.map((item) => (
                <div key={item.label} className="flex items-center justify-between border-t border-slate-200/60 pt-2 dark:border-slate-200/10">
                  <span className="text-[0.63rem] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-300/70">
                    {item.label}
                  </span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card glass-card--interactive rounded-[1.6rem] p-4">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300/70">
              {t.hero.stackLabel}
            </p>
            <p className="mt-2 text-sm font-medium leading-6 text-slate-800 dark:text-slate-100">{t.hero.stackValue}</p>
            <div className="mt-4 rounded-2xl border border-slate-200/70 bg-white/55 p-3 dark:border-slate-200/10 dark:bg-slate-900/30">
              <div className="flex items-center justify-between">
                <span className="text-[0.62rem] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-300/70">
                  {t.hero.role}
                </span>
                <span className="text-xs font-semibold text-slate-900 dark:text-white">{t.hero.openToWork}</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-800/70">
                <div className="hero-signal-bar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
