export default function HeroBackground() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,24,27,0.95),rgba(9,9,11,1))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_28%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_24%)]" />
      <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-12 right-12 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
    </div>
  );
}