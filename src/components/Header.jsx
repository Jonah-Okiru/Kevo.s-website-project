// src/components/Header.jsx
import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.jpeg'; // Import your logo image

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          {/* Logo Section - Updated with Image */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2"> {/* Make logo clickable */}
              <img 
                src={logo} // Use imported logo
                alt="Climate Care Solutions Logo" // Alt text for accessibility
                className="h-16 w-auto" // Adjust height, width auto for aspect ratio
                onError={(e) => {
                  // Fallback if image fails to load
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.src = "https://via.placeholder.com/150x50/1e40af/ffffff?text=Mistcool+Africa"; // Fallback placeholder
                }}
              />
              {/* Optional: If you want to keep text as fallback or for screen readers */}
              <div className="sr-only"> {/* Screen reader only text */}
                <h1>Mistcool Africa</h1>
                <p>Cooling Solutions Experts</p>
              </div>
            </a>
          </div>

          {/* Rest of the component remains the same */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-gray-700">+254 723 456 789</span>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
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
              <a href="#home" className="text-gray-700 hover:text-blue-600 py-2">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 py-2">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 py-2">Services</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 py-2">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 py-2">Contact</a>
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">+254 723 456 789</span>
                </div>
                <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
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