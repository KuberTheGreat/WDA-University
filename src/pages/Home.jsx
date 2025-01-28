import React, { useEffect, useRef, useState } from "react";
import Image1 from "../assets/Home/a.jpeg";
import Image2 from "../assets/Home/b.jpeg";
import Image3 from "../assets/Home/c.jpeg";


function Home() {

  const sliderRef = useRef(null); 
  const [currentIndex, setCurrentIndex] = useState(0); 
  const totalSlides = 3; 
  const [isHovered, setIsHovered] = useState(false); 

  useEffect(() => {
    if (isHovered) return;

    const showNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const interval = setInterval(showNextSlide, 3000); 
    return () => clearInterval(interval); 
  }, [totalSlides, isHovered]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="min-h-screen">
      <div className="bg-blue-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our University</h1>
          <p className="text-xl mb-8">Shaping Tomorrow's Leaders Today</p>
          <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100">
            Learn More
          </button>
        </div>
      </div>

      <div className="relative w-full max-w-[1200px] max-h-[500px] overflow-hidden rounded-lg mt-8 mx-auto px-4" onMouseEnter={() => setIsHovered(true)} // Stop sliding on hover
        onMouseLeave={() => setIsHovered(false)}>
        <div
          ref={sliderRef}
          className="flex transition-transform duration-1200 ease-in-out"
        >
          <img
            src={Image1}
            alt="Slide 1"
            className="w-full flex-shrink-0 object-fill"
          />
          <img
            src={Image2}
            alt="Slide 2"
            className="w-full flex-shrink-0 object-fill pr-3 pl-3"
          />
          <img
            src={Image3}
            alt="Slide 3"
            className="w-full flex-shrink-0 object-fill"
          />
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Academic Excellence</h3>
            <p>Discover our world-class programs and exceptional faculty.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Research Opportunities</h3>
            <p>Engage in groundbreaking research across various disciplines.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Student Life</h3>
            <p>Experience a vibrant campus life with diverse activities.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;