# portfolio-responsive-audit

## Purpose
Prevent layout breakage and maintain premium composition quality across mobile, tablet, and desktop.

## When to use
- Any UI change that affects layout, spacing, text, cards, or navigation.
- Before finalizing redesign tasks.
- During regression checks after component refactors.

## Core rules
- Audit key breakpoints intentionally:
  - Small mobile (~320-390px)
  - Large mobile / small tablet (~430-768px)
  - Tablet / laptop (~768-1280px)
  - Large desktop (1280px+)
- Prioritize structural stability:
  - No text clipping.
  - No horizontal scrolling.
  - No card content overlap.
  - No broken CTA rows.
- Keep hero composition readable at narrow widths.
- Ensure menu/language switch remain reachable and tappable.
- Keep card heights visually balanced but avoid fixed heights that clip content.
- Control long text wrapping in both EN and PL.

## Checklist
- Verify `/`, `/about`, `/projects`, `/contact` on all key breakpoints.
- Verify header does not collide with content.
- Verify project/contact cards remain readable with real content lengths.
- Verify no overflow in glass panels, badges, or button groups.
- Verify spacing rhythm still looks intentional on narrow screens.

## Anti-patterns
- Desktop-first layouts patched with random mobile fixes.
- Fixed height cards for variable text.
- Overly large hero paddings on mobile.
- Broken line breaks in uppercase labels and badges.
- Ignoring language-length differences between EN and PL.

## Expected output
- Stable responsive behavior with preserved visual hierarchy.
- No overflow, clipping, or awkward spacing collapses.
- Consistent premium feel from phone to desktop.

## Definition of done
- All core pages pass responsive checks at target widths.
- Interaction and readability remain strong at each breakpoint.
- No known layout regressions remain.
