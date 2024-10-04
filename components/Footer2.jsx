import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-20 pb-12 border-b border-gray-700 px-6 lg:px-12">
        {/* Contact Info */}
        <div className="flex items-start">
          <i className="fa-solid fa-location-dot text-3xl text-[#206e3d] mr-4"></i>
          <div>
            <h3 className="text-[#2b9150] font-bold mb-3">Find us</h3>
            <p>1010 Avenue, SW 54321, Chandigarh</p>
          </div>
        </div>
        <div className="flex items-start">
          <i className="fa-solid fa-phone text-3xl text-[#2b9150] mr-4"></i>
          <div>
            <h3 className="text-[#2b9150] font-bold mb-3">Call us</h3>
            <p>9876543210</p>
          </div>
        </div>
        <div className="flex items-start">
          <i className="fa-solid fa-envelope-open text-3xl text-[#2b9150] mr-4"></i>
          <div>
            <h3 className="text-[#2b9150] font-bold mb-3">Mail us</h3>
            <p>mail@info.com</p>
          </div>
        </div>

        {/* Logo and Social Links */}
        <div className="md:col-span-1">
          <h1 className="text-2xl font-bold mb-3 flex items-center">
            <img src="./save-gaza-logo.png" className="w-8 mr-4" alt="Logo" />
            <span className="text-[#2b9150]">WEB DESIGNER</span>
          </h1>
          <p className="text-gray-400 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex space-x-4 mt-8">
            <a href="#" className="text-3xl text-gray-400 hover:text-blue-600 transition-colors duration-200 ease-in-out">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-3xl text-gray-400 hover:text-red-500 transition-colors duration-200 ease-in-out">
              <i className="fa-brands fa-youtube ml-8"></i>
            </a>
            <a href="#" className="text-3xl text-gray-400 hover:text-blue-400 transition-colors duration-200 ease-in-out">
              <i className="fab fa-twitter ml-8"></i>
            </a>
            <a href="#" className="text-3xl text-gray-400 hover:text-pink-700 transition-colors duration-200 ease-in-out">
              <i className="fa-brands fa-instagram ml-8"></i>
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-[#2b9150] font-bold mb-3">Useful Links</h3>
          <div className="grid grid-cols-2 gap-4">
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Our Services
                </a>
              </li>
            </ul>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Portfolio
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Latest News
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Expert Team
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="text-[#2b9150] font-bold mb-3">Subscribe</h3>
          <p className="text-gray-400 mb-3">
            Don’t miss to subscribe to our new feeds. Kindly fill the form below.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 rounded-l bg-gray-700 text-white focus:outline-none"
            />
            <button className="bg-[#2b9150] p-2 rounded-r hover:bg-[#650108] transition-colors duration-200 ease-in-out">
              <i className="fa fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto text-center py-6 px-6">
        <p className="text-gray-400 mb-4">
          Copyright © 2018. All Rights Reserved <span className="text-[#2b9150]">Anup</span>
        </p>
        <div className="space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            Home
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Terms
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Privacy
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
