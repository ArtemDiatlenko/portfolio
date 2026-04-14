import PageIntro from "../components/PageIntro";
import { useLanguage } from "../components/useLanguage";
import ScrollReveal from "../components/ScrollReveal";

type ProjectLinksProps = {
  liveHref?: string;
  repoHref?: string;
  liveLabel: string;
  repoLabel: string;
  compact?: boolean;
};

function ProjectLinks({ liveHref, repoHref, liveLabel, repoLabel, compact = false }: ProjectLinksProps) {
  const baseClass = compact
    ? "btn-label inline-flex min-h-10 items-center justify-center px-4 py-2 text-sm"
    : "btn-label inline-flex min-h-11 items-center justify-center px-5 py-3 text-sm";
  const liveClass = compact ? "btn btn-primary project-link-btn project-link-btn--compact" : "btn btn-primary project-link-btn";
  const repoClass = compact ? "btn btn-primary project-link-btn project-link-btn--compact" : "btn btn-primary project-link-btn";

  return (
    <div className="flex flex-wrap gap-3">
      {liveHref ? (
        <a
          href={liveHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`${liveClass} ${baseClass}`}
        >
          {liveLabel}
        </a>
      ) : null}
      {repoHref ? (
        <a
          href={repoHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`${repoClass} ${baseClass}`}
        >
          {repoLabel}
        </a>
      ) : null}
    </div>
  );
}

export default function ProjectsPage() {
  const { t } = useLanguage();
  const [featuredProject, ...otherProjects] = t.projects.items;

  return (
    <section className="space-y-10 sm:space-y-12">
      <ScrollReveal className="page-head">
        <PageIntro label={t.projects.label} title={t.projects.title} intro={t.projects.intro} />
      </ScrollReveal>

      <ScrollReveal mode="soft">
        <article className="project-card project-card--featured glass-panel glass-card--interactive rounded-[2rem] p-7 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300/70">
                {t.projects.year} {featuredProject.year}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                {featuredProject.name}
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-700 dark:text-slate-200/80">{featuredProject.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {featuredProject.stack.split(",").map((item) => (
                  <span
                    key={`${featuredProject.name}-${item}`}
                    className="skill-badge rounded-full px-3 py-1.5 text-xs font-medium tracking-[0.08em]"
                  >
                    {item.trim()}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="glass-card rounded-[1.5rem] p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300/70">
                  {t.projects.role}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-200/80">{featuredProject.role}</p>
              </div>
              <div className="glass-card rounded-[1.5rem] p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300/70">
                  {t.projects.impact}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-200/80">{featuredProject.impact}</p>
              </div>
              <ProjectLinks
                liveHref={featuredProject.liveHref}
                repoHref={featuredProject.repoHref}
                liveLabel={t.projects.ctaLive}
                repoLabel={t.projects.ctaRepo}
              />
            </div>
          </div>
        </article>
      </ScrollReveal>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {otherProjects.map((project, index) => (
          <ScrollReveal key={project.name} mode={index % 2 === 0 ? "left" : "right"} delay={index * 80}>
            <article className="project-card glass-card glass-card--interactive rounded-[1.8rem] p-7">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300/70">
                  {t.projects.year} {project.year}
                </p>
                <p className="skill-badge rounded-full px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-slate-600 dark:text-slate-200/80">
                  {project.status}
                </p>
              </div>

              <h2 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{project.name}</h2>
              <p className="mt-4 leading-7 text-slate-700 dark:text-slate-200/80">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.split(",").map((item) => (
                  <span
                    key={`${project.name}-${item}`}
                    className="skill-badge rounded-full px-3 py-1.5 text-xs font-medium tracking-[0.08em] text-slate-700 dark:text-slate-100"
                  >
                    {item.trim()}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-200/90">
                <p>
                  <span className="text-slate-500 dark:text-slate-300/70">{t.projects.role}: </span>
                  {project.role}
                </p>
                <p>
                  <span className="text-slate-500 dark:text-slate-300/70">{t.projects.impact}: </span>
                  {project.impact}
                </p>
              </div>

              <div className="mt-7">
                <ProjectLinks
                  compact
                  liveHref={project.liveHref}
                  repoHref={project.repoHref}
                  liveLabel={t.projects.ctaLive}
                  repoLabel={t.projects.ctaRepo}
                />
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
