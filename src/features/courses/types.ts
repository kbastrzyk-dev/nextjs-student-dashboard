// Define strict literal types for the status to leverage TypeScript's type checking and enable easy mapping to specific UI colors later.
export type CourseStatus = "In Progress" | "Completed" | "Not Started";

export interface Course {
  id: string;
  title: string;
  lecturer: string;
  progress: number; // Value between 0 and 100
  status: CourseStatus;
}
