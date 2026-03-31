import HeroBackground from "./components/HeroBackground";
import HeroContent from "./components/HeroContent";
import HeroVisual from "./components/HeroVisual";

export default function Home() {
  return (
    <section className="relative grid min-h-[calc(100vh-145px)] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl lg:grid-cols-[1.1fr_1fr]">
      <HeroBackground />
      <HeroVisual />
      <HeroContent />
    </section>
  );
}
