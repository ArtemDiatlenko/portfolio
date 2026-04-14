export type SiteRouteKey = "home" | "about" | "skills" | "projects" | "contact";

export type SiteLink = {
  key: SiteRouteKey;
  to: string;
};

export const siteLinks: readonly SiteLink[] = [
  { key: "home", to: "/" },
  { key: "about", to: "/about" },
  { key: "skills", to: "/skills" },
  { key: "projects", to: "/projects" },
  { key: "contact", to: "/contact" },
] as const;

export const footerLinks = siteLinks.filter((link) => link.key !== "home");

export const routeMetaByPath: Record<string, SiteRouteKey> = Object.fromEntries(
  siteLinks.map((link) => [link.to, link.key]),
) as Record<string, SiteRouteKey>;
