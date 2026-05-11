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

type ProjectScreenshot = {
  src: string;
  alt: string;
  label: string;
};

function getProjectLink(project: Record<string, unknown>, key: "liveHref" | "repoHref") {
  const value = project[key];
  return typeof value === "string" ? value : undefined;
}

function getProjectStack(stack: string) {
  return stack.split(",").map((item) => item.trim()).filter(Boolean);
}

function getProjectHighlights(project: Record<string, unknown>) {
  const value = project.highlights;
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter((item): item is string => typeof item === "string");
}

function getProjectText(project: Record<string, unknown>, key: "note") {
  const value = project[key];
  return typeof value === "string" ? value : undefined;
}

function getProjectScreenshots(project: Record<string, unknown>): ProjectScreenshot[] {
  const value = project.screenshots;
  if (!Array.isArray(value)) {
    return [];
  }

  return value.flatMap((item) => {
    if (!item || typeof item !== "object") {
      return [];
    }

    const src = typeof item.src === "string" ? item.src : undefined;
    const alt = typeof item.alt === "string" ? item.alt : undefined;
    const label = typeof item.label === "string" ? item.label : undefined;

    if (!src || !alt || !label) {
      return [];
    }

    return [{ src, alt, label }];
  });
}

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
  const featuredProject = t.projects.items[0];
  const otherProjects = t.projects.items.slice(1);
  const featuredScreenshots = featuredProject ? getProjectScreenshots(featuredProject) : [];

  return (
    <section className="space-y-10 sm:space-y-12">
      <ScrollReveal className="page-head">
        <PageIntro label={t.projects.label} title={t.projects.title} intro={t.projects.intro} />
      </ScrollReveal>

      {featuredProject ? (
        <ScrollReveal mode="soft">
          <article className="project-card project-card--featured glass-panel glass-card--interactive rounded-[2rem] p-7 sm:p-8">
            <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300/70">
                  {t.projects.year} {featuredProject.year}
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                  {featuredProject.name}
                </h2>
                <p className="mt-4 max-w-2xl leading-8 text-slate-700 dark:text-slate-200/80">{featuredProject.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {getProjectStack(featuredProject.stack).map((item) => (
                    <span
                      key={`${featuredProject.name}-${item}`}
                      className="skill-badge rounded-full px-3 py-1.5 text-xs font-medium tracking-[0.08em]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300/70">
                    {t.projects.highlights}
                  </p>
                  <ul className="mt-3 space-y-3">
                    {getProjectHighlights(featuredProject).map((item) => (
                      <li
                        key={item}
                        className="process-step rounded-xl px-4 py-3 text-sm leading-7 text-slate-700 glass-card--interactive dark:text-slate-200/80"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {getProjectText(featuredProject, "note") ? (
                  <p className="mt-5 rounded-[1.2rem] border border-slate-300/65 bg-white/50 px-4 py-3 text-sm leading-7 text-slate-700 dark:border-slate-200/20 dark:bg-slate-900/40 dark:text-slate-200/80">
                    {getProjectText(featuredProject, "note")}
                  </p>
                ) : null}
              </div>

              <div className="grid min-w-0 gap-4 sm:grid-cols-2 xl:grid-cols-1">
                <div className="glass-card rounded-[1.5rem] p-5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300/70">
                    {t.projects.role}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-200/80">{featuredProject.role}</p>
                </div>
                <div className="glass-card rounded-[1.5rem] p-5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300/70">
                    {t.projects.status}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-200/80">{featuredProject.status}</p>
                </div>
                <div className="glass-card rounded-[1.5rem] p-5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300/70">
                    {t.projects.impact}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-200/80">{featuredProject.impact}</p>
                </div>
                <ProjectLinks
                  liveHref={getProjectLink(featuredProject, "liveHref")}
                  repoHref={getProjectLink(featuredProject, "repoHref")}
                  liveLabel={t.projects.ctaLive}
                  repoLabel={t.projects.ctaRepo}
                />
              </div>
            </div>

            {featuredScreenshots.length > 0 ? (
              <div className="mt-8 border-t border-slate-300/65 pt-8 dark:border-slate-200/20">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300/70">
                  {t.projects.galleryTitle}
                </p>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {featuredScreenshots.map((screenshot, index) => (
                    <a
                      key={screenshot.src}
                      href={screenshot.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group overflow-hidden rounded-[1.5rem] border border-slate-300/65 bg-white/55 transition duration-300 hover:-translate-y-0.5 dark:border-slate-200/20 dark:bg-slate-900/45"
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={screenshot.src}
                          alt={screenshot.alt}
                          loading={index === 0 ? "eager" : "lazy"}
                          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                        />
                      </div>
                      <div className="px-4 py-3">
                        <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{screenshot.label}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </article>
        </ScrollReveal>
      ) : null}

      <div className="grid gap-6 md:grid-cols-2">
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
                {getProjectStack(project.stack).map((item) => (
                  <span
                    key={`${project.name}-${item}`}
                    className="skill-badge rounded-full px-3 py-1.5 text-xs font-medium tracking-[0.08em] text-slate-700 dark:text-slate-100"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300/70">
                  {t.projects.highlights}
                </p>
                <ul className="mt-3 space-y-3">
                  {getProjectHighlights(project).map((item) => (
                    <li
                      key={item}
                      className="process-step rounded-xl px-4 py-3 text-sm leading-7 text-slate-700 glass-card--interactive dark:text-slate-200/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
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

              {getProjectText(project, "note") ? (
                <p className="mt-5 rounded-[1.2rem] border border-slate-300/65 bg-white/50 px-4 py-3 text-sm leading-7 text-slate-700 dark:border-slate-200/20 dark:bg-slate-900/40 dark:text-slate-200/80">
                  {getProjectText(project, "note")}
                </p>
              ) : null}

              <div className="mt-7">
                <ProjectLinks
                  compact
                  liveHref={getProjectLink(project, "liveHref")}
                  repoHref={getProjectLink(project, "repoHref")}
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
