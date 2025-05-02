"use client"

import { useEffect, useState } from "react"
import { Calendar, Clock, Users } from "lucide-react"

export default function UpcomingClasses({ classes: initialClasses }) {
  const [classes, setClasses] = useState(initialClasses)


  const isToday = (dateString) => {
    const today = new Date()
    const classDate = new Date(dateString)
    return (
      today.getDate() === classDate.getDate() &&
      today.getMonth() === classDate.getMonth() &&
      today.getFullYear() === classDate.getFullYear()
    )
  }


  useEffect(() => {
    const updateClasses = () => {
      const today = new Date().toISOString().split("T")[0]
      const updatedClasses = initialClasses.map((cls) => ({
        ...cls,
        isToday: isToday(cls.date),
      }))

      setClasses(updatedClasses)
    }

    updateClasses()


    const midnight = new Date()
    midnight.setHours(24, 0, 0, 0)
    const msUntilMidnight = midnight - new Date()

    const timer = setTimeout(() => {
      updateClasses()
 
      setInterval(updateClasses, 24 * 60 * 60 * 1000)
    }, msUntilMidnight)

    return () => clearTimeout(timer)
  }, [initialClasses])

  return (
    <div className="space-y-3">
      {classes.map((cls) => (
        <div
          key={cls.id}
          className={`bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-all
            ${cls.isToday ? "border-blue-500 bg-blue-50" : "border-blue-100 hover:bg-blue-50"}`}
        >
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center text-gray-600">
                <Calendar size={16} className="mr-1" />
                <span className="mr-3">{cls.date}</span>
                <Clock size={16} className="mr-1" />
                <span>{cls.time}</span>
              </div>
              <div className="flex items-center text-gray-600 mt-1">
                <Users size={16} className="mr-1" />
                <span>{cls.batch}</span>
              </div>
            </div>

            {cls.isToday && <div className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">TODAY</div>}
          </div>
        </div>
      ))}
    </div>
  )
}
