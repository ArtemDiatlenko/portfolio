type PageIntroProps = {
  label: string;
  title: string;
  intro: string;
};

export default function PageIntro({ label, title, intro }: PageIntroProps) {
  return (
    <div className="space-y-4">
      <p className="section-kicker">{label}</p>
      <h1 className="section-title">{title}</h1>
      <p className="section-intro">{intro}</p>
    </div>
  );
}
