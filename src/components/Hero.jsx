// src/components/Hero.jsx
import { ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Array of image paths from the public/images folder
const backgroundImages = [
  '/images/background1.jpeg',
  '/images/background2.jpeg',
  '/images/background3.jpeg',
  '/images/background4.jpeg',
  '/images/background5.jpeg',
  '/images/background6.jpeg',
  '/images/background7.jpeg',
  '/images/background8.jpeg',
  '/images/background9.jpeg',
  '/images/background10.jpeg',
  '/images/background11.jpeg',
  '/images/background12.jpeg',
  '/images/background13.jpeg',
  '/images/background14.jpeg',
  '/images/background15.jpeg',
  '/images/background16.jpeg',
  '/images/background17.jpeg',
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotating(true);
      
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % backgroundImages.length
        );
        
        setTimeout(() => {
          setIsRotating(false);
        }, 100);
      }, 800);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Function to navigate to services page
  const handleServicesClick = () => {
    navigate('/services');
  };

  // Function to navigate to contact page
  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section 
      id="home" 
      className="relative text-white py-20 md:py-32 overflow-hidden"
    >
      {/* Background Images Container */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              zIndex: index === currentImageIndex ? 1 : 0,
            }}
          />
        ))}
        
        {/* Rotating Overlay Effect */}
        <div 
          className={`absolute inset-0 transition-all duration-1000 ${
            isRotating ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${backgroundImages[(currentImageIndex + 1) % backgroundImages.length]})`,
            zIndex: 2,
          }}
        >
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
              isRotating ? 'scale-150 rotate-180' : 'scale-100 rotate-0'
            }`}
            style={{
              backgroundImage: `url(${backgroundImages[(currentImageIndex + 1) % backgroundImages.length]})`,
            }}
          />
        </div>
        
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80 z-3" />
        
        {/* Pattern overlay */}
        <div 
          className="absolute inset-0 opacity-20 z-3"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Cooling & Air Conditioning Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Leading HVAC experts in Africa providing energy-efficient cooling systems for residential and commercial spaces
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleServicesClick}
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center cursor-pointer"
            >
              View Our Services <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={handleContactClick}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition cursor-pointer"
            >
              Contact Us Today
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-blue-400">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">20+</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Support Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;