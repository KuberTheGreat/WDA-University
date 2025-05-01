"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Trash2, Plus } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export default function UpcomingQuizzes({ quizzes: initialQuizzes }) {
  const [quizzes, setQuizzes] = useState(initialQuizzes)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)
  const [selectedQuiz, setSelectedQuiz] = useState(null)
  const [newQuiz, setNewQuiz] = useState({
    name: "",
    date: "",
    time: "",
    syllabus: "",
    status: "Pending",
  })

  const handleDeleteQuiz = (id) => {
    setQuizzes(quizzes.filter((quiz) => quiz.id !== id))
  }

  const handleAddQuiz = () => {
    const quizToAdd = {
      ...newQuiz,
      id: quizzes.length + 1,
    }
    setQuizzes([...quizzes, quizToAdd])
    setNewQuiz({
      name: "",
      date: "",
      time: "",
      syllabus: "",
      status: "Pending",
    })
    setIsAddModalOpen(false)
  }

  const handleViewQuiz = (quiz) => {
    setSelectedQuiz(quiz)
    setIsViewModalOpen(true)
  }

  const handleStatusChange = () => {
    const updatedQuizzes = quizzes.map((quiz) =>
      quiz.id === selectedQuiz.id ? { ...quiz, status: quiz.status === "Pending" ? "Taken" : "Pending" } : quiz,
    )
    setQuizzes(updatedQuizzes)
    setSelectedQuiz({ ...selectedQuiz, status: selectedQuiz.status === "Pending" ? "Taken" : "Pending" })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewQuiz((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button onClick={() => setIsAddModalOpen(true)} className="bg-black text-white hover:bg-gray-800">
          <Plus className="mr-2 h-4 w-4" /> Add Quiz
        </Button>
      </div>

      <div className="space-y-3">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            onClick={() => handleViewQuiz(quiz)}
            className="bg-white border border-blue-100 rounded-lg p-4 shadow-sm hover:shadow-md hover:bg-blue-50 transition-all cursor-pointer flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{quiz.name}</h3>
              <div className="flex items-center text-gray-600 mt-1">
                <Calendar size={16} className="mr-1" />
                <span className="mr-3">{quiz.date}</span>
                <Clock size={16} className="mr-1" />
                <span>{quiz.time}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge className={quiz.status === "Pending" ? "bg-yellow-500" : "bg-green-500"}>{quiz.status}</Badge>
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation()
                  handleDeleteQuiz(quiz.id)
                }}
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 size={18} />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Quiz Modal */}
      <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Quiz</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Quiz Name
              </label>
              <Input id="name" name="name" value={newQuiz.name} onChange={handleInputChange} />
            </div>
            <div className="grid gap-2">
              <label htmlFor="date" className="text-sm font-medium">
                Date
              </label>
              <Input id="date" name="date" type="date" value={newQuiz.date} onChange={handleInputChange} />
            </div>
            <div className="grid gap-2">
              <label htmlFor="time" className="text-sm font-medium">
                Time
              </label>
              <Input id="time" name="time" type="time" value={newQuiz.time} onChange={handleInputChange} />
            </div>
            <div className="grid gap-2">
              <label htmlFor="syllabus" className="text-sm font-medium">
                Syllabus
              </label>
              <Textarea id="syllabus" name="syllabus" value={newQuiz.syllabus} onChange={handleInputChange} />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setIsAddModalOpen(false)} variant="outline">
              Cancel
            </Button>
            <Button onClick={handleAddQuiz} className="bg-black text-white hover:bg-gray-800">
              Add Quiz
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View Quiz Modal */}
      {selectedQuiz && (
        <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{selectedQuiz.name}</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <div className="flex items-center mb-3">
                <Calendar size={18} className="mr-2 text-blue-600" />
                <span>{selectedQuiz.date}</span>
              </div>
              <div className="flex items-center mb-3">
                <Clock size={18} className="mr-2 text-blue-600" />
                <span>{selectedQuiz.time}</span>
              </div>
              <div className="mb-3">
                <h4 className="font-medium mb-1">Syllabus:</h4>
                <p className="text-gray-700">{selectedQuiz.syllabus}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="font-medium">Status:</span>
                <Badge className={selectedQuiz.status === "Pending" ? "bg-yellow-500" : "bg-green-500"}>
                  {selectedQuiz.status}
                </Badge>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleStatusChange} className="bg-black text-white hover:bg-gray-800">
                Mark as {selectedQuiz.status === "Pending" ? "Taken" : "Pending"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
