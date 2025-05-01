"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Edit, Save, Upload } from "lucide-react"

export default function ProfessorProfile({ professorData, onProfileUpdate }) {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(professorData)
  const fileInputRef = useRef(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    onProfileUpdate(formData)
    setIsEditing(false)
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setFormData((prev) => ({ ...prev, profileImage: e.target.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current.click()
  }

  return (
    <div className="flex flex-col md:flex-row items-start gap-8">
      <div className="relative">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-200">
          <Image
            src={formData.profileImage || "/placeholder.svg"}
            alt="Professor"
            width={150}
            height={150}
            className="object-cover w-full h-full"
          />
        </div>

        {isEditing && (
          <>
            <button
              onClick={triggerFileInput}
              className="absolute bottom-0 right-0 bg-black text-white p-2 rounded-full"
            >
              <Upload size={16} />
            </button>
            <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
          </>
        )}
      </div>

      <div className="flex-1 space-y-4">
        {isEditing ? (
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <Input name="name" value={formData.name} onChange={handleInputChange} className="mt-1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <Input name="phone" value={formData.phone} onChange={handleInputChange} className="mt-1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <Input name="email" value={formData.email} onChange={handleInputChange} className="mt-1" />
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-lg font-semibold">{formData.name}</p>
            <p className="text-gray-600">{formData.phone}</p>
            <p className="text-gray-600">{formData.email}</p>
          </div>
        )}

        <Button
          onClick={isEditing ? handleSave : () => setIsEditing(true)}
          className="mt-4 bg-black text-white hover:bg-gray-800"
        >
          {isEditing ? (
            <>
              <Save className="mr-2 h-4 w-4" /> Save
            </>
          ) : (
            <>
              <Edit className="mr-2 h-4 w-4" /> Edit
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
