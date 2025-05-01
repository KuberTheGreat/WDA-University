"use client"

import { Users } from "lucide-react"

export default function BatchesTaught({ batches, onBatchClick }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {batches.map((batch) => (
        <div
          key={batch.id}
          onClick={() => onBatchClick(batch.id)}
          className="bg-white border border-blue-100 rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-blue-600">{batch.name}</h3>
            <div className="flex items-center text-gray-600">
              <Users size={18} className="mr-1" />
              <span>{batch.students}</span>
            </div>
          </div>
          <p className="text-gray-500 mt-2">Click to view student details</p>
        </div>
      ))}
    </div>
  )
}
