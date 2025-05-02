import React from 'react';
import bimg from '../assets/courses/Btech.jpg';
import mimg from '../assets/courses/MBA.jpg';
import pimg from '../assets/courses/PHD.jpg';

function Courses() {
  const courses = [
    {
      id: 1,
      name: "B. Tech",
      img: bimg,
      description: "Study programming, algorithms, and software development",
      duration: "4 years",
      more_des: "Be an innovator in this ever-growing technological world. The courses offered in this program will prepare you for the future. Every field in this program demands proper knowledge in Mathematics and Logical Reasoning."
    },
    {
      id: 2,
      name: "MBA",
      img: mimg,
      description: "Learn management, marketing, and business strategy",
      duration: "2 years",
      more_des: "An MBA focuses on business management and leadership skills. It helps advance careers, start businesses, or switch industries."
    },
    {
      id: 3,
      name: "PhD",
      img: pimg,
      description: "Conduct advanced research and specialize in a specific field",
      duration: "3-5 years",
      more_des: "A PhD is a research-oriented terminal degree involving coursework, exams, and a dissertation. It's the highest level of academic achievement in a field."
    }
  ];

  return (
    <div className="bg-gray-800 min-h-screen py-16 px-4 text-white">
      <h1 className="text-4xl font-bold mb-10 text-center">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(course => (
          <div
            key={course.id}
            className="bg-gray-900 text-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 relative group"
          >
            <h2 className="text-2xl font-semibold mb-3">{course.name}</h2>
            <img
              src={course.img}
              alt={course.name}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <p className="mb-2 text-gray-300">{course.description}</p>
            <p className="text-blue-400 font-medium mb-2">Duration: {course.duration}</p>
            <p className="text-sm text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {course.more_des}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
