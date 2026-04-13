# portfolio-animations

## Purpose
Define motion behavior that strengthens premium perception without harming performance, readability, or accessibility.

## When to use
- Adding or tuning reveal/entrance animations.
- Adjusting hover/focus micro-interactions.
- Implementing page/section transitions.
- Auditing animation consistency and smoothness.

## Core rules
- Keep motion meaningful: every animation must support hierarchy or feedback.
- Reuse existing motion primitives in `globals.css` (`.animate-enter`, delay classes, reduced-motion fallback) before adding new ones.
- Keep timing system coherent:
  - Micro interactions: fast and subtle.
  - Section reveal: medium duration, smooth easing.
  - Avoid mixed timing styles inside one block.
- Use transform/opacity-first animations; avoid layout-thrashing properties.
- Always support `prefers-reduced-motion`.
- Keep hover effects small in amplitude and consistent across similar controls.
- Avoid stacked animations that compete for attention.

## Checklist
- Verify all animations have a clear purpose.
- Verify no jank on hover/reveal/menu open states.
- Verify motion is synchronized across nav/buttons/cards.
- Verify reduced-motion mode still looks complete and polished.
- Verify no content becomes unreadable during animation.

## Anti-patterns
- Bouncy, flashy, game-like motion in premium UI.
- Animating too many elements at once on initial load.
- Using heavy blur/filter animation on large areas.
- Different easing/durations for similar component types without reason.
- Ignoring reduced-motion accessibility.

## Expected output
- Consistent animation language across pages.
- Smooth interaction transitions for menu, buttons, cards, and section reveals.
- No visible jitter or distracting motion overload.

## Definition of done
- Motion improves clarity and perceived quality.
- Performance remains stable on mid-range devices.
- Reduced-motion users get a complete usable experience.
