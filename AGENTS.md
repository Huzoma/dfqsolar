# dfq-solar

## Application Building Context

Read the following files in order before implementing or making any architectural decision:

1. `context/project-overview.md` — product definition, goals, stakeholders, and socio-technical scope
2. `context/architecture.md` — system structure, boundaries, storage model, and security invariants
3. `context/ui-context.md` — theme, software posture, cognitive ergonomics, and component conventions
4. `context/code-standards.md` — implementation rules, defensive engineering, and conventions
5. `context/ai-workflow-rules.md` — development workflow, blast radius rules, and delivery approach
6. `context/progress-tracker.md` — current phase, completed work, open questions, and next steps

Update `context/progress-tracker.md` after each meaningful implementation change.

If implementation changes the architecture, scope, or standards documented in the context files, update the relevant file before continuing.

## Stack

- **Language / Runtime**: TypeScript, Node 22+
- **Framework**: Next.js 16.2 (App Router)
- **Key dependencies**: React 19.2, Zod 4.5, Lucide React
- **Package manager**: npm

## Build approach

<TBD, set by /scope>

## Commands

```bash
# Install
npm install

# Dev server
npm run dev

# Build
npm run build

# Lint
npm run lint
```

## Specs

Stored in `docs/specs/`. Format: `docs/specs/NNNN-title.md`.

## Rules

- **Component Standards**: Use CSS Modules (`*.module.css`) for component-scoped styling. Do not use inline styles unless dynamically calculated. Keep modules, functions, and files small and single-purpose (SRP).
- **Architectural Rules**: Zero Raw Queries (SQL concatenation prohibited); Zero Secondary Crashes (evaluate third-party libraries against Next.js SSR and serverless limits).
- **Defensive Engineering**: Sanitize all user content to prevent XSS; `dangerouslySetInnerHTML` is banned unless explicitly wrapped in a sanitization library. Scrub PII and auth tokens in logs.
- **Strict Validation**: Every external data boundary must use Zod for runtime schema validation. Strict TypeScript typing is required (avoid `any`).
- **HCI**: Operations taking >300ms must display a loading state. Form inputs must use clear constraints (e.g., disable buttons on invalid state, show visual confirmations).

## Agent skills

- [architect](.agents/skills/architect/): `JavaScript-Mastery-Pro/skills`, owns technical decisions and spec creation
- [audit](.agents/skills/audit/): `JavaScript-Mastery-Pro/skills`, bootstraps project AI context (AGENTS.md)
- [check](.agents/skills/check/): `JavaScript-Mastery-Pro/skills`, confirms changes against spec before merge
- [debug](.agents/skills/debug/): `JavaScript-Mastery-Pro/skills`, localizes and fixes bugs safely
- [develop](.agents/skills/develop/): `JavaScript-Mastery-Pro/skills`, implements features, UI, or backend from approved specs
- [document](.agents/skills/document/): `JavaScript-Mastery-Pro/skills`, writes PRs, changelogs, postmortems
- [scope](.agents/skills/scope/): `JavaScript-Mastery-Pro/skills`, manages feature queues and product planning
- [sync](.agents/skills/sync/): `JavaScript-Mastery-Pro/skills`, reconciles docs/specs after implementation
- [test](.agents/skills/test/): `JavaScript-Mastery-Pro/skills`, generates comprehensive test suites

## Context files

<!-- Nested AGENTS.md files are listed here as they are created -->

_Drafted by /audit from the repo, worth a quick human pass. Edit freely: once a line stops matching this draft, later runs treat it as curated and will flag rather than overwrite it._
