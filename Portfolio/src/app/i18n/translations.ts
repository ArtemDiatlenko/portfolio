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
      role: "Frontend Developer",
      intro:
        "Warsaw-based frontend developer with commercial experience across product interfaces, responsive UI, and implementation work. I care about clarity, structure, and screens that feel ready for real use.",
      viewProjects: "View Projects",
      exploreSkills: "Explore Skills",
      contactMe: "Contact Me",
      openToWork: "Available",
      basedIn: "Based in",
      city: "Warsaw",
      availabilityNote: "Open to product teams, freelance work, and practical frontend tasks.",
      quickFacts: [
        {
          value: "UI",
          label: "Core work",
        },
        {
          value: "Delivery",
          label: "Commercial practice",
        },
        {
          value: "Growth",
          label: "Broader scope",
        },
      ],
      focusLabel: "Focus",
      focusValue: "UI implementation, structured interfaces, and product delivery",
      stackLabel: "Stack",
      stackValue: "React, Angular, TypeScript",
      visualNote: "Grounded in frontend delivery, expanding through real product work.",
    },
    home: {
      label: "Overview",
      title: "Frontend-focused work with a practical, product-driven approach.",
      intro:
        "This portfolio is a short view of how I work: clear interfaces, structured implementation, and steady growth through commercial and personal projects.",
      aboutCardTitle: "About and direction",
      aboutCardText: "Background, experience, and the way I think about frontend work.",
      skillsCardTitle: "Frontend skills and stack",
      skillsCardText: "Stack, delivery habits, and the areas I am actively deepening.",
      projectsCardTitle: "Selected projects",
      projectsCardText: "Commercial and personal work that shows how I build and what I have shipped.",
      contactCardTitle: "Contact and availability",
      contactCardText: "Reach out about roles, freelance work, or a concrete product need.",
      highlights: [
        {
          title: "Interface Clarity",
          description:
            "I start from hierarchy, layout, and states so a screen is understandable before extra polish is added.",
        },
        {
          title: "Structured Delivery",
          description:
            "Reusable components, predictable structure, and readable implementation make the work easier to extend.",
        },
        {
          title: "Task-Oriented Thinking",
          description:
            "I look at UI through the job it needs to support, not only through how it looks in isolation.",
        },
      ],
      processLabel: "Process",
      processTitle: "How I move work forward.",
      processSteps: [
        {
          step: "01",
          title: "Understand the context",
          description:
            "Start with the goal, the constraints, and the task the interface needs to support.",
        },
        {
          step: "02",
          title: "Build the foundation",
          description:
            "Lay out components, states, and responsive behavior so the solution stays clear from the first iteration.",
        },
        {
          step: "03",
          title: "Refine for release",
          description:
            "Tighten the details, accessibility, and UI behavior so the result is ready for real use.",
        },
      ],
    },
    skills: {
      label: "Skills",
      title: "Frontend tools, delivery habits, and current growth areas.",
      intro:
        "A closer look at the technologies I use, the UI work I handle with confidence, and the areas I am pushing further.",
      categoriesTitle: "Core areas",
      categories: [
        {
          title: "Frontend stack",
          items: ["React", "Angular", "TypeScript", "JavaScript", "HTML", "CSS"],
          note: "The libraries and languages behind most of my day-to-day implementation work.",
        },
        {
          title: "UI delivery",
          items: ["Component Architecture", "Responsive Layouts", "Accessibility", "State Handling", "UI Polish", "Code Reviews"],
          note: "The practical habits that keep interfaces readable, responsive, and easier to maintain.",
        },
        {
          title: "Growth areas",
          items: ["Backend Basics", "Product Thinking", "API Integration", "Performance", "Testing", "Broader Delivery"],
          note: "The next layer I am expanding through real projects, not only theory.",
        },
      ],
      focusTitle: "What I am sharpening now",
      focusAreas: [
        "UI implementation for product screens",
        "Reusable component structure",
        "Responsive behavior and accessibility",
        "Broader full-stack understanding",
      ],
      badgesTitle: "Tooling",
      badges: [
        "React",
        "Angular",
        "Blazor",
        "MudBlazor",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Vite",
        "ESLint",
        "Git",
        "Tailwind CSS",
        "PostCSS",
      ],
      ctaText: "Project pages show where these tools move from theory into shipped interface work.",
    },
    about: {
      label: "About",
      title: "Background, working style, and current direction.",
      intro:
        "I’m Artem Diatlenko, a developer based in Warsaw with commercial experience in frontend work. This page gives the personal context behind the projects, stack, and direction shown elsewhere in the portfolio.",
      whoIAm: "Who I am",
      whoIAmP1:
        "Most of my work sits close to the interface: building screens, structuring components, and making product flows feel clear across devices. I pay attention to how layout, states, and small details support actual use, not just presentation.",
      whoIAmP2:
        "Commercial work in Blazor and Angular gave me a practical base in shipping and maintaining product UI. React and TypeScript are the tools I keep pushing further while I broaden my understanding of backend concerns and full application delivery.",
      coreStack: "Core stack",
      background: "Context",
      focusLabel: "Focus",
      focusValue: "UI implementation, component structure, and product-facing frontend work",
      locationLabel: "Location",
      locationValue: "Warsaw, Poland",
      languagesLabel: "Languages",
      languagesValue: "English, Polish, Ukrainian, Russian",
      principlesTitle: "Working principles",
      principles: [
        "Put logic and hierarchy in order before adding extra polish.",
        "A good interface should be readable in use, not only attractive on a screenshot.",
        "Treat responsiveness, focus states, and accessibility as part of execution.",
        "Prefer patterns that can be repeated over quick one-off workarounds.",
      ],
      timelineTitle: "Recent direction",
      timeline: [
        {
          period: "2026",
          title: "Portfolio rebuild",
          description:
            "Reworked the portfolio into a smaller, clearer presentation of real frontend strengths and more disciplined content.",
        },
        {
          period: "2025",
          title: "Frontend depth",
          description:
            "Spent more time on reusable components, TypeScript structure, and UI decisions that scale better over time.",
        },
        {
          period: "2024",
          title: "Commercial product work",
          description:
            "Built delivery habits in commercial Angular and Blazor work, including maintenance, iteration, and product constraints.",
        },
      ],
    },
    projects: {
      label: "Projects",
      title: "Selected work and practical builds.",
      intro:
        "A small set of commercial and personal projects that shows my frontend work in more concrete terms.",
      role: "Role",
      impact: "Impact",
      year: "Year",
      ctaRepo: "Repository",
      ctaLive: "Live site",
      items: [
        {
          name: "Diorik / Domparfum",
          description:
            "Commercial e-commerce project for a perfume and cosmetics store, delivered as a live product with catalog-style pages, storefront UX, and production-focused implementation.",
          stack: "Blazor Server, MudBlazor, C#, HTML, CSS",
          status: "Live / commercial",
          role: "Frontend development and partial backend work",
          impact: "Worked on a real business-facing product and gained practical experience shipping and supporting a live commercial website.",
          year: "2023-2024",
          liveHref: "https://domparfum.com.ua/",
        },
        {
          name: "Leleka Construction",
          description:
            "Angular-based website concept for a construction company, planned as a recruiting and company-presentation project aimed at attracting new workers.",
          stack: "Angular, TypeScript, HTML, CSS, Transloco",
          status: "Prototype",
          role: "Frontend implementation and product structure",
          impact: "A practical example of building a business-oriented website around content structure, multilingual setup, and recruitment-focused presentation.",
          year: "2025",
          repoHref: "https://github.com/ArtemDiatlenko/Leleka_Construction",
        },
        {
          name: "Portfolio Website",
          description:
            "My personal portfolio built with React, Vite, and Tailwind, focused on clean structure, reusable sections, and bilingual content.",
          stack: "React, TypeScript, Vite, Tailwind",
          status: "Live / evolving",
          role: "Frontend implementation, UI structure, content direction",
          impact: "Helps me present my work more clearly and serves as a small product in itself for testing layout, content, and responsive polish.",
          year: "2026",
          repoHref: "https://github.com/ArtemDiatlenko/portfolio",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let’s talk.",
      intro:
        "Reach out if you have a frontend role, a freelance task, or a product interface that needs implementation support. The fastest way to start is with a concrete problem, scope, or set of screens.",
      availability: "Availability",
      availabilityP1:
        "I’m open to frontend roles, freelance work, and product collaboration, especially where there is real UI implementation, cleanup, or delivery work to do.",
      availabilityP2:
        "I work best when the scope is concrete, priorities are visible, and we can iterate toward a usable result instead of discussing abstractions for too long.",
      responseLabel: "Typical response",
      responseValue: "Within 24 hours",
      timezoneLabel: "Timezone",
      timezoneValue: "CET (Warsaw)",
      channels: {
        email: "Email",
        linkedIn: "LinkedIn",
        github: "GitHub",
        phone: "Phone",
      },
      processTitle: "How I usually work",
      process: [
        {
          title: "Share the context",
          description: "Send the product context, current stage, and the specific screens or problems that need attention.",
        },
        {
          title: "Align the scope",
          description: "We narrow the work to clear priorities, expected output, and a realistic first step.",
        },
        {
          title: "Build in iterations",
          description:
            "I work through implementation in visible increments so feedback stays practical and the result stays shippable.",
        },
      ],
    },
    footer: {
      rights: "© 2026 Artem Diatlenko. All rights reserved.",
    },
    meta: {
      home: {
        title: "Artem Diatlenko | Frontend Developer",
        description: "Portfolio overview with frontend approach, selected work, and contact details.",
      },
      about: {
        title: "About | Artem Diatlenko",
        description: "Personal background, working principles, languages, and current development direction.",
      },
      skills: {
        title: "Skills | Artem Diatlenko",
        description:
          "Stack, UI delivery strengths, and areas of ongoing technical growth.",
      },
      projects: {
        title: "Projects | Artem Diatlenko",
        description: "Commercial and personal projects with concrete role, impact, and stack details.",
      },
      contact: {
        title: "Contact | Artem Diatlenko",
        description: "Availability, contact channels, and a simple way to start a conversation.",
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
      role: "Frontend Developer",
      intro:
        "Frontend developer z Warszawy z komercyjnym doświadczeniem w pracy nad interfejsami produktowymi. Najbliżej mi do implementacji UI, czytelnej struktury i ekranów, które są gotowe do realnego użycia.",
      viewProjects: "Zobacz projekty",
      exploreSkills: "Zobacz umiejętności",
      contactMe: "Skontaktuj się",
      openToWork: "Dostępny",
      basedIn: "Mieszkam w",
      city: "Warszawa",
      availabilityNote: "Otwarty na zespoły produktowe, freelance i konkretne zadania frontendowe.",
      quickFacts: [
        {
          value: "UI",
          label: "Główny obszar",
        },
        {
          value: "Komercja",
          label: "Praktyka projektowa",
        },
        {
          value: "Rozwój",
          label: "Szerszy zakres",
        },
      ],
      focusLabel: "Fokus",
      focusValue: "Implementacja UI, uporządkowane interfejsy i praca nad produktem",
      stackLabel: "Stack",
      stackValue: "React, Angular, TypeScript",
      visualNote: "Mocna baza w realizacji frontendu, dalej rozwijana w realnych produktach.",
    },
    home: {
      label: "Przegląd",
      title: "Frontendowa praca oparta na strukturze i realnych potrzebach produktu.",
      intro:
        "To portfolio jest krótkim przeglądem mojego sposobu pracy: czytelne interfejsy, uporządkowana implementacja i rozwój przez projekty komercyjne oraz własne.",
      aboutCardTitle: "O mnie i kierunek",
      aboutCardText: "Tło, doświadczenie i sposób myślenia o pracy frontendowej.",
      skillsCardTitle: "Umiejętności frontendowe i stack",
      skillsCardText: "Stack, nawyki wykonawcze i obszary, które rozwijam dalej.",
      projectsCardTitle: "Wybrane projekty",
      projectsCardText: "Prace komercyjne i własne, które pokazują, jak buduję i co realnie zrealizowałem.",
      contactCardTitle: "Kontakt i dostępność",
      contactCardText: "Napisz w sprawie roli, freelance lub konkretnej potrzeby produktowej.",
      highlights: [
        {
          title: "Jasność interfejsu",
          description:
            "Zaczynam od hierarchii, układu i stanów, żeby ekran był zrozumiały zanim dostanie dodatkowy polish.",
        },
        {
          title: "Uporządkowana implementacja",
          description:
            "Cenię reużywalne komponenty, przewidywalną strukturę i kod, który łatwiej rozwijać.",
        },
        {
          title: "Myślenie zadaniem",
          description:
            "Patrzę na UI przez pryzmat tego, co użytkownik ma zrobić, a nie tylko jak ekran wygląda.",
        },
      ],
      processLabel: "Proces",
      processTitle: "Jak prowadzę pracę.",
      processSteps: [
        {
          step: "01",
          title: "Złapanie kontekstu",
          description:
            "Najpierw cel, ograniczenia i zadanie, które interfejs ma faktycznie obsłużyć.",
        },
        {
          step: "02",
          title: "Budowa podstaw",
          description:
            "Układam komponenty, stany i responsywność tak, żeby rozwiązanie było czytelne od pierwszej iteracji.",
        },
        {
          step: "03",
          title: "Dopracowanie wydania",
          description:
            "Dociskam detale, dostępność i zachowanie UI, żeby efekt nadawał się do realnego użycia.",
        },
      ],
    },
    skills: {
      label: "Umiejętności",
      title: "Narzędzia frontendowe, sposób pracy i kierunek rozwoju.",
      intro:
        "Bliższe spojrzenie na technologie, z którymi pracuję, obszary UI, które robię najpewniej, i rzeczy, które rozwijam dalej.",
      categoriesTitle: "Główne obszary",
      categories: [
        {
          title: "Stack frontendowy",
          items: ["React", "Angular", "TypeScript", "JavaScript", "HTML", "CSS"],
          note: "Główne narzędzia stojące za codzienną implementacją interfejsów.",
        },
        {
          title: "Dostarczanie UI",
          items: ["Architektura komponentów", "Responsywne układy", "Dostępność", "Zarządzanie stanem", "UI polish", "Code review"],
          note: "Praktyczne nawyki, które pomagają utrzymać UI czytelne, responsywne i łatwiejsze w utrzymaniu.",
        },
        {
          title: "Obszary rozwoju",
          items: ["Podstawy backendu", "Myślenie produktowe", "Integracja API", "Wydajność", "Testowanie", "Szersze delivery"],
          note: "To kolejna warstwa, którą rozwijam przez realne projekty, a nie tylko teorię.",
        },
      ],
      focusTitle: "Co teraz rozwijam",
      focusAreas: [
        "Implementacja UI dla ekranów produktowych",
        "Reużywalna struktura komponentów",
        "Responsywność i dostępność",
        "Szersze rozumienie aplikacji poza frontendem",
      ],
      badgesTitle: "Narzędzia",
      badges: [
        "React",
        "Angular",
        "Blazor",
        "MudBlazor",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Vite",
        "ESLint",
        "Git",
        "Tailwind CSS",
        "PostCSS",
      ],
      ctaText:
        "Na stronach projektów widać, jak te narzędzia przekładają się na konkretne wdrożenia.",
    },
    about: {
      label: "O mnie",
      title: "Tło, sposób pracy i obecny kierunek.",
      intro:
        "Jestem Artem Diatlenko, developerem z Warszawy z komercyjnym doświadczeniem frontendowym. Ta strona daje osobisty kontekst do projektów, stacka i kierunku pokazanych w reszcie portfolio.",
      whoIAm: "Kim jestem",
      whoIAmP1:
        "Większość mojej pracy dzieje się blisko interfejsu: buduję ekrany, układam komponenty i pilnuję, żeby flow produktu było czytelne na różnych urządzeniach. Zwracam uwagę na to, jak layout, stany i drobne decyzje wspierają realne użycie, a nie tylko prezentację.",
      whoIAmP2:
        "Praca komercyjna w Blazorze i Angularze dała mi praktyczną bazę we wdrażaniu i utrzymaniu produktowego UI. React i TypeScript to narzędzia, które dalej pogłębiam, równolegle poszerzając rozumienie backendu i pełniejszego procesu budowy aplikacji.",
      coreStack: "Główny stack",
      background: "Kontekst",
      focusLabel: "Fokus",
      focusValue: "Implementacja UI, struktura komponentów i frontend po stronie produktu",
      locationLabel: "Lokalizacja",
      locationValue: "Warszawa, Polska",
      languagesLabel: "Języki",
      languagesValue: "Angielski, Polski, Ukraiński, Rosyjski",
      principlesTitle: "Zasady pracy",
      principles: [
        "Najpierw porządkuję logikę i hierarchię, potem dokładam dodatkowy polish.",
        "Interfejs ma być czytelny w użyciu, nie tylko estetyczny na screenie.",
        "Responsywność, focus i dostępność traktuję jako część wykonania.",
        "Lepsze są wzorce, które da się powtórzyć, niż szybkie jednorazowe obejścia.",
      ],
      timelineTitle: "Ostatni kierunek",
      timeline: [
        {
          period: "2026",
          title: "Przebudowa portfolio",
          description:
            "Przebudowałem portfolio na mniejszą, czytelniejszą prezentację realnych mocnych stron frontendowych.",
        },
        {
          period: "2025",
          title: "Pogłębienie frontendu",
          description:
            "Mocniej wszedłem w reużywalne komponenty, strukturę TypeScriptu i decyzje UI, które lepiej skalują się w czasie.",
        },
        {
          period: "2024",
          title: "Komercyjna praca produktowa",
          description:
            "Zbudowałem mocniejsze nawyki wdrożeniowe w komercyjnej pracy z Angularem i Blazorem, razem z utrzymaniem i iterowaniem produktu.",
        },
      ],
    },
    projects: {
      label: "Projekty",
      title: "Wybrane realizacje i praktyczne projekty.",
      intro:
        "Mały zestaw projektów komercyjnych i własnych, które pokazują moją pracę frontendową w bardziej konkretny sposób.",
      role: "Rola",
      impact: "Wpływ",
      year: "Rok",
      ctaRepo: "Repozytorium",
      ctaLive: "Strona live",
      items: [
        {
          name: "Diorik / Domparfum",
          description:
            "Komercyjny projekt e-commerce dla sklepu z perfumami i kosmetykami, wdrożony jako działający produkt z układem katalogowym i praktycznym storefront UX.",
          stack: "Blazor Server, MudBlazor, C#, HTML, CSS",
          status: "Live / komercyjny",
          role: "Frontend development i częściowo backend",
          impact: "Realna praca przy produkcie biznesowym i praktyczne doświadczenie we wdrażaniu oraz rozwijaniu działającej strony komercyjnej.",
          year: "2023-2024",
          liveHref: "https://domparfum.com.ua/",
        },
        {
          name: "Leleka Construction",
          description:
            "Koncept strony w Angularze dla firmy budowlanej, planowany jako projekt rekrutacyjny i wizerunkowy do pozyskiwania nowych pracowników.",
          stack: "Angular, TypeScript, HTML, CSS, Transloco",
          status: "Prototyp",
          role: "Implementacja frontendu i struktura produktu",
          impact: "Praktyczny przykład budowy strony biznesowej opartej na strukturze treści, wielojęzyczności i prezentacji ukierunkowanej na rekrutację.",
          year: "2025",
          repoHref: "https://github.com/ArtemDiatlenko/Leleka_Construction",
        },
        {
          name: "Portfolio Website",
          description:
            "Moje portfolio zbudowane w React, Vite i Tailwind, z naciskiem na czytelną strukturę, reużywalne sekcje UI i wsparcie EN/PL.",
          stack: "React, TypeScript, Vite, Tailwind",
          status: "Live / rozwijane",
          role: "Implementacja frontendu, struktura UI, kierunek contentowy",
          impact: "Pomaga mi pokazać pracę w bardziej uporządkowany sposób i działa jako mały produkt do testowania layoutu, treści i responsive polishu.",
          year: "2026",
          repoHref: "https://github.com/ArtemDiatlenko/portfolio",
        },
      ],
    },
    contact: {
      label: "Kontakt",
      title: "Porozmawiajmy.",
      intro:
        "Napisz, jeśli masz rolę frontendową, zadanie freelance albo interfejs produktu, który trzeba zaimplementować lub uporządkować. Najłatwiej zacząć od konkretnego problemu, zakresu albo zestawu ekranów.",
      availability: "Dostępność",
      availabilityP1:
        "Jestem otwarty na role frontendowe, współpracę freelance i pracę produktową, szczególnie tam, gdzie jest realna implementacja, porządkowanie UI albo dostarczenie interfejsów.",
      availabilityP2:
        "Najlepiej pracuje mi się wtedy, gdy zakres jest konkretny, priorytety są widoczne, a rozwiązanie można iteracyjnie doprowadzić do używalnej formy.",
      responseLabel: "Typowa odpowiedź",
      responseValue: "Do 24 godzin",
      timezoneLabel: "Strefa czasowa",
      timezoneValue: "CET (Warszawa)",
      channels: {
        email: "Email",
        linkedIn: "LinkedIn",
        github: "GitHub",
        phone: "Telefon",
      },
      processTitle: "Jak zwykle prowadzę współpracę",
      process: [
        {
          title: "Podziel się kontekstem",
          description:
            "Wyślij kontekst produktu, obecny etap i konkretne ekrany albo problemy, które wymagają uwagi.",
        },
        {
          title: "Ustalmy zakres",
          description:
            "Zawężamy pracę do jasnych priorytetów, oczekiwanego efektu i realistycznego pierwszego kroku.",
        },
        {
          title: "Pracujmy iteracyjnie",
          description:
            "Prowadzę implementację małymi, widocznymi krokami, żeby feedback był praktyczny, a wynik nadawał się do wdrożenia.",
        },
      ],
    },
    footer: {
      rights: "© 2026 Artem Diatlenko. Wszelkie prawa zastrzeżone.",
    },
    meta: {
      home: {
        title: "Artem Diatlenko | Frontend Developer",
        description: "Przegląd portfolio z podejściem frontendowym, wybraną pracą i danymi kontaktowymi.",
      },
      about: {
        title: "O mnie | Artem Diatlenko",
        description: "Osobiste tło, zasady pracy, języki i obecny kierunek rozwoju.",
      },
      skills: {
        title: "Umiejętności | Artem Diatlenko",
        description: "Stack, mocne strony w dostarczaniu UI i obszary dalszego rozwoju technicznego.",
      },
      projects: {
        title: "Projekty | Artem Diatlenko",
        description: "Projekty komercyjne i własne z konkretną rolą, wpływem i detalami stacka.",
      },
      contact: {
        title: "Kontakt | Artem Diatlenko",
        description: "Dostępność, kanały kontaktu i prosty sposób na rozpoczęcie rozmowy.",
      },
    },
} satisfies TranslationShape<typeof enTranslations>;

export const translations = {
  en: enTranslations,
  pl: plTranslations,
} as const;
