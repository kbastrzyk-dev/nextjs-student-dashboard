"use client";

import React, { useEffect, useState } from "react";
import { Course, CourseStatus } from "../types";

// Helper function to determine badge colors based on strict TS types
const getStatusColor = (status: CourseStatus) => {
  switch (status) {
    case "Completed":
      return "bg-green-500/10 text-green-500 border-green-500/20";
    case "In Progress":
      return "bg-blue-500/10 text-blue-500 border-blue-500/20";
    case "Not Started":
      return "bg-gray-500/10 text-gray-400 border-gray-500/20";
  }
};

export const CourseList = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch courses from our internal Next.js API route on component mount
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("/api/courses");

        if (!response.ok) {
          throw new Error("Failed to fetch courses from the API.");
        }

        const data: Course[] = await response.json();
        setCourses(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred.",
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Render loading state
  if (isLoading) {
    return (
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center text-gray-400">
        Loading courses from API...
      </div>
    );
  }

  // Render error state if request failed
  if (error) {
    return (
      <div className="bg-gray-900 border border-red-800/50 rounded-xl p-8 text-center text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-sm">
      <div className="px-6 py-5 border-b border-gray-800">
        <h2 className="text-lg font-bold text-white">My Courses</h2>
      </div>

      <div className="divide-y divide-gray-800">
        {courses.map((course) => (
          <div
            key={course.id}
            className="p-6 hover:bg-gray-800/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            {/* Title & Lecturer */}
            <div className="flex-1">
              <h3 className="text-white font-medium">{course.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{course.lecturer}</p>
            </div>

            {/* Progress Bar */}
            <div className="flex-1 w-full max-w-xs">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>
              <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${course.progress}%` }}
                  role="progressbar"
                  aria-valuenow={course.progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>

            {/* Status Badge */}
            <div className="sm:w-32 flex justify-end">
              <span
                className={`px-3 py-1 text-xs font-medium border rounded-full ${getStatusColor(course.status)}`}
              >
                {course.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
