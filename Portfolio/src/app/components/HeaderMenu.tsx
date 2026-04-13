import { NavLink } from "react-router-dom";
import type { MouseEvent } from "react";

type HeaderMenuLink = {
  to: string;
  label: string;
};

type HeaderMenuProps = {
  items: HeaderMenuLink[];
  menuLabel: string;
};

function handleMenuItemClick(event: MouseEvent<HTMLAnchorElement>) {
  const details = event.currentTarget.closest("details");
  if (details) {
    details.removeAttribute("open");
  }
}

export default function HeaderMenu({ items, menuLabel }: HeaderMenuProps) {
  return (
    <details className="group relative">
      <summary className="menu-trigger" aria-label={menuLabel}>
        <span className="sr-only">{menuLabel}</span>
        <span className="flex flex-col gap-1.5">
          <span className="h-px w-5 bg-current transition group-open:translate-y-[7px] group-open:rotate-45" />
          <span className="h-px w-5 bg-current transition group-open:opacity-0" />
          <span className="h-px w-5 bg-current transition group-open:-translate-y-[7px] group-open:-rotate-45" />
        </span>
      </summary>

      <div className="menu-panel">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            viewTransition
            className={({ isActive }) => `menu-link ${isActive ? "menu-link-active" : ""}`}
            onClick={handleMenuItemClick}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </details>
  );
}
