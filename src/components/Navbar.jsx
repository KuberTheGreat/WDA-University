import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">IIIT LUCKNOW</Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-blue-300">Home</Link>
          <Link to="/about" className="hover:text-blue-300">About</Link>
          <Link to="/courses" className="hover:text-blue-300">Courses</Link>
          <Link to="/contact" className="hover:text-blue-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;