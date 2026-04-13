export default function HeroBackground() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[linear-gradient(165deg,rgba(255,255,255,0.46),rgba(235,244,255,0.28))] dark:bg-[linear-gradient(165deg,rgba(13,24,43,0.96),rgba(16,30,54,0.82))]" />
      <div className="hero-orb absolute left-8 top-12 h-40 w-40 rounded-full bg-cyan-300/22 blur-3xl dark:bg-cyan-300/14" />
      <div className="hero-orb hero-orb--two absolute right-14 top-1/4 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl dark:bg-indigo-400/12" />
      <div className="hero-orb hero-orb--three absolute bottom-14 left-1/3 h-28 w-28 rounded-full bg-blue-200/30 blur-2xl dark:bg-blue-400/14" />
      <div className="hero-orb hero-orb--pulse absolute right-1/3 top-24 h-8 w-8 rounded-full bg-cyan-200/44 blur-sm dark:bg-cyan-200/20" />
      <div className="hero-orb hero-orb--scan absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 dark:bg-white/10 blur-md" />
      <div className="absolute inset-0 opacity-35 [background:linear-gradient(transparent_96%,rgba(255,255,255,0.22)_97%),linear-gradient(90deg,transparent_96%,rgba(255,255,255,0.22)_97%)] [background-size:36px_36px]" />
    </div>
  );
}
