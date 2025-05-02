import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p>111T Lucknow</p>
            <p>Chak Ganjaria, C. G. City</p>
            <p>Lucknow — 226002</p>
            <p>Email: <a href="mailto:contact@iiitl.ac.in" className="text-blue-400">contact@iiitl.ac.in</a></p>
            <p>Phone: <a href="tel:+02019111T" className="text-blue-400">0 2019 IIIT Lucknow</a></p>
          </div>

          {/* External Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">External Links</h3>
            <ul>
              <li><a href="https://111tallahabad.ac.in" className="text-blue-400 hover:underline">IIIT Allahabad</a></li>
              <li><a href="https://111tcoordinationforum.com" className="text-blue-400 hover:underline">IIIT Coordination Forum</a></li>
              <li><a href="https://uplc.ac.in" className="text-blue-400 hover:underline">UPLC</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <ul>
              <li><a href="https://iiitl.ac.in/index.php/academic-calendar/" className="text-blue-400 hover:underline">Academic Calendar</a></li>
              <li><a href="/course-structure" className="text-blue-400 hover:underline">Course Structure</a></li>
              <li><a href="/list-of-holidays" className="text-blue-400 hover:underline">List of Holidays</a></li>
              <li><a href="/official-forms" className="text-blue-400 hover:underline">Official Forms & Format</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="/tender" className="text-blue-400 hover:underline">Tender</a></li>
              <li><a href="/fee-structure" className="text-blue-400 hover:underline">Fee Structure</a></li>
              <li><a href="/seat-matrix" className="text-blue-400 hover:underline">Seat Matrix</a></li>
              <li><a href="/rti" className="text-blue-400 hover:underline">RTI</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} 111T Lucknow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
