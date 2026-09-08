# Code Standards

## General Implementation
- **Industry Standards over Hacks:** Prioritize industry-standard architectural solutions over quick patches or polyfills. 
- **Mental Simulation:** Before writing code, mentally simulate the solution against the modern stack (Next.js App Router, React 19 linter rules, CORS policies).
- **Single Responsibility Principle (SRP):** Keep modules, functions, and files small and single-purpose. If a component grows too large, break it down.
- **Component-Driven Design (CDD):** Build atomic-level primitives (buttons, inputs) before building composite page layouts.

## Defensive Security (OWASP)
- **Context-Aware Output Encoding:** Sanitize and escape all user-generated content before rendering to the DOM to prevent Cross-Site Scripting (XSS). 
- **No Bypassing Safety:** The use of `dangerouslySetInnerHTML` is banned unless explicitly requested and wrapped in a sanitization library.
- **Safe Logging:** Centralized logging utilities must scrub authentication tokens and Personally Identifiable Information (PII) before writing to stdout.

## TypeScript & Data Flow
- Strict mode is required. Avoid `any` — use explicit interfaces or narrowly scoped types.
- Ensure state updates reflect optimistic UI patterns where appropriate, reverting safely if the server responds with an error.