import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
  useLocation,
  useOutlet,
} from "react-router-dom";
import Home from "./app/page";
import AboutPage from "./app/about/page";
import SkillsPage from "./app/skills/page";
import ProjectsPage from "./app/projects/page";
import ContactPage from "./app/contact/page";
import AmbientExperience from "./app/components/AmbientExperience";
import HeaderMenu from "./app/components/HeaderMenu";
import LanguageSwitch from "./app/components/LanguageSwitch";
import SiteFooter from "./app/components/SiteFooter";
import ScrollToTopOnRouteChange from "./app/components/ScrollToTopOnRouteChange";
import { LanguageProvider } from "./app/components/LanguageProvider";
import { useLanguage } from "./app/components/useLanguage";

type RouteMetaKey =
  | "home"
  | "about"
  | "skills"
  | "projects"
  | "contact";
type NavItem = {
  to: string;
  label: string;
};

const routeMetaByPath: Record<string, RouteMetaKey> = {
  "/": "home",
  "/about": "about",
  "/skills": "skills",
  "/projects": "projects",
  "/contact": "contact",
};

function RouteMeta() {
  const { pathname } = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const metaKey = routeMetaByPath[pathname] ?? "home";
    const meta = t.meta[metaKey];
    document.title = meta.title;

    const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.content = meta.description;
    }
  }, [pathname, t]);

  return null;
}

function SiteHeader() {
  const { t } = useLanguage();
  const navItems: NavItem[] = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/skills", label: t.nav.skills },
    { to: "/projects", label: t.nav.projects },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6">
      <div className="site-header-shell glass-panel mx-auto w-full max-w-6xl rounded-3xl px-4 py-3.5 sm:px-5">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          <div className="justify-self-start md:hidden">
            <HeaderMenu items={navItems} menuLabel={t.nav.menu} />
          </div>
          <nav className="hidden flex-wrap items-center gap-1 justify-self-start md:flex md:max-w-[calc(100vw-340px)] lg:max-w-none">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                viewTransition
                end={item.to === "/"}
                className={({ isActive }) =>
                  `nav-item ${isActive ? "nav-item-active" : "text-slate-600 hover:bg-white/65 hover:text-slate-900 dark:text-slate-200/75 dark:hover:bg-slate-800/60 dark:hover:text-white"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Link to="/" viewTransition className="group justify-self-center text-center">
            <span className="block text-[0.74rem] font-medium tracking-[0.32em] text-slate-500 transition group-hover:text-slate-700 dark:text-slate-300 dark:group-hover:text-slate-100">
              FRONTEND
            </span>
            <span className="shine-text block text-lg font-semibold tracking-[0.16em] sm:text-xl">
              A.D.
            </span>
          </Link>
          <div className="justify-self-end">
            <LanguageSwitch />
          </div>
        </div>
      </div>
    </header>
  );
}

function AppLayout() {
  const { pathname } = useLocation();
  const outlet = useOutlet();
  const [renderedOutlet, setRenderedOutlet] = useState(outlet);
  const [renderedPath, setRenderedPath] = useState(pathname);
  const [transitionStage, setTransitionStage] = useState<"enter" | "exit">("enter");

  useEffect(() => {
    if (pathname === renderedPath) {
      setRenderedOutlet(outlet);
      return;
    }

    setTransitionStage("exit");

    const swapTimer = window.setTimeout(() => {
      setRenderedOutlet(outlet);
      setRenderedPath(pathname);
      setTransitionStage("enter");
    }, 260);

    return () => {
      window.clearTimeout(swapTimer);
    };
  }, [outlet, pathname, renderedPath]);

  return (
    <>
      <AmbientExperience />
      <ScrollToTopOnRouteChange />
      <RouteMeta />
      <SiteHeader />
      <main className="main-stage mx-auto w-full max-w-6xl flex-1 px-4 pb-14 pt-7 sm:px-6 sm:pt-10">
        <div className={`route-shell route-shell--${transitionStage}`}>
          <div key={renderedPath} className="route-layer">
            {renderedOutlet}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <div className="min-h-screen text-slate-900 dark:text-slate-100 flex flex-col">
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
}
