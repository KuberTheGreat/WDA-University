import React from 'react';

function Home() {
  return (
    <div className="min-h-screen ">
      <div className="bg-blue-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our University</h1>
          <p className="text-xl mb-8">Shaping Tomorrow's Leaders Today</p>
          <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100">
            Learn More
          </button>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 ">Academic Excellence</h3>
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