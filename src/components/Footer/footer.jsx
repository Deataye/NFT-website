import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between">
        {/* Left Section: Company Name and Tagline */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl font-bold">MyNFTs</h1>
          <p className="text-sm mt-1">Empowering creators and collectors worldwide</p>
        </div>

        {/* Right Section: 3 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Column 1: Marketplace */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Marketplace</h3>
            <ul>
              <li className="mb-2 hover:text-gray-400"><a href="#">Explore</a></li>
              <li className="mb-2 hover:text-gray-400"><a href="#">How it works</a></li>
              <li className="mb-2 hover:text-gray-400"><a href="#">Jobs</a></li>
              <li className="mb-2 hover:text-gray-400"><a href="#">Help Centre</a></li>
              <li className="mb-2 hover:text-gray-400"><a href="#">Blogs</a></li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul>
              <li className="mb-2 hover:text-gray-400"><a href="#">About Us</a></li>
              <li className="mb-2 hover:text-gray-400"><a href="#">Contact Us</a></li>
              <li className="mb-2 hover:text-gray-400"><a href="#">Features</a></li>
              <li className="mb-2 hover:text-gray-400"><a href="#">Discover</a></li>
            </ul>
          </div>

          {/* Column 3: Get the Latest Updates */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Get the Latest Updates</h3>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 text-gray-900 rounded-md focus:outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                Join Our Community
              </button>
            </form>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-gray-400"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-gray-400"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-gray-400"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
