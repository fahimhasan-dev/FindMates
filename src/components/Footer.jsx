import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin, IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#111827] text-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="flex items-center space-x-3 mb-4"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.ibb.co/q3NJtxch/200ef352347115-590d3a6c4f601.png"
                alt="Logo"
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 rancho-regular">
                FindMates
              </span>
            </a>
            <p className="text-sm leading-6">
              Find the perfect roommate easily and safely with FindMates.
            </p>
          </div>

          {/* Navigation - Section */}
          <div>
            <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
              Section
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Features</a></li>
              <li><a href="#">Upcoming Event</a></li>
              <li><a href="#">Previous Event</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          {/* Navigation - Company */}
          <div>
            <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Privacy & Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
              Follow Us
            </h4>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100068304346965"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1877F2] hover:scale-110 transition"
              >
                <FaFacebook size={22} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A66C2] hover:scale-110 transition"
              >
                <IoLogoLinkedin size={24} />
              </a>
              <a
                href="https://www.youtube.com/@lltfahim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF0000] hover:scale-110 transition"
              >
                <IoLogoYoutube size={24} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:scale-110 transition"
              >
                <BsInstagram size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} FindMates. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
