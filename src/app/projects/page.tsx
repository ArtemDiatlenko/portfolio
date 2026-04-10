"use client";

import { useLanguage } from "../components/LanguageProvider";

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <section className="space-y-12">
      <div className="animate-enter space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">{t.projects.label}</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{t.projects.title}</h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-400">{t.projects.intro}</p>
      </div>

      <div className="animate-enter animate-delay-1 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {t.projects.items.map((project) => (
          <article
            key={project.name}
            className="rounded-3xl border border-zinc-800 bg-white/[0.03] p-7 transition duration-300 hover:border-zinc-700 hover:bg-white/[0.04]"
          >
            <h2 className="text-xl font-semibold text-white">{project.name}</h2>
            <p className="mt-4 text-zinc-400 leading-7">{project.description}</p>

            <div className="mt-5 space-y-2 text-sm text-zinc-300">
              <p>
                <span className="text-zinc-500">{t.projects.stack}: </span>
                {project.stack}
              </p>
              <p>
                <span className="text-zinc-500">{t.projects.status}: </span>
                {project.status}
              </p>
            </div>

            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-200 transition hover:border-zinc-500 hover:text-white"
            >
              {t.projects.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
