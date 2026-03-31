export default function HeroVisual() {
  return (
    <div className="relative z-10 flex min-h-[420px] flex-col justify-between overflow-hidden p-8 text-zinc-100 sm:p-10 lg:min-h-full lg:p-12">

      <div className="animate-enter relative z-10">
        <span className="inline-flex items-center rounded-full border border-zinc-700 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-zinc-300 backdrop-blur-sm">
          Open to work
        </span>
      </div>

      <div className="animate-enter animate-delay-1 relative z-10 space-y-2">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">
          Based in
        </p>
        <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Warsaw
        </p>
      </div>
    </div>
  );
}