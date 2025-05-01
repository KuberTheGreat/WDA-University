import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">IIIT LUCKNOW</Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-300">Home</Link>
          <Link to="/about" className="hover:text-blue-300">About</Link>
          <Link to="/courses" className="hover:text-blue-300">Courses</Link>
          <Link to="/contact" className="hover:text-blue-300">Contact</Link>
          <Link to="/login" className="hover:text-blue-300">Login</Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-blue-800 mt-2 px-4 py-2 space-y-2 flex flex-col">
          <Link to="/" className="hover:text-blue-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-blue-300" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/courses" className="hover:text-blue-300" onClick={() => setIsOpen(false)}>Courses</Link>
          <Link to="/contact" className="hover:text-blue-300" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/login" className="hover:text-blue-300" onClick={() => setIsOpen(false)}>Login</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
