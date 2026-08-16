import React from "react";
import { CourseList } from "@/features/courses/components/CourseList";

export default function CoursesPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Page Header */}
      <header>
        <h1 className="text-3xl font-bold text-white">Courses Management</h1>
        <p className="text-gray-400 mt-2">
          Track your active enrollments, course progression, and academic
          status.
        </p>
      </header>

      {/* Courses List Section */}
      <section>
        <CourseList />
      </section>
    </div>
  );
}
