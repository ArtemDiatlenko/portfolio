import PageIntro from "../components/PageIntro";
import { useLanguage } from "../components/useLanguage";
import ScrollReveal from "../components/ScrollReveal";

type ContactCardProps = {
  label: string;
  value: string;
  href: string;
};

function ContactCard({ label, value, href }: ContactCardProps) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="contact-channel glass-card glass-card--interactive group rounded-[1.7rem] p-6"
    >
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300/70">{label}</p>
      <p className="mt-3 text-lg text-slate-800 transition group-hover:text-slate-950 dark:text-slate-100 dark:group-hover:text-white">
        {value}
      </p>
    </a>
  );
}

export default function ContactPage() {
  const { t } = useLanguage();
  const contactLinks = [
    {
      label: t.contact.channels.email,
      value: "adyatlenko5@gmail.com",
      href: "mailto:adyatlenko5@gmail.com",
    },
    {
      label: t.contact.channels.linkedIn,
      value: "linkedin.com/in/artem-diatlenko",
      href: "https://www.linkedin.com/in/artem-diatlenko",
    },
    {
      label: t.contact.channels.github,
      value: "github.com/ArtemDiatlenko",
      href: "https://github.com/ArtemDiatlenko",
    },
    {
      label: t.contact.channels.phone,
      value: "+48 888 813 842",
      href: "tel:+48888813842",
    },
  ];

  return (
    <section className="space-y-10 sm:space-y-12">
      <ScrollReveal className="page-head">
        <PageIntro label={t.contact.label} title={t.contact.title} intro={t.contact.intro} />
      </ScrollReveal>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <ScrollReveal mode="left" className="space-y-4 sm:sticky sm:top-28 sm:self-start">
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-card glass-card--interactive rounded-[1.5rem] p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300/70">
                  {t.contact.responseLabel}
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{t.contact.responseValue}</p>
              </div>
              <div className="glass-card glass-card--interactive rounded-[1.5rem] p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300/70">
                  {t.contact.timezoneLabel}
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{t.contact.timezoneValue}</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactLinks.map((item) => (
                <ContactCard
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  href={item.href}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal mode="right">
          <div className="glass-panel glass-card--interactive rounded-[2rem] p-7 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{t.contact.availability}</h2>
            <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-200/80">
              <p>{t.contact.availabilityP1}</p>
              <p>{t.contact.availabilityP2}</p>
            </div>

            <h3 className="mt-8 text-lg font-semibold text-slate-900 dark:text-white">{t.contact.processTitle}</h3>
            <div className="mt-4 space-y-3">
              {t.contact.process.map((item) => (
                <article
                  key={item.title}
                  className="process-step glass-card--interactive rounded-[1.45rem] border border-slate-300/65 bg-white/50 p-4 dark:border-slate-200/20 dark:bg-slate-900/45"
                >
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-200/80">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
