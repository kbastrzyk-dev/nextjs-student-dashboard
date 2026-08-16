# Engineering Reflection

**1. What assumptions did you make?**
I assumed the dashboard is primarily a quick-glance tool for students on the go, so I heavily prioritized a responsive, mobile-first grid. Architecturally, I assumed the `api/courses` mock route would eventually be replaced by a real backend. Coming from a background where I often work with databases and data pipelines, I wanted to keep the data fetching logic decoupled enough so that swapping the mock API for a real database query later wouldn't require a massive frontend rewrite.

**2. What was the hardest part?**
Definitely shifting my mental model to the Next.js App Router paradigm. In traditional React (or when writing simple scripts), execution flow is pretty straightforward. Here, figuring out the exact boundary between Server Components and Client Components—and deciding when it's appropriate to drop a `"use client"` directive just to use `useEffect` or `useState`—took some trial and error to get right without sacrificing performance.

**3. If you had another week, what would you improve?**
I would focus on elevating the UI/UX to make it feel less like a traditional, clunky university portal and more like a modern SaaS tool. Since students are highly deadline-driven, I’d build an interactive Calendar or a Kanban board view for the assignments rather than just keeping them in a static list. I would also improve the perceived performance by replacing the plain text loading states with smooth Skeleton loaders. Lastly, I’d love to add some data visualizations (e.g., using Recharts) to show GPA progression or attendance trends over semesters, making the dashboard much more engaging and data-rich.

**4. What would you refactor first?**
The metric cards in the `DashboardPage`. Right now, I repeated the JSX for the "Total Courses", "GPA", and "Attendance" blocks. It works, but it violates the DRY principle. I would extract that into a reusable component that accepts props like `title`, `value`, and optionally some styling flags.

**5. What AI tools (if any) did you use, and how did they help? (We allow AI, but we care about how you use it.)**
I used ChatGPT (GPT-4) primarily as a sounding board, and GitHub Copilot as an inline workflow accelerator. Before writing code, I prompted ChatGPT to help me outline an initial action plan and validate my architectural choices. During development, Copilot helped rapidly scaffold repetitive Tailwind CSS utility classes, while I used ChatGPT to help trace the root cause of a specific Next.js App Router rendering issue. This approach allowed me to maintain full control over the architecture while offloading the boilerplate, keeping me focused on the core logic.

**6. What did you deliberately choose not to build, and why?**
I deliberately chose not to implement Redux for global state management. While I am very comfortable with the Redux ecosystem (including Redux Toolkit) and use it when necessary, introducing it to this specific Next.js App Router project would be an anti-pattern. Next.js heavily promotes a server-first architecture. For this dashboard, relying on server-fetched data, URL parameters, and local component state is much more efficient. Bringing in Redux would unnecessarily bloat the client bundle and over-engineer a UI that simply doesn't have complex, globally shared synchronous state. I also skipped a full authentication flow to keep the focus strictly on the frontend UI and data presentation.
