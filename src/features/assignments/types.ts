export type AssignmentStatus = "Pending" | "Completed" | "Overdue";
export type AssignmentPriority = "Low" | "Medium" | "High";

export interface Assignment {
  id: string;
  title: string;
  dueDate: string;
  status: AssignmentStatus;
  priority: AssignmentPriority;
}
