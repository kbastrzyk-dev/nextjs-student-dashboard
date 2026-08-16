import React from "react";

export default function DashboardPage() {
  // Mock data representing the student's metrics.
  // In a real-world scenario, this Server Component would fetch data directly from a database or external API.
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
          Welcome back, Student! 🤓
        </h1>
        <p className="text-gray-400 mt-2">
          Here is an overview of your academic progress and upcoming tasks.
        </p>
      </header>

      {/* Metrics Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Courses Card */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm hover:border-gray-700 transition-colors">
          <h3 className="text-sm font-medium text-gray-400">Total Courses</h3>
          <p className="text-3xl font-bold text-white mt-2">
            {metrics.totalCourses}
          </p>
        </div>

        {/* Upcoming Assignments Card */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm hover:border-gray-700 transition-colors">
          <h3 className="text-sm font-medium text-gray-400">
            Upcoming Assignments
          </h3>
          <p className="text-3xl font-bold text-white mt-2">
            {metrics.upcomingAssignments}
          </p>
        </div>

        {/* Attendance Card */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm hover:border-gray-700 transition-colors">
          <h3 className="text-sm font-medium text-gray-400">Attendance</h3>
          <p className="text-3xl font-bold text-white mt-2">
            {metrics.attendance}%
          </p>
        </div>

        {/* GPA Card */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm hover:border-blue-900 transition-colors relative overflow-hidden">
          {/* Subtle accent gradient for the GPA card to make it stand out */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-bl-full blur-xl"></div>
          <h3 className="text-sm font-medium text-gray-400">GPA</h3>
          <p className="text-3xl font-bold text-blue-500 mt-2">{metrics.gpa}</p>
        </div>
      </section>

      {/* Placeholder for the Course List (next step) */}
      <section className="bg-gray-900 border border-gray-800 rounded-xl p-8 min-h-[300px] flex items-center justify-center">
        <p className="text-gray-500 font-medium">
          Course list module will be injected here...
        </p>
      </section>
    </div>
  );
}
