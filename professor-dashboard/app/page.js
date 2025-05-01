"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import ProfessorProfile from "@/components/professor-profile"
import BatchesTaught from "@/components/batches-taught"
import UpcomingQuizzes from "@/components/upcoming-quizzes"
import UpcomingClasses from "@/components/upcoming-classes"

export default function Dashboard() {
  const router = useRouter()

  // Sample data for the dashboard
  const [professorData, setProfessorData] = useState({
    name: "Dr. Jane Smith",
    phone: "+1 (555) 123-4567",
    email: "jane.smith@university.edu",
    profileImage: "/placeholder.svg?height=150&width=150",
  })

  const batches = [
    { id: 1, name: "Batch-1", students: 28 },
    { id: 2, name: "Batch-2", students: 32 },
    { id: 3, name: "Batch-3", students: 25 },
  ]

  const quizzes = [
    { id: 1, name: "Midterm Quiz", date: "2025-05-15", time: "10:00 AM", status: "Pending", syllabus: "Chapters 1-5" },
    {
      id: 2,
      name: "Final Assessment",
      date: "2025-06-20",
      time: "2:00 PM",
      status: "Pending",
      syllabus: "Chapters 6-10",
    },
    { id: 3, name: "Pop Quiz", date: "2025-05-05", time: "9:00 AM", status: "Taken", syllabus: "Chapter 3" },
  ]

  const classes = [
    { id: 1, date: "2025-05-02", time: "11:00 AM", batch: "Batch-1" },
    { id: 2, date: "2025-05-03", time: "1:00 PM", batch: "Batch-2" },
    { id: 3, date: "2025-05-04", time: "9:00 AM", batch: "Batch-3" },
  ]

  const handleProfileUpdate = (updatedProfile) => {
    setProfessorData(updatedProfile)
  }

  const handleBatchClick = (batchId) => {
    router.push(`/batch/${batchId}`)
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">Professor Dashboard</h1>
      </header>

      <main className="container mx-auto p-4 space-y-8">
        {/* Section 1: Professor Profile */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Professor Profile</h2>
          <ProfessorProfile professorData={professorData} onProfileUpdate={handleProfileUpdate} />
        </section>

        {/* Section 2: Batches Taught */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Batches Taught</h2>
          <BatchesTaught batches={batches} onBatchClick={handleBatchClick} />
        </section>

        {/* Section 3: Upcoming Quizzes/Tests */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Upcoming Quizzes/Tests</h2>
          <UpcomingQuizzes quizzes={quizzes} />
        </section>

        {/* Section 4: Upcoming Classes */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Upcoming Classes</h2>
          <UpcomingClasses classes={classes} />
        </section>
      </main>
    </div>
  )
}
