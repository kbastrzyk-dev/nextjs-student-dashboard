// Define the type for the dashboard routes
export type DashboardRoute =
  | "/dashboard"
  | "/dashboard/courses"
  | "/dashboard/assignments";

// Define the interface for navigation items
export interface NavItem {
  name: string;
  path: DashboardRoute;
}

// Export the navigation items as a constant array, ensuring type safety with the NavItem interface
export const NAV_ITEMS: NavItem[] = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Courses", path: "/dashboard/courses" },
  { name: "Assignments", path: "/dashboard/assignments" },
];
