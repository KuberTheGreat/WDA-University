import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">IIIT LUCKNOW</Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop navigation */}
          <div className="hidden lg:flex space-x-6">
            <Link to="/" className="hover:text-blue-300">Home</Link>
            <Link to="/courses" className="hover:text-blue-300">Courses</Link>
            <Link to="/contact" className="hover:text-blue-300">Contact</Link>
            <Link to="/about" className="hover:text-blue-300">My Profile</Link>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4 pt-4">
            <Link 
              to="/" 
              className="hover:text-blue-300 py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="hover:text-blue-300 py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/courses" 
              className="hover:text-blue-300 py-2"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-blue-300 py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;