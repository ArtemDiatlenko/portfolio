const contactLinks = [
  {
    label: "Email",
    value: "adyatlenko5@gmail.com",
    href: "mailto:adyatlenko5@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/artem-diatlenko",
    href: "https://www.linkedin.com/in/artem-diatlenko",
  },
  {
    label: "GitHub",
    value: "github.com/ArtemDiatlenko",
    href: "https://github.com/ArtemDiatlenko",
  },
  {
    label: "Phone",
    value: "+48 888 813 842",
    href: "tel:+48888813842",
  },
];

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
      className="group rounded-3xl border border-zinc-800 bg-white/[0.03] p-6 transition duration-300 hover:border-zinc-700 hover:bg-white/[0.04]"
    >
      <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">{label}</p>
      <p className="mt-3 text-lg text-zinc-200 transition group-hover:text-white">
        {value}
      </p>
    </a>
  );
}

export default function ContactPage() {
  return (
    <section className="space-y-12">
      <div className="animate-enter space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Contact
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Let’s get in touch.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-400">
          If you want to discuss a project, collaboration, or an opportunity,
          you can reach me through the channels below. I’m mainly focused on
          frontend, but I’d also be glad to gain backend experience and grow in
          a broader development environment.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-enter animate-delay-1 grid gap-4 sm:grid-cols-2">
          {contactLinks.map((item) => (
            <ContactCard
              key={item.label}
              label={item.label}
              value={item.value}
              href={item.href}
            />
          ))}
        </div>

        <div className="animate-enter animate-delay-2 rounded-3xl border border-zinc-800 bg-white/[0.03] p-8">
          <h2 className="text-2xl font-semibold text-white">Availability</h2>
          <div className="mt-5 space-y-5 text-zinc-400 leading-8">
            <p>
              I’m currently open to frontend-focused opportunities,
              collaboration, and product work where clarity, structure, and
              strong UI matter. At the same time, I’d also be interested in
              gaining hands-on backend experience as part of a real project or
              team.
            </p>
            <p>
              The best way to reach me is by email, LinkedIn, or phone. If your
              message is relevant, I’ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}