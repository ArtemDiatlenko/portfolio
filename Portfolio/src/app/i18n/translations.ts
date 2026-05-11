export type Locale = "en" | "pl";

export const defaultLocale: Locale = "en";

type TranslationShape<T> =
  T extends string
    ? string
    : T extends readonly (infer U)[]
      ? readonly TranslationShape<U>[]
      : T extends object
        ? { [K in keyof T]: TranslationShape<T[K]> }
        : T;

const enTranslations = {
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    menu: "Open navigation menu",
    languageSwitch: "Language switch",
  },
  hero: {
    role: "Junior Web Developer",
    intro:
      "Junior web developer based in Warsaw with commercial experience on a client e-commerce web application. I work with Angular, TypeScript, JavaScript, C#, Blazor, HTML/CSS, SQL, and Git, and I want to keep growing in a professional development team.",
    viewProjects: "View Projects",
    exploreSkills: "Explore Skills",
    contactMe: "Contact Me",
    openToWork: "Available",
    basedIn: "Based in",
    city: "Warsaw",
    availabilityNote: "Open to junior web roles, freelance tasks, and team-based product work.",
    quickFacts: [
      {
        value: "E-commerce",
        label: "Commercial project",
      },
      {
        value: "Angular",
        label: "Current focus",
      },
      {
        value: "C# / Blazor",
        label: "Product background",
      },
    ],
    focusLabel: "Direction",
    focusValue: "Practical web apps, responsive UI, and team growth",
    stackLabel: "Main stack",
    stackValue: "Angular, TypeScript, C#, Blazor",
    visualNote: "Commercial client work behind me. Growing through practical web development.",
  },
  home: {
    label: "Overview",
    title: "Junior web developer with commercial e-commerce experience.",
    intro:
      "This portfolio shows the kind of work I can already do: building responsive interfaces, product pages, and practical web features while continuing to grow inside real development workflows.",
    aboutCardTitle: "About and direction",
    aboutCardText:
      "Commercial background, current focus, and the way I approach junior web development.",
    skillsCardTitle: "Web skills and stack",
    skillsCardText: "Core technologies, frontend strengths, and the tools I work with most often.",
    projectsCardTitle: "Selected projects",
    projectsCardText: "Commercial and personal web projects that show what I built and contributed to.",
    contactCardTitle: "Contact and availability",
    contactCardText: "Reach out about junior roles, freelance tasks, or a concrete web project need.",
    highlights: [
      {
        title: "Commercial E-commerce",
        description:
          "I already have commercial experience building user-facing e-commerce features for a real external client.",
      },
      {
        title: "Responsive Web UI",
        description:
          "I focus on practical interfaces, layouts, and product flows that work clearly across screen sizes.",
      },
      {
        title: "Professional Growth",
        description:
          "I want to keep improving inside a professional development team through real features, feedback, and delivery work.",
      },
    ],
    processLabel: "Process",
    processTitle: "How I approach the work.",
    processSteps: [
      {
        step: "01",
        title: "Understand the feature",
        description:
          "Start from the business goal, the user flow, and the screen or feature that needs to be built.",
      },
      {
        step: "02",
        title: "Build the web flow",
        description:
          "Implement the page, states, and responsive behavior with a focus on practical use rather than decoration.",
      },
      {
        step: "03",
        title: "Refine and improve",
        description:
          "Fix issues, tighten UI details, and improve the result through feedback and iteration.",
      },
    ],
  },
  skills: {
    label: "Skills",
    title: "Core web technologies, frontend work, and learning direction.",
    intro:
      "A structured view of the technologies I use most, the frontend areas I handle directly, and the tools I know at a basic level.",
    categoriesTitle: "Skill groups",
    categories: [
      {
        title: "Core Technologies",
        items: ["C#", "Blazor", "JavaScript", "TypeScript", "HTML/CSS", "SQL", "Git"],
        note: "Technologies I have used directly in commercial or personal web projects.",
      },
      {
        title: "Frontend",
        items: ["Angular", "Responsive Design", "Routing", "Forms", "UI Components"],
        note: "The frontend areas I work with when building pages, flows, and responsive UI.",
      },
      {
        title: "Basic Knowledge",
        items: ["React", "Java", "Python", "C++", "REST API", "Backend Fundamentals"],
        note: "Topics I can work with at a basic level while continuing to deepen them.",
      },
    ],
    focusTitle: "Practical focus",
    focusAreas: [
      "Commercial e-commerce features",
      "Responsive UI and component work",
      "Angular and TypeScript growth",
      "Working inside a professional development team",
    ],
    badgesTitle: "Tools",
    badges: [
      "Visual Studio Code",
      "JetBrains Rider",
      "GitHub",
      "Microsoft Office",
      "AI-assisted coding tools",
    ],
    ctaText:
      "Projects section shows how these skills were applied in real and practice-focused web applications.",
  },
  about: {
    label: "About",
    title: "Junior web developer with commercial e-commerce experience.",
    intro:
      "I’m Artem Diatlenko, a junior web developer based in Warsaw. My commercial experience comes from NetNovate, where I worked on DomParfum, an e-commerce web application built for an external client.",
    whoIAm: "Who I am",
    whoIAmP1:
      "At NetNovate I was one of the first developers in a small team building DomParfum. I contributed to the product catalogue, filtering logic, product pages, cart flow, responsive UI components, and basic backend-related features needed to support the application.",
    whoIAmP2:
      "Today I focus on Angular, TypeScript, C#, JavaScript, and practical web development. I am strongest on user-facing web work, while continuing to grow my backend fundamentals without overstating that side of my experience.",
    coreStack: "Core stack",
    background: "Context",
    focusLabel: "Focus",
    focusValue: "Junior web development, Angular/TypeScript, C#/Blazor, and practical product work",
    locationLabel: "Location",
    locationValue: "Warsaw, Poland",
    languagesLabel: "Languages",
    languagesValue: "English, Polish, Ukrainian, Russian",
    principlesTitle: "Working principles",
    principles: [
      "Build useful web features before polishing presentation.",
      "Keep interfaces responsive, readable, and practical to use.",
      "Treat bug fixing, cleanup, and iteration as part of normal delivery work.",
      "Keep learning through real tasks, not inflated claims.",
    ],
    experienceLabel: "Experience",
    experienceTitle: "NetNovate",
    experienceRoleLabel: "Role",
    experienceCompanyLabel: "Company",
    experiencePeriodLabel: "Period",
    experienceLocationLabel: "Location",
    experience: {
      role: "Junior Web Developer",
      company: "NetNovate",
      period: "Jul 2023 – Mar 2024",
      location: "Warsaw, Poland",
      bullets: [
        "Worked as one of the first developers in a small software team building a commercial e-commerce web application for an external client.",
        "Developed frontend and basic backend features using C#, Blazor, JavaScript, HTML/CSS, SQL, and Git.",
        "Implemented product catalogue, product listing, filtering logic, product pages, cart flow, and responsive UI components.",
        "Collaborated with a 3-person development team, product manager, and designer.",
        "Participated in the project from an early stage, including feature implementation, bug fixing, and code organization.",
      ],
    },
    timelineTitle: "Recent path",
    timeline: [
      {
        period: "2026",
        title: "Portfolio repositioning",
        description:
          "Updated the portfolio to reflect a clearer junior web developer position and more practical project presentation.",
      },
      {
        period: "2025",
        title: "Angular and web practice",
        description:
          "Built more practice projects around Angular, TypeScript, routing, forms, and responsive layouts.",
      },
      {
        period: "2023-2024",
        title: "NetNovate and DomParfum",
        description:
          "Gained commercial experience in a small team building a client e-commerce web application with C#, Blazor, JavaScript, HTML/CSS, SQL, and Git.",
      },
    ],
  },
  projects: {
    label: "Projects",
    title: "Commercial and practice-based web projects.",
    intro:
      "Projects that reflect my commercial e-commerce experience, Angular work, and personal web development practice.",
    role: "Role",
    impact: "Summary",
    year: "Year",
    status: "Status",
    highlights: "Highlights",
    galleryTitle: "Selected screenshots",
    ctaRepo: "GitHub",
    ctaLive: "Live site",
    items: [
      {
        name: "DomParfum - Commercial E-commerce Web Application",
        description:
          "Commercial online perfume store built as part of a small development team for an external client.",
        stack: "C#, Blazor, JavaScript, HTML/CSS, SQL, Git",
        status: "Live / private repository",
        role: "Web Developer",
        impact:
          "Worked on real client-facing e-commerce features and supporting product logic in a commercial application.",
        highlights: [
          "Product catalogue and product listing",
          "Filtering logic and product pages",
          "Cart flow and responsive UI components",
          "Frontend work with basic backend-related features",
        ],
        note:
          "Source code is private due to the commercial nature of the project. Selected screenshots are available below.",
        screenshots: [
          {
            src: "/project-screens/domparfum-home.png",
            alt: "DomParfum home page with storefront hero and featured products",
            label: "Home page",
          },
          {
            src: "/project-screens/domparfum-catalog.png",
            alt: "DomParfum catalog page with filter sidebar and product grid",
            label: "Catalog and filters",
          },
          {
            src: "/project-screens/domparfum-product.png",
            alt: "DomParfum product page with product details and purchase action",
            label: "Product page",
          },
          {
            src: "/project-screens/domparfum-cart.png",
            alt: "DomParfum cart page with selected product and checkout form",
            label: "Cart flow",
          },
        ],
        year: "2023-2024",
        liveHref: "https://domparfum.com.ua/",
      },
      {
        name: "Leleka Construction - Construction Company Website",
        description: "Responsive multilingual website for a construction company operating in Poland.",
        stack: "Angular 19, TypeScript, Angular Router, Reactive Forms, Transloco, RxJS",
        status: "Public repository",
        role: "Web Developer",
        impact:
          "Built a structured Angular website around company presentation, vacancies, and multilingual content.",
        highlights: [
          "Responsive layout and multilingual content",
          "Pages: Home, About, Clients, Vacancies, Vacancy Details, Contact",
          "Routing, Reactive Forms, and reusable UI components",
        ],
        year: "2025",
        repoHref: "https://github.com/ArtemDiatlenko/Leleka_Construction",
      },
      {
        name: "Portfolio",
        description: "Personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.",
        stack: "React, TypeScript, Vite, Tailwind CSS",
        status: "Live / public repository",
        role: "Web Developer",
        impact:
          "A personal project used to present my experience, projects, and junior web developer positioning.",
        highlights: [
          "Responsive layout",
          "Multilingual content",
          "Project cards and contact section",
          "Clean component-based structure",
        ],
        year: "2026",
        liveHref: "https://portfolio-duj1.vercel.app",
        repoHref: "https://github.com/ArtemDiatlenko/portfolio",
      },
    ],
  },
  contact: {
    label: "Contact",
    title: "Let’s talk.",
    intro:
      "Reach out if you are hiring for a junior web developer role or want to talk about a practical web project. I am based in Warsaw and interested in growing through real product work inside a professional team.",
    availability: "Availability",
    availabilityP1:
      "I am open to junior web developer roles, freelance tasks, and project work where I can contribute to responsive UI, web flows, and practical feature delivery.",
    availabilityP2:
      "My strongest experience today comes from commercial e-commerce work, Angular and TypeScript growth, and C#/Blazor-based product development in a small team.",
    responseLabel: "Typical response",
    responseValue: "Within 24 hours",
    timezoneLabel: "Timezone",
    timezoneValue: "CET (Warsaw)",
    channels: {
      email: "Email",
      linkedIn: "LinkedIn",
      github: "GitHub",
      portfolio: "Portfolio",
      location: "Location",
      phone: "Phone",
    },
    processTitle: "How I work",
    process: [
      {
        title: "Share the context",
        description:
          "Share the product context, current stage, and the specific screens or web features that need attention.",
      },
      {
        title: "Align the scope",
        description: "We define the priorities, expected output, and the most realistic first step for the work.",
      },
      {
        title: "Build in iterations",
        description:
          "I implement, fix, and refine in visible steps so feedback stays practical and the result keeps moving forward.",
      },
    ],
  },
  footer: {
    rights: "© 2026 Artem Diatlenko. All rights reserved.",
  },
  meta: {
    home: {
      title: "Artem Diatlenko — Junior Web Developer",
      description:
        "Portfolio of Artem Diatlenko, Junior Web Developer based in Warsaw, focused on Angular, TypeScript, C#, JavaScript and practical web applications.",
    },
    about: {
      title: "About | Artem Diatlenko",
      description: "Junior web developer background, NetNovate experience, and practical product work.",
    },
    skills: {
      title: "Skills | Artem Diatlenko",
      description: "Core technologies, frontend skills, tools, and basic technical knowledge.",
    },
    projects: {
      title: "Projects | Artem Diatlenko",
      description: "Commercial e-commerce, Angular, and portfolio projects with practical web development details.",
    },
    contact: {
      title: "Contact | Artem Diatlenko",
      description: "Contact links, location, availability, and junior web developer positioning.",
    },
  },
} as const;

const plTranslations = {
  nav: {
    home: "Start",
    about: "O mnie",
    skills: "Umiejętności",
    projects: "Projekty",
    contact: "Kontakt",
    menu: "Otwórz menu nawigacji",
    languageSwitch: "Przełączanie języka",
  },
  hero: {
    role: "Junior Web Developer",
    intro:
      "Junior web developer z Warszawy z komercyjnym doświadczeniem przy klienckiej aplikacji e-commerce. Pracuję z Angular, TypeScript, JavaScript, C#, Blazor, HTML/CSS, SQL i Git, a dalej chcę rozwijać się w profesjonalnym zespole developerskim.",
    viewProjects: "Zobacz projekty",
    exploreSkills: "Zobacz umiejętności",
    contactMe: "Skontaktuj się",
    openToWork: "Dostępny",
    basedIn: "Mieszkam w",
    city: "Warszawa",
    availabilityNote: "Otwarty na role junior web developer, zadania freelance i pracę w zespole produktowym.",
    quickFacts: [
      {
        value: "E-commerce",
        label: "Projekt komercyjny",
      },
      {
        value: "Angular",
        label: "Obecny fokus",
      },
      {
        value: "C# / Blazor",
        label: "Zaplecze produktowe",
      },
    ],
    focusLabel: "Kierunek",
    focusValue: "Praktyczne aplikacje webowe, responsywne UI i rozwój w zespole",
    stackLabel: "Główny stack",
    stackValue: "Angular, TypeScript, C#, Blazor",
    visualNote: "Za mną komercyjna praca dla klienta. Dalej rozwijam się przez praktyczny web development.",
  },
  home: {
    label: "Przegląd",
    title: "Junior web developer z komercyjnym doświadczeniem e-commerce.",
    intro:
      "To portfolio pokazuje rodzaj pracy, który już potrafię wykonywać: budowę responsywnych interfejsów, stron produktowych i praktycznych funkcji webowych, przy jednoczesnym dalszym rozwoju w realnym środowisku developerskim.",
    aboutCardTitle: "O mnie i kierunek",
    aboutCardText:
      "Komercyjne tło, obecny fokus i sposób, w jaki podchodzę do pracy junior web developera.",
    skillsCardTitle: "Umiejętności webowe i stack",
    skillsCardText: "Główne technologie, mocne strony frontendowe i narzędzia, z których korzystam najczęściej.",
    projectsCardTitle: "Wybrane projekty",
    projectsCardText: "Projekty komercyjne i własne, które pokazują, co zbudowałem i do czego się realnie dokładałem.",
    contactCardTitle: "Kontakt i dostępność",
    contactCardText: "Napisz w sprawie roli juniorskiej, zadania freelance albo konkretnej potrzeby webowej.",
    highlights: [
      {
        title: "Komercyjne E-commerce",
        description:
          "Mam już komercyjne doświadczenie przy budowie funkcji e-commerce dla realnego zewnętrznego klienta.",
      },
      {
        title: "Responsywne Web UI",
        description:
          "Skupiam się na praktycznych interfejsach, układach i flow produktu, które działają czytelnie na różnych ekranach.",
      },
      {
        title: "Rozwój zawodowy",
        description:
          "Chcę dalej rozwijać się w profesjonalnym zespole przez realne funkcje, feedback i codzienną pracę wdrożeniową.",
      },
    ],
    processLabel: "Proces",
    processTitle: "Jak podchodzę do pracy.",
    processSteps: [
      {
        step: "01",
        title: "Zrozumienie funkcji",
        description:
          "Zaczynam od celu biznesowego, flow użytkownika i konkretnego ekranu albo funkcji, którą trzeba zbudować.",
      },
      {
        step: "02",
        title: "Budowa flow webowego",
        description:
          "Implementuję stronę, stany i responsywność z naciskiem na praktyczne użycie, a nie samą dekorację.",
      },
      {
        step: "03",
        title: "Dopracowanie i poprawa",
        description:
          "Usuwam problemy, dociskam detale UI i poprawiam wynik przez feedback i kolejne iteracje.",
      },
    ],
  },
  skills: {
    label: "Umiejętności",
    title: "Główne technologie webowe, praca frontendowa i kierunek nauki.",
    intro:
      "Uporządkowany przegląd technologii, których używam najczęściej, obszarów frontendowych, które robię bezpośrednio, oraz narzędzi, które znam na poziomie podstawowym.",
    categoriesTitle: "Grupy umiejętności",
    categories: [
      {
        title: "Główne technologie",
        items: ["C#", "Blazor", "JavaScript", "TypeScript", "HTML/CSS", "SQL", "Git"],
        note: "Technologie, których używałem bezpośrednio w projektach komercyjnych albo własnych.",
      },
      {
        title: "Frontend",
        items: ["Angular", "Responsive Design", "Routing", "Forms", "Komponenty UI"],
        note: "Obszary frontendowe, z którymi pracuję przy budowie stron, flow i responsywnego UI.",
      },
      {
        title: "Podstawowa wiedza",
        items: ["React", "Java", "Python", "C++", "REST API", "Podstawy backendu"],
        note: "Tematy, z którymi mogę pracować na poziomie podstawowym i które dalej rozwijam.",
      },
    ],
    focusTitle: "Praktyczny fokus",
    focusAreas: [
      "Komercyjne funkcje e-commerce",
      "Responsywne UI i praca komponentowa",
      "Rozwój w Angular i TypeScript",
      "Praca w profesjonalnym zespole developerskim",
    ],
    badgesTitle: "Narzędzia",
    badges: [
      "Visual Studio Code",
      "JetBrains Rider",
      "GitHub",
      "Microsoft Office",
      "AI-assisted coding tools",
    ],
    ctaText:
      "Sekcja projektów pokazuje, jak te umiejętności zostały wykorzystane w realnych i praktycznych aplikacjach webowych.",
  },
  about: {
    label: "O mnie",
    title: "Junior web developer z komercyjnym doświadczeniem e-commerce.",
    intro:
      "Jestem Artem Diatlenko, junior web developerem z Warszawy. Moje komercyjne doświadczenie pochodzi z NetNovate, gdzie pracowałem przy DomParfum, aplikacji e-commerce budowanej dla zewnętrznego klienta.",
    whoIAm: "Kim jestem",
    whoIAmP1:
      "W NetNovate byłem jednym z pierwszych developerów w małym zespole budującym DomParfum. Pracowałem nad katalogiem produktów, logiką filtrowania, stronami produktowymi, flow koszyka, responsywnymi komponentami UI oraz podstawowymi funkcjami po stronie backendowej potrzebnymi do działania aplikacji.",
    whoIAmP2:
      "Dziś skupiam się na Angular, TypeScript, C#, JavaScript i praktycznym web developmencie. Najmocniej czuję się po stronie user-facing webu, równolegle rozwijając podstawy backendu bez przesadnego zawyżania tej części mojego doświadczenia.",
    coreStack: "Główny stack",
    background: "Kontekst",
    focusLabel: "Fokus",
    focusValue: "Junior web development, Angular/TypeScript, C#/Blazor i praktyczna praca produktowa",
    locationLabel: "Lokalizacja",
    locationValue: "Warszawa, Polska",
    languagesLabel: "Języki",
    languagesValue: "Angielski, Polski, Ukraiński, Rosyjski",
    principlesTitle: "Zasady pracy",
    principles: [
      "Najpierw buduję użyteczne funkcje webowe, dopiero potem dodatkowy polish.",
      "Interfejs ma być responsywny, czytelny i praktyczny w użyciu.",
      "Bug fixing, porządkowanie i iteracje traktuję jako normalną część delivery.",
      "Rozwijam się przez realne zadania, a nie zawyżone deklaracje.",
    ],
    experienceLabel: "Doświadczenie",
    experienceTitle: "NetNovate",
    experienceRoleLabel: "Rola",
    experienceCompanyLabel: "Firma",
    experiencePeriodLabel: "Okres",
    experienceLocationLabel: "Lokalizacja",
    experience: {
      role: "Junior Web Developer",
      company: "NetNovate",
      period: "Jul 2023 – Mar 2024",
      location: "Warsaw, Poland",
      bullets: [
        "Pracowałem jako jeden z pierwszych developerów w małym zespole tworzącym komercyjną aplikację e-commerce dla zewnętrznego klienta.",
        "Tworzyłem funkcje frontendowe i podstawowe funkcje backendowe z użyciem C#, Blazor, JavaScript, HTML/CSS, SQL i Git.",
        "Implementowałem katalog produktów, listing produktów, logikę filtrowania, strony produktowe, flow koszyka i responsywne komponenty UI.",
        "Współpracowałem z 3-osobowym zespołem developerskim, product managerem i designerem.",
        "Brałem udział w projekcie od wczesnego etapu, w tym w implementacji funkcji, naprawie błędów i porządkowaniu kodu.",
      ],
    },
    timelineTitle: "Ostatnia ścieżka",
    timeline: [
      {
        period: "2026",
        title: "Nowe pozycjonowanie portfolio",
        description:
          "Zaktualizowałem portfolio tak, aby czytelniej pokazywało mnie jako junior web developera i bardziej praktycznie prezentowało projekty.",
      },
      {
        period: "2025",
        title: "Angular i praktyka webowa",
        description:
          "Budowałem kolejne projekty ćwiczeniowe wokół Angular, TypeScript, routingu, formularzy i responsywnych layoutów.",
      },
      {
        period: "2023-2024",
        title: "NetNovate i DomParfum",
        description:
          "Zdobyłem komercyjne doświadczenie w małym zespole budującym kliencką aplikację e-commerce z użyciem C#, Blazor, JavaScript, HTML/CSS, SQL i Git.",
      },
    ],
  },
  projects: {
    label: "Projekty",
    title: "Komercyjne i praktyczne projekty webowe.",
    intro:
      "Projekty, które pokazują moje komercyjne doświadczenie e-commerce, pracę w Angularze i własną praktykę w web developmencie.",
    role: "Rola",
    impact: "Podsumowanie",
    year: "Rok",
    status: "Status",
    highlights: "Zakres",
    galleryTitle: "Wybrane zrzuty ekranu",
    ctaRepo: "GitHub",
    ctaLive: "Strona live",
    items: [
      {
        name: "DomParfum - Komercyjna aplikacja e-commerce",
        description:
          "Komercyjny sklep internetowy z perfumami zbudowany jako część pracy małego zespołu developerskiego dla zewnętrznego klienta.",
        stack: "C#, Blazor, JavaScript, HTML/CSS, SQL, Git",
        status: "Live / prywatne repozytorium",
        role: "Web Developer",
        impact:
          "Pracowałem nad realnymi funkcjami e-commerce dla klienta oraz logiką wspierającą działanie produktu.",
        highlights: [
          "Katalog produktów i listing produktów",
          "Logika filtrowania i strony produktowe",
          "Flow koszyka i responsywne komponenty UI",
          "Prace frontendowe i podstawowe funkcje backendowe",
        ],
        note:
          "Kod źródłowy jest prywatny ze względu na komercyjny charakter projektu. Wybrane zrzuty ekranu są dostępne poniżej.",
        screenshots: [
          {
            src: "/project-screens/domparfum-home.png",
            alt: "Strona główna DomParfum z hero sklepu i wyróżnionymi produktami",
            label: "Strona główna",
          },
          {
            src: "/project-screens/domparfum-catalog.png",
            alt: "Katalog DomParfum z panelem filtrów i siatką produktów",
            label: "Katalog i filtry",
          },
          {
            src: "/project-screens/domparfum-product.png",
            alt: "Strona produktu DomParfum z detalami produktu i akcją zakupu",
            label: "Strona produktowa",
          },
          {
            src: "/project-screens/domparfum-cart.png",
            alt: "Koszyk DomParfum z wybranym produktem i formularzem zamówienia",
            label: "Koszyk",
          },
        ],
        year: "2023-2024",
        liveHref: "https://domparfum.com.ua/",
      },
      {
        name: "Leleka Construction - Strona firmy budowlanej",
        description: "Responsywna, wielojęzyczna strona internetowa dla firmy budowlanej działającej w Polsce.",
        stack: "Angular 19, TypeScript, Angular Router, Reactive Forms, Transloco, RxJS",
        status: "Publiczne repozytorium",
        role: "Web Developer",
        impact:
          "Zbudowałem uporządkowaną stronę w Angularze wokół prezentacji firmy, wakatów i wielojęzycznych treści.",
        highlights: [
          "Responsywny layout i wielojęzyczne treści",
          "Strony: Home, About, Clients, Vacancies, Vacancy Details, Contact",
          "Routing, Reactive Forms i reużywalne komponenty UI",
        ],
        year: "2025",
        repoHref: "https://github.com/ArtemDiatlenko/Leleka_Construction",
      },
      {
        name: "Portfolio",
        description: "Moje portfolio zbudowane z użyciem React, TypeScript, Vite i Tailwind CSS.",
        stack: "React, TypeScript, Vite, Tailwind CSS",
        status: "Live / publiczne repozytorium",
        role: "Web Developer",
        impact:
          "Projekt własny używany do prezentowania doświadczenia, projektów i obecnego pozycjonowania jako junior web developer.",
        highlights: [
          "Responsywny layout",
          "Wielojęzyczne treści",
          "Karty projektów i sekcja kontaktu",
          "Czysta, komponentowa struktura",
        ],
        year: "2026",
        liveHref: "https://portfolio-duj1.vercel.app",
        repoHref: "https://github.com/ArtemDiatlenko/portfolio",
      },
    ],
  },
  contact: {
    label: "Kontakt",
    title: "Porozmawiajmy.",
    intro:
      "Napisz, jeśli szukasz junior web developera albo chcesz porozmawiać o praktycznym projekcie webowym. Mieszkam w Warszawie i chcę rozwijać się przez realną pracę produktową w profesjonalnym zespole.",
    availability: "Dostępność",
    availabilityP1:
      "Jestem otwarty na role junior web developera, zadania freelance i projekty, w których mogę pomagać przy responsywnym UI, flow webowych i praktycznym dostarczaniu funkcji.",
    availabilityP2:
      "Moje najmocniejsze obecne doświadczenie to komercyjne e-commerce, rozwój w Angular i TypeScript oraz produktowa praca w C#/Blazor w małym zespole.",
    responseLabel: "Typowa odpowiedź",
    responseValue: "Do 24 godzin",
    timezoneLabel: "Strefa czasowa",
    timezoneValue: "CET (Warszawa)",
    channels: {
      email: "Email",
      linkedIn: "LinkedIn",
      github: "GitHub",
      portfolio: "Portfolio",
      location: "Lokalizacja",
      phone: "Telefon",
    },
    processTitle: "Jak pracuję",
    process: [
      {
        title: "Podziel się kontekstem",
        description:
          "Prześlij kontekst produktu, obecny etap i konkretne ekrany albo funkcje webowe, które wymagają uwagi.",
      },
      {
        title: "Ustalmy zakres",
        description:
          "Ustalamy priorytety, oczekiwany efekt i najbardziej realistyczny pierwszy krok dla pracy.",
      },
      {
        title: "Pracujmy iteracyjnie",
        description:
          "Implementuję, poprawiam i dopracowuję rozwiązanie małymi krokami, żeby feedback był praktyczny, a efekt stale szedł do przodu.",
      },
    ],
  },
  footer: {
    rights: "© 2026 Artem Diatlenko. Wszelkie prawa zastrzeżone.",
  },
  meta: {
    home: {
      title: "Artem Diatlenko — Junior Web Developer",
      description:
        "Portfolio of Artem Diatlenko, Junior Web Developer based in Warsaw, focused on Angular, TypeScript, C#, JavaScript and practical web applications.",
    },
    about: {
      title: "O mnie | Artem Diatlenko",
      description: "Tło junior web developera, doświadczenie z NetNovate i praktyczna praca produktowa.",
    },
    skills: {
      title: "Umiejętności | Artem Diatlenko",
      description: "Główne technologie, umiejętności frontendowe, narzędzia i podstawowa wiedza techniczna.",
    },
    projects: {
      title: "Projekty | Artem Diatlenko",
      description: "Projekty e-commerce, Angular i portfolio pokazujące praktyczny web development.",
    },
    contact: {
      title: "Kontakt | Artem Diatlenko",
      description: "Linki kontaktowe, lokalizacja, dostępność i pozycjonowanie junior web developera.",
    },
  },
} satisfies TranslationShape<typeof enTranslations>;

export const translations = {
  en: enTranslations,
  pl: plTranslations,
} as const;
