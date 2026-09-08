# Architecture Context

## Stack
| Layer     | Technology                  | Role   |
| --------- | --------------------------- | ------ |
| Framework | Next.js 16 (App Router)     | Core routing, SSR, and API endpoints |
| UI        | React 19 + CSS Modules      | Component rendering and scoped styling |
| Icons     | Lucide React                | SVG Iconography |
| Database  | None (Currently Static)     | WhatsApp redirection for forms |

## System Boundaries (Separation of Concerns)
- `src/components/` — Reusable, representational UI components (e.g., `Navbar`, `Footer`, `Calculator`). Use CSS Modules (`*.module.css`) for styling.
- `src/app/` — Next.js App Router pages and layouts. Contains page-level state and composition.
- `lib/services/` (Future) — Core business logic and database transformations.
- `actions/` (Future) — Server actions for data mutations and API bridging.

## Auth and Access Model
- Currently public-facing. Future auth must be validated at both the UI layer and the backend API layer using Next.js middleware and session validation.

## Architectural Invariants (Never Violate)
1. **Modern Stack Compatibility:** Always evaluate how third-party libraries interact with Next.js Server-Side Rendering (SSR), Turbopack strictness, and Vercel serverless function limits.
2. **Zero Secondary Crashes:** Do not propose an architectural fix unless you are 100% certain it aligns with current build tools and will not trigger secondary deployment crashes.
3. **Mandatory Schema Validation:** Every external data boundary (API route, Server Action, form submission) MUST be parsed through a strict runtime schema using **Zod**. Reject invalid payloads immediately.
4. **Zero Raw Queries:** Raw SQL string concatenation is strictly prohibited. If a database is added, use parameterized ORM queries (e.g., Prisma or Drizzle) to neutralize injection risks.
5. **Least Privilege & No Hardcoded Secrets:** Operate with minimum required access scopes and read all environment variables through validated runtime configuration wrappers.
