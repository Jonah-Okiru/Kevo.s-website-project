// src/components/Header.jsx
import { useState } from 'react';
import { Menu, X, Phone, Mail, X as CloseIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    services: '',
    projectType: '',
    timeline: '',
    budget: '',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const navigate = useNavigate();

  // Function to handle navigation with smooth scroll
  const handleNavigation = (path, sectionId = null) => {
    setIsMenuOpen(false);
    
    if (window.location.pathname === '/' && sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (path === '/' && sectionId) {
      navigate(path);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(path);
    }
  };

  const handleGetQuoteClick = () => {
    setIsMenuOpen(false);
    setIsQuoteModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceCheckbox = (service) => {
    setFormData(prev => {
      const currentServices = prev.services.split(',').filter(s => s.trim() !== '');
      if (currentServices.includes(service)) {
        return {
          ...prev,
          services: currentServices.filter(s => s !== service).join(', ')
        };
      } else {
        return {
          ...prev,
          services: [...currentServices, service].join(', ')
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare email content
      const subject = `New Quote Request from ${formData.name}`;
      const body = `
New Quote Request Details:

Personal Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Address: ${formData.address}

Project Details:
- Services Needed: ${formData.services}
- Project Type: ${formData.projectType}
- Preferred Timeline: ${formData.timeline}
- Budget Range: ${formData.budget}

Additional Information:
${formData.additionalInfo}

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
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          services: '',
          projectType: '',
          timeline: '',
          budget: '',
          additionalInfo: ''
        });
        setIsQuoteModalOpen(false);
      }, 2000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    'Air Conditioning Installation',
    'AC Maintenance & Servicing',
    'AC Repair Services',
    'Ductless Mini-Split Systems',
    'Commercial HVAC Systems',
    'Industrial Cooling Solutions',
    'VRF/VRV System Installation',
    'Chiller Plant Services',
    'Ductwork Design & Installation',
    'Energy Efficiency Audits'
  ];

  const projectTypeOptions = ['Residential', 'Commercial', 'Industrial'];
  const timelineOptions = ['Immediately', 'Within 1 Week', 'Within 1 Month', 'Within 3 Months', 'Planning Stage'];
  const budgetOptions = ['Under KES 50,000', 'KES 50,000 - 200,000', 'KES 200,000 - 500,000', 'KES 500,000 - 1M', 'Over KES 1M'];

  return (
    <>
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
                onClick={handleGetQuoteClick}
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
                    onClick={handleGetQuoteClick}
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

      {/* Quote Request Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-blue-900">Request a Quote</h2>
                <button 
                  onClick={() => setIsQuoteModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-blue-800">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
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
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+254 712 345 678"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your location"
                      />
                    </div>
                  </div>
                </div>

                {/* Services Needed */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-blue-800">Services Needed *</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {serviceOptions.map((service, index) => (
                      <label key={index} className="flex items-center space-x-3 p-2 hover:bg-blue-50 rounded">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceCheckbox(service)}
                          className="h-4 w-4 text-blue-600 rounded"
                        />
                        <span className="text-sm">{service}</span>
                      </label>
                    ))}
                  </div>
                  <textarea
                    name="services"
                    value={formData.services}
                    onChange={handleInputChange}
                    className="w-full mt-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Or describe specific services needed..."
                    rows="2"
                  />
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select Type</option>
                      {projectTypeOptions.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select Timeline</option>
                      {timelineOptions.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select Budget</option>
                      {budgetOptions.map((budget, index) => (
                        <option key={index} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-sm font-medium mb-2">Additional Information</label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Please provide any additional details about your project..."
                    rows="4"
                  />
                </div>

                {/* Submit Status */}
                {submitStatus && (
                  <div className={`p-4 rounded-lg ${submitStatus === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {submitStatus === 'success' 
                      ? '✓ Your quote request has been prepared. Please check your email client to send it.'
                      : '✗ There was an error. Please try again or contact us directly.'}
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex justify-end space-x-4 pt-4 border-t">
                  <button
                    type="button"
                    onClick={() => setIsQuoteModalOpen(false)}
                    className="px-6 py-2 border rounded-lg hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                  >
                    {isSubmitting ? 'Preparing...' : 'Submit Quote Request'}
                  </button>
                </div>
              </form>

              <div className="mt-6 pt-6 border-t text-sm text-gray-600">
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Your quote request will be sent to: <strong className="ml-1">info@climatecaresolutions.co.ke</strong>
                </p>
                <p className="mt-2">We'll review your request and contact you within 24 hours with a detailed quote.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;