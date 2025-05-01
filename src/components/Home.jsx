import React, { useEffect, useRef, useState } from "react";
import Image1 from "../assets/Home/a.jpeg";
import Image2 from "../assets/Home/b.jpeg";
import Image3 from "../assets/Home/c.jpeg";
import { FaUserGraduate, FaMicroscope, FaUniversity, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [Image1, Image2, Image3];

function Home() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = images.length;
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, totalSlides]);


  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* Header Section */}
      <section className="bg-blue-800 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our University</h1>
        <p className="text-xl mb-8">Shaping Tomorrow's Leaders Today</p>
        <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-shadow shadow-lg">
          Learn More
        </button>
      </section>

      {/* Image Slider */}
      <section className="relative max-w-5xl mx-auto mt-10 overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          ref={sliderRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full flex-shrink-0 h-[400px] object-cover"
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          onClick={handlePrev}
        >
          <FaArrowLeft />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          onClick={handleNext}
        >
          <FaArrowRight />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <img
              src="https://thaka.bing.com/th/id/OIP.E9xPSCvmSIsC-EzOVzmGJgHaEK?w=307&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Academic"
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Academic Excellence</h3>
            <p>Discover our world-class programs and exceptional faculty.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <img
              src="https://th.bing.com/th/id/OIP.wNWq_W968jEatVumfb-xsAHaEc?w=300&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Research"
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Research Opportunities</h3>
            <p>Engage in groundbreaking research across various disciplines.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <img
              src="https://th.bing.com/th/id/OIP.rbjqtXVCD6Sl1MOdf0geSwHaE8?w=300&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Student Life"
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Student Life</h3>
            <p>Experience a vibrant campus with clubs, events, and diversity.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our University?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="flex flex-col items-center">
              <FaUniversity className="text-4xl text-blue-600 mb-4" />
              <h4 className="text-lg font-semibold">Global Recognition</h4>
              <p>Ranked among the top institutions worldwide.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaMicroscope className="text-4xl text-blue-600 mb-4" />
              <h4 className="text-lg font-semibold">Innovative Research</h4>
              <p>Access to cutting-edge labs and grants.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaUserGraduate className="text-4xl text-blue-600 mb-4" />
              <h4 className="text-lg font-semibold">Career Opportunities</h4>
              <p>95% placement rate post-graduation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
