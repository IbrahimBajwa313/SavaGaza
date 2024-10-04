import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactAndSubscribe = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-20 bg-blue-50 p-8 min-h-screen">
      {/* Contact Section */}
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full">
        <h1 className="text-4xl font-bold text-center mb-6">Contact us</h1>
        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-pink-500 w-7 h-7" />
            <div>
            <p className="text-2xl font-bold">Address</p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=6+Herzen+St,+Kyiv" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline"
            >
              6 Herzen St, Kyiv
            </a>
          </div>
        </div>

          {/* Phone */}
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-yellow-500 w-7 h-7" />
            <div>
              <p className="text-2xl font-bold">Phone</p>
              <p>+92 332 5900041</p>
            </div>
          </div>
          {/* Email */}
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-blue-500 w-7 h-7" />
            <div>
              <p className="text-2xl font-bold">Email</p>
              <a href="mailto:tameer2k23@gmail.com" className="text-blue-500 hover:underline">
                info@saveukraineua.org
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Subscribe Section */}
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full flex flex-col justify-center items-center text-center">
        <h2 className="text-3xl font-bold mb-6">Subscribe to our newsletter</h2>
        <p className="mb-4">Sign up here to receive our bi-weekly newsletter</p>

        {/* Email Input Field */}
        <form className="flex flex-col md:flex-row items-center w-full space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition w-full md:w-auto">
            Subscribe now
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4">By clicking on the button, you agree to the <a href="#" className="underline">privacy policy</a></p>
      </div>
    </div>
  );
};

export default ContactAndSubscribe;
