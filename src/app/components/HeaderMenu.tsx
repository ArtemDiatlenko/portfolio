"use client";
import Link from "next/link";
import type { MouseEvent } from "react";

function handleMenuItemClick(event: MouseEvent<HTMLAnchorElement>) {
  const details = event.currentTarget.closest("details");
  if (details) {
    details.removeAttribute("open");
  }
}

export default function HeaderMenu() {
  return (
    <details className="group relative">
      <summary className="menu-trigger">
        <span className="flex flex-col gap-1.5">
          <span className="h-px w-5 bg-current transition group-open:translate-y-[7px] group-open:rotate-45" />
          <span className="h-px w-5 bg-current transition group-open:opacity-0" />
          <span className="h-px w-5 bg-current transition group-open:-translate-y-[7px] group-open:-rotate-45" />
        </span>
      </summary>

      <div className="menu-panel">
        <Link
          href="/"
          className="menu-link"
          onClick={handleMenuItemClick}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="menu-link"
          onClick={handleMenuItemClick}
        >
          About
        </Link>
        <Link
          href="/projects"
          className="menu-link"
          onClick={handleMenuItemClick}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="menu-link"
          onClick={handleMenuItemClick}
        >
          Contact
        </Link>
      </div>
    </details>
  );
}