# portfolio-accessibility-seo

## Purpose
Guarantee baseline accessibility and technical SEO quality while preserving premium UI.

## When to use
- Updating navigation, forms, links, buttons, or interactive cards.
- Editing headings, metadata, semantic structure, and media.
- Final quality pass before declaring delivery complete.

## Core rules
- Use semantic structure first:
  - One clear page-level heading (`h1`).
  - Ordered heading hierarchy.
  - Landmark-friendly layout (`header`, `main`, `footer`).
- Ensure keyboard-first usability:
  - Reachable controls.
  - Visible focus states.
  - No keyboard traps.
- Preserve accessible names for icon-only controls (`aria-label` where needed).
- Keep contrast acceptable in light and dark themes.
- For images/graphics:
  - Add meaningful `alt` when informative.
  - Use decorative alt (`""`) for purely decorative assets.
- Keep metadata quality in `layout.tsx`/route metadata:
  - Accurate title and description.
  - Add/maintain OG/Twitter fields when expanding social footprint.
- Avoid SEO anti-patterns:
  - Empty headings.
  - Duplicate title intent across pages.
  - Content hidden behind non-semantic structures.

## Checklist
- Verify keyboard navigation path for menu, language switch, CTAs, and links.
- Verify focus visibility on all interactive controls.
- Verify heading structure per page.
- Verify metadata remains relevant after content changes.
- Verify no accessibility regressions from animation or visual effects.

## Anti-patterns
- Clickable `div` without semantics.
- Removing focus outlines without equivalent replacement.
- Decorative-only headings used for style.
- Contrast loss caused by translucent layers.
- Overusing animation where it blocks readability.

## Expected output
- Accessible, navigable interface with semantic structure intact.
- Metadata aligned with real page content and portfolio goals.
- No obvious accessibility regressions after redesign/refactor.

## Definition of done
- Core user flows are keyboard-usable and readable.
- Page structure and metadata are technically sound.
- Premium visuals do not compromise accessibility basics.
