// src/components/About.jsx
import { CheckCircle, Users, Award, Clock } from 'lucide-react'; // Import icons

// About section component
const About = () => {
  // Features list array
  const features = [
    "Energy-efficient systems", // Feature 1
    "Professional installation", // Feature 2
    "24/7 maintenance support", // Feature 3
    "Eco-friendly refrigerants", // Feature 4
    "Customized solutions", // Feature 5
    "Warranty on all installations" // Feature 6
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white"> {/* About section */}
      <div className="container mx-auto px-4"> {/* Container with padding */}
        <div className="grid md:grid-cols-2 gap-12 items-center"> {/* Two-column grid */}
          
          {/* Left Column - Image */}
          <div className="relative"> {/* Image container */}
            <div className="relative h-96 rounded-2xl overflow-hidden"> {/* Image wrapper */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div> {/* Gradient overlay */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400 rounded-full -mb-12 -mr-12 opacity-20"></div> {/* Decorative circle */}
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl"> {/* Experience card */}
              <div className="flex items-center"> {/* Flex container for icon and text */}
                <div className="bg-blue-100 p-3 rounded-lg mr-4"> {/* Icon background */}
                  <Award className="h-8 w-8 text-blue-600" /> {/* Award icon */}
                </div>
                <div> {/* Text content */}
                  <div className="text-3xl font-bold text-gray-800">5+</div> {/* Years number */}
                  <div className="text-gray-600">Years Experience</div> {/* Label */}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div> {/* Text content container */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"> {/* Section title */}
              About Climate Care Solutions
            </h2>
            <p className="text-lg text-gray-600 mb-6"> {/* Description paragraph 1 */}
              We are a leading provider of HVAC solutions across Kenya and East Africa region, specializing in 
              residential, commercial, and industrial cooling systems. With over 5 years 
              of experience, we deliver energy-efficient and sustainable cooling solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8"> {/* Description paragraph 2 */}
              Our team of certified technicians ensures professional installation, 
              maintenance, and repair services, guaranteeing optimal performance 
              and longevity of your cooling systems.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 mb-8"> {/* Two-column features grid */}
              {features.map((feature, index) => ( // Map through features array
                <div key={index} className="flex items-center"> {/* Feature item */}
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" /> {/* Check icon */}
                  <span className="text-gray-700">{feature}</span> {/* Feature text */}
                </div>
              ))}
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t"> {/* Stats grid */}
              <div className="text-center"> {/* Stat 1 */}
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" /> {/* Users icon */}
                <div className="text-2xl font-bold text-gray-800">20+</div> {/* Stat value */}
                <div className="text-gray-600">Expert Staff</div> {/* Stat label */}
              </div>
              <div className="text-center"> {/* Stat 2 */}
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" /> {/* Clock icon */}
                <div className="text-2xl font-bold text-gray-800">24/7</div>
                <div className="text-gray-600">Emergency Service</div>
              </div>
              <div className="text-center"> {/* Stat 3 */}
                <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" /> {/* Award icon */}
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