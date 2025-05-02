import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto py-16 px-4">
      
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white shadow-lg p-8 rounded-lg">
       
        <div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Get in Touch</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>🏛 Address:</strong><br />
              IIT Lucknow <br />
              Chak Ganjaria, C. G. City <br />
              Lucknow – 226002
            </p>
            <p>
              <strong>📞 Phone:</strong><br />
              (123) 456-7890
            </p>
            <p>
              <strong>📧 Email:</strong><br />
              <a href="mailto:contact@iiitl.ac.in" className="text-blue-700 underline">
                contact@iiitl.ac.in
              </a>
            </p>
            <p>
              <strong>⏰ Office Hours:</strong><br />
              Monday - Friday: 9:00 AM - 5:00 PM <br />
              Saturday - Sunday: Closed
            </p>
          </div>

          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Follow Us:</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-700">
                <img src="https://tse1.mm.bing.net/th?id=OIP.hPP5fcaQfnfnAansASk3TgHaHa&pid=Api&P=0&h=180" alt="Facebook" className="w-8" />
              </a>
              <a href="#" className="hover:text-blue-700">
                <img src="https://up.yimg.com/ib/th?id=OIP.OiRP0Wt_nlImTXz5w45aRQHaHa&pid=Api&rs=1&c=1&qlt=95&w=121&h=121" alt="X" className="w-8" />
              </a>
              <a href="#" className="hover:text-blue-700">
                <img src="https://tse3.mm.bing.net/th?id=OIP.Go2CQNhF_49tkKcpEl_sHQHaHZ&pid=Api&P=0&h=180" alt="Instagram" className="w-8" />
              </a>
              <a href="#" className="hover:text-blue-700">
                <img src="https://tse2.mm.bing.net/th?id=OIP.VJhVCn_KEP55vMgXH9jepwHaHY&pid=Api&P=0&h=180" alt="LinkedIn" className="w-8" />
              </a>
            </div>
          </div>
        </div>

        
        <div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Our Location</h2>
          <iframe
            className="w-full h-60 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.3060636314813!2d81.02148777414472!3d26.798381564996937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be37eb0826741%3A0x34d9dd79cdeac7d8!2sIndian%20Institute%20of%20Information%20Technology%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1737994015921!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
    
  );
}

export default Contact;