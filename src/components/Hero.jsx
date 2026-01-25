// src/components/Hero.jsx
import { ChevronRight } from 'lucide-react'; // Import right arrow icon

// Hero section component
const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 md:py-32" // Gradient background
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10"> {/* Semi-transparent pattern */}
        <div className="absolute inset-0" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10"> {/* Content container */}
        <div className="max-w-3xl"> {/* Content width limit */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6"> {/* Main heading */}
            Professional Cooling & Air Conditioning Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100"> {/* Subheading */}
            Leading HVAC experts in Africa providing energy-efficient cooling systems for residential and commercial spaces
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4"> {/* Call-to-action buttons */}
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center">
              View Our Services <ChevronRight className="ml-2 h-5 w-5" /> {/* Right arrow icon */}
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition">
              Contact Us Today
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-blue-400"> {/* Statistics grid */}
            <div className="text-center"> {/* Stat item 1 */}
              <div className="text-3xl md:text-4xl font-bold mb-2">5+</div> {/* Stat value */}
              <div className="text-blue-200">Years Experience</div> {/* Stat label */}
            </div>
            <div className="text-center"> {/* Stat item 2 */}
              <div className="text-3xl md:text-4xl font-bold mb-2">20+</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div className="text-center"> {/* Stat item 3 */}
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Support Service</div>
            </div>
            <div className="text-center"> {/* Stat item 4 */}
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export Hero component
export default Hero;