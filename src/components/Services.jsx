// src/components/Services.jsx
import { useState } from 'react';
import { Home, Building, Factory, Settings, Thermometer, Zap, X as CloseIcon, Mail, Clock, CheckCircle, Users, Shield } from 'lucide-react';

const Services = () => {
  // State for modals
  const [selectedService, setSelectedService] = useState(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultationForm, setConsultationForm] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Detailed services data
  const services = [
    {
      id: 1,
      icon: <Home className="h-10 w-10" />,
      title: "Residential Cooling",
      description: "Complete home air conditioning installation and maintenance for optimal comfort.",
      features: ["Split Systems", "Window Units", "Ducted Systems"],
      detailedDescription: "We specialize in providing complete residential cooling solutions that ensure optimal comfort for your home. Our expert technicians handle everything from initial consultation to final installation, ensuring your home stays cool and comfortable year-round.",
      benefits: [
        "Personalized cooling solutions for every room",
        "Energy-efficient systems to reduce electricity bills",
        "Quiet operation for peaceful living",
        "Smart thermostat integration",
        "Regular maintenance plans"
      ],
      process: ["Initial Assessment", "System Design", "Professional Installation", "Testing & Commissioning", "After-Sales Support"],
      equipment: ["Daikin", "LG", "Carrier", "Mitsubishi Electric", "Panasonic"],
      typicalProjects: ["Single Family Homes", "Apartments", "Villas", "Townhouses", "Residential Complexes"]
    },
    {
      id: 2,
      icon: <Building className="h-10 w-10" />,
      title: "Commercial HVAC",
      description: "Office and commercial building cooling solutions for increased productivity.",
      features: ["VRF Systems", "Chillers", "Air Handling Units"],
      detailedDescription: "Our commercial HVAC solutions are designed to maintain perfect indoor climate control for offices, retail spaces, and commercial buildings, ensuring employee comfort and productivity while minimizing energy costs.",
      benefits: [
        "Increased employee productivity",
        "Energy cost reduction up to 40%",
        "24/7 monitoring and support",
        "Custom zoning for different areas",
        "Improved air quality"
      ],
      process: ["Site Survey", "Load Calculation", "System Design", "Installation", "Commissioning", "Maintenance Plan"],
      equipment: ["VRF Systems", "Chiller Plants", "AHUs", "FCUs", "Ductwork"],
      typicalProjects: ["Office Buildings", "Shopping Malls", "Hotels", "Schools", "Hospitals"]
    },
    {
      id: 3,
      icon: <Factory className="h-10 w-10" />,
      title: "Industrial Cooling",
      description: "Large-scale cooling systems for factories, warehouses, and industrial facilities.",
      features: ["Process Cooling", "Cold Rooms", "Industrial Chillers"],
      detailedDescription: "We provide robust industrial cooling solutions for manufacturing plants, warehouses, and industrial facilities where precise temperature control is critical for operations and product quality.",
      benefits: [
        "Process optimization and efficiency",
        "Equipment protection and longevity",
        "Compliance with industry standards",
        "Custom solutions for unique needs",
        "Remote monitoring capabilities"
      ],
      process: ["Process Analysis", "Cooling Load Calculation", "System Design", "Installation", "Testing", "Training"],
      equipment: ["Industrial Chillers", "Cooling Towers", "Process Coolers", "Cold Storage", "HVAC Control Systems"],
      typicalProjects: ["Manufacturing Plants", "Food Processing", "Pharmaceutical", "Data Centers", "Warehouses"]
    },
    {
      id: 4,
      icon: <Settings className="h-10 w-10" />,
      title: "Maintenance & Repair",
      description: "Regular servicing and emergency repair services to ensure system efficiency.",
      features: ["Preventive Maintenance", "24/7 Repairs", "System Optimization"],
      detailedDescription: "Our comprehensive maintenance and repair services ensure your cooling systems operate at peak efficiency year-round, with emergency services available 24/7 to minimize downtime.",
      benefits: [
        "Extended equipment lifespan",
        "Reduced energy consumption",
        "Prevention of major breakdowns",
        "Priority emergency response",
        "Regular performance reports"
      ],
      process: ["System Inspection", "Performance Testing", "Cleaning & Servicing", "Parts Replacement", "Efficiency Optimization"],
      services: [
        "Regular Maintenance Contracts",
        "Emergency Repair Services",
        "System Upgrades",
        "Refrigerant Recharging",
        "Electrical System Checks"
      ],
      responseTime: ["Emergency: 2-4 hours", "Priority: Same Day", "Standard: 24-48 hours"]
    },
    {
      id: 5,
      icon: <Thermometer className="h-10 w-10" />,
      title: "System Design",
      description: "Custom cooling system design and installation planning for optimal performance.",
      features: ["Load Calculations", "Duct Design", "Energy Analysis"],
      detailedDescription: "Our engineering team provides expert system design services, creating customized cooling solutions that perfectly match your specific requirements, space constraints, and budget.",
      benefits: [
        "Optimized system performance",
        "Cost-effective solutions",
        "Future expansion planning",
        "Energy efficiency optimization",
        "Compliance with regulations"
      ],
      process: ["Initial Consultation", "Site Survey", "Load Calculation", "Design Proposal", "3D Modeling", "Final Design"],
      deliverables: [
        "Detailed Engineering Drawings",
        "Equipment Specifications",
        "Installation Manuals",
        "Operation Manuals",
        "Maintenance Schedules"
      ],
      tools: ["CAD Software", "Load Calculation Software", "Energy Modeling", "CFD Analysis", "BIM Integration"]
    },
    {
      id: 6,
      icon: <Zap className="h-10 w-10" />,
      title: "Energy Solutions",
      description: "Energy-efficient upgrades and smart cooling solutions to reduce costs.",
      features: ["Inverter Systems", "Smart Controls", "Energy Audits"],
      detailedDescription: "We help businesses and homeowners reduce their energy consumption and carbon footprint through advanced energy-efficient cooling solutions and smart control systems.",
      benefits: [
        "Up to 50% energy savings",
        "Reduced carbon footprint",
        "Smart automation features",
        "Real-time energy monitoring",
        "Government rebate assistance"
      ],
      solutions: [
        "Inverter Technology Systems",
        "Smart Thermostats & Controls",
        "Energy Recovery Ventilation",
        "Solar-Powered Cooling",
        "Building Automation Systems"
      ],
      process: ["Energy Audit", "Analysis & Recommendations", "Implementation Plan", "Installation", "Monitoring & Optimization"],
      savings: ["Immediate: 20-30%", "Short-term: 30-40%", "Long-term: 40-50%"]
    }
  ];

  // Handle Learn More click
  const handleLearnMoreClick = (service) => {
    setSelectedService(service);
  };

  // Handle consultation form change
  const handleConsultationFormChange = (e) => {
    const { name, value } = e.target;
    setConsultationForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle consultation form submission
  const handleConsultationSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare email content
      const subject = `Consultation Request from ${consultationForm.name}`;
      const body = `
Consultation Request Details:

Personal Information:
- Name: ${consultationForm.name}
- Email: ${consultationForm.email}
- Phone: ${consultationForm.phone}
- Service Interest: ${consultationForm.serviceInterest}

Message:
${consultationForm.message}

---
This message was sent from the Climate Care Solutions website.
      `;

      // Create mailto link
      const mailtoLink = `mailto:info@climatecaresolutions.co.ke?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open default email client
      window.location.href = mailtoLink;

      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setConsultationForm({
          name: '',
          email: '',
          phone: '',
          serviceInterest: '',
          message: ''
        });
        setIsConsultationModalOpen(false);
      }, 2000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Professional Services
            </h2>
            <p className="text-lg text-gray-600">
              We provide comprehensive cooling solutions tailored to your specific needs, 
              ensuring optimal performance and energy efficiency.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full"
              >
                <div className="mb-6 flex-grow">
                  <div className="inline-flex p-3 rounded-lg bg-blue-100 text-blue-600 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Action Button */}
                <button 
                  onClick={() => handleLearnMoreClick(service)}
                  className="mt-6 text-blue-600 font-semibold hover:text-blue-700 flex items-center self-start"
                >
                  Learn More
                  <span className="ml-2">→</span>
                </button>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-bold mb-2">Need a Custom Solution?</h3>
                <p className="text-blue-100">Contact us for a free consultation and quote</p>
              </div>
              <button 
                onClick={() => setIsConsultationModalOpen(true)}
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition whitespace-nowrap"
              >
                Request Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                    {selectedService.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-blue-900">{selectedService.title}</h2>
                    <p className="text-gray-600">{selectedService.description}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 text-blue-800">Overview</h3>
                    <p className="text-gray-700">{selectedService.detailedDescription}</p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 text-blue-800">Key Benefits</h3>
                    <ul className="space-y-3">
                      {selectedService.benefits?.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 text-blue-800">Our Process</h3>
                    <div className="space-y-3">
                      {selectedService.process?.map((step, index) => (
                        <div key={index} className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-3">
                            {index + 1}
                          </div>
                          <span className="text-gray-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  {selectedService.equipment && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4 text-blue-800">Equipment & Brands</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.equipment.map((item, index) => (
                          <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedService.typicalProjects && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4 text-blue-800">Typical Projects</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {selectedService.typicalProjects.map((project, index) => (
                          <div key={index} className="flex items-center">
                            <Building className="h-4 w-4 text-blue-500 mr-2" />
                            <span className="text-gray-700 text-sm">{project}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedService.solutions && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4 text-blue-800">Available Solutions</h3>
                      <ul className="space-y-2">
                        {selectedService.solutions.map((solution, index) => (
                          <li key={index} className="text-gray-700">
                            • {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedService.responseTime && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4 text-blue-800">Response Time</h3>
                      <div className="space-y-2">
                        {selectedService.responseTime.map((time, index) => (
                          <div key={index} className="flex items-center">
                            <Clock className="h-4 w-4 text-blue-500 mr-2" />
                            <span className="text-gray-700">{time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4 text-blue-800">Ready to Get Started?</h3>
                    <button 
                      onClick={() => {
                        setSelectedService(null);
                        setIsConsultationModalOpen(true);
                      }}
                      className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                      Get a Free Quote
                    </button>
                    <p className="text-sm text-gray-600 mt-4 text-center">
                      ✓ Free consultation<br />
                      ✓ Detailed proposal<br />
                      ✓ No obligation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Consultation Modal */}
      {isConsultationModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-blue-900">Free Consultation</h2>
                <button 
                  onClick={() => setIsConsultationModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleConsultationSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={consultationForm.name}
                    onChange={handleConsultationFormChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={consultationForm.email}
                      onChange={handleConsultationFormChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={consultationForm.phone}
                      onChange={handleConsultationFormChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+254 712 345 678"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Service Interest</label>
                  <select
                    name="serviceInterest"
                    value={consultationForm.serviceInterest}
                    onChange={handleConsultationFormChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a service</option>
                    {services.map(service => (
                      <option key={service.id} value={service.title}>{service.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Your Issue / Requirements *</label>
                  <textarea
                    name="message"
                    value={consultationForm.message}
                    onChange={handleConsultationFormChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Please describe your cooling issues, requirements, or the project you need help with..."
                    rows="6"
                  />
                </div>

                {submitStatus && (
                  <div className={`p-4 rounded-lg ${submitStatus === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {submitStatus === 'success' 
                      ? '✓ Your consultation request has been prepared. Please check your email client to send it.'
                      : '✗ There was an error. Please try again or contact us directly.'}
                  </div>
                )}

                <div className="flex justify-end space-x-4 pt-4 border-t">
                  <button
                    type="button"
                    onClick={() => setIsConsultationModalOpen(false)}
                    className="px-6 py-2 border rounded-lg hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                  >
                    {isSubmitting ? 'Preparing...' : 'Submit Request'}
                  </button>
                </div>
              </form>

              <div className="mt-6 pt-6 border-t text-sm text-gray-600">
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Your request will be sent to: <strong className="ml-1">info@climatecaresolutions.co.ke</strong>
                </p>
                <div className="mt-4 space-y-2">
                  <p className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-blue-500" />
                    Our team will review your request within 2 hours
                  </p>
                  <p className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-blue-500" />
                    We'll schedule a consultation call within 24 hours
                  </p>
                  <p className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-blue-500" />
                    Your information is kept confidential and secure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;