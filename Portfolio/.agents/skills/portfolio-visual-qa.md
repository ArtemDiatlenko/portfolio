# portfolio-visual-qa

## Purpose
Run a focused visual QA pass to catch premium-quality regressions before delivery.

## When to use
- After redesign tasks.
- After broad style/token changes in `globals.css`.
- Before release candidate handoff.

## Core rules
- Review screens as a user, not only as code.
- Check consistency at system level, not component-by-component in isolation.
- Validate visual quality in both themes and across key breakpoints.
- Prioritize high-impact defects first:
  - Layout breaks.
  - Contrast/readability failures.
  - Interaction state defects.
  - Inconsistent visual language.

## Checklist
- Compare all primary routes for style coherence.
- Verify top-level spacing rhythm and section transitions.
- Verify card alignment and edge consistency in grids.
- Verify icon/button sizes and baseline alignment.
- Verify typography consistency (weights, tracking, line-height).
- Verify hover/focus/active behavior for nav, menu, buttons, links.
- Verify no clipped text, overflow, or broken rounded corners.
- Verify no accidental style regressions after token changes.

## Anti-patterns
- QA limited to one page only.
- Ignoring subtle but cumulative inconsistencies.
- Accepting “good enough” in premium UI tasks.
- Testing only dark mode or only desktop.

## Expected output
- A concise defect list (if any) with file-level fix points.
- A final “no critical visual defects” confirmation when clean.

## Definition of done
- No critical or obvious medium-level visual defects remain.
- Pages feel coherent as one product, not a collection of unrelated sections.
