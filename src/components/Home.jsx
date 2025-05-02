import { Fullscreen } from "lucide-react";
import Navbar from "./Navbar";
import React, { useEffect, useRef, useState } from "react";
import modi from "../assets/Home/first.png";
import btech from "../assets/Home/Btech.webp";
import director_group from "../assets/Home/director-group.jpg";
import mtech from "../assets/Home/Mtech.webp";
import students from "../assets/Home/Students.webp";
import clg from "../assets/Home/IIIT.webp";
const images = [
  modi,
  director_group,
  btech,
  mtech,
  students,
  clg

];

function Home() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = images.length;
  const [isHovered, setIsHovered] = useState(false);

  // Auto slide
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, totalSlides]);

  // Manual slider movement
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      {/* Hero Section */}
      

      {/* Navbar Placeholder */}
       {/* <Navbar /> */}


      {/* Image Slider */}
      <div
        className="relative max-w-[1400px] overflow-hidden rounded-lg mt-8 mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={sliderRef}
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ width: Fullscreen }}
        >
          {images.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Slide ${index + 1}`}
              className="w-full max-h-[500px] object-contain flex-shrink-0"
              // loading="lazy"
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        {/* <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 hover:bg-opacity-80 text-white p-2 rounded-full z-10"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 hover:bg-opacity-80 text-white p-2 rounded-full z-10"
        >
          ▶
        </button> */}

        {/* Director's Message Section */}
        <div
          className="relative mt-12 bg-cover bg-center bg-no-repeat py-16 px-8"
          style={{
            backgroundImage: `url('https://iiitl.ac.in/wp-content/uploads/2022/04/Institute-Pic-f.jpg')`,
          }}
        >
          <div className="bg-gray-600 bg-opacity-60 p-8 rounded-lg max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 text-white">
            {/* Left: Director Image */}
            <div className="flex-shrink-0 w-full md:w-1/3">
              <img
                src="https://iiitl.ac.in/wp-content/uploads/2019/09/dr-arun-sherry-dp.jpg.webp" // Replace with actual image of Director
                alt="Director"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Right: Message Text */}
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Director's Message
              </h2>
              <p className="text-md md:text-lg leading-relaxed">
                Welcome to the Indian Institute of Information Technology,
                Lucknow, an institute of national importance. IIITs have a
                tradition of producing best-in-class human resources in IT and
                connecting multi-dimensional aspects of IT such as
                manufacturing, design, and management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
