"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ArrowLeft, User, BookOpen, Clock } from "lucide-react"

export default function BatchDetails({ params }) {
  const router = useRouter()
  const batchId = params.id
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Sample data for the batch
  const batchData = {
    id: batchId,
    name: `Batch-${batchId}`,
    students: [
      {
        id: 1,
        name: "Alex Johnson",
        rollNumber: "B001",
        cgpa: 3.8,
        marks: [
          { test: "Quiz 1", score: 85 },
          { test: "Midterm", score: 78 },
          { test: "Assignment", score: 92 },
        ],
        attendance: 92,
      },
      {
        id: 2,
        name: "Maria Garcia",
        rollNumber: "B002",
        cgpa: 3.9,
        marks: [
          { test: "Quiz 1", score: 90 },
          { test: "Midterm", score: 88 },
          { test: "Assignment", score: 95 },
        ],
        attendance: 96,
      },
      {
        id: 3,
        name: "James Wilson",
        rollNumber: "B003",
        cgpa: 3.5,
        marks: [
          { test: "Quiz 1", score: 75 },
          { test: "Midterm", score: 82 },
          { test: "Assignment", score: 88 },
        ],
        attendance: 88,
      },
      {
        id: 4,
        name: "Sarah Chen",
        rollNumber: "B004",
        cgpa: 4.0,
        marks: [
          { test: "Quiz 1", score: 98 },
          { test: "Midterm", score: 95 },
          { test: "Assignment", score: 100 },
        ],
        attendance: 100,
      },
      {
        id: 5,
        name: "Michael Brown",
        rollNumber: "B005",
        cgpa: 3.2,
        marks: [
          { test: "Quiz 1", score: 72 },
          { test: "Midterm", score: 68 },
          { test: "Assignment", score: 80 },
        ],
        attendance: 84,
      },
    ],
  }

  const handleStudentClick = (student) => {
    setSelectedStudent(student)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push("/")}
            className="mr-4 text-white hover:bg-blue-700"
          >
            <ArrowLeft />
          </Button>
          <h1 className="text-2xl font-bold">{batchData.name} Details</h1>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-6">Student List</h2>

          <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-2">
            {batchData.students.map((student) => (
              <div
                key={student.id}
                onClick={() => handleStudentClick(student)}
                className="bg-white border border-blue-100 rounded-lg p-4 shadow-sm hover:shadow-md hover:bg-blue-50 transition-all cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <User className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{student.name}</h3>
                      <p className="text-gray-600 text-sm">Roll: {student.rollNumber}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-blue-600">CGPA: {student.cgpa}</div>
                    <div className="text-sm text-gray-600">Attendance: {student.attendance}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Student Details Modal */}
      {selectedStudent && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-[500px] bg-white/95 backdrop-blur-sm">
            <DialogHeader>
              <DialogTitle className="text-xl text-blue-600">Student Details</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <User className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{selectedStudent.name}</h3>
                  <p className="text-gray-600">Roll Number: {selectedStudent.rollNumber}</p>
                  <p className="text-gray-600">CGPA: {selectedStudent.cgpa}</p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-blue-600 flex items-center mb-2">
                  <BookOpen size={18} className="mr-2" /> Test Scores
                </h4>
                <div className="bg-white rounded-lg border border-blue-100 p-3">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-blue-100">
                        <th className="text-left pb-2">Test</th>
                        <th className="text-right pb-2">Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedStudent.marks.map((mark, index) => (
                        <tr key={index} className="border-b border-blue-50 last:border-0">
                          <td className="py-2">{mark.test}</td>
                          <td className="text-right py-2">{mark.score}/100</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-blue-600 flex items-center mb-2">
                  <Clock size={18} className="mr-2" /> Attendance
                </h4>
                <div className="bg-white rounded-lg border border-blue-100 p-3">
                  <div className="flex items-center">
                    <div className="flex-1 bg-gray-200 rounded-full h-4">
                      <div
                        className="bg-blue-600 h-4 rounded-full"
                        style={{ width: `${selectedStudent.attendance}%` }}
                      ></div>
                    </div>
                    <span className="ml-3 font-medium">{selectedStudent.attendance}%</span>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
