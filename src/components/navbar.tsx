import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-yellow-400 text-2xl font-bold">
              StarWars
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="hover:text-yellow-400 transition-colors duration-200 text-amber-300 font-extrabold"
            >
              Landing
            </Link>
            <Link
              to="/characters"
              className="hover:text-yellow-400 transition-colors duration-200 text-amber-300 font-extrabold"
            >
              Characters
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pt-2 pb-4 space-y-1">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-400 transition-colors duration-200 text-amber-300 font-extrabold"
          >
            Landing
          </Link>
          <Link
            to="/characters"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-400 transition-colors duration-200 text-amber-300 font-extrabold"
          >
            Characters
          </Link>
        </div>
      )}
    </nav>
  );
}
