import { useEffect, useState } from "react";

type NavigatorConnection = Navigator & {
  connection?: {
    saveData?: boolean;
  };
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function AmbientExperience() {
  const [ambientMode, setAmbientMode] = useState<"compact" | "full">("compact");

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactWidthQuery = window.matchMedia("(max-width: 1024px)");
    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");
    const hoverQuery = window.matchMedia("(hover: hover)");
    const connection = (navigator as NavigatorConnection).connection;
    const prefersCompactAmbient = () =>
      compactWidthQuery.matches ||
      coarsePointerQuery.matches ||
      !hoverQuery.matches ||
      connection?.saveData === true;
    const syncAmbientMode = () => {
      setAmbientMode(prefersCompactAmbient() ? "compact" : "full");
    };

    syncAmbientMode();

    if (reduceMotionQuery.matches) {
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
    let isPointerTrackingEnabled = false;

    const render = () => {
      frameId = 0;
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = clamp(latestScrollY / maxScroll, 0, 1);
      const depth = progress * (prefersCompactAmbient() ? 84 : 220);

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

    const syncPointerTracking = () => {
      const shouldTrackPointer = !prefersCompactAmbient() && !reduceMotionQuery.matches;

      if (shouldTrackPointer === isPointerTrackingEnabled) {
        return;
      }

      isPointerTrackingEnabled = shouldTrackPointer;

      if (shouldTrackPointer) {
        window.addEventListener("pointermove", handlePointerMove, { passive: true });
        return;
      }

      pointerX = 0;
      pointerY = 0;
      window.removeEventListener("pointermove", handlePointerMove);
      scheduleRender();
    };

    const handleModeChange = () => {
      syncAmbientMode();
      syncPointerTracking();
      scheduleRender();
    };

    render();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", scheduleRender);
    compactWidthQuery.addEventListener("change", handleModeChange);
    coarsePointerQuery.addEventListener("change", handleModeChange);
    hoverQuery.addEventListener("change", handleModeChange);
    reduceMotionQuery.addEventListener("change", handleModeChange);
    syncPointerTracking();

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", scheduleRender);
      compactWidthQuery.removeEventListener("change", handleModeChange);
      coarsePointerQuery.removeEventListener("change", handleModeChange);
      hoverQuery.removeEventListener("change", handleModeChange);
      reduceMotionQuery.removeEventListener("change", handleModeChange);
    };
  }, []);

  const isCompact = ambientMode === "compact";

  return (
    <>
      <div aria-hidden="true" className="ambient-stage">
        {!isCompact ? <div className="ambient-grid" /> : null}
        <div className="ambient-gradient ambient-gradient--aurora" />
        {!isCompact ? <div className="ambient-gradient ambient-gradient--halo" /> : null}
        {!isCompact ? <div className="ambient-beam ambient-beam--left" /> : null}
        {!isCompact ? <div className="ambient-beam ambient-beam--right" /> : null}
        <div className="ambient-orb ambient-orb--one" />
        <div className="ambient-orb ambient-orb--two" />
        {!isCompact ? <div className="ambient-orb ambient-orb--three" /> : null}
        {!isCompact ? <div className="ambient-orb ambient-orb--four" /> : null}
        {!isCompact ? <div className="ambient-noise" /> : null}
      </div>
      <div aria-hidden="true" className="scroll-indicator">
        <span className="scroll-indicator__track">
          <span className="scroll-indicator__fill" />
        </span>
      </div>
    </>
  );
}
