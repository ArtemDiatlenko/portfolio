# portfolio-self-check

## Purpose
Enforce a hard quality gate before claiming a task complete.

## When to use
- At the end of any meaningful implementation.
- Before reporting completion to user/stakeholders.
- After major UI, content, or architecture changes.

## Core rules
- Never mark task done without verification evidence.
- Validate both technical correctness and visual quality.
- If an environment limitation blocks checks, explicitly report what is blocked and what remains unverified.
- Treat unresolved build/lint/type/layout issues as blockers, not notes.

## Checklist
- Run `npm run lint`.
- Run `npx tsc --noEmit`.
- Run `npm run build`.
- Run `npm run dev` and visually verify:
  - `/`
  - `/about`
  - `/projects`
  - `/contact`
- Verify light and dark themes.
- Verify EN and PL content still renders correctly.
- Verify keyboard navigation and focus visibility for menu, language switch, and CTAs.
- Verify responsive behavior on mobile/tablet/desktop.
- Verify no unfinished placeholders, broken blocks, or empty sections.

## Anti-patterns
- “Looks fine” without running checks.
- Declaring done with known type/lint errors.
- Ignoring visual bugs because code compiles.
- Skipping theme or responsive checks after style changes.
- Leaving polished-looking but semantically broken markup.

## Expected output
- A short verification report with:
  - Commands run and results.
  - Pages visually checked.
  - Risks/limitations (if any).

## Definition of done
- Build/lint/type checks pass, or explicit environment blockers are documented.
- Core pages are visually and interactively verified.
- No known critical defects remain.
