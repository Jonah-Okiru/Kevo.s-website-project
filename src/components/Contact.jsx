// src/components/Contact.jsx
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // Submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission with email functionality
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      // Prepare email content
      const subject = `New Contact Form Submission from ${formData.name}`;
      const body = `
Contact Form Submission Details:

Personal Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

Service Interest:
- Service Needed: ${formData.service}

Message:
${formData.message}

---
Submission Details:
- Date: ${new Date().toLocaleDateString()}
- Time: ${new Date().toLocaleTimeString()}
- This message was sent from the Climate Care Solutions contact form.
      `;

      // Create mailto link
      const mailtoLink = `mailto:info@climatecaresolutions.co.ke?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open default email client
      window.location.href = mailtoLink;

      // Show success message
      setSubmitStatus('success');
      setSubmitMessage('Your message has been prepared. Please check your email client to send it.');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      }, 3000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setSubmitMessage('There was an error preparing your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Service options
  const serviceOptions = [
    { value: '', label: 'Select a service' },
    { value: 'residential', label: 'Residential Cooling' },
    { value: 'commercial', label: 'Commercial HVAC' },
    { value: 'industrial', label: 'Industrial Cooling' },
    { value: 'maintenance', label: 'Maintenance & Repair' },
    { value: 'design', label: 'System Design & Installation' },
    { value: 'energy', label: 'Energy Efficiency Solutions' },
    { value: 'emergency', label: 'Emergency Repair' },
    { value: 'consultation', label: 'Free Consultation' },
    { value: 'quote', label: 'Request Quote' },
    { value: 'other', label: 'Other Service' }
  ];

  // Contact information array
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: ["+254 797 801 396", "+254 736 014 223"],
      action: "Call Now",
      link: "tel:+254797801396"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: ["info@climatecaresolutions.co.ke"],
      action: "Send Email",
      link: "mailto:info@climatecaresolutions.co.ke"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: ["Nairobi Office: Asili Towers, Ngara, Nairobi"],
      action: "Get Directions",
      link: "https://maps.google.com/?q=Ngara+Nairobi"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM", "Emergency: 24/7"],
      action: "Book Appointment",
      link: "#"
    }
  ];

  // Handle contact card actions
  const handleContactAction = (action, link) => {
    if (action === "Call Now" || action === "Send Email") {
      window.location.href = link;
    } else if (action === "Get Directions") {
      window.open(link, '_blank');
    } else if (action === "Book Appointment") {
      // Open the form and pre-fill service as consultation
      setFormData(prev => ({
        ...prev,
        service: 'consultation',
        message: 'I would like to book an appointment for a consultation.'
      }));
      // Scroll to form
      const formElement = document.querySelector('.contact-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contact us for professional cooling solutions. Our team is ready to assist you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column - Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Contact Information</h3>
            
            {/* Contact Info Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="inline-flex p-3 rounded-lg bg-blue-100 text-blue-600 mb-4">
                    {info.icon}
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{info.title}</h4>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 mb-1">{detail}</p>
                  ))}
                  <button 
                    onClick={() => handleContactAction(info.action, info.link)}
                    className="mt-4 text-blue-600 font-medium hover:text-blue-700 text-sm hover:underline"
                  >
                    {info.action}
                  </button>
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
              <div className="flex items-start">
                <div className="bg-white/20 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Emergency Service</h4>
                  <p className="text-red-100 mb-4">24/7 emergency repair services available</p>
                  <div className="text-2xl font-bold">0797801396, 0736014223</div>
                  <button 
                    onClick={() => window.location.href = 'tel:+254797801396'}
                    className="mt-4 bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                  >
                    Call Emergency Line
                  </button>
                </div>
              </div>
            </div>

            {/* Response Time Info */}
            <div className="mt-8 bg-blue-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-800 mb-3">Response Time Guarantee</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-blue-500 mr-2" />
                  <span className="text-gray-700 text-sm">Email Response: Within 2 hours</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-blue-500 mr-2" />
                  <span className="text-gray-700 text-sm">Phone Call: Within 30 minutes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                  <span className="text-gray-700 text-sm">Emergency Service: 2-4 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 contact-form">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
            
            {/* Submission Status */}
            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg ${submitStatus === 'success' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'}`}>
                <div className="flex items-center">
                  {submitStatus === 'success' ? (
                    <CheckCircle className="h-5 w-5 mr-2" />
                  ) : (
                    <AlertCircle className="h-5 w-5 mr-2" />
                  )}
                  <span>{submitMessage}</span>
                </div>
                {submitStatus === 'success' && (
                  <p className="text-sm mt-2 text-green-600">
                    Your email client will open with a pre-filled message. Just click "Send" to complete your submission.
                  </p>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Name Input */}
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    placeholder="Your full name"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    placeholder="you@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  placeholder="+254 700 000 000"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Service Selection */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium">
                  Service Needed <span className="text-red-500">*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  required
                  disabled={isSubmitting}
                >
                  {serviceOptions.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Textarea */}
              <div className="mb-8">
                <label className="block text-gray-700 mb-2 font-medium">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
                  placeholder="Please describe your cooling needs, issues, or requirements in detail..."
                  required
                  disabled={isSubmitting}
                ></textarea>
                <p className="text-sm text-gray-500 mt-2">
                  Please include specific details like room sizes, existing equipment, and any issues you're experiencing.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Preparing Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-5 w-5 ml-2" />
                  </>
                )}
              </button>

              {/* Email Destination Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-blue-500" />
                  Your message will be sent to: <strong className="ml-1">info@climatecaresolutions.co.ke</strong>
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Clicking "Send Message" will open your email client with a pre-filled message.
                  Just review and click "Send" to complete your submission.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Quick Email</h4>
              <p className="text-gray-600 mb-3">Send us an email directly:</p>
              <a 
                href="mailto:info@climatecaresolutions.co.ke"
                className="text-blue-600 font-medium hover:text-blue-700 hover:underline"
              >
                info@climatecaresolutions.co.ke
              </a>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-3 rounded-full bg-green-100 text-green-600 mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Direct Call</h4>
              <p className="text-gray-600 mb-3">Call our customer service:</p>
              <a 
                href="tel:+254797801396"
                className="text-blue-600 font-medium hover:text-blue-700 hover:underline"
              >
                +254 797 801 396
              </a>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-3 rounded-full bg-purple-100 text-purple-600 mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Business Hours</h4>
              <p className="text-gray-600 mb-1">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-gray-600 mb-1">Saturday: 9:00 AM - 4:00 PM</p>
              <p className="text-red-600 font-medium">Emergency: 24/7 Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;