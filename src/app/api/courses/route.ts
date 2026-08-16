import { NextResponse } from "next/server";

// Handle GET requests to /api/courses
export async function GET() {
  // Mock database records representing student's enrolled courses
  const courses = [
    {
      id: "1",
      title: "Machine Learning Fundamentals",
      lecturer: "Dr. Machine Learner",
      progress: 75,
      status: "In Progress",
    },
    {
      id: "2",
      title: "Advanced Frontend Architecture",
      lecturer: "Dr. Krzysztof Bastrzyk🫨",
      progress: 100,
      status: "Completed",
    },
    {
      id: "3",
      title: "Relational Database Systems",
      lecturer: "Dr. SQL Expert",
      progress: 30,
      status: "In Progress",
    },
    {
      id: "4",
      title: "Cloud Computing & Deployment",
      lecturer: "Dr. Cloudy McCloudface",
      progress: 0,
      status: "Not Started",
    },
  ];

  // Return data as a JSON response
  return NextResponse.json(courses);
}
