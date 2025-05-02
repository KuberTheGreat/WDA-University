import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Login from './components/Login';
import AuthPage from './components/AuthPage';
import Footer from './components/Footer'; // Import Footer
import Admissions from './components/Admissions';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<AuthPage />} />
        </Routes>
        <Footer /> {/* Include Footer here */}
      </div>
    </Router>
  );
}

export default App;
