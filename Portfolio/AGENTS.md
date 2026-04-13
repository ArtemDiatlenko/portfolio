# AGENTS.md

## Mission
This repository is a premium TypeScript portfolio product, not a generic template.
Every change must move the site toward a wow-level result: Apple-inspired, clean, elegant, layered, expensive-looking, smooth, and production-ready.

The site must feel complete and credible for a strong frontend engineer profile, including visual polish, content quality, UX integrity, and technical reliability.

## Project Goal
- Build and maintain a premium portfolio experience with a coherent design language across all pages.
- Avoid empty, placeholder-like, or visually weak sections.
- Keep the interface rich and realistic enough to represent a real product-quality personal brand.

## Real Tech Stack (from repository)
- TypeScript 5 (`tsconfig.json`, `strict: true`, `allowJs: false`)
- React 19
- React Router (`react-router-dom`)
- Vite 7
- Tailwind CSS 4 (`@import "tailwindcss"`, `postcss.config.ts`)
- ESLint 9 (flat config + TypeScript + React Hooks)
- Local i18n via `LanguageProvider` + `src/app/i18n/translations.ts` (EN/PL)

Notes:
- Current scripts in `package.json`: `dev`, `build`, `preview`, `lint`.
- No dedicated test framework is configured yet.

## Repository Map
- `src/App.tsx` - global shell, route config, header/footer mounting, metadata updates.
- `src/main.tsx` - app entrypoint.
- `src/app/globals.css` - design tokens, shared surfaces, motion primitives.
- `src/app/page.tsx` + `src/app/components/*` - homepage and hero composition.
- `src/app/about/page.tsx`, `projects/page.tsx`, `contact/page.tsx` - core content pages.
- `src/app/i18n/translations.ts` - textual content in EN/PL.
- `public/` - static assets.

## Non-Negotiable Engineering Rules
- Audit existing structure before editing.
- Do not rewrite architecture without a clear technical reason.
- Extend existing patterns first; replace only when current pattern blocks quality.
- Keep all new code in TypeScript.
- Do not leave raw TODOs, stub sections, dead placeholders, or unfinished visuals.
- Do not ship “almost ready” UI states.
- Treat every change as production-bound.

## Design Rules (Apple-Inspired Premium)
- Preserve one coherent design system across all routes and components.
- Use disciplined spacing, typography hierarchy, and predictable rhythm.
- Keep radii, borders, shadows, and surface translucency consistent.
- Build calm but expressive contrast in both light and dark themes.
- Use premium color behavior (subtle gradients, controlled highlights, no muddy grayscale).
- Define hover/focus/active states for interactive UI.
- Keep motion smooth and refined; avoid flashy or cheap effects.
- Prevent visual defects: clipping, overflow, layout jumps, broken baselines, inconsistent shadows.
- Avoid giant padding blocks, random component proportions, and unbalanced empty space.

## Content Rules
- Portfolio content must look real and convincing: projects, outcomes, stack, process, impact.
- If source content is missing, create high-quality realistic demo content in the same tone.
- Demo content must be polished and believable, never generic filler.
- Do not leave sections visually or semantically empty.
- Keep EN/PL parity when content changes affect user-facing text.

## Motion Rules
- Motion must support clarity and premium feel, not distract.
- Synchronize page transitions, reveal timing, and micro-interactions.
- Keep durations/easing consistent across components.
- Respect `prefers-reduced-motion`.
- Avoid heavy animation patterns that degrade performance.

## Accessibility / UX / Responsive Rules
- Ensure full keyboard navigation for interactive elements.
- Keep visible focus states on all controls and links.
- Maintain readable contrast in both themes.
- Validate responsive behavior from small mobile widths to large desktop.
- Avoid text overlap, container overflow, broken card heights, and unstable layout shifts.
- Keep navigation, language switch, and CTA controls usable at all breakpoints.

## Performance / SEO Rules
- Avoid unnecessary bundle growth and expensive visual effects.
- Use semantic HTML structure and proper heading hierarchy.
- Keep metadata healthy (`title`, `description`, and OG-ready fields when relevant).
- Prefer lazy loading for non-critical heavy assets.
- Do not trade UX responsiveness for decorative effects.

## Refactoring Rules
- Refactor with intent: improve clarity, reuse, or performance.
- Avoid component bloat; split large files into focused parts.
- Keep naming explicit and domain-aligned.
- Remove duplication only after identifying shared behavior clearly.
- Preserve external behavior unless the task explicitly changes it.

## Required Agent Workflow
Follow this exact sequence for non-trivial tasks:
1. Audit current implementation and constraints.
2. Propose a short implementation plan.
3. Implement in small, coherent edits.
4. Self-check code quality and UI consistency.
5. Run verification commands.
6. Provide a concise delivery report with risks.

## Mandatory Self-Check Before Declaring Done
Run or explicitly justify why not run:
- `npm run dev` (or equivalent local preview)
- `npm run build`
- `npm run lint`
- `npx tsc --noEmit`
- Visual verification for `/`, `/about`, `/projects`, `/contact`
- Theme verification in light/dark
- Responsive verification (mobile, tablet, desktop)
- Keyboard/focus pass on nav, menu, language switch, links, buttons

If tests are added later, run them as part of the same gate.
Never claim “done” with known build errors, lint/type errors, broken layout, or obvious visual defects.

## Delivery Report Format (after each task)
- What changed (high-signal summary)
- What was verified (commands + visual checks)
- Remaining risks or assumptions (if any)

## Local Skill Library
Use repository skills from `.agents/skills/` when relevant:
- `portfolio-design-system.md`
- `portfolio-apple-premium-ui.md`
- `portfolio-animations.md`
- `portfolio-content-quality.md`
- `portfolio-responsive-audit.md`
- `portfolio-accessibility-seo.md`
- `portfolio-code-quality.md`
- `portfolio-self-check.md`
- `portfolio-hero-polish.md`
- `portfolio-visual-qa.md`

Load only the skills needed for the current task; keep context focused.
