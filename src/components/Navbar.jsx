import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { div } from "framer-motion/client";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-blue-300">
      <div className="bg-white text-black py-8">
        <div className="container text-center">
          <h1 className="text-3xl font-bold">
            Indian Institute of Information Technology, Lucknow
          </h1>
          <p className="text-xl text-gray-600">
            भारतीय सूचना प्रौद्योगिकी संस्थान, लखनऊ
          </p>
          <p className="text-sm italic mt-1">
            (An Institute of National Importance by the Act of Parliament)
          </p>
        </div>
      </div>
      <nav className=" text-white px-4 py-3 w-full">
        <div className="flex justify-center space-x-20 text-md font-medium">
          {/* Home */}
          <div className="relative group">
            <Link to={"/"} className="hover:text-gray-300">
              Home
            </Link>
            <div className="absolute left-0 mt-2 w-60 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
              {/* <ul className="py-2">
          <li className="px-4 py-2 hover:bg-gray-100"><a href="#">Overview</a></li>
        </ul> */}
            </div>
          </div>

          <div className="relative group">
            <a href="#" className="hover:text-gray-300">
              Admissions
            </a>
            <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
              <ul className="py-2">
                <Link
                  to={"/admissions"}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  Undergraduate
                </Link>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">Postgraduate</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">PhD</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Academics */}
          <div className="relative group">
            <Link href="#" className="hover:text-gray-300">
              Academics
            </Link>
            <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">Subitem 1</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Research */}
          <div className="relative group">
            <Link href="#" className="hover:text-gray-300">
              Research
            </Link>
            <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">Subitem 1</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Placements */}
          <div className="relative group">
            <Link href="#" className="hover:text-gray-300">
              Placements
            </Link>
            <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">Subitem 1</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="relative group">
            <Link to={"/contact"} className="hover:text-gray-300">
              Contact Us
            </Link>
            {/* <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">Subitem 1</a>
                </li>
              </ul>
            </div> */}
          </div>

          {/* Login */}
          <div className="relative group">
            <Link to={"/login"} className="hover:text-gray-300">
              Login
            </Link>
          </div>

          

        </div>
      </nav>
      
    </div>
  );
}

export default Navbar;
