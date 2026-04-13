# portfolio-code-quality

## Purpose
Keep TypeScript/React code maintainable, reusable, and aligned with the project architecture.

## When to use
- Implementing new features in `src/app/**`.
- Refactoring components or styles.
- Reviewing PR-quality changes for architecture and maintainability.

## Core rules
- Respect current architecture:
  - Route pages in `src/app/*/page.tsx`.
  - Reusable UI in `src/app/components`.
  - Text content in `src/app/i18n/translations.ts`.
- Keep components focused:
  - Split giant components by responsibility.
  - Avoid mixing layout logic, copy logic, and utility behavior in one file.
- Keep TypeScript strict and explicit:
  - Prefer typed props and unions.
  - Avoid `any`.
  - Keep domain types near usage points when small, centralize when shared.
- Avoid duplication:
  - Extract shared card wrappers/patterns when repeated.
  - Reuse utility classes/tokens instead of copy-paste style blobs.
- Keep state hygiene:
  - Use local state only when required.
  - Avoid unnecessary state abstractions for static content.
- Keep class strings readable and stable:
  - Group by layout -> spacing -> visual -> interactive.
- Preserve i18n boundaries:
  - Do not hardcode translatable user-facing copy in random components.

## Checklist
- Verify new code follows existing folder conventions.
- Verify no `any` or weakly typed props introduced.
- Verify repeated UI patterns are abstracted sensibly.
- Verify translations are updated when user-facing copy changes.
- Verify no dead code or unreachable branches left behind.

## Anti-patterns
- Giant page files with repeated card markup and inline data blobs.
- Hardcoded mixed-language strings in components.
- Refactors that change behavior without documenting intent.
- Utility class chaos with inconsistent ordering and style drift.
- Premature abstraction with low reuse.

## Expected output
- Clean TypeScript components with clear responsibilities.
- Reusable UI patterns aligned with the premium design system.
- Predictable, maintainable structure for future contributors/agents.

## Definition of done
- Changes integrate cleanly with existing architecture.
- Code remains strict, readable, and scalable.
- No avoidable duplication or structural regressions remain.
