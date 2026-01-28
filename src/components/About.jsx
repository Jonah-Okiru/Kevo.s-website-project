// src/components/About.jsx
import { CheckCircle, Users, Award, Clock, ChevronLeft, ChevronRight } from 'lucide-react'; // Import icons
import { useState, useEffect } from 'react';

// About section component
const About = () => {
  // Features list array
  const features = [
    "Energy-efficient systems",
    "Professional installation",
    "24/7 maintenance support",
    "Eco-friendly refrigerants",
    "Customized solutions",
    "Warranty on all installations"
  ];

  // Array of images for the rotating gallery
  const galleryImages = [
    {
      src: "/images/aboutimage1.jpeg",
      alt: "Image no 1"
    },
    {
      src: "/images/aboutimage2.jpeg",
      alt: "Image no 2"
    },
    {
      src: "/images/aboutimage3.jpeg",
      alt: "Image no 3"
    },
    {
      src: "/images/aboutimage4.jpeg",
      alt: "Image no 4"
    },
    {
      src: "/images/aboutimage5.jpeg",
      alt: "Image no 5"
    },
    {
      src: "/images/aboutimage6.jpeg",
      alt: "Image no 6"
    },
    {
      src: "/images/aboutimage7.jpeg",
      alt: "Image no 7"
    },
    {
      src: "/images/aboutimage8.jpeg",
      alt: "Image no 8"
    },
    {
      src: "/images/aboutimage9.jpeg",
      alt: "Image no 9"
    },
    {
      src: "/images/aboutimage10.jpeg",
      alt: "Image no 10"
    },
    {
      src: "/images/aboutimage11.jpeg",
      alt: "Image no 11"
    },
    {
      src: "/images/aboutimage12.jpeg",
      alt: "Image no 12"
    },
    {
      src: "/images/aboutimage13.jpeg",
      alt: "Image no 13"
    },
    {
      src: "/images/aboutimage14.jpeg",
      alt: "Image no 14"
    },
    {
      src: "/images/aboutimage15.jpeg",
      alt: "Image no 15"
    },
    {
      src: "/images/aboutimage16.jpeg",
      alt: "Image no 16"
    },
    {
      src: "/images/aboutimage17.jpeg",
      alt: "Image no 17"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [direction, setDirection] = useState('next');

  // Auto rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      rotateImage('next');
    }, 4000); // Rotate every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const rotateImage = (dir) => {
    if (isRotating) return;
    
    setIsRotating(true);
    setDirection(dir);
    
    setTimeout(() => {
      if (dir === 'next') {
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
      } else {
        setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
      }
      
      setTimeout(() => {
        setIsRotating(false);
      }, 100);
    }, 800);
  };

  const nextImage = () => rotateImage('next');
  const prevImage = () => rotateImage('prev');

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Rotating Image Gallery */}
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              {/* Main Image Container */}
              <div className="relative w-full h-full">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <div 
                      className={`w-full h-full bg-cover bg-center transition-all duration-1000 ${
                        isRotating && index === currentImageIndex 
                          ? (direction === 'next' ? 'rotate-180 scale-110' : '-rotate-180 scale-110')
                          : 'rotate-0 scale-100'
                      }`}
                      style={{
                        backgroundImage: `url(${image.src})`
                      }}
                    />
                  </div>
                ))}
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent z-20" />
                
                {/* Image Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6 text-blue-700" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6 text-blue-700" />
                </button>
                
                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 z-30 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {galleryImages.length}
                </div>
                
                {/* Image Description */}
                <div className="absolute bottom-4 left-4 z-30 bg-black/60 text-white px-3 py-2 rounded-lg max-w-xs">
                  <p className="text-sm font-medium">{galleryImages[currentImageIndex].alt}</p>
                </div>
              </div>
            </div>
            
            {/* Image Thumbnails */}
            <div className="flex justify-center mt-4 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (index !== currentImageIndex) {
                      setDirection(index > currentImageIndex ? 'next' : 'prev');
                      setCurrentImageIndex(index);
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex 
                      ? 'bg-blue-600 w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-30">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-800">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-100 rounded-full opacity-30 -z-10" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-200 rounded-full opacity-20 -z-10" />
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About Climate Care Solutions
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We are a leading provider of HVAC solutions across Kenya and East Africa region, specializing in 
              residential, commercial, and industrial cooling systems. With over 5 years 
              of experience, we deliver energy-efficient and sustainable cooling solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of certified technicians ensures professional installation, 
              maintenance, and repair services, guaranteeing optimal performance 
              and longevity of your cooling systems.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div className="text-center">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">20+</div>
                <div className="text-gray-600">Expert Staff</div>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">24/7</div>
                <div className="text-gray-600">Emergency Service</div>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">ISO</div>
                <div className="text-gray-600">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export About component
export default About;