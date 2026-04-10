"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function HeroContent() {
  const { t } = useLanguage();

  return (
    <div className="relative z-10 flex items-center px-8 py-10 text-zinc-100 sm:px-10 lg:px-12">
      <div className="relative z-10 max-w-xl space-y-8">
        <p className="animate-enter text-base font-medium text-zinc-400">{t.hero.role}</p>

        <div className="animate-enter animate-delay-1 space-y-5">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Artem Diatlenko
          </h1>
          <p className="max-w-lg text-lg leading-8 text-zinc-400">{t.hero.intro}</p>
        </div>

        <div className="animate-enter animate-delay-2 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-zinc-950 shadow-[0_10px_30px_rgba(255,255,255,0.18)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-zinc-200 active:scale-[0.98]"
          >
            {t.hero.viewProjects}
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-white/5 px-7 py-3.5 text-sm font-semibold text-zinc-100 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-zinc-500 hover:bg-zinc-900/80 active:scale-[0.98]"
          >
            {t.hero.contactMe}
          </Link>
        </div>
      </div>
    </div>
  );
}
