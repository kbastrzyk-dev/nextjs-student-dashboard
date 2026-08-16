import React from "react";
import { Assignment, AssignmentStatus, AssignmentPriority } from "../types";

const MOCK_ASSIGNMENTS: Assignment[] = [
  {
    id: "1",
    title: "Final ML Project",
    dueDate: "2026-08-25",
    status: "Pending",
    priority: "High",
  },
  {
    id: "2",
    title: "React Performance Audit",
    dueDate: "2026-08-30",
    status: "Pending",
    priority: "Medium",
  },
];

const getPriorityColor = (priority: AssignmentPriority) => {
  switch (priority) {
    case "High":
      return "text-red-500";
    case "Medium":
      return "text-yellow-500";
    case "Low":
      return "text-green-500";
  }
};

export const AssignmentList = () => {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <h2 className="text-lg font-bold text-white mb-4">
        Upcoming Assignments
      </h2>
      <div className="space-y-4">
        {MOCK_ASSIGNMENTS.map((a) => (
          <div
            key={a.id}
            className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg"
          >
            <div>
              <h3 className="text-white font-medium">{a.title}</h3>
              <p className="text-sm text-gray-400">Due: {a.dueDate}</p>
            </div>
            <div className="flex gap-4 text-sm">
              <span className={`font-semibold ${getPriorityColor(a.priority)}`}>
                {a.priority}
              </span>
              <span className="text-gray-300">{a.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
