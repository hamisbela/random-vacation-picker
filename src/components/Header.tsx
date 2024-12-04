import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Random Vacation Picker</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="flex space-x-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2">Home</Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 px-3 py-2">
                  Destinations
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                  <Link to="/usa" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">USA</Link>
                  <Link to="/europe" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Europe</Link>
                  <Link to="/asia" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Asia</Link>
                  <Link to="/australia" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Australia</Link>
                  <Link to="/africa" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Africa</Link>
                  <Link to="/south-america" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">South America</Link>
                </div>
              </div>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2">Contact</Link>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div className="space-y-1 pl-4">
                <Link
                  to="/usa"
                  className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  USA
                </Link>
                <Link
                  to="/europe"
                  className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Europe
                </Link>
                <Link
                  to="/asia"
                  className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Asia
                </Link>
                <Link
                  to="/australia"
                  className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Australia
                </Link>
                <Link
                  to="/africa"
                  className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Africa
                </Link>
                <Link
                  to="/south-america"
                  className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  South America
                </Link>
              </div>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}