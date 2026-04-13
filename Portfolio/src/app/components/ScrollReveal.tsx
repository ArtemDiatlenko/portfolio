import { type ReactNode, useEffect, useRef, useState } from "react";

type RevealMode = "up" | "zoom" | "left" | "right" | "soft" | "fade" | "tilt";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  mode?: RevealMode;
};

export default function ScrollReveal({ children, className = "", delay = 0, mode = "up" }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.22, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const revealClass = `scroll-reveal scroll-reveal--${mode} ${isVisible ? "is-visible" : ""}`.trim();

  return (
    <div
      ref={containerRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${revealClass} ${className}`.trim()}
      aria-hidden="false"
    >
      {children}
    </div>
  );
}
