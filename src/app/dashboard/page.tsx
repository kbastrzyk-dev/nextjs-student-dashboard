import React from "react";
import { CourseList } from "@/features/courses/components/CourseList";

export default function DashboardPage() {
  // Mock data representing the student's metrics.
  const metrics = {
    totalCourses: 4,
    upcomingAssignments: 2,
    attendance: 92,
    gpa: 3.8,
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Welcome Section */}
      <header>
        <h1 className="text-3xl font-bold text-white">
          Welcome back, Student! 👋
        </h1>
        <p className="text-gray-400 mt-2">
          Here is an overview of your academic progress and upcoming tasks.
        </p>
      </header>

      {/* Metrics Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm hover:border-gray-700 transition-colors">
          <h3 className="text-sm font-medium text-gray-400">Total Courses</h3>
          <p className="text-3xl font-bold text-white mt-2">
            {metrics.totalCourses}
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm hover:border-gray-700 transition-colors">
          <h3 className="text-sm font-medium text-gray-400">
            Upcoming Assignments
          </h3>
          <p className="text-3xl font-bold text-white mt-2">
            {metrics.upcomingAssignments}
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm hover:border-gray-700 transition-colors">
          <h3 className="text-sm font-medium text-gray-400">Attendance</h3>
          <p className="text-3xl font-bold text-white mt-2">
            {metrics.attendance}%
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm hover:border-blue-900 transition-colors relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-bl-full blur-xl"></div>
          <h3 className="text-sm font-medium text-gray-400">GPA</h3>
          <p className="text-3xl font-bold text-blue-500 mt-2">{metrics.gpa}</p>
        </div>
      </section>

      {/* Course List Module */}
      <section>
        <CourseList />
      </section>
    </div>
  );
}
