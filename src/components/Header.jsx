// src/components/Header.jsx
import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Function to handle navigation with smooth scroll
  const handleNavigation = (path, sectionId = null) => {
    // Close mobile menu if open
    setIsMenuOpen(false);
    
    // Check if we're already on the home page
    if (window.location.pathname === '/' && sectionId) {
      // Smooth scroll to section on home page
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (path === '/' && sectionId) {
      // Navigate to home page and then scroll to section
      navigate(path);
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Navigate to different page
      navigate(path);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <button 
              onClick={() => handleNavigation('/')}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <img 
                src={logo}
                alt="Mistcool Africa Logo"
                className="h-16 w-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/150x50/1e40af/ffffff?text=Mistcool+Africa";
                }}
              />
              <div className="sr-only">
                <h1>Mistcool Africa</h1>
                <p>Cooling Solutions Experts</p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('/', 'home')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('/', 'about')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation('/services')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavigation('/', 'projects')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => handleNavigation('/contact')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-gray-700">+254 797 801 396, +254 736 014 223</span>
            </div>
            <button 
              onClick={() => handleNavigation('/contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavigation('/', 'home')}
                className="text-gray-700 hover:text-blue-600 py-2 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('/', 'about')}
                className="text-gray-700 hover:text-blue-600 py-2 text-left"
              >
                About
              </button>
              <button 
                onClick={() => handleNavigation('/services')}
                className="text-gray-700 hover:text-blue-600 py-2 text-left"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavigation('/', 'projects')}
                className="text-gray-700 hover:text-blue-600 py-2 text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => handleNavigation('/contact')}
                className="text-gray-700 hover:text-blue-600 py-2 text-left"
              >
                Contact
              </button>
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">+254 797 801 396, +254 736 014 223</span>
                </div>
                <button 
                  onClick={() => handleNavigation('/contact')}
                  className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;