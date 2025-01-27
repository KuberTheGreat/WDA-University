import React from 'react';

function Home() {
  return (
    <div className="min-h-screen">
      <div className="bg-linear-to-l from-sky-500 to-indigo-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our University</h1>
          <p className="text-xl mb-8">Shaping Tomorrow's Leaders Today</p>
          <button className="bg-yellow-200 text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-green-300 hover:shadow-2xl shadow-red-400">
            Learn More
          </button>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 [&_div]:hover:shadow-amber-200">
          <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://th.bing.com/th/id/OIP.e2xe5wqTScj3QS4XIofobAHaEo?w=316&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Academics" />
            <h3 className="text-xl font-bold mb-4">Academic Excellence</h3>
            <p>Discover our world-class programs and exceptional faculty.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://th.bing.com/th/id/OIP.wNWq_W968jEatVumfb-xsAHaEc?w=300&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="research"/>
            <h3 className="text-xl font-bold mb-4">Research Opportunities</h3>
            <p>Engage in groundbreaking research across various disciplines.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://th.bing.com/th/id/OIP.rbjqtXVCD6Sl1MOdf0geSwHaE8?w=300&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Student" />
            <h3 className="text-xl font-bold mb-4">Student Life</h3>
            <p>Experience a vibrant campus life with diverse activities.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;