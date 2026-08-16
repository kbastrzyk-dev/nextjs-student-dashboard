import React from "react";
import { AssignmentList } from "@/features/assignments/components/AssignmentList";

export default function AssignmentsPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Page Header */}
      <header>
        <h1 className="text-3xl font-bold text-white">Assignments Overview</h1>
        <p className="text-gray-400 mt-2">
          Review upcoming deadlines, track priorities, and manage your
          submissions.
        </p>
      </header>

      {/* Assignments List Section */}
      <section>
        <AssignmentList />
      </section>
    </div>
  );
}
