import { useEffect } from "react";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function AmbientExperience() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      root.style.setProperty("--scroll-progress", "0");
      root.style.setProperty("--scroll-depth", "0px");
      root.style.setProperty("--pointer-x", "0px");
      root.style.setProperty("--pointer-y", "0px");
      return undefined;
    }

    let frameId = 0;
    let latestScrollY = window.scrollY;
    let pointerX = 0;
    let pointerY = 0;

    const render = () => {
      frameId = 0;
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = clamp(latestScrollY / maxScroll, 0, 1);
      const depth = progress * 220;

      root.style.setProperty("--scroll-progress", progress.toFixed(4));
      root.style.setProperty("--scroll-depth", `${depth.toFixed(2)}px`);
      root.style.setProperty("--pointer-x", `${pointerX.toFixed(2)}px`);
      root.style.setProperty("--pointer-y", `${pointerY.toFixed(2)}px`);
    };

    const scheduleRender = () => {
      if (frameId) {
        return;
      }
      frameId = window.requestAnimationFrame(render);
    };

    const handleScroll = () => {
      latestScrollY = window.scrollY;
      scheduleRender();
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = (event.clientX / window.innerWidth - 0.5) * 120;
      pointerY = (event.clientY / window.innerHeight - 0.5) * 120;
      scheduleRender();
    };

    render();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("resize", scheduleRender);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", scheduleRender);
    };
  }, []);

  return (
    <>
      <div aria-hidden="true" className="ambient-stage">
        <div className="ambient-grid" />
        <div className="ambient-gradient ambient-gradient--aurora" />
        <div className="ambient-gradient ambient-gradient--halo" />
        <div className="ambient-beam ambient-beam--left" />
        <div className="ambient-beam ambient-beam--right" />
        <div className="ambient-orb ambient-orb--one" />
        <div className="ambient-orb ambient-orb--two" />
        <div className="ambient-orb ambient-orb--three" />
        <div className="ambient-orb ambient-orb--four" />
        <div className="ambient-noise" />
      </div>
      <div aria-hidden="true" className="scroll-indicator">
        <span className="scroll-indicator__track">
          <span className="scroll-indicator__fill" />
        </span>
      </div>
    </>
  );
}
