# Progress Tracker

Update this file after every meaningful implementation change.

## Current Phase
- Frontend Foundation & Context Setup

## Current Goal
- Establish development standards and enforce code quality rules

## Completed
- Defined `ai-workflow-rules.md`, `architecture.md`, and `code-standards.md` to establish constraints.
- Integrated the AI context framework.
- Wired contact form to WhatsApp hotline (`2348140679281`).
- Implemented "Sun & Voltage" UI design identity.
- Enforced strict typing and Zod validation for the contact form in `page.tsx`.
- Reconciled listed services phrasing and added full-width product imagery to the catalog tab.
- Repaired the Products catalog card UI: reframed the media block to 4:3 so square source art is no longer sliced, defined the previously-undefined `productBadge` / `productBadgeFeatured` / `productDesc` / `productSpecsList` classes, gave `productHighlight` a real featured treatment, and migrated the four card images to `next/image`.

## In Progress
- Awaiting the next feature assignment.

## Next Up
- Pending user direction.

## Open Questions
- What is the primary feature you would like to build or refactor next?
- Product cards scale their image on hover but are not clickable — a false affordance under the "interactive elements must look interactive" rule. Should cards link to a product detail view, or should the hover zoom be removed?
- `Calculator.tsx:100` fails lint with the React Compiler rule "Calling setState synchronously within an effect". Pre-existing and unrelated to the catalog work — schedule a fix?
- The homepage logs a hydration mismatch at runtime despite `suppressHydrationWarning` on `<html>`/`<body>` in `layout.tsx`. Root cause not yet identified.

## Architecture Decisions & Lessons Learned
- **Stack Definition:** Next.js 16 (App Router) + React 19.
- **Styling constraint:** Use CSS Modules (`*.module.css`) to enforce scoped component design.
- **Security Constraint:** Zod is required for runtime schema validation on all forms and API routes.
- **CSS Modules fail silently:** A `styles.someClass` with no matching rule resolves to `undefined` and React renders no class at all — no build error, no lint error. Four product badges shipped invisible this way. When adding a `styles.x` reference, confirm `.x` exists in the module.
- **Match the frame to the source art:** Forcing 1:1 source images into a 2.42:1 box with `object-fit: cover` discarded ~59% of each image. Derive image box height from `aspect-ratio`, not a fixed pixel height, and pick a ratio the subject actually survives.
- **Full-bleed media inside padded cards:** Drive the card padding from a local custom property (`--product-card-pad`) and derive the negative margin from it, so a responsive padding change can never desync the bleed.
- **Environment note:** `next build` requires outbound network access for `next/font` to fetch Google Fonts. In offline/sandboxed environments the build fails at `layout.tsx` with `ETIMEDOUT`; this is not a code fault. Use `npx tsc --noEmit` plus `npx eslint` to verify correctness there.