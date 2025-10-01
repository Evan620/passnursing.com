import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { LOGO_SIZES } from '../config/constants';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Subjects', path: '/subjects' },
    { name: 'Our Portfolio', path: '/portfolio' },
    { name: 'Request Service', path: '/request-service' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <React.Fragment>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Desktop Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/nursing-exams-coach-high-resolution-logo-transparent.png" 
                alt="NursingExamCoach.com - Expert Nursing Exam Help" 
                className={`${LOGO_SIZES.navbar} w-auto`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Sign Up Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/request-service"
                className="btn-primary flex items-center space-x-2"
              >
                <User className="h-4 w-4" />
                <span>Sign Up</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary focus:outline-none focus:text-primary"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-primary bg-blue-50'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/request-service"
                className="block mx-3 mt-4 btn-primary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="flex justify-around py-2">
          <Link to="/" className="flex flex-col items-center py-2 px-3">
            <div className="h-6 w-6 text-gray-600">🏠</div>
            <span className="text-xs text-gray-600">Home</span>
          </Link>
          <Link to="/services" className="flex flex-col items-center py-2 px-3">
            <div className="h-6 w-6 text-gray-600">📘</div>
            <span className="text-xs text-gray-600">Services</span>
          </Link>
          <Link to="/subjects" className="flex flex-col items-center py-2 px-3">
            <div className="h-6 w-6 text-gray-600">📚</div>
            <span className="text-xs text-gray-600">Subjects</span>
          </Link>
          <Link to="/request-service" className="flex flex-col items-center py-2 px-3">
            <div className="h-6 w-6 text-gray-600">👤</div>
            <span className="text-xs text-gray-600">Account</span>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
