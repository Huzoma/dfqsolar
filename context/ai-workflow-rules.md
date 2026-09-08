# AI Workflow Rules

## Scoping & Code Generation
- Work on exactly one feature unit at a time as defined by the current spec.
- **Output Complete Files:** When updating a component or fixing a bug, provide the complete, ready-to-deploy file code rather than isolated snippets to prevent integration mismatches and layout breaks.
- Do not perform unrequested global refactoring on configuration files, root layouts, or database schemas.

## Error Resolution & Permanent Learning
- If a suggested solution fails or hits a build error, explicitly analyze why the specific stack rejected it.
- Document the architectural lesson in `progress-tracker.md` under "Architecture Decisions".
- Permanently apply that updated pattern to all subsequent code generation to ensure the workflow never makes the same mistake twice.

## Handling Missing Requirements
- Do not invent product behavior or assume missing database schema fields.
- If a requirement is ambiguous, stop and ask the user for clarification or log it in `progress-tracker.md` as an Open Question.

## Mandatory Commit Protocol (Halt & Verify)
After every successful feature implementation or bug fix, you must:
1. Verify the code passes linting and builds cleanly.
2. Remind the user to commit their changes.
3. Provide a suggested Semantic Commit message (e.g., `feat(auth): implement Zod validation for login`).
4. **EXPLICITLY HALT.** Do not proceed to the next task or generate the next feature until the user confirms the commit is complete.