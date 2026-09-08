# UI Context

## Software Posture
- **Primary Posture:** [e.g., Sovereign — optimized for full-screen, sustained working sessions with muted colors and rich status feedback.]
- **Secondary Posture:** [e.g., Transient — modals and dialogs must be bold, single-focus, and quickly dismissible.]

## Cognitive Ergonomics & Interaction
- **Working Memory (7±2 Rule):** Break complex forms and long lists into logical chunks. Never overwhelm the user with massive, unpaginated data dumps.
- **Recognition over Recall:** Use universally understood icons. Do not invent abstract iconography.
- **Affordances & Constraints:** Interactive elements must look interactive. Disable or shade buttons (constraints) if the underlying form state is invalid to prevent errors.

## Bridging the Gulf of Evaluation (Feedback)
- The system must always provide immediate, perceptible feedback for user actions.
- Any performance operation taking >300ms must display a loading spinner, skeleton screen, or progress bar.
- To prevent duplicate submissions, action buttons must disable themselves instantly upon click and show a processing state.
- Never clear a form or change a layout without a visual success/error toast confirmation.

## Colors & Typography
[Include your standard CSS variables, Hex codes, and font choices here]