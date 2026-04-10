export type Locale = "en" | "pl";

export const defaultLocale: Locale = "en";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      menu: "Open navigation menu",
    },
    hero: {
      role: "Frontend Developer",
      intro:
        "I build modern frontend interfaces with a focus on clarity, usability, and responsiveness. I work with Blazor, Angular, and TypeScript, and I’m currently growing my portfolio and commercial frontend experience.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      openToWork: "Open to work",
      basedIn: "Based in",
      city: "Warsaw",
    },
    about: {
      label: "About",
      title: "A bit more about me.",
      intro:
        "I’m Artem Diatlenko, a frontend-focused developer interested in clean interfaces, practical UI, and modern web applications. I enjoy building products that feel structured, fast, and easy to use.",
      whoIAm: "Who I am",
      whoIAmP1:
        "I’m focused mainly on frontend development and enjoy turning ideas into interfaces that are clear, responsive, and visually balanced. For me, good UI is not only about appearance, but also about how naturally everything works.",
      whoIAmP2:
        "My current stack is centered around Blazor, Angular, and TypeScript, while I also keep exploring broader frontend patterns, component architecture, and product-oriented thinking. Right now, I’m building my portfolio and shaping a cleaner professional profile around web development.",
      coreStack: "Core stack",
      background: "Background",
      focusLabel: "Focus",
      focusValue: "Frontend development, UI implementation",
      locationLabel: "Location",
      locationValue: "Warsaw, Poland",
      languagesLabel: "Languages",
      languagesValue: "English, Polish, Ukrainian, Russian",
    },
    projects: {
      label: "Projects",
      title: "Selected work and current builds.",
      intro:
        "A few projects that represent my current frontend direction: practical UI, clear architecture, and product-focused execution.",
      stack: "Stack",
      status: "Status",
      cta: "See repository",
      items: [
        {
          name: "Portfolio Website",
          description:
            "Personal website built with Next.js and Tailwind, with reusable UI sections and bilingual support.",
          stack: "Next.js, React, TypeScript, Tailwind",
          status: "Live / ongoing improvements",
          href: "https://github.com/ArtemDiatlenko",
        },
        {
          name: "UI Components Playground",
          description:
            "A component sandbox for testing patterns, spacing systems, and adaptive layout behaviors.",
          stack: "React, TypeScript, CSS",
          status: "In progress",
          href: "https://github.com/ArtemDiatlenko",
        },
        {
          name: "Angular Dashboard Prototype",
          description:
            "Admin panel prototype focused on data readability, responsive tables, and clean information hierarchy.",
          stack: "Angular, TypeScript, SCSS",
          status: "Concept / iteration",
          href: "https://github.com/ArtemDiatlenko",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let’s get in touch.",
      intro:
        "If you want to discuss a project, collaboration, or an opportunity, you can reach me through the channels below. I’m mainly focused on frontend, but I’d also be glad to gain backend experience and grow in a broader development environment.",
      availability: "Availability",
      availabilityP1:
        "I’m currently open to frontend-focused opportunities, collaboration, and product work where clarity, structure, and strong UI matter. At the same time, I’d also be interested in gaining hands-on backend experience as part of a real project or team.",
      availabilityP2:
        "The best way to reach me is by email, LinkedIn, or phone. If your message is relevant, I’ll get back to you as soon as possible.",
    },
    footer: {
      rights: "© 2026 Artem Diatlenko. All rights reserved.",
    },
  },
  pl: {
    nav: {
      home: "Start",
      about: "O mnie",
      projects: "Projekty",
      contact: "Kontakt",
      menu: "Otwórz menu nawigacji",
    },
    hero: {
      role: "Frontend Developer",
      intro:
        "Tworzę nowoczesne interfejsy frontendowe, stawiając na czytelność, użyteczność i responsywność. Pracuję z Blazor, Angular i TypeScript, a obecnie rozwijam portfolio oraz doświadczenie komercyjne.",
      viewProjects: "Zobacz projekty",
      contactMe: "Skontaktuj się",
      openToWork: "Open to work",
      basedIn: "Mieszkam w",
      city: "Warszawa",
    },
    about: {
      label: "O mnie",
      title: "Kilka słów więcej o mnie.",
      intro:
        "Jestem Artem Diatlenko, developerem frontendowym zainteresowanym czystymi interfejsami, praktycznym UI i nowoczesnymi aplikacjami webowymi.",
      whoIAm: "Kim jestem",
      whoIAmP1:
        "Skupiam się głównie na frontendzie i lubię zamieniać pomysły w interfejsy, które są czytelne, responsywne i wizualnie zbalansowane.",
      whoIAmP2:
        "Mój obecny stack to głównie Blazor, Angular i TypeScript. Równolegle rozwijam portfolio i profil zawodowy wokół web developmentu.",
      coreStack: "Główny stack",
      background: "Informacje",
      focusLabel: "Specjalizacja",
      focusValue: "Frontend development, implementacja UI",
      locationLabel: "Lokalizacja",
      locationValue: "Warszawa, Polska",
      languagesLabel: "Języki",
      languagesValue: "Angielski, Polski, Ukraiński, Rosyjski",
    },
    projects: {
      label: "Projekty",
      title: "Wybrane realizacje i aktualne buildy.",
      intro:
        "Kilka projektów pokazujących mój kierunek frontendowy: praktyczne UI, czytelna architektura i podejście produktowe.",
      stack: "Stack",
      status: "Status",
      cta: "Zobacz repozytorium",
      items: [
        {
          name: "Portfolio Website",
          description:
            "Strona portfolio zbudowana w Next.js i Tailwind z reużywalnymi sekcjami UI oraz wsparciem EN/PL.",
          stack: "Next.js, React, TypeScript, Tailwind",
          status: "Live / ciągłe usprawnienia",
          href: "https://github.com/ArtemDiatlenko",
        },
        {
          name: "UI Components Playground",
          description:
            "Sandbox komponentów do testowania wzorców UI, spacingu i zachowań responsywnych.",
          stack: "React, TypeScript, CSS",
          status: "W trakcie",
          href: "https://github.com/ArtemDiatlenko",
        },
        {
          name: "Angular Dashboard Prototype",
          description:
            "Prototyp panelu admina skupiony na czytelności danych i przejrzystej hierarchii informacji.",
          stack: "Angular, TypeScript, SCSS",
          status: "Koncepcja / iteracja",
          href: "https://github.com/ArtemDiatlenko",
        },
      ],
    },
    contact: {
      label: "Kontakt",
      title: "Bądźmy w kontakcie.",
      intro:
        "Jeśli chcesz porozmawiać o projekcie, współpracy lub ofercie, możesz skontaktować się ze mną przez poniższe kanały.",
      availability: "Dostępność",
      availabilityP1:
        "Jestem otwarty na oferty frontendowe, współpracę i pracę produktową, gdzie liczy się klarowność, struktura i mocne UI.",
      availabilityP2:
        "Najlepiej kontaktować się mailowo, przez LinkedIn albo telefonicznie.",
    },
    footer: {
      rights: "© 2026 Artem Diatlenko. Wszelkie prawa zastrzeżone.",
    },
  },
} as const;
