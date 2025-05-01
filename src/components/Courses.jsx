import React, { useState } from 'react';
import btimg from '../assets/courses/Btech.jpg';
import mimg from '../assets/courses/MBA.jpg';
import pimg from '../assets/courses/PHD.jpg';
import msimg from '../assets/courses/MSc.jpg';
import mtimg from '../assets/courses/MTech.jpg';

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      name: "B. Tech",
      img: btimg,
      description: "Study programming, algorithms, and software development",
      duration: "4 years",
      more_des: "Be an innovator in this ever growing technological world. The courses offered in this program will prepare you for the future. Every field in this program demands proper knowledge in the field of Mathematics, Logical Reasoning.",
      branches: ["Computer Science", "Information Technology", "Computer Science and Business", "Computer Science and Artificial Intelligence"]
    },
    {
      id: 2,
      name: "MBA",
      img: mimg,
      description: "Learn management, marketing, and business strategy",
      duration: "2 years",
      more_des: "A Master of Business Administration (MBA) is a graduate degree that focuses on business management and leadership skills. It can help you advance your career, start a business, or move into a new industry.",
      branches: ["Digital Business"]
    },
    {
      id: 3,
      name: "PhD",
      img: pimg,
      description: "Conduct advanced research, explore new knowledge, and specialize in a specific field",
      duration: "3-5 years",
      more_des: "A PhD course, or Doctor of Philosophy course, is a research-oriented program that involves coursework, exams, and a dissertation. It's a terminal degree, meaning it's the highest level of degree that can be earned in a field.",
      branches: ["PhD"]
    },
    {
      id: 4,
      name: "MSc",
      img: msimg,
      description: "Focus on scientific, technical, or analytical subjects to gain advanced knowledge",
      duration: "2 years",
      more_des: "A Master of Science (MSc) is a postgraduate degree that emphasizes theoretical and practical knowledge in science, technology, engineering, mathematics, or related fields. It can help deepen subject expertise, open doors to research opportunities, or prepare for PhD-level studies or specialized industry roles.",
      branches: ["Artificial Intelligence and Machine Learning", "Economics and Management", "Data Science"]
    },
    {
      id: 5,
      name: "M. Tech",
      img: mtimg,
      description: "Specialize in engineering and advanced technical skills",
      duration: "2 years",
      more_des: "A Master of Technology (MTech) is a postgraduate engineering degree focused on deepening knowledge in specific technical areas like computer science, electronics, mechanical, or civil engineering. It prepares students for careers in R&D, academia, or high-level technical roles in the industry.",
      branches: ["Computer Science"]
    }
  ];

  return (
    <div className="px-4 py-10">
      <div className={`flex transition-all duration-500 ease-in-out ${selectedCourse ? 'gap-6' : ''}`}>

        <div className={`flex-1 transition-all duration-500 ease-in-out ${selectedCourse ? 'w-3/4' : 'w-full'}`}>
          <h1 className="text-4xl font-bold mb-8">Our Courses</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(course => (
              <div
                key={course.id}
                onClick={() => setSelectedCourse(course)}
                className="relative bg-white rounded-lg shadow-lg overflow-hidden group hover:cursor-pointer transition-transform duration-300 ease-in-out"
              >
                <img src={course.img} alt={course.name} className="w-full h-48 object-cover" />
                <div className="p-4 z-10 relative">
                  <h2 className="text-2xl font-bold mb-2">{course.name}</h2>
                  <p className="mb-2">{course.description}</p>
                  <p className="text-blue-600">Duration: {course.duration}</p>
                </div>
                <div className="absolute inset-0 bg-blue-900 bg-opacity-70 text-white opacity-0 group-hover:opacity-95 transition-opacity duration-200 flex items-center justify-center p-10 z-10">
                  <p className="text-sm md:text-base lg:text-lg text-center">{course.more_des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
        className={`fixed top-0 right-0 w-full sm:w-[22rem] h-screen bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          selectedCourse ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 pt-8 h-full overflow-y-auto">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-semibold text-black">
              {selectedCourse?.name}
            </h2>
            <button
              onClick={() => setSelectedCourse(null)}
              className="text-black hover:text-blue-900 text-3xl font-bold leading-none"
              aria-label="Close"
            >
              &raquo;
            </button>
          </div>
          <p className="text-gray-600 text-sm mb-4">{selectedCourse?.more_des}</p>
          <h3 className="text-lg font-medium text-gray-700 mb-2">Available Branches:</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {selectedCourse?.branches.map((branch, index) => (
              <li key={index}>{branch}</li>
            ))}
          </ul>
        </div>
      </div>


      </div>
    </div>
  );
}

export default Courses;
