# Verify: Fix Calculator lint error · updated 2026-09-19
_Steps derived from task requirements. `/check verify` runs these; `/test` locks the durable ones._
## Commands
- [x] `npx eslint src/components/Calculator.tsx` → Exits with code 0 (cleanly)

# Verify: Fix Hydration mismatch · updated 2026-09-19
_Steps derived from task requirements. `/check verify` runs these; `/test` locks the durable ones._
## UI / manual
- [x] Open `http://localhost:3000` in the browser → Expect to see no Hydration mismatch warnings in the developer console.
