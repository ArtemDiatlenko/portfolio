"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { useLanguage } from "./LanguageProvider";

function handleMenuItemClick(event: MouseEvent<HTMLAnchorElement>) {
  const details = event.currentTarget.closest("details");
  if (details) {
    details.removeAttribute("open");
  }
}

export default function HeaderMenu() {
  const { t } = useLanguage();

  return (
    <details className="group relative">
      <summary className="menu-trigger" aria-label={t.nav.menu}>
        <span className="sr-only">{t.nav.menu}</span>
        <span className="flex flex-col gap-1.5">
          <span className="h-px w-5 bg-current transition group-open:translate-y-[7px] group-open:rotate-45" />
          <span className="h-px w-5 bg-current transition group-open:opacity-0" />
          <span className="h-px w-5 bg-current transition group-open:-translate-y-[7px] group-open:-rotate-45" />
        </span>
      </summary>

      <div className="menu-panel">
        <Link href="/" className="menu-link" onClick={handleMenuItemClick}>
          {t.nav.home}
        </Link>
        <Link href="/about" className="menu-link" onClick={handleMenuItemClick}>
          {t.nav.about}
        </Link>
        <Link href="/projects" className="menu-link" onClick={handleMenuItemClick}>
          {t.nav.projects}
        </Link>
        <Link href="/contact" className="menu-link" onClick={handleMenuItemClick}>
          {t.nav.contact}
        </Link>
      </div>
    </details>
  );
}
