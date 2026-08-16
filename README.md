# Student Dashboard

A modern, responsive student dashboard built as part of the frontend engineering assessment.

## Submission

- **GitHub Repository:** [https://github.com/kbastrzyk-dev/nextjs-student-dashboard]
- **Live Deployment:** SOON
- **Engineering Reflection:** Please see `THINKING.md` for answers to the reflection questions.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Forms & Validation:** React Hook Form + Zod

---

## Decisions & Assumptions

### Key Decisions

- **Feature-Sliced Architecture:** I organized the `src` directory into domain-specific modules (`features/auth`, `features/courses`, `features/assignments`). This keeps the codebase scalable and maintainable, preventing the "spaghetti code" structure often seen in flat component folders.
- **Custom Mock API (Route Handlers):** Instead of relying on a generic, unrelated external API (like dummyjson), I built custom Next.js Route Handlers (e.g., `/api/courses`) to simulate a real, domain-specific backend environment.
- **Type-Safe Validation:** I integrated React Hook Form with Zod for the login form to ensure end-to-end type safety and robust client-side validation before any data reaches the mock submission handler.

### Key Assumptions

- The user base consists primarily of students checking their academic status on the go, which is why a mobile-first Tailwind configuration was prioritized.
- The mock API structure strictly defines the data contract that the real backend team will eventually implement.
- The application currently handles a small set of mock data, justifying the use of client-side local state over complex virtualization or global state stores.

---

## Product Improvement Challenge (Scaling to 50,000 Students)

If this feature were to be used by 50,000 students daily, the current architecture would need a few critical adjustments to ensure performance and a seamless user experience. Here are three improvements I would prioritize:

### 1. Migrating from Client-Side Fetching to React Server Components (RSC)

- **Why it matters:** Currently, the app sends empty HTML to the client, loads JS, and uses `useEffect` to fetch data. Multiply this by 50,000 users logging in at 8 AM, and we hit the server with a massive spike of client-side requests, severely delaying the Time-To-Interactive.
- **How to implement:** Move the data fetching directly into the server components (removing `"use client"` from the list wrappers) and leverage Next.js native caching and data fetching capabilities.
- **Trade-offs:** It requires a stricter separation of interactive elements (like clickable status buttons) from data-fetching wrappers, which can slightly complicate the component tree architecture.

### 2. UI Virtualization for Long Lists

- **Why it matters:** Over a 3-4 year degree, a student's assignment and course history will grow significantly. Rendering hundreds of DOM nodes at once for thousands of concurrent users will cause browser stuttering, especially on budget mobile devices.
- **How to implement:** Implement a windowing library like `@tanstack/react-virtual` to only render the assignments currently visible in the user's viewport.
- **Trade-offs:** It adds external dependencies, increases bundle size, and makes maintaining strict accessibility (like screen reader support for the whole list) more difficult.

### 3. Optimistic UI Updates for Task Management

- **Why it matters:** When server traffic is exceptionally high, network requests might experience latency. If a student marks an assignment as "Done", they shouldn't have to wait for a loading spinner. The UI should feel instantaneous.
- **How to implement:** Use React's `useOptimistic` hook to immediately update the local state assuming the backend request will succeed, while executing the actual request in the background.
- **Trade-offs:** If the backend request ultimately fails, the UI needs robust rollback logic to revert to the previous state and gracefully notify the user, which adds complexity to the error-handling flow.
