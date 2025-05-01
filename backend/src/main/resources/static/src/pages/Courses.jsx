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
      more_des: "Be an innovator in this ever growing technological world. The courses offered in this program will prepare you for the future. Every field in this program demands proper knowledge in the field of Mathematics, Logical Reasoning."
    },
    {
      id: 2,
      name: "MBA",
      img: mimg,
      description: "Learn management, marketing, and business strategy",
      duration: "2 years",
      more_des: "A Master of Business Administration (MBA) is a graduate degree that focuses on business management and leadership skills. It can help you advance your career, start a business, or move into a new industry."
    },
    {
      id: 3,
      name: "PhD",
      img: pimg,
      description: "Conduct advanced research, explore new knowledge, and specialize in a specific field",
      duration: "3-5 years",
      more_des: "A PhD course, or Doctor of Philosophy course, is a research-oriented program that involves coursework, exams, and a dissertation. It's a terminal degree, meaning it's the highest level of degree that can be earned in a field."
    }
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(course => (
          <div key={course.id} className="bg-white p-6 rounded-lg shadow-lg hover:cursor-pointer  group relative transition-all duration-500 ease-in-out max-h-auto hover:h-132 overflow-hidden">
            <h2 className="text-2xl font-bold mb-4">{course.name}</h2>
            <img src={course.img} alt={course.name} className="w-100 h-50 rounded-md"/>
            <p className="mb-4 mt-2">{course.description}</p>
            <p className="text-blue-600">Duration: {course.duration}</p>
            <p className="absolute mt-3 transition-opacity duration-30 ease-out opacity-0 group-hover:opacity-100">{course.more_des}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;