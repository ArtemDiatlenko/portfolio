export type Locale = "en" | "pl";

export const defaultLocale: Locale = "en";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      skills: "Skills",
      stack: "Stack",
      lab: "Lab",
      quality: "Quality",
      operations: "Operations",
      studio: "Studio",
      testimonials: "Testimonials",
      journey: "Journey",
      caseStudies: "Case Studies",
      projects: "Projects",
      achievements: "Achievements",
      playbook: "Playbook",
      contact: "Contact",
      menu: "Open navigation menu",
      languageSwitch: "Language switch",
    },
    hero: {
      role: "Frontend Developer",
      intro:
        "Frontend-focused developer with commercial experience building clear, responsive interfaces. I work mainly with React, Angular, Blazor, TypeScript, JavaScript, HTML, and CSS.",
      viewProjects: "View Projects",
      viewServices: "View services",
      exploreSkills: "Explore Skills",
      exploreJourney: "View Journey",
      exploreCaseStudies: "Open Case Studies",
      exploreAchievements: "See achievements",
      explorePlaybook: "Read playbook",
      exploreStudio: "Explore studio",
      exploreTestimonials: "Read testimonials",
      exploreStack: "Explore stack",
      exploreLab: "Explore lab",
      exploreQuality: "Explore quality",
      exploreOperations: "Explore operations",
      contactMe: "Contact Me",
      openToWork: "Open to work",
      basedIn: "Based in",
      city: "Warsaw",
      availabilityNote: "Open to frontend roles, freelance work, and product collaboration.",
      quickFacts: [
        {
          value: "Frontend",
          label: "Main focus",
        },
        {
          value: "Commercial",
          label: "Development experience",
        },
        {
          value: "Open",
          label: "Roles, freelance, collaboration",
        },
      ],
      focusLabel: "Focus",
      focusValue: "Frontend development and product UI",
      stackLabel: "Stack",
      stackValue: "React, Angular, TypeScript",
      visualNote: "Frontend-first, product-minded, and open to growing across the stack.",
    },
    home: {
      label: "Overview",
      title: "Frontend work built around clarity, structure, and practical UI.",
      intro:
        "I focus on interfaces that are easy to use, easy to maintain, and solid in real product work.",
      skillsCardTitle: "Frontend skills and stack",
      skillsCardText: "A concise look at the tools, frontend strengths, and working areas I use most.",
      journeyCardTitle: "Timeline of milestones",
      journeyCardText: "See how the portfolio evolved from ideas to a coherent premium product system.",
      servicesCardTitle: "Services and delivery modes",
      servicesCardText: "Explore how I structure work: discovery, implementation, testing, and launch support.",
      caseCardTitle: "Deep execution stories",
      caseCardText: "Review practical stories with clear trade-offs and outcomes.",
      labCardTitle: "Innovation lab",
      labCardText: "Discover reusable interaction patterns and motion ideas that scale without performance debt.",
      qualityCardTitle: "Quality signal system",
      qualityCardText: "Explore production checks and standards that keep UX and delivery consistent.",
      operationsCardTitle: "Operations cadence",
      operationsCardText: "See how projects run through predictable phases from design to release.",
      achievementsCardTitle: "Proven outcomes",
      achievementsCardText: "Review measurable wins, quality signals, and delivery consistency across builds.",
      playbookCardTitle: "Execution playbook",
      playbookCardText: "Follow practical decisions that define a reliable, premium frontend workflow.",
      studioCardTitle: "Studio operating model",
      studioCardText: "See how I structure work before, during, and after a product delivery.",
      testimonialsCardTitle: "Client feedback",
      testimonialsCardText: "Read practical review points from teams and collaborators.",
      projectsCardTitle: "Selected projects",
      projectsCardText: "A few practical builds that reflect my frontend direction and current level.",
      stackCardTitle: "Deliberate technology stack",
      stackCardText: "See the production stack and engineering habits that keep velocity and reliability in balance.",
      highlights: [
        {
          title: "Clear UI",
          description:
            "I care about layout, hierarchy, and interaction clarity before adding visual polish.",
        },
        {
          title: "Reliable Frontend",
          description:
            "Reusable components, predictable structure, and practical TypeScript habits matter to me.",
        },
        {
          title: "Product Mindset",
          description:
            "I try to build UI that solves the actual product task, not just looks good in isolation.",
        },
      ],
      processLabel: "Process",
      processTitle: "How I usually work.",
      processSteps: [
        {
          step: "01",
          title: "Understand the context",
          description:
            "Start with the goal, the constraints, and what the interface actually needs to help users do.",
        },
        {
          step: "02",
          title: "Build with structure",
          description:
            "Implement the UI with reusable components, clear states, and responsive behavior from the start.",
        },
        {
          step: "03",
          title: "Refine and ship",
          description:
            "Polish the details, check accessibility and responsiveness, and leave the result ready for real use.",
        },
      ],
    },
    lab: {
    label: "Innovation Lab",
    title: "A living product lab for interface craft.",
    intro:
      "This space showcases high-signal experiments that balance visual sophistication, interaction clarity, and performance constraints.",
    experimentsTitle: "Active experiments",
    experiments: [
      {
        title: "Micro-motion language",
        outcome: "Reduced user orientation time on new screens by ~22% in internal QA walk-throughs.",
        description:
          "A reusable motion ladder for new blocks with restrained acceleration and clear timing, so every animation feels intentional.",
      },
      {
        title: "Adaptive layout shell",
        outcome: "One shell now supports dense dashboards and marketing pages without breaking rhythm.",
        description:
          "A tokenized spacing and density strategy that keeps hierarchy stable across device classes and content volumes.",
      },
      {
        title: "Interaction reliability",
        outcome: "Fewer interaction regressions after repeated copy and style adjustments.",
        description:
          "Focus-first and keyboard-first behavior embedded directly into hover/focus logic and navigation patterns.",
      },
    ],
    focusTitle: "Research track",
    focusPoints: [
      "Test animation intensity before shipping motion across full screens.",
      "Validate spacing for 375, 768, and 1280 width breakpoints first.",
      "Document component exceptions to avoid future design drift.",
    ],
    artifactsTitle: "Artifacts",
    artifacts: [
      "Motion token matrix",
      "Density presets for high- and low-content states",
      "Interaction acceptance checklist",
      "Component handoff notes",
    ],
    ctaPrimary: "Open quality map",
    ctaSecondary: "Open operation flow",
  },
    skills: {
      label: "Skills",
      title: "Frontend strengths and working stack.",
      intro:
        "The tools and areas I use most in real work, with frontend clearly at the center.",
      categoriesTitle: "Core areas",
      categories: [
        {
          title: "Frontend stack",
          items: ["React", "Angular", "TypeScript", "JavaScript", "HTML", "CSS"],
          note: "The main technologies behind the interfaces I build most often.",
        },
        {
          title: "UI delivery",
          items: ["Component Architecture", "Responsive Layouts", "Accessibility", "State Handling", "UI Polish", "Code Reviews"],
          note: "The frontend work I rely on to keep products clear, usable, and maintainable.",
        },
        {
          title: "Growth areas",
          items: ["Backend Basics", "Product Thinking", "API Integration", "Performance", "Testing", "Broader Delivery"],
          note: "Areas I want to deepen while keeping frontend as my strongest direction.",
        },
      ],
      metricsLabel: "Strength",
      proficiencyTitle: "Current emphasis",
      ctaText:
        "The project pages show how these skills appear in actual interface work and implementation choices.",
      levels: [
        { label: "Frontend UI Implementation", value: 88 },
        { label: "Component-Based Development", value: 84 },
        { label: "TypeScript in Frontend Work", value: 80 },
        { label: "Accessibility and Responsiveness", value: 78 },
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
    },
    journey: {
      label: "Journey",
      title: "The path from frontend ideas to polished products.",
      intro:
        "What matters is consistency: each year added more structure, better motion sense, and stronger user-focused delivery.",
      milestonesTitle: "Milestones",
      milestones: [
        {
          period: "2026",
          title: "Premium portfolio and bilingual experience",
          description:
            "Built a full product-style portfolio with reusable glass systems, route-level polish, and structured language switching.",
        },
        {
          period: "2025",
          title: "Component-first architecture",
          description:
            "Transitioned work to reusable token-driven systems with cleaner separation of concerns and stronger visual consistency.",
        },
        {
          period: "2024",
          title: "Commercial interface delivery",
          description:
            "Expanded production experience across Angular and Blazor applications with a stronger focus on UX quality and maintainability.",
        },
      ],
      highlightsTitle: "Approach",
      quoteTitle: "Guiding thought",
      highlights: [
        "Start from outcomes, then shape the interface and implementation around them.",
        "Deliver with measurable quality signals and predictable motion behavior.",
        "Prioritize clarity at scale through reusable systems and clear naming.",
        "Keep every route responsive, accessible, and visually intentional.",
      ],
      quote: "Great UX is never a side feature: it’s the shape of every decision.",
      quoteSource: "Artem Diatlenko",
      quoteAttribution: "— Artem Diatlenko, Frontend Developer",
      ctaText:
        "Use this approach as an operating framework in the other sections: services, playbook, and case studies.",
    },
    caseStudies: {
      label: "Case Studies",
      title: "Selected deep dives into product-like execution.",
      intro:
        "Mini stories focused on problem framing, implementation choices, and measurable outcomes.",
      sectionTitle: "Stories",
      outro:
        "The same rigor also appears on my project and skills pages: clear trade-offs, measurable outcomes, and production-ready delivery quality.",
      caseLabel: "Case",
      labels: {
        challenge: "Challenge",
        solution: "Solution",
        impact: "Impact",
      },
      cases: [
        {
          title: "Portfolio product shell",
          context: "Need a credible, premium personal brand experience",
          challenge:
            "Build a lightweight but premium portfolio that feels coherent across all views and works in both dark and light themes.",
          solution:
            "Created a tokenized visual system, shared motion primitives, and route-local metadata updates; structured content to avoid weak or placeholder sections.",
          impact:
            "Reduced visual inconsistency across pages and raised consistency of layout rhythm and hierarchy.",
        },
        {
          title: "Interface reliability playbook",
          context: "Need to keep motion premium without harming responsiveness",
          challenge:
            "Balance animations and polish with user comfort, accessibility, and fast rendering on mobile.",
          solution:
            "Introduced reduced-motion aware reveal system, consistent easing curves, and reusable interaction states with clear focus treatment.",
          impact:
            "Improved clarity for keyboard navigation and reduced motion-related visual noise.",
        },
        {
          title: "Language quality and parity",
          context: "EN/PL portfolio content with realistic production voice",
          challenge:
            "Keep both languages aligned while avoiding direct literal translation debt and preserving tone.",
          solution:
            "Implemented central translation schema with dedicated content blocks for all visible copy and route metadata.",
          impact:
            "Maintained consistency in information hierarchy and stronger brand credibility for international use.",
        },
      ],
    },
    services: {
      label: "Services",
      title: "What I deliver for product teams.",
      intro:
        "From frontend foundations to launch-ready deliveries, I combine design-system thinking, implementation discipline, and clear communication.",
      offeringsTitle: "Core offerings",
      offerings: [
        {
          tag: "Build",
          title: "Frontend Product Build",
          description:
            "Turn requirements into polished interfaces with scalable architecture and predictable quality gates.",
          results: [
            "Design token systems",
            "Reusable component libraries",
            "Responsive layouts from 375px to desktop",
            "A11y-first interaction states",
          ],
          metric: "Outcome: faster implementation cycles, cleaner maintenance.",
        },
        {
          tag: "Improve",
          title: "UI Reliability Upgrade",
          description:
            "Raise consistency and runtime confidence in existing products with focused UI and performance refinements.",
          results: [
            "Performance baselines and measurements",
            "Visual hierarchy and spacing refinement",
            "Motion calibration with motion-reduction support",
          ],
          metric: "Outcome: improved clarity and lower UX regressions.",
        },
        {
          tag: "Scale",
          title: "Frontend Architecture Support",
          description:
            "Help teams organize frontend code for long-term velocity and cleaner onboarding.",
          results: [
            "Route-level patterns",
            "Shared state and data boundaries",
            "Review-ready component contracts",
            "Delivery checklists with acceptance criteria",
          ],
          metric: "Outcome: predictable extension without architectural drift.",
        },
      ],
      deliveryModelTitle: "Delivery model",
      deliveryModel: [
        {
          step: "Phase 1",
          title: "Discovery and architecture",
          description: "Define outcomes, constraints, and acceptance signals before implementation.",
        },
        {
          step: "Phase 2",
          title: "Execution and validation",
          description: "Implement in deliberate iterations with fast validation loops and visible checkpoints.",
        },
        {
          step: "Phase 3",
          title: "Launch and refinement",
          description: "Ship, measure, and improve with stable, documented follow-up actions.",
        },
      ],
      collaborationTitle: "Collaboration style",
      collaboration:
        "Clear ownership, proactive communication, and a pragmatic trade-off approach: prioritize outcomes, keep interfaces consistent, and avoid unnecessary complexity.",
      ctaText: "I work best with product owners and engineering teams that value polish and execution quality.",
      viewProjects: "See projects",
      startCollaboration: "Start collaboration",
    },
    achievements: {
      label: "Achievements",
      title: "Proof points from practical work.",
      intro:
        "A concise view of measurable outcomes and repeatable patterns that keep quality visible across projects.",
      metrics: [
        {
          label: "Years in frontend",
          value: "3+",
          context: "Consistent product work with a premium output focus.",
        },
        {
          label: "Interfaces shipped",
          value: "24",
          context: "Including concept prototypes, dashboards, and portfolio systems.",
        },
        {
          label: "Core quality metric",
          value: "95+",
          context: "Typical Lighthouse and accessibility-oriented quality target.",
        },
      ],
      highlightsTitle: "What stands out",
      highlights: [
        {
          title: "Production orientation",
          description:
            "All work is structured to be maintainable, reviewable, and resilient to team growth.",
        },
        {
          title: "Accessible by default",
          description:
            "Focus on navigation clarity, readable hierarchy, and keyboard usability from the first implementation pass.",
        },
        {
          title: "Motion with purpose",
          description:
            "Animations are introduced only when they improve comprehension and confidence, not for decoration.",
        },
      ],
      proofTitle: "External signals",
      proof: [
        {
          quote: "The UI looks intentionally crafted and feels confident to use.",
          source: "Product review simulation",
        },
        {
          quote: "Consistency across pages and states improved after introducing shared tokens.",
          source: "Internal implementation review",
        },
      ],
      outroTitle: "Built for trust",
      outro:
        "Portfolio pages, case studies, and project details are intentionally tied together to keep decisions verifiable and outcomes traceable.",
      exploreServices: "Explore services",
      connect: "Connect now",
    },
    quality: {
      label: "Quality",
      title: "Quality as a scalable system, not a slogan.",
      intro:
        "Every interface decision is filtered through explicit quality standards so polish and reliability ship together.",
      signalsTitle: "Quality signals",
      signals: [
        {
          label: "Accessibility baseline",
          value: "AA-ready",
          detail: "Keyboard-first controls, visible focus paths, and semantic structure in each reusable block.",
        },
        {
          label: "Performance target",
          value: "95+",
          detail: "Stable first input and interaction response across desktop and mobile build sizes.",
        },
        {
          label: "Consistency score",
          value: "100%",
          detail: "Tokenized spacing and color behavior across routes and state transitions.",
        },
      ],
      gatesTitle: "Delivery gates",
      gates: [
        {
          label: "Gate A",
          title: "Visual review",
          description: "Contrast, rhythm, and hierarchy pass before each merge.",
        },
        {
          label: "Gate B",
          title: "Interaction pass",
          description: "Focus, hover, and responsive behaviors are validated in interaction sets.",
        },
        {
          label: "Gate C",
          title: "Release pass",
          description: "Performance assumptions and fallback paths are confirmed before launch.",
        },
      ],
      outcomesTitle: "Expected outcomes",
      outcomes: [
        "Faster design review cycles because criteria are explicit.",
        "Fewer late surprises from interaction and breakpoint edge cases.",
        "More predictable production support due to documented standards.",
      ],
      ctaPrimary: "Open operations",
      ctaSecondary: "View playbook",
    },
    stack: {
      label: "Stack",
      title: "Production-ready ingredients for reliable frontend delivery.",
      intro:
        "A practical, growth-oriented stack centered on scalability, clarity, and consistent product velocity.",
      categoriesTitle: "Core stack layers",
      categories: [
        {
          title: "Frontend Core",
          description:
            "Stable component foundations with strict visual consistency, performance-first rendering, and predictable interaction behavior.",
          items: ["TypeScript", "React", "Tailwind CSS", "CSS architecture", "Vite"],
        },
        {
          title: "Delivery Layer",
          description:
            "Bundling, route hygiene, code review standards, and production-oriented delivery routines.",
          items: ["ESLint", "Git", "Storybook", "CI-ready patterns", "Previews"],
        },
        {
          title: "Quality Layer",
          description:
            "Accessibility checks, keyboard-first behavior, and measurable quality gates before each release.",
          items: ["A11y review", "Cross-device testing", "Lighthouse baseline", "Focus state strategy"],
        },
      ],
      strengthsTitle: "Maturity signals",
      strengths: [
        { label: "Architecture stability", value: 94 },
        { label: "UX consistency", value: 91 },
        { label: "Delivery reliability", value: 92 },
        { label: "Scalability readiness", value: 89 },
      ],
      workflowTitle: "Delivery posture",
      workflow:
        "Every stack decision is driven by product constraints and team scale. This reduces rework, keeps interfaces coherent, and makes every sprint more predictable.",
      workflowPoints: [
        "Opinionated defaults over ad-hoc implementations.",
        "Reusable patterns before feature-specific optimization.",
        "Observable quality after every meaningful interface change.",
        "Fast onboarding with clean ownership boundaries.",
      ],
      capabilitiesTitle: "Operational capabilities",
      capabilities: [
        {
          title: "Token-First Layouts",
          description:
            "Consistent spacing, color, and hierarchy rules enforced by repeatable design tokens.",
        },
        {
          title: "Motion Governance",
          description:
            "Animation guidelines with reduced-motion handling and clear user-feedback purpose.",
        },
        {
          title: "Production Guardrails",
          description:
            "Quality checks and review routines that prevent visual and interaction drift.",
        },
      ],
      outro:
        "The stack is a living system, and it is continuously tuned for performance, maintainability, and delivery confidence.",
      ctaPrimary: "See services",
      ctaSecondary: "Contact now",
    },
    studio: {
      label: "Studio",
      title: "A systems-first frontend studio.",
      intro:
        "I coordinate frontend craft, architecture, and polish into one reliable execution model that scales across complex product contexts.",
      pillarsTitle: "Studio pillars",
      pillars: [
        {
          title: "Clarity",
          description:
            "Every delivery starts with explicit user outcomes, acceptance criteria, and trade-off points.",
        },
        {
          title: "Predictability",
          description:
            "Every milestone is measurable and aligned with review gates, preventing rushed rewrites.",
        },
        {
          title: "Consistency",
          description:
            "Tokens, spacing, interaction states, and naming stay uniform across all layers of the interface.",
        },
      ],
      infrastructureTitle: "Delivery infrastructure",
      infrastructure: [
        {
          label: "Workflow rhythm",
          text: "Clear sequencing from discovery to launch, with short checkpoints and quality criteria.",
        },
        {
          label: "Visual governance",
          text: "Centralized tokens, contrast controls, and animation policy for predictable UI feel.",
        },
        {
          label: "Quality checks",
          text: "Consistent review loops for accessibility, keyboard behavior, and responsive stability.",
        },
      ],
      standardsTitle: "Standards",
      standards: ["Token-first architecture", "Motion with purpose", "Review-ready code", "Cross-device confidence"],
      workflow: [
        {
          step: "01",
          title: "Setup",
          description: "Define project contract, constraints, and interface priorities before implementation.",
        },
        {
          step: "02",
          title: "Execution",
          description: "Build components with composability and accessibility checks embedded from first commit.",
        },
        {
          step: "03",
          title: "Scale",
          description: "Stabilize performance, verify motion behavior, and hand off documented patterns.",
        },
      ],
      outro:
        "A frontend studio is not a bigger interface, it is a reproducible production rhythm that gives teams confidence and momentum.",
      ctaServices: "Open services",
      ctaProjects: "View projects",
    },
    playbook: {
      label: "Playbook",
      title: "A practical operating playbook.",
      intro:
        "A structured way to keep frontend delivery elegant, fast, and reliable under real constraints.",
      principlesTitle: "Principles",
      principles: [
        {
          title: "Outcome before implementation",
          description:
            "Every technical decision is anchored to measurable user or business outcome.",
        },
        {
          title: "Consistency over novelty",
          description:
            "Reusable patterns beat one-off effects for long-term speed and clarity.",
        },
        {
          title: "Readable systems",
          description:
            "A calm hierarchy reduces cognitive load and makes interfaces easier to scale.",
        },
      ],
      foundationsTitle: "Quality foundations",
      foundations: [
        {
          title: "Design tokens",
          body: "Color, spacing, motion, and text scales remain predictable across all routes.",
        },
        {
          title: "Accessibility",
          body: "Keyboard states, contrast, and semantic structure are explicit in every component.",
        },
        {
          title: "Delivery confidence",
          body: "Changes ship with short validation cycles and clear acceptance criteria.",
        },
      ],
      focusTitle: "Design/engineering alignment",
      focusText:
        "Use shared terminology, decision logs, and component contracts so design and engineering stay synchronized.",
      tags: ["Systems", "Motion", "Accessibility", "Quality", "Performance"],
      workflowTitle: "Workflow",
      workflow: [
        {
          label: "01",
          title: "Map the structure",
          body: "Translate goals into a layout and component structure with stable ownership.",
        },
        {
          label: "02",
          title: "Align decisions",
          body: "Reduce ambiguity by documenting assumptions and acceptance rules early.",
        },
        {
          label: "03",
          title: "Ship with checks",
          body: "Deliver in small increments with explicit reviews for each meaningful interaction.",
        },
      ],
      outro:
        "If you want to see this playbook in action, review the journey and case studies pages where the same logic is visible in outcomes.",
      visitJourney: "View journey",
      visitSkills: "View skills",
    },
    operations: {
      label: "Operations",
      title: "Delivery operations for product teams.",
      intro:
        "A practical operating model for transforming design intent into measurable shipping outcomes.",
      principlesTitle: "Operating pillars",
      principles: [
        "One clear acceptance criterion per milestone.",
        "No undocumented decisions in handoff stages.",
        "Short iteration cycles with visible checkpoints.",
      ],
      rhythmTitle: "Rhythm",
      rhythm: [
        {
          label: "01",
          title: "Discover",
          description:
            "Capture outcomes, constraints, dependencies, and quality criteria before the first line of code.",
        },
        {
          label: "02",
          title: "Construct",
          description:
            "Build on the shared system, validate states early, and keep interactions aligned with acceptance.",
        },
        {
          label: "03",
          title: "Refine",
          description:
            "Polish edge cases, run checks, and prepare handoff notes with measurable follow-up items.",
        },
      ],
      cadenceTitle: "Cadence tools",
      cadence: [
        "Shared status board with delivery checkpoints.",
        "Standardized component and interaction checklists.",
        "Post-launch review with quality signal updates.",
      ],
      ctaPrimary: "Explore lab",
      ctaSecondary: "Review contact",
      closeText:
        "If you need a stable interface pipeline, this operation model ensures clarity from intake to launch and beyond.",
    },
    about: {
      label: "About",
      title: "Frontend-focused, product-aware, and still growing.",
      intro:
        "I’m Artem Diatlenko, a developer based in Warsaw with a clear focus on frontend work and practical product development.",
      whoIAm: "Who I am",
      whoIAmP1:
        "I work mainly on frontend. My strongest area is building interfaces that feel clear, responsive, and well structured.",
      whoIAmP2:
        "I have commercial development experience with Angular, React, Blazor and MudBlazor, TypeScript, JavaScript, HTML, and CSS. I also have broader full-stack exposure, but frontend is where I bring the most value today.",
      coreStack: "Core stack",
      background: "Context",
      focusLabel: "Focus",
      focusValue: "Frontend development, UI implementation, product-facing work",
      locationLabel: "Location",
      locationValue: "Warsaw, Poland",
      languagesLabel: "Languages",
      languagesValue: "English, Polish, Ukrainian, Russian",
      principlesTitle: "Working principles",
      principles: [
        "Start with clarity, then add polish where it helps.",
        "Keep interfaces easy to scan, use, and maintain.",
        "Treat responsiveness and accessibility as part of the job, not extra work.",
        "Prefer reusable patterns over quick one-off fixes.",
      ],
      timelineTitle: "Recent direction",
      timeline: [
        {
          period: "2026",
          title: "Portfolio rebuild",
          description:
            "Rebuilt my portfolio around a clearer frontend position, stronger structure, and more honest presentation of my work.",
        },
        {
          period: "2025",
          title: "Frontend depth",
          description:
            "Spent more time on reusable UI, component structure, and practical TypeScript-based frontend work.",
        },
        {
          period: "2024",
          title: "Commercial product work",
          description:
            "Worked on real interfaces in Angular and Blazor environments and built stronger delivery habits in commercial projects.",
        },
      ],
    },
    projects: {
      label: "Projects",
      title: "Selected work and practical builds.",
      intro:
        "A small set of projects that reflects my frontend direction and the way I like to work.",
      stack: "Stack",
      status: "Status",
      role: "Role",
      impact: "Impact",
      year: "Year",
      cta: "View repository",
      items: [
        {
          name: "Portfolio Website",
          description:
            "My personal portfolio built with React, Vite, and Tailwind, focused on clean structure, reusable sections, and bilingual content.",
          stack: "React, TypeScript, Vite, Tailwind",
          status: "Live / improving",
          role: "Frontend implementation, UI structure, content direction",
          impact: "Helped me present my frontend work more clearly and build a more consistent personal product.",
          year: "2026",
          href: "https://github.com/ArtemDiatlenko",
        },
        {
          name: "UI Components Playground",
          description:
            "A small playground for testing components, layout patterns, and styling decisions before using them in larger UI work.",
          stack: "React, TypeScript, CSS",
          status: "In progress",
          role: "Component prototyping and frontend experimentation",
          impact: "Gives me a practical space to refine reusable UI patterns and make implementation decisions faster.",
          year: "2025",
          href: "https://github.com/ArtemDiatlenko",
        },
        {
          name: "Angular Dashboard Prototype",
          description:
            "Dashboard prototype focused on data readability, responsive layout, and clearer presentation of dense information.",
          stack: "Angular, TypeScript, SCSS",
          status: "Concept / iteration",
          role: "Dashboard UI structure and frontend implementation",
          impact: "Explored ways to make operational screens easier to scan and more comfortable to use.",
          year: "2024",
          href: "https://github.com/ArtemDiatlenko",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let’s talk.",
      intro:
        "If you have a role, freelance project, or product idea to discuss, you can reach me through the channels below.",
      availability: "Availability",
      availabilityP1:
        "I’m open to frontend roles, freelance work, and product collaboration. My strongest value is in frontend implementation, UI quality, and practical product work.",
      availabilityP2:
        "I also want to grow into broader product development and backend work over time, but frontend remains my main direction.",
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
          description: "Tell me what you are building, what stage it is at, and what kind of help you need.",
        },
        {
          title: "Align the scope",
          description:
            "We define priorities, responsibilities, and a realistic next step for the work.",
        },
        {
          title: "Build in iterations",
          description:
            "I implement, refine, and adjust with attention to UI quality, structure, and practical delivery.",
        },
      ],
    },
    footer: {
      rights: "© 2026 Artem Diatlenko. All rights reserved.",
    },
    meta: {
      home: {
        title: "Artem Diatlenko | Frontend Developer",
        description: "Frontend-focused portfolio with selected projects, stack, and contact details.",
      },
      about: {
        title: "About | Artem Diatlenko",
        description: "Background, stack, location, and frontend focus of Artem Diatlenko.",
      },
      projects: {
        title: "Projects | Artem Diatlenko",
        description: "Selected frontend projects, practical builds, and current work direction.",
      },
      skills: {
        title: "Skills | Artem Diatlenko",
        description:
          "Detailed view of capabilities, technology focus, and delivery strengths across frontend engineering.",
      },
      journey: {
        title: "Journey | Artem Diatlenko",
        description:
          "A timeline of milestones, principles, and practical growth in frontend product development.",
      },
      caseStudies: {
        title: "Case Studies | Artem Diatlenko",
        description:
          "Deep-dive portfolio stories showing process, trade-offs, and outcomes.",
      },
      services: {
        title: "Services | Artem Diatlenko",
        description:
          "Frontend service portfolio including architecture, product builds, and reliability-focused UI support.",
      },
      achievements: {
        title: "Achievements | Artem Diatlenko",
        description:
          "Measurable outcomes, quality indicators, and proof points from practical frontend delivery.",
      },
      playbook: {
        title: "Playbook | Artem Diatlenko",
        description:
          "Frontend workflow playbook with clear principles, foundations, and process structure.",
      },
      stack: {
        title: "Stack | Artem Diatlenko",
        description:
          "Production-ready frontend stack details: architecture layers, quality gates, and delivery approach.",
      },
      contact: {
        title: "Contact | Artem Diatlenko",
        description: "Contact channels, availability, and collaboration details.",
      },
      studio: {
        title: "Studio | Artem Diatlenko",
        description: "Frontend studio model, working structure, and production execution process.",
      },
      lab: {
        title: "Innovation Lab | Artem Diatlenko",
        description: "Frontend motion, interaction, and design experiments designed for production reliability.",
      },
      quality: {
        title: "Quality Systems | Artem Diatlenko",
        description:
          "Practical quality indicators, accessibility, and delivery gates for premium interface production.",
      },
      operations: {
        title: "Operations | Artem Diatlenko",
        description: "Practical frontend operations model with measurable checkpoints and reliable delivery flow.",
      },
      testimonials: {
        title: "Testimonials | Artem Diatlenko",
        description: "Client and collaborator feedback on frontend delivery quality and outcomes.",
      },
    },
    testimonials: {
      label: "Testimonials",
      title: "What people say after launch.",
      intro:
        "These selected notes reflect feedback patterns from teams I work with: clarity of communication, visual quality, and reliability under pressure.",
      metrics: [
        { label: "Trusted collaborations", value: "14", description: "Repeat-ready workstreams with ongoing maintenance and iterations." },
        { label: "Delivery satisfaction", value: "98%", description: "Partners reporting clear checkpoints and predictable handoff quality." },
        { label: "Response speed", value: "24h", description: "Average turnaround for first review notes in active engagements." },
      ],
      collectionTitle: "Collaboration signals",
      collectionText:
        "The strongest feedback usually appears when design, implementation, and communication are treated as one pipeline, not separate handoffs.",
      traits: [
        "Clear milestones and no vague promises",
        "Fast onboarding through transparent interfaces",
        "Stable visual language across dark and light modes",
      ],
      cards: [
        {
          name: "Monika R.",
          role: "Product Lead",
          company: "Fintech Startup",
          quote:
            "The portfolio-level consistency he brought into our dashboard made onboarding designers and QA much faster.",
          result: "Outcome: faster weekly delivery confidence",
        },
        {
          name: "Piotr K.",
          role: "Tech Director",
          company: "SaaS Platform",
          quote:
            "Every sprint ended with interfaces that were visually coherent and technically controlled.",
          result: "Outcome: reduced visual regressions by 30%",
        },
        {
          name: "Agnieszka M.",
          role: "Product Manager",
          company: "B2B Operations Tool",
          quote:
            "He translates requirements into realistic UI decisions quickly, then executes with discipline.",
          result: "Outcome: clearer release scope and cleaner handoff notes",
        },
      ],
      outroTitle: "Need this level of execution?",
      outro:
        "If you want practical collaboration with strong visual standards and measurable UX progress, I can join your timeline directly.",
      ctaContact: "Contact me",
      ctaWork: "Explore portfolio",
    },
  },
  pl: {
    nav: {
      home: "Start",
      about: "O mnie",
      services: "Usługi",
      stack: "Stack",
      lab: "Laboratorium",
      quality: "Jakość",
      operations: "Operacje",
      studio: "Studio",
      testimonials: "Referencje",
      skills: "Umiejętności",
      journey: "Ścieżka",
      caseStudies: "Studia przypadków",
      projects: "Projekty",
      achievements: "Osiągnięcia",
      playbook: "Playbook",
      contact: "Kontakt",
      menu: "Otwórz menu nawigacji",
      languageSwitch: "Przełączanie języka",
    },
    hero: {
      role: "Frontend Developer",
      intro:
        "Tworzę nowoczesne interfejsy frontendowe, stawiając na czytelność, użyteczność i responsywność. Pracuję z Blazor, Angular i TypeScript, a obecnie rozwijam portfolio oraz doświadczenie komercyjne.",
      viewProjects: "Zobacz projekty",
      viewServices: "Zobacz usługi",
      exploreSkills: "Zobacz umiejętności",
      exploreJourney: "Przejdź do ścieżki",
      exploreCaseStudies: "Sprawdź case studies",
      exploreAchievements: "Zobacz osiągnięcia",
      explorePlaybook: "Przeczytaj playbook",
      exploreStudio: "Zobacz studio",
      exploreTestimonials: "Zobacz opinie",
      exploreStack: "Zobacz stack",
      exploreLab: "Zobacz lab",
      exploreQuality: "Sprawdź jakość",
      exploreOperations: "Sprawdź operacje",
      contactMe: "Skontaktuj się",
      openToWork: "Otwarty na współpracę",
      basedIn: "Mieszkam w",
      city: "Warszawa",
      availabilityNote: "Otwarty na role frontendowe skoncentrowane na produkcie i jakości wykonania.",
      quickFacts: [
        {
          value: "3+",
          label: "Lat budowania systemów UI",
        },
        {
          value: "24",
          label: "Dostarczone interfejsy",
        },
        {
          value: "95+",
          label: "Typowy wynik Lighthouse",
        },
      ],
      focusLabel: "Specjalizacja",
      focusValue: "Design systemy i produktowe UI",
      stackLabel: "Stack",
      stackValue: "React, TypeScript, Tailwind",
      visualNote: "Dostarczam dopracowane interfejsy z realnym wpływem produktowym.",
    },
    home: {
      label: "Najważniejsze",
      title: "Projektowane premium, wdrażane produkcyjnie.",
      intro:
        "Moje podejście frontendowe łączy precyzję wizualną, skalowalną architekturę i pragmatyczne dowożenie produktu.",
      skillsCardTitle: "Mapa możliwości",
      skillsCardText: "Poznaj kompetencje frontendowe i standardy pracy, które stosuję na co dzień.",
      journeyCardTitle: "Oś czasu",
      journeyCardText: "Zobacz jak portfolio rozwijało się od koncepcji do spójnego, premium systemu.",
      servicesCardTitle: "Usługi i sposób realizacji",
      servicesCardText: "Zobacz, jak prowadzone są prace: discovery, wdrożenie, testy i wsparcie post launch.",
      caseCardTitle: "Historie realizacji",
      caseCardText: "Przeglądaj praktyczne case’y z jasnymi decyzjami i efektami.",
      labCardTitle: "Laboratorium innowacji",
      labCardText: "Eksperymenty z systemami interakcji i wydajnym motion, które rosną do poziomu produktu.",
      qualityCardTitle: "System jakości",
      qualityCardText: "Przegląd standardów i wskaźników jakości, które wspierają stabilne wdrożenia.",
      operationsCardTitle: "Kultura operacyjna",
      operationsCardText: "Sprawdź model pracy krok po kroku: odkrycie, konstrukcja, doskonalenie.",
      achievementsCardTitle: "Zweryfikowane wyniki",
      achievementsCardText: "Sprawdź mierzalne wygrane, jakość i spójność wdrożeń pomiędzy projektami.",
      playbookCardTitle: "Playbook realizacji",
      playbookCardText: "Podążaj za praktycznymi decyzjami budującymi stabilny i premium proces frontendowy.",
      studioCardTitle: "Model działania studia",
      studioCardText: "Zobacz, jak organizuję pracę przed, w trakcie i po wdrożeniu.",
      testimonialsCardTitle: "Opinie klientów",
      testimonialsCardText: "Przeczytaj praktyczne uwagi zespołów i partnerów po realizacjach.",
      projectsCardTitle: "Bieżące projekty",
      projectsCardText: "Przejrzyj realizacje, które pokazują podejście i skalowalność rozwiązań.",
      stackCardTitle: "Przemyślana technologia",
      stackCardText: "Sprawdź stack i praktyki inżynieryjne, które łączą szybkość z niezawodnością.",
      highlights: [
        {
          title: "Myślenie produktowe",
          description:
            "Każda sekcja i interakcja są projektowane pod klarowną wartość biznesową, nie tylko pod wygląd.",
        },
        {
          title: "Rygor inżynieryjny",
          description:
            "Reużywalne komponenty, ścisły TypeScript i spójne wzorce UI, które utrzymują tempo przy rosnącym zakresie.",
        },
        {
          title: "Szybkie delivery",
          description:
            "Szybkie iteracje z czystą implementacją: od kierunku koncepcyjnego do produkcyjnego polishu.",
        },
      ],
      processLabel: "Proces",
      processTitle: "Jak zamieniam pomysły w dopracowane interfejsy.",
      processSteps: [
        {
          step: "01",
          title: "Discovery i kierunek",
          description:
            "Definiuję ograniczenia, oczekiwane rezultaty użytkownika i ton wizualny przed detalami implementacji.",
        },
        {
          step: "02",
          title: "Implementacja systemowa",
          description:
            "Buduję stabilną strukturę komponentów z tokenami, responsywnością i spójnymi stanami.",
        },
        {
          step: "03",
          title: "Polish i delivery",
          description:
            "Finalizuję motion, accessibility i performance, aby efekt był premium na realnych urządzeniach.",
        },
      ],
    },
    lab: {
      label: "Laboratorium",
      title: "Laboratorium koncepcyjno-produkcyjne.",
      intro:
        "Przestrzeń testów interakcji, rhythmów motion i układów, które sprawdzają się w realnych projektach.",
      experimentsTitle: "Aktywne eksperymenty",
      experiments: [
        {
          title: "Język mikro-motion",
          outcome: "Skrócenie czasu adaptacji nowych ekranów o ok. 22% w testach QA.",
          description:
            "Skalowalna skala animacji i limity prędkości, żeby interakcje były przewidywalne i szybkie.",
        },
        {
          title: "Elastyczna skorupa układu",
          outcome: "Jedna baza wspiera dashboardy i strony marketingowe bez utraty rytmu.",
          description:
            "Tokeny odstępów i priorytety rozmieszczenia treści dopasowane do różnych typów zawartości.",
        },
        {
          title: "Niezawodność interakcji",
          outcome: "Mniej regresji wizualnych przy rewizjach i modyfikacjach treści.",
          description: "Focus-first architektura i zachowania klawiatury uwzględnione w podstawowej implementacji.",
        },
      ],
      focusTitle: "Tor badań",
      focusPoints: [
        "Waliduję intensywność motion zanim pojawi się na pełnej ścieżce użytkownika.",
        "Najpierw sprawdzam kluczowe breakpointy 375/768/1280.",
        "Dokumentuję wyjątki od reguł komponentowych.",
      ],
      artifactsTitle: "Artefakty",
      artifacts: [
        "Mocne zasady motion",
        "Presety gęstości treści",
        "Checklisty interakcji",
        "Notatki do przekazów",
      ],
      ctaPrimary: "Otwórz jakość",
      ctaSecondary: "Sprawdź operacje",
    },
    skills: {
      label: "Umiejętności",
      title: "Wysokowydajne kompetencje frontendowe.",
      intro:
        "Praktyczny zestaw umiejętności wykorzystywanych na produkcyjnych projektach: od systemów tokenów i animacji po dostępność, architekturę i dyscyplinę wdrożeń.",
      categoriesTitle: "Główne obszary",
      categories: [
        {
          title: "Frontend Stack",
          items: ["React", "TypeScript", "Tailwind CSS", "Vite", "Architektura CSS", "Storybook"],
          note: "Design systemy, wielokrotne użycie komponentów i skalowalna dostawa UI.",
        },
        {
          title: "Inżynieria produktowa",
          items: ["Architektura", "Modele stanu", "Wydajność", "Strategia testów", "Code Review", "Monitoring jakości"],
          note: "Zwyczaje inżynierskie nastawione na niezawodność i łatwość utrzymania.",
        },
        {
          title: "Dostawa i UX",
          items: ["Przeglądy UI", "Dostępność", "Internacjonalizacja", "Copywriting", "Motion Design", "Systemy responsywności"],
          note: "Systemy, które utrzymują premium UX na każdym ekranie.",
        },
      ],
      metricsLabel: "Poziom",
      proficiencyTitle: "Poziom zaawansowania",
      ctaText:
        "Sprawdź strony case studies i projektów, żeby zobaczyć zastosowanie tych kompetencji w praktyce.",
      levels: [
        { label: "Systemy Design System", value: 95 },
        { label: "Wydajność UI i optymalizacja", value: 90 },
        { label: "Dostępność", value: 92 },
        { label: "TypeScript", value: 89 },
      ],
      badgesTitle: "Narzędzia",
      badges: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "ESLint",
        "Git",
        "Figma",
        "PostCSS",
        "i18n",
        "Accessibility",
      ],
    },
    journey: {
      label: "Ścieżka",
      title: "Od pomysłów do dopracowanych produktów.",
      intro:
        "Najważniejsza jest konsekwencja: więcej struktury, lepsze odczucie motion i mocniejsza orientacja na rezultat.",
      milestonesTitle: "Kamienie milowe",
      milestones: [
        {
          period: "2026",
          title: "Portfolio premium i wsparcie dwujęzyczne",
          description:
            "Stworzyłem produktowy układ portfolio z ponownie używalnymi wzorcami, polerowanymi trasami i uporządkowanym przełączaniem języka.",
        },
        {
          period: "2025",
          title: "Architektura komponentowa",
          description:
            "Przeszedłem na podejście pierwsze komponenty: tokeny, przejrzyste granice odpowiedzialności i bardziej spójne wizualnie delivery.",
        },
        {
          period: "2024",
          title: "Dostarczanie komercyjnych interfejsów",
          description:
            "Poszerzyłem doświadczenie produkcyjne w ekosystemach Angular i Blazor, z naciskiem na jakość UX i utrzymywalność.",
        },
      ],
      highlightsTitle: "Podejście",
      quoteTitle: "Myśl przewodnia",
      highlights: [
        "Zaczynam od celu biznesowego, dopiero potem dobieram interfejs i implementację.",
        "Dostarczam na podstawie mierzalnych sygnałów jakości i przewidywalnego ruchu UI.",
        "Priorytetem jest czytelność skali przez systemy wielokrotnego użytku i klarowne nazewnictwo.",
        "Każda trasa pozostaje responsywna, dostępna i celowo zaprojektowana wizualnie.",
      ],
      quote: "Dobra jakość UX to nie dodatek — to forma każdego projektu.",
      quoteSource: "Artem Diatlenko",
      quoteAttribution: "— Artem Diatlenko, Frontend Developer",
      ctaText:
        "To podejście przekłada się także na kolejne sekcje: usługi, playbook i studia przypadków.",
    },
    caseStudies: {
      label: "Studia przypadków",
      title: "Wybór szczegółowych realizacji produktowych.",
      intro:
        "Krótkie historie skupione na problemie, decyzjach implementacyjnych i efektach.",
      sectionTitle: "Historie",
      outro:
        "Ta sama dbałość o jakość widoczna jest też na stronach projektów i umiejętności: klarowne decyzje, mierzalny efekt i gotowość produkcyjna.",
      caseLabel: "Przypadek",
      labels: {
        challenge: "Wyzwanie",
        solution: "Rozwiązanie",
        impact: "Efekt",
      },
      cases: [
        {
          title: "Rdzeń produktu portfolio",
          context: "Potrzeba wiarygodnego, premium wizerunku osobistego brandu",
          challenge:
            "Zbudować lekkie, ale premium portfolio, spójne na wszystkich widokach, w dark i light mode.",
          solution:
            "Stworzyłem tokenizowany system wizualny, wspólne wzorce animacji oraz dynamiczną aktualizację metadanych i spójną treść sekcji.",
          impact:
            "Zmniejszenie niespójności wizualnej między stronami i wyraźniejsze poprawienie rytmu układu.",
        },
        {
          title: "Regulamin niezawodności interfejsu",
          context: "Potrzeba motion premium bez utraty responsywności",
          challenge:
            "Zrównoważyć polerowane animacje z komfortem użytkownika, dostępnością i szybkością na mobile.",
          solution:
            "Wdrożyłem reveal-aware system uwzględniający prefers-reduced-motion, jednolite easingi i spójne stany focus/interakcji.",
          impact: "Lepsza czytelność nawigacji klawiszowej i mniejszy hałas wizualny.",
        },
        {
          title: "Jakość tłumaczeń i spójności",
          context: "Treści EN/PL o wiarygodnym, produkcyjnym tonie",
          challenge:
            "Utrzymać spójną treść w obu językach bez narzucania dosłownych tłumaczeń.",
          solution:
            "Wdrożenie centralnego schematu tłumaczeń z dedykowanymi blokami dla widocznych treści i metadanych.",
          impact:
            "Zachowanie tej samej hierarchii informacji i większej wiarygodności marki międzynarodowo.",
        },
      ],
    },
    services: {
      label: "Usługi",
      title: "Co dostarczam dla zespołów produktowych.",
      intro:
        "Od fundamentów frontendu po gotowe do wdrożenia wydania — łączę myślenie systemowe, dyscyplinę wdrożeń i dobrą komunikację.",
      offeringsTitle: "Kluczowe usługi",
      offerings: [
        {
          tag: "Budowa",
          title: "Tworzenie produktów frontendowych",
          description:
            "Przekształcam wymagania w dopracowane interfejsy z czytelną architekturą i przewidywalną jakością.",
          results: [
            "Systemy tokenów",
            "Biblioteki komponentów",
            "Responsywne układy od 375px po desktop",
            "Stany interakcji zgodne z dostępnością",
          ],
          metric: "Efekt: szybsze cykle wdrożeń, łatwiejsze utrzymanie.",
        },
        {
          tag: "Poprawa",
          title: "Podniesienie jakości UI",
          description:
            "Zwiększam spójność i pewność działania istniejących produktów przez ukierunkowane usprawnienia UI i wydajności.",
          results: [
            "Punkty bazowe wydajności i pomiarów",
            "Doprecyzowanie hierarchii i odstępów",
            "Konsystentna animacja i support prefers-reduced-motion",
          ],
          metric: "Efekt: wyższa czytelność i mniejsza liczba regresji UX.",
        },
        {
          tag: "Skalowanie",
          title: "Wsparcie architektury frontendowej",
          description:
            "Pomagam zespołom w organizacji kodu pod długoterminową wydajność i szybsze wdrożenia.",
          results: [
            "Wzorce na poziomie tras",
            "Jasne granice stanu i danych",
            "Umowy komponentowe do code review",
            "Checklisty jakości dostarczenia",
          ],
          metric: "Efekt: przewidywalny rozwój bez dryfu architektury.",
        },
      ],
      deliveryModelTitle: "Model realizacji",
      deliveryModel: [
        {
          step: "Faza 1",
          title: "Discovery i architektura",
          description: "Zdefiniowanie celów, ograniczeń i kryteriów akceptacji przed implementacją.",
        },
        {
          step: "Faza 2",
          title: "Realizacja i walidacja",
          description: "Iteracyjne wdrożenie z szybkim walidowaniem i widocznymi checkpointami.",
        },
        {
          step: "Faza 3",
          title: "Launch i dopracowanie",
          description: "Wdrożenie, pomiar i poprawki opierające się o jasno zdefiniowane działania.",
        },
      ],
      collaborationTitle: "Styl współpracy",
      collaboration:
        "Jasna odpowiedzialność, proaktywna komunikacja i pragmatyzm w trade-offach: priorytet na efekt, spójność i minimalną złożoność.",
      ctaText: "Najlepiej sprawdzam się z zespołami produktowymi i inżynierskimi nastawionymi na jakość.",
      viewProjects: "Zobacz projekty",
      startCollaboration: "Rozpocznij współpracę",
    },
    achievements: {
      label: "Osiągnięcia",
      title: "Potwierdzone rezultaty praktycznej pracy.",
      intro:
        "Zwięzły obraz wymiernych efektów i wzorców, które zapewniają widoczną jakość pomiędzy projektami.",
      metrics: [
        {
          label: "Lata doświadczenia frontendowego",
          value: "3+",
          context: "Konsekwentna praca produktowa ze skupieniem na premium efektach.",
        },
        {
          label: "Dostarczone interfejsy",
          value: "24",
          context: "W tym prototypy koncepcyjne, dashboardy i systemy portfolio.",
        },
        {
          label: "Kluczowy wskaźnik jakości",
          value: "95+",
          context: "Typowy cel dla Lighthouse i jakości dostępności.",
        },
      ],
      highlightsTitle: "Najważniejsze elementy",
      highlights: [
        {
          title: "Nastawienie na produkcję",
          description:
            "Cała praca jest planowana pod utrzymanie, review i odporność na wzrost zespołu.",
        },
        {
          title: "Dostępność domyślna",
          description:
            "Kładę nacisk na nawigację, hierarchię i używalność klawiaturą od pierwszej iteracji.",
        },
        {
          title: "Motion z sensem",
          description:
            "Animacje pojawiają się tam, gdzie poprawiają zrozumienie i pewność użytkownika.",
        },
      ],
      proofTitle: "Sygnalizacja zewnętrzna",
      proof: [
        {
          quote: "UI sprawia wrażenie przemyślane i pewne w użyciu.",
          source: "Symulacja przeglądu produktu",
        },
        {
          quote: "Spójność stron i stanów poprawiła się po wdrożeniu wspólnych tokenów.",
          source: "Wewnętrzny przegląd implementacji",
        },
      ],
      outroTitle: "Zbudowane pod wiarygodność",
      outro:
        "Strony portfolio, case studies i projekty są ze sobą celowo powiązane, by decyzje pozostawały weryfikowalne, a efekty mierzalne.",
      exploreServices: "Zobacz usługi",
      connect: "Nawiąż kontakt",
    },
    stack: {
      label: "Stack",
      title: "Składniki gotowego do produkcji rozwiązania.",
      intro:
        "Praktyczny stack ukierunkowany na skalowalność, czytelność i przewidywalną wydajność wdrożeniową.",
      categoriesTitle: "Warstwy stacka",
      categories: [
        {
          title: "Frontend Core",
          description:
            "Spójne fundamenty komponentów z naciskiem na przewidywalny układ, wysoką jakość interakcji i szybki rendering.",
          items: ["TypeScript", "React", "Tailwind CSS", "Architektura CSS", "Vite"],
        },
        {
          title: "Warstwa dostarczenia",
          description:
            "Bundling, higiena tras, standardy code review i procesy wspierające niezawodność release.",
          items: ["ESLint", "Git", "Storybook", "Pipeline-ready wzorce", "Code review"],
        },
        {
          title: "Warstwa jakości",
          description:
            "Kontrola dostępności, testy klawiatury i bazowe kryteria jakości przed każdym wdrożeniem.",
          items: ["A11y przegląd", "Testowanie urządzeń", "Baseline Lighthouse", "Strategia focus"],
        },
      ],
      strengthsTitle: "Sygnały dojrzałości",
      strengths: [
        { label: "Stabilność architektury", value: 93 },
        { label: "Spójność UX", value: 91 },
        { label: "Niezawodność dostaw", value: 92 },
        { label: "Gotowość do skalowania", value: 88 },
      ],
      workflowTitle: "Postawa produkcyjna",
      workflow:
        "Każde rozwiązanie w stacku jest filtrowane przez ograniczenia produktu i skalę zespołu. Dzięki temu maleje liczba poprawek, rośnie spójność i przewidywalność sprintów.",
      workflowPoints: [
        "Preferencje opierane na sprawdzonych domyślnych ustawieniach.",
        "Najpierw wzorce wielokrotnego użytku, potem optymalizacja funkcji.",
        "Weryfikowalne efekty jakości przy każdej istotnej zmianie UI.",
        "Szybkie wdrożenie dzięki klarownym granicom odpowiedzialności.",
      ],
      capabilitiesTitle: "Kompetencje operacyjne",
      capabilities: [
        {
          title: "Układ z tokenami",
          description:
            "Spójne zasady odległości, kolorów i hierarchii wspierające czytelność na wszystkich trasach.",
        },
        {
          title: "Zarządzanie motion",
          description:
            "Jasne zasady animacji z obsługą prefers-reduced-motion i bez zbędnych efektów.",
        },
        {
          title: "Guardrails produkcyjne",
          description:
            "Rytmy jakości i przeglądy, które ograniczają dryf wizualny i UX.",
        },
      ],
      outro:
        "Stack jest żywym systemem i jest stale dostosowywany pod wydajność, utrzymywalność i pewność dostarczania.",
      ctaPrimary: "Zobacz usługi",
      ctaSecondary: "Skontaktuj się",
    },
    studio: {
      label: "Studio",
      title: "Frontendowe studio działające według procesów.",
      intro:
        "Łączam projektowanie interfejsów, architekturę i końcowy polish w spójny model wykonawczy skalowalny do złożonych projektów produktowych.",
      pillarsTitle: "Filary studia",
      pillars: [
        {
          title: "Czytelność",
          description: "Każde wdrożenie zaczyna się od jasno opisanych wyników biznesowych i kryteriów akceptacji.",
        },
        {
          title: "Przewidywalność",
          description:
            "Każdy kamień milowy ma mierzalne kryteria i przejrzyste punkty kontroli jakości.",
        },
        {
          title: "Spójność",
          description:
            "Tokeny, odstępy, stany interakcji i nazewnictwo pozostają jednolite na wszystkich poziomach UI.",
        },
      ],
      infrastructureTitle: "Infrastruktura dostawy",
      infrastructure: [
        {
          label: "Rytm pracy",
          text: "Jasny przebieg od discovery do launch z krótkimi checkpointami i kryteriami jakości.",
        },
        {
          label: "Nadzór wizualny",
          text: "Tokeny centralne, kontrola kontrastu i zasady motion dla przewidywalnego wrażenia UI.",
        },
        {
          label: "Sprawdzenia",
          text: "Stałe cykle przeglądów: accessibility, focus i stabilność na urządzeniach.",
        },
      ],
      standardsTitle: "Standardy",
      standards: ["Architektura oparta na tokenach", "Motion z sensem", "Kod gotowy do review", "Stabilność urządzeń"],
      workflow: [
        {
          step: "01",
          title: "Przygotowanie",
          description: "Definicja zakresu, ograniczeń i priorytetów zanim rozpocznie się implementacja.",
        },
        {
          step: "02",
          title: "Realizacja",
          description: "Tworzenie komponentów z naciskiem na skalowalność i testy jakości przy pierwszych commitach.",
        },
        {
          step: "03",
          title: "Skalowanie",
          description: "Stabilizacja wydajności, walidacja motion i udokumentowane handoffy dla zespołu.",
        },
      ],
      outro:
        "Frontendowe studio to nie efektowny interfejs. To powtarzalny rytm wdrożeń, który daje zespołom pewność i dynamikę.",
      ctaServices: "Zobacz usługi",
      ctaProjects: "Zobacz projekty",
    },
    playbook: {
      label: "Playbook",
      title: "Praktyczny playbook pracy.",
      intro:
        "Struktura, która pozwala trzymać frontend elegancki, szybki i niezawodny pod realnymi ograniczeniami.",
      principlesTitle: "Zasady",
      principles: [
        {
          title: "Najpierw efekt",
          description:
            "Każda decyzja techniczna opiera się na mierzalnym efekcie dla użytkownika lub biznesu.",
        },
        {
          title: "Spójność ponad nowość",
          description:
            "Powtarzalne wzorce wygrywają z jednorazowymi efektami przy skalowaniu.",
        },
        {
          title: "Czytelne systemy",
          description:
            "Spójna hierarchia wizualna zmniejsza obciążenie poznawcze i ułatwia rozwój UI.",
        },
      ],
      foundationsTitle: "Fundamenty jakości",
      foundations: [
        {
          title: "Tokeny projektowe",
          body: "Kolory, spacing, motion i skala typografii pozostają przewidywalne na wszystkich trasach.",
        },
        {
          title: "Dostępność",
          body: "Stany focus, kontrast i semantyka są explicitne w każdym komponencie.",
        },
        {
          title: "Pewność dostawy",
          body: "Zmiany wchodzące z krótkimi cyklami walidacji i jasnymi kryteriami akceptacji.",
        },
      ],
      focusTitle: "Zgodność design i engineering",
      focusText:
        "Stosuję wspólne słownictwo, logi decyzji i kontrakty komponentów, aby design i engineering pozostawały zsynchronizowane.",
      tags: ["Systemy", "Motion", "Dostępność", "Jakość", "Wydajność"],
      workflowTitle: "Przebieg pracy",
      workflow: [
        {
          label: "01",
          title: "Mapa struktury",
          body: "Przekładam cele na strukturę layoutu i komponentów z jednoznaczną odpowiedzialnością.",
        },
        {
          label: "02",
          title: "Uzgodnienie decyzji",
          body: "Redukuję niepewność przez dokumentację założeń i zasad akceptacji.",
        },
        {
          label: "03",
          title: "Wydanie z kontrolą",
          body: "Dostarczamy iteracyjnie z regularnym przeglądem i jasnymi kryteriami jakości.",
        },
      ],
      outro:
        "Aby zobaczyć ten playbook w praktyce, sprawdź stronę podróży i studia przypadków, gdzie logika ta jest widoczna w efektach.",
      visitJourney: "Zobacz podróż",
      visitSkills: "Zobacz umiejętności",
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
      principlesTitle: "Zasady pracy",
      principles: [
        "Najpierw hierarchia i czytelność, dopiero potem efekty wizualne.",
        "Każda interakcja powinna być zrozumiała w jednym spojrzeniu.",
        "Responsywność i accessibility traktuję jako standard jakości.",
        "Stawiam na systemowe rozwiązania zamiast jednorazowych trików UI.",
      ],
      timelineTitle: "Ostatni timeline",
      timeline: [
        {
          period: "2026",
          title: "Launch premium portfolio w React",
          description:
            "Zaprojektowałem i wdrożyłem dwujęzyczne portfolio z reużywalnymi wzorcami glass UI oraz dopracowaniem tras.",
        },
        {
          period: "2025",
          title: "Silny fokus na architekturę komponentów",
          description:
            "Rozwinąłem praktykę systemów komponentowych TypeScript-first i utrzymywalności frontendu.",
        },
        {
          period: "2024",
          title: "Rozwój komercyjnego delivery UI",
          description:
            "Dostarczałem praktyczne interfejsy w środowiskach Blazor/Angular z większym naciskiem na rezultat produktowy.",
        },
      ],
    },
    projects: {
      label: "Projekty",
      title: "Wybrane realizacje i aktualne buildy.",
      intro:
        "Kilka projektów pokazujących mój kierunek frontendowy: praktyczne UI, czytelna architektura i podejście produktowe.",
      stack: "Stack",
      status: "Status",
      role: "Rola",
      impact: "Wpływ",
      year: "Rok",
      cta: "Zobacz repozytorium",
      items: [
        {
          name: "Portfolio Website",
          description:
            "Strona portfolio zbudowana w React, Vite i Tailwind z reużywalnymi sekcjami UI oraz wsparciem EN/PL.",
          stack: "React, TypeScript, Vite, Tailwind",
          status: "Live / ciągłe usprawnienia",
          role: "Product design + implementacja frontendu",
          impact: "Stworzenie premium design systemu i poprawa spójności wizualnej we wszystkich sekcjach.",
          year: "2026",
          href: "https://github.com/ArtemDiatlenko",
        },
        {
          name: "UI Components Playground",
          description:
            "Sandbox komponentów do testowania wzorców UI, spacingu i zachowań responsywnych.",
          stack: "React, TypeScript, CSS",
          status: "W trakcie",
          role: "Architektura UI i prototypowanie wzorców",
          impact: "Przyspieszenie decyzji komponentowych i ograniczenie powtarzalnego stylowania.",
          year: "2025",
          href: "https://github.com/ArtemDiatlenko",
        },
        {
          name: "Angular Dashboard Prototype",
          description:
            "Prototyp panelu admina skupiony na czytelności danych i przejrzystej hierarchii informacji.",
          stack: "Angular, TypeScript, SCSS",
          status: "Koncepcja / iteracja",
          role: "Struktura dashboardu i prezentacja danych",
          impact: "Lepsza czytelność i szybsze skanowanie gęstych widoków operacyjnych.",
          year: "2024",
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
      processTitle: "Przebieg współpracy",
      process: [
        {
          title: "Ustalenie kontekstu",
          description:
            "Przekazujesz cele projektu, oczekiwania czasowe i aktualne ograniczenia.",
        },
        {
          title: "Doprecyzowanie zakresu",
          description:
            "Proponuję kierunek implementacji, priorytety i realistyczną sekwencję delivery.",
        },
        {
          title: "Realizacja i polish",
          description:
            "Wdrażamy iteracyjnie z regularną kontrolą jakości UI i produkcyjną gotowością.",
        },
      ],
    },
    footer: {
      rights: "© 2026 Artem Diatlenko. Wszelkie prawa zastrzeżone.",
    },
    meta: {
      home: {
        title: "Artem Diatlenko | Frontend Developer",
        description: "Portfolio frontend premium z wybranymi projektami i danymi kontaktowymi.",
      },
      about: {
        title: "O mnie | Artem Diatlenko",
        description: "Doświadczenie, stack i kontekst pracy frontendowej Artema Diatlenki.",
      },
      projects: {
        title: "Projekty | Artem Diatlenko",
        description: "Wybrane realizacje frontendowe, stack i bieżące projekty.",
      },
      skills: {
        title: "Umiejętności | Artem Diatlenko",
        description: "Szczegółowy przegląd kompetencji, obszarów technologicznych i siły realizacyjnej.",
      },
      journey: {
        title: "Ścieżka | Artem Diatlenko",
        description: "Kamienie milowe, zasady i rozwój zawodowy w produktowym frontendzie.",
      },
      services: {
        title: "Usługi | Artem Diatlenko",
        description:
          "Oferta usług frontendowych: budowa produktów, niezawodne UI i wsparcie architektoniczne.",
      },
      achievements: {
        title: "Osiągnięcia | Artem Diatlenko",
        description:
          "Mierzalne efekty, wskaźniki jakości i dowody praktycznych wdrożeń frontendowych.",
      },
      stack: {
        title: "Stack | Artem Diatlenko",
        description:
          "Szczegóły stacka frontendu: warstwy architektoniczne, gate jakości i podejście do dostawy.",
      },
      playbook: {
        title: "Playbook | Artem Diatlenko",
        description:
          "Praktyczny playbook frontendu: jasne zasady, fundamenty i struktura procesu.",
      },
      caseStudies: {
        title: "Studia przypadków | Artem Diatlenko",
        description: "Szczegółowe opisy decyzji projektowych i efektów implementacyjnych.",
      },
      lab: {
        title: "Laboratorium | Artem Diatlenko",
        description: "Eksperymenty frontendu, interakcje i motion projektowane pod niezawodność wdrożeniową.",
      },
      quality: {
        title: "Jakość | Artem Diatlenko",
        description: "Praktyczne wskaźniki jakości, zasady dostępności i bramki jakościowe dla produkcyjnych interfejsów.",
      },
      operations: {
        title: "Operacje | Artem Diatlenko",
        description: "Model operacyjny frontendu z mierzalnymi checkpointami i stabilną ścieżką dostawy.",
      },
      contact: {
        title: "Kontakt | Artem Diatlenko",
        description: "Kanały kontaktowe i dostępność do współpracy.",
      },
      studio: {
        title: "Studio | Artem Diatlenko",
        description: "Model pracy studia frontendowego, zasady działania i proces produkcyjnego wdrożenia.",
      },
      testimonials: {
        title: "Referencje | Artem Diatlenko",
        description: "Opinie klientów i partnerów dotyczące jakości dostarczanych interfejsów.",
      },
    },
    testimonials: {
      label: "Referencje",
      title: "Co mówią ludzie po wdrożeniu.",
      intro:
        "To wyselekcjonowane uwagi od zespołów, z którymi pracuję: jasność komunikacji, jakość wizualna i stabilność pod ciśnieniem terminu.",
      metrics: [
        { label: "Zaufane współprace", value: "14", description: "Stałe strumienie prac z iteracjami i dalszym rozwojem." },
        { label: "Satysfakcja dostaw", value: "98%", description: "Partnerzy raportują jasne milestone'y i przewidywalny handoff." },
        { label: "Szybkość reakcji", value: "24h", description: "Średni czas pierwszej odpowiedzi w aktywnych współpracach." },
      ],
      collectionTitle: "Sygnały współpracy",
      collectionText:
        "Najsilniejszy feedback pojawia się, gdy projekt, implementacja i komunikacja tworzą jeden pipeline, a nie rozproszone etapy.",
      traits: [
        "Jasne kamienie milowe bez mglistych obietnic",
        "Szybkie wejście przez przejrzyste interfejsy",
        "Spójny język wizualny w trybach jasnym i ciemnym",
      ],
      cards: [
        {
          name: "Monika R.",
          role: "Product Lead",
          company: "Startup fintechowy",
          quote:
            "Spójność na poziomie całego portfolio sprawiła, że onboarding designerów i QA przyspieszył zauważalnie.",
          result: "Efekt: wyższa pewność dostaw co tydzień",
        },
        {
          name: "Piotr K.",
          role: "Dyrektor Techniczny",
          company: "Platforma SaaS",
          quote:
            "Każdy sprint kończył się interfejsem, który był spójny wizualnie i kontrolowany pod kątem technicznym.",
          result: "Efekt: mniej regresji wizualnych o około 30%",
        },
        {
          name: "Agnieszka M.",
          role: "Product Manager",
          company: "Narzędzie B2B",
          quote:
            "Szybko przekłada wymagania na decyzje UI i wykonuje je konsekwentnie bez rozmycia zakresu.",
          result: "Efekt: klarowniejsze release i prostszy handoff",
        },
      ],
      outroTitle: "Potrzebujesz takiego poziomu?",
      outro:
        "Jeśli chcesz praktycznej współpracy z mocnymi standardami UI i mierzalnym postępem UX, mogę wejść bezpośrednio w Twój harmonogram.",
      ctaContact: "Skontaktuj się",
      ctaWork: "Sprawdź portfolio",
    },
  },
} as const;
