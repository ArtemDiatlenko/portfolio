# portfolio-design-system

## Purpose
Keep a single premium visual system across the React portfolio so any new section looks native to the existing product language.

## When to use
- Creating or redesigning UI components in `src/app/**`.
- Editing visual tokens in `src/app/globals.css`.
- Building new pages or cards that must match current premium glass style.
- Aligning light/dark theme parity.

## Core rules
- Treat `src/app/globals.css` as the design source of truth for tokens and primitives.
- Reuse existing tokens and classes first: `--background`, `--foreground`, `--line-*`, `--shadow-*`, `.glass-panel`, `.glass-card`, `.pill-kicker`, `.shine-text`.
- Keep typography hierarchy deliberate:
  - Hero title: high contrast, tight tracking, controlled line height.
  - Section titles: consistent weight/size scale.
  - Body: readable leading and stable measure.
- Keep spacing rhythm consistent by section type:
  - Page section wrapper: `space-y-10/12`.
  - Card internals: `p-6` to `p-8`, no arbitrary jumps.
  - Grid gaps: `gap-4` to `gap-6`.
- Keep border/radius/shadow language consistent:
  - Panels and cards should not mix random radii.
  - Shadows should signal hierarchy, not decoration noise.
- Ensure light and dark themes are both fully designed, not inverted leftovers.
- For new UI primitives, add them to `globals.css` only if they are reusable in at least two places.

## Checklist
- Verify new UI reuses existing glass/tokens before introducing new classes.
- Verify visual hierarchy: kicker -> heading -> body -> CTA.
- Verify color/contrast consistency in both themes.
- Verify card proportions and spacing match neighboring sections.
- Verify all interactive elements have hover/focus/active states.
- Verify no component uses one-off, inconsistent shadows/radii.

## Anti-patterns
- Introducing random colors that are not in the current palette direction.
- Mixing multiple unrelated visual styles in one screen.
- Oversized padding blocks that create empty, lifeless layouts.
- Flat gray cards with no hierarchy, contrast, or depth.
- Creating isolated utility classes that are used once and never reused.

## Expected output
- Updated components/pages that visually align with existing premium language.
- Minimal, intentional token/class additions in `globals.css` when necessary.
- No visual drift between pages (`/`, `/about`, `/projects`, `/contact`).

## Definition of done
- New/updated UI looks like part of one coherent design system.
- Light and dark versions are both polished.
- No visible inconsistencies in spacing, typography, surfaces, or interaction states.
