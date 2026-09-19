# Scope: dfq-solar

Solar and lithium backup systems engineered in Nigeria, providing energy independence for residential, commercial, and industrial sites.

**Build approach:** Tracer Bullet (vertical slices; each feature built end to end through every layer, working).
**Workflow:** GA (After `/develop`, `/check verify`, `/test`, a fresh model `/check review`, then `/document`). The project default level of rigor. `/architect` is the recommended first stop for a feature with a real decision, but skippable when you already know the build. Any feature can carry its own tag (e.g. `· GA`) to do more or less.

_These are recommendations to keep your build orderly, not requirements. Skip anything that does not fit: if you already know how to build a feature, use `/develop` and skip `/architect`. You decide when a feature is `done`._

## At a glance

| # | Feature | Phase | Status |
|---|---------|-------|--------|
| 1 | Stack & architecture | Foundation | existing |
| 2 | Design system & UI foundation | Foundation | existing |
| 3 | Core landing & WhatsApp integration | Foundation | existing |
| 4 | Fix Calculator lint error | Slice 1 | planned |
| 5 | Fix Hydration mismatch | Slice 1 | planned |
| 6 | Interactive Product Detail Views | Slice 2 | planned |
| 7 | SEO, meta tags, & structured data | Slice 3 | planned |
| 8 | Admin Dashboard for lead management | Slice 4 | planned |

## Foundations

### 1. Stack & architecture · existing
Next.js 16 (App Router), React 19, Zod, and Lucide React configured with strict typing. code in `package.json`

### 2. Design system & UI foundation · existing
"Sun & Voltage" UI design identity using CSS Modules for scoped component styling. code in `src/app/page.module.css`

### 3. Core landing & WhatsApp integration · existing
Public-facing landing page with product catalog, calculator, and contact form wired directly to WhatsApp hotline. code in `src/app/page.tsx`

## Slice 1: Bug Fixes & Stability

### 4. Fix Calculator lint error
Resolve the React Compiler rule violation for calling setState synchronously within an effect.
**Done when:** `Calculator.tsx` passes `npm run lint` cleanly.
- [ ] Build it: `/develop fix calculator lint error`

### 5. Fix Hydration mismatch
Identify and resolve the hydration mismatch currently logged at runtime on the homepage.
**Done when:** The homepage loads without hydration warnings in the browser console.
- [ ] Build it: `/develop fix hydration mismatch`

## Slice 2: Enhanced Product Experience

### 6. Interactive Product Detail Views · needs a decision
Make the product catalog cards clickable, linking to dedicated product detail views for deeper specifications and quoting.
**Done when:** Users can click from a catalog card into a dedicated product page with full specs and a lead capture form.
- [ ] Design it (spec): `/architect interactive product detail views`

## Slice 3: Growth & Discoverability

### 7. SEO, meta tags, & structured data · needs a decision
Implement proper metadata, Open Graph tags, and structured data (JSON-LD) across the public pages.
**Done when:** All public pages have dynamic titles, descriptions, and OG images that pass SEO validation.
- [ ] Design it (spec): `/architect seo and meta tags`

## Slice 4: Backend Management

### 8. Admin Dashboard for lead management · needs a decision
A secure backend portal to capture, track, and manage leads instead of solely relying on WhatsApp handoffs.
**Done when:** Administrators can log in, view submitted quotes/contacts, and update lead statuses.
- [ ] Design it (spec): `/architect admin dashboard`

## Legend

**The decision box.** Every feature carries exactly one, the sub-task whose label ends with `(spec)`. Its wording varies (`Design it (spec)` normally, `Decide the stack (spec)` on Stack & architecture), so skills locate it by that `(spec)` suffix, never by an exact label. Every other box is an execution box and `/architect` never ticks one.

**Feature lifecycle**: the scope updates as a feature moves; each row is what it shows and who sets it:

| State | Set by | The feature shows |
|---|---|---|
| `planned` · needs a decision | `/scope` | one box: `Design it (spec): /architect <feature>` |
| `in-progress` (designed) | **`/architect` at spec capture** | `Design it` ticked; spec linked; `Build it: /develop <feature>` + **2 to 5 milestones**; the tier's closing boxes (`Verify it` Alpha+, `Test it` Beta+, `Review it` + `Document it` GA); any surfaced follow-up enrolled |
| `in-progress` (building) | `/develop` | milestone sub-boxes tick one by one; code pointer filled |
| `in-progress` (verified) | `/check verify` | `Build it` + milestones ticked; `Verify it` ticked |
| `done` | **you, when you decide it is** (any skill sets it when you say so); `/sync` reconciles | boxes you ran ticked, skipped ones marked skipped; the tier's last stage (`Prototype` → after `/develop`; `Alpha` → after `/check verify`; `Beta`/`GA` → after `/test`) is the suggested point to call it done; `/sync` captures conventions |

- **Next step** = the first unticked box (always a command or a tracked milestone).
- **needs a decision** = run `/architect` first; otherwise straight to `/develop` (or `/audit` for standards & tooling). The tag drops once the spec is captured.
- **Atomic build tasks live in the spec's `## Build plan`, not here**: the scope carries only the milestone rollup.
- **Status** `planned` → `in-progress` → `done`, plus `existing` (pre-workflow) and `dropped` (de-scoped, kept for history).
- **Approach tag** beside a heading (e.g. `· Facade`) overrides the project default for that feature; no tag = inherits it.
- **Workflow tier tag** beside a heading (e.g. `· GA`, `· Prototype`) sets that one feature's rigor above or below the project default; no tag inherits the default. It decides the feature's check boxes and each skill's next suggestion.
- **Workflow** (header line) is the project default, what runs after `/develop`: **Prototype** = nothing (trust develop's own build time self check); **Alpha** = `/check verify`; **Beta** = `/check verify` then `/test`; **GA** = adds a fresh model `/check review` then `/document`. A feature built on an unratified decision (an `Assumed` spec) stays flagged, but that never blocks `done`.
- **Pointer line** (`spec <n> · code in <path>`): the spec link added by `/architect`, the code path by `/develop`.
