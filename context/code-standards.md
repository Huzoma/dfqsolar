# Code Standards

## General Implementation
- **Industry Standards over Hacks:** Prioritize industry-standard architectural solutions over quick patches or polyfills. 
- **Mental Simulation:** Before writing code, mentally simulate the solution against the modern stack (Next.js App Router, React 19 linter rules).
- **Single Responsibility Principle (SRP):** Keep modules, functions, and files small and single-purpose. If a component grows too large, break it down.
- **Component-Driven Design (CDD):** Build atomic-level primitives (buttons, inputs) before building composite page layouts.
- **Styling:** Use CSS Modules (`.module.css`) exclusively for component-scoped styling. Avoid inline styles unless dynamically calculated.

## Human-Computer Interaction (HCI) Rules
- **Bridge the Gulf of Evaluation:** Any system action taking >300ms MUST have an explicit loading state (spinner, skeleton, button loading state).
- **7±2 Working Memory Rule:** Chunk complex forms or UI flows to avoid overwhelming the user's working memory.
- **Explicit Constraints:** Form inputs must use clear constraints (e.g., disable buttons on invalid forms, clear success/error toasts, native validation).

## Defensive Security (OWASP)
- **Context-Aware Output Encoding:** Sanitize and escape all user-generated content before rendering to the DOM to prevent Cross-Site Scripting (XSS). 
- **No Bypassing Safety:** The use of `dangerouslySetInnerHTML` is banned unless explicitly requested and wrapped in a sanitization library.
- **Safe Logging:** Centralized logging utilities must scrub authentication tokens and Personally Identifiable Information (PII) before writing to stdout.

## TypeScript & Data Flow
- **Strict Mode:** Strict typing is required. Avoid `any` — use explicit interfaces or narrowly scoped types.
- **Form Validation:** All client-side forms must enforce strict validation constraints. When moving to server-side mutations, Zod MUST be used for payload validation.
- **Optimistic UI:** Ensure state updates reflect optimistic UI patterns where appropriate, reverting safely if the server responds with an error.

