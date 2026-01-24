// src/components/Contact.jsx
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'; // Import contact icons
import { useState } from 'react'; // Import useState hook for form state

// Contact section component
const Contact = () => {
  // Form state using useState hook
  const [formData, setFormData] = useState({
    name: '', // Name field
    email: '', // Email field
    phone: '', // Phone field
    service: '', // Service selection
    message: '' // Message field
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from event target
    setFormData(prev => ({ // Update form data state
      ...prev, // Spread previous state
      [name]: value // Update specific field
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log('Form submitted:', formData); // Log form data (replace with API call)
    // Add your form submission logic here
    alert('Thank you for your message! We will contact you soon.'); // Success message
  };

  // Contact information array
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />, // Phone icon
      title: "Call Us", // Contact method title
      details: ["+254 723 456 789", "+254 700 987 654"], // Contact details array
      action: "Call Now" // Action text
    },
    {
      icon: <Mail className="h-6 w-6" />, // Email icon
      title: "Email Us",
      details: ["info@mistcoolafrica.co.ke", "support@mistcoolafrica.co.ke"],
      action: "Send Email"
    },
    {
      icon: <MapPin className="h-6 w-6" />, // Location icon
      title: "Visit Us",
      details: ["Nairobi Office: Westlands", "Mombasa Branch: Nyali"],
      action: "Get Directions"
    },
    {
      icon: <Clock className="h-6 w-6" />, // Hours icon
      title: "Working Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM", "Emergency: 24/7"],
      action: "Book Appointment"
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white"> {/* Contact section */}
      <div className="container mx-auto px-4"> {/* Container with padding */}
        
        {/* Section Header */}
        <div className="text-center mb-16"> {/* Centered header */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"> {/* Section title */}
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto"> {/* Section description */}
            Contact us for professional cooling solutions. Our team is ready to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12"> {/* Two-column layout */}
          
          {/* Left Column - Contact Information */}
          <div> {/* Contact info container */}
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Contact Information</h3> {/* Subtitle */}
            
            {/* Contact Info Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12"> {/* Contact info grid */}
              {contactInfo.map((info, index) => ( // Map through contact info
                <div key={index} className="bg-gray-50 rounded-xl p-6"> {/* Contact info card */}
                  <div className="inline-flex p-3 rounded-lg bg-blue-100 text-blue-600 mb-4"> {/* Icon container */}
                    {info.icon} {/* Render icon */}
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{info.title}</h4> {/* Contact method title */}
                  {info.details.map((detail, idx) => ( // Map through details
                    <p key={idx} className="text-gray-600 mb-1">{detail}</p> // Detail text
                  ))}
                  <button className="mt-4 text-blue-600 font-medium hover:text-blue-700 text-sm"> {/* Action button */}
                    {info.action} {/* Action text */}
                  </button>
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white"> {/* Emergency contact card */}
              <div className="flex items-start"> {/* Emergency content container */}
                <div className="bg-white/20 p-3 rounded-lg mr-4"> {/* Icon background */}
                  <Phone className="h-6 w-6" /> {/* Phone icon */}
                </div>
                <div> {/* Emergency text content */}
                  <h4 className="text-xl font-bold mb-2">Emergency Service</h4> {/* Emergency title */}
                  <p className="text-red-100 mb-4">24/7 emergency repair services available</p> {/* Emergency description */}
                  <div className="text-2xl font-bold">0700 123 456</div> {/* Emergency number */}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8"> {/* Contact form container */}
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3> {/* Form title */}
            
            <form onSubmit={handleSubmit}> {/* Contact form */}
              <div className="grid md:grid-cols-2 gap-6 mb-6"> {/* Two-column form fields */}
                {/* Name Input */}
                <div> {/* Name field container */}
                  <label className="block text-gray-700 mb-2 font-medium">Full Name</label> {/* Label */}
                  <input
                    type="text"
                    name="name" // Field name
                    value={formData.name} // Bind to state
                    onChange={handleChange} // Handle changes
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    placeholder="Your name" // Placeholder text
                    required // Required field
                  />
                </div>

                {/* Email Input */}
                <div> {/* Email field container */}
                  <label className="block text-gray-700 mb-2 font-medium">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div className="mb-6"> {/* Phone field container */}
                <label className="block text-gray-700 mb-2 font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  placeholder="+254 700 000 000"
                  required
                />
              </div>

              {/* Service Selection */}
              <div className="mb-6"> {/* Service select container */}
                <label className="block text-gray-700 mb-2 font-medium">Service Needed</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  required
                >
                  <option value="">Select a service</option> {/* Default option */}
                  <option value="residential">Residential Cooling</option>
                  <option value="commercial">Commercial HVAC</option>
                  <option value="industrial">Industrial Cooling</option>
                  <option value="maintenance">Maintenance & Repair</option>
                  <option value="consultation">Free Consultation</option>
                </select>
              </div>

              {/* Message Textarea */}
              <div className="mb-8"> {/* Message field container */}
                <label className="block text-gray-700 mb-2 font-medium">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4" // Number of rows
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
                  placeholder="Tell us about your cooling needs..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit" // Form submission type
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center" // Button styling
              >
                Send Message {/* Button text */}
                <Send className="h-5 w-5 ml-2" /> {/* Send icon */}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export Contact component
export default Contact;