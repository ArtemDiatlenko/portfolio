import { type ReactNode, useEffect, useRef, useState } from "react";

type NavigatorConnection = Navigator & {
  connection?: {
    saveData?: boolean;
  };
};

type RevealMode = "up" | "zoom" | "left" | "right" | "soft" | "fade" | "tilt";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  mode?: RevealMode;
};

const revealCallbacks = new WeakMap<Element, () => void>();

const sharedRevealObserver =
  typeof window === "undefined"
    ? null
    : new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            revealCallbacks.get(entry.target)?.();
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px 12% 0px" },
      );

export default function ScrollReveal({ children, className = "", delay = 0, mode = "up" }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const compactViewport = window.matchMedia("(max-width: 768px)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const saveData = (navigator as NavigatorConnection).connection?.saveData === true;

    if (reduceMotion || compactViewport || coarsePointer || saveData || !sharedRevealObserver) {
      setIsVisible(true);
      return;
    }

    revealCallbacks.set(element, () => {
      setIsVisible(true);
      sharedRevealObserver.unobserve(element);
      revealCallbacks.delete(element);
    });
    sharedRevealObserver.observe(element);

    return () => {
      sharedRevealObserver.unobserve(element);
      revealCallbacks.delete(element);
    };
  }, []);

  const revealClass = `scroll-reveal scroll-reveal--${mode} ${isVisible ? "is-visible" : ""}`.trim();

  return (
    <div
      ref={containerRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${revealClass} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
