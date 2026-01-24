// src/components/Services.jsx
import { Home, Building, Factory, Settings, Thermometer, Zap } from 'lucide-react'; // Import service icons

// Services section component
const Services = () => {
  // Services data array
  const services = [
    {
      icon: <Home className="h-10 w-10" />, // Residential icon
      title: "Residential Cooling", // Service title
      description: "Complete home air conditioning installation and maintenance for optimal comfort.", // Service description
      features: ["Split Systems", "Window Units", "Ducted Systems"] // Service features
    },
    {
      icon: <Building className="h-10 w-10" />, // Commercial icon
      title: "Commercial HVAC",
      description: "Office and commercial building cooling solutions for increased productivity.",
      features: ["VRF Systems", "Chillers", "Air Handling Units"]
    },
    {
      icon: <Factory className="h-10 w-10" />, // Industrial icon
      title: "Industrial Cooling",
      description: "Large-scale cooling systems for factories, warehouses, and industrial facilities.",
      features: ["Process Cooling", "Cold Rooms", "Industrial Chillers"]
    },
    {
      icon: <Settings className="h-10 w-10" />, // Maintenance icon
      title: "Maintenance & Repair",
      description: "Regular servicing and emergency repair services to ensure system efficiency.",
      features: ["Preventive Maintenance", "24/7 Repairs", "System Optimization"]
    },
    {
      icon: <Thermometer className="h-10 w-10" />, // Design icon
      title: "System Design",
      description: "Custom cooling system design and installation planning for optimal performance.",
      features: ["Load Calculations", "Duct Design", "Energy Analysis"]
    },
    {
      icon: <Zap className="h-10 w-10" />, // Energy icon
      title: "Energy Solutions",
      description: "Energy-efficient upgrades and smart cooling solutions to reduce costs.",
      features: ["Inverter Systems", "Smart Controls", "Energy Audits"]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50"> {/* Services section */}
      <div className="container mx-auto px-4"> {/* Container with padding */}
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16"> {/* Centered header */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"> {/* Section title */}
            Our Professional Services
          </h2>
          <p className="text-lg text-gray-600"> {/* Section description */}
            We provide comprehensive cooling solutions tailored to your specific needs, 
            ensuring optimal performance and energy efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Responsive grid */}
          {services.map((service, index) => ( // Map through services array
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100" // Service card
            >
              <div className="mb-6"> {/* Icon and title container */}
                <div className="inline-flex p-3 rounded-lg bg-blue-100 text-blue-600 mb-4"> {/* Icon wrapper */}
                  {service.icon} {/* Render icon */}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3> {/* Service title */}
                <p className="text-gray-600 mb-4">{service.description}</p> {/* Service description */}
              </div>
              
              {/* Features List */}
              <ul className="space-y-2"> {/* Features list container */}
                {service.features.map((feature, idx) => ( // Map through features
                  <li key={idx} className="flex items-center text-gray-700"> {/* Feature item */}
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-3"></div> {/* Bullet point */}
                    {feature} {/* Feature text */}
                  </li>
                ))}
              </ul>
              
              {/* Action Button */}
              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700 flex items-center"> {/* Learn more button */}
                Learn More
                <span className="ml-2">→</span> {/* Arrow icon */}
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white"> {/* Call-to-action */}
          <div className="flex flex-col md:flex-row items-center justify-between"> {/* Flex container */}
            <div className="mb-6 md:mb-0 md:mr-8"> {/* Text content */}
              <h3 className="text-2xl font-bold mb-2">Need a Custom Solution?</h3> {/* CTA title */}
              <p className="text-blue-100">Contact us for a free consultation and quote</p> {/* CTA description */}
            </div>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition whitespace-nowrap"> {/* CTA button */}
              Request Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export Services component
export default Services;