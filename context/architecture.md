# Architecture Context

## Stack
| Layer     | Technology                  | Role   |
| --------- | --------------------------- | ------ |
| Framework | [e.g. Next.js App Router]   | [Role] |
| UI        | [e.g. Tailwind + shadcn/ui] | [Role] |
| Database  | [e.g. Prisma + PostgreSQL]  | [Role] |

## System Boundaries (Separation of Concerns)
- `components/ui/` — Dumb, representational UI components only. No business logic.
- `lib/services/` — Core business logic and database transformations.
- `actions/` — Server-side data mutations and API bridging.

## Auth and Access Model
- [e.g. Role-Based Access Control (RBAC). Authorization must be validated at both the UI layer and the backend API layer.]

## Architectural Invariants (Never Violate)
1. **Modern Stack Compatibility:** Always evaluate how third-party libraries interact with Next.js Server-Side Rendering (SSR), Turbopack strictness, and Vercel serverless function limits before suggesting them. 
2. **Zero Secondary Crashes:** Do not propose an architectural fix unless you are 100% certain it aligns with current build tools and will not trigger secondary deployment crashes.
3. **Mandatory Schema Validation:** Every external data boundary (API route, webhook, form submission) must be parsed through a strict runtime schema (e.g., Zod). Reject invalid payloads immediately.
4. **Zero Raw Queries:** Raw SQL string concatenation is strictly prohibited. Use parameterized ORM queries to neutralize injection risks.
5. **Least Privilege & No Hardcoded Secrets:** Operate with minimum required access scopes and read all environment variables through validated runtime configuration wrappers.