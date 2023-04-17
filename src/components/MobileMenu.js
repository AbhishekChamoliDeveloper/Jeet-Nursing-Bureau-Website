import React, { useState } from "react";
import { Link } from "react-scroll";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative sm:hidden">
      <button
        className="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10"
        >
          <path
            fill-rule="evenodd"
            d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-2 px-3 space-y-3">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={2500}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
              role="menuitem"
            >
              Home
            </Link>

            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={2500}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              About Us
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={2500}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Services
            </Link>
            <Link
              to="contactus"
              spy={true}
              smooth={true}
              duration={2500}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Contact Us
            </Link>
            <Link
              to="reviews"
              spy={true}
              smooth={true}
              duration={2500}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Reviews
            </Link>

            <div className="w-full">
              <a
                href="/career"
                className="rounded-sm py-2 px-4 text-white font-semibold bg-yellow-500 w-full block text-center"
              >
                Career
              </a>
            </div>
          </div>

          <button
            className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
