// src/components/Footer.jsx
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react'; // Import social media and contact icons

// Footer component
const Footer = () => {
  // Current year for copyright
  const currentYear = new Date().getFullYear();

  // Quick links array
  const quickLinks = [
    { text: "Home", href: "#home" }, // Home link
    { text: "About Us", href: "#about" }, // About link
    { text: "Services", href: "#services" }, // Services link
    { text: "Projects", href: "#projects" }, // Projects link
    { text: "Testimonials", href: "#testimonials" }, // Testimonials link
    { text: "Contact", href: "#contact" } // Contact link
  ];

  // Services links array
  const servicesLinks = [
    { text: "Residential Cooling" }, // Service 1
    { text: "Commercial HVAC" }, // Service 2
    { text: "Industrial Cooling" }, // Service 3
    { text: "Maintenance & Repair" }, // Service 4
    { text: "System Design" }, // Service 5
    { text: "Energy Solutions" } // Service 6
  ];

  // Social media links array
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, label: "Facebook" }, // Facebook
    { icon: <Twitter className="h-5 w-5" />, label: "Twitter" }, // Twitter
    { icon: <Instagram className="h-5 w-5" />, label: "Instagram" }, // Instagram
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" } // LinkedIn
  ];

  return (
    <footer className="bg-gray-900 text-white"> {/* Footer container */}
      <div className="container mx-auto px-4 py-12"> {/* Container with padding */}
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"> {/* Responsive grid */}
          
          {/* Company Info */}
          <div> {/* Company info column */}
            <div className="flex items-center space-x-3 mb-6"> {/* Logo and name container */}
              <div className="h-10 w-10 bg-blue-600 rounded-lg"></div> {/* Logo placeholder */}
              <div> {/* Company text */}
                <h3 className="text-xl font-bold">Mistcool Africa</h3> {/* Company name */}
                <p className="text-gray-400 text-sm">Cooling Solutions Experts</p> {/* Tagline */}
              </div>
            </div>
            <p className="text-gray-400 mb-6"> {/* Company description */}
              Leading provider of HVAC solutions across Africa, specializing in energy-efficient 
              and sustainable cooling systems for residential, commercial, and industrial spaces.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4"> {/* Social icons container */}
              {socialLinks.map((social, index) => ( // Map through social links
                <a 
                  key={index}
                  href="#" 
                  className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition" // Social icon link
                  aria-label={social.label} // Accessibility label
                >
                  {social.icon} {/* Render social icon */}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div> {/* Quick links column */}
            <h4 className="text-lg font-bold mb-6">Quick Links</h4> {/* Column title */}
            <ul className="space-y-3"> {/* Links list */}
              {quickLinks.map((link, index) => ( // Map through quick links
                <li key={index}> {/* List item */}
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition" // Link styling
                  >
                    {link.text} {/* Link text */}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div> {/* Services column */}
            <h4 className="text-lg font-bold mb-6">Our Services</h4> {/* Column title */}
            <ul className="space-y-3"> {/* Services list */}
              {servicesLinks.map((service, index) => ( // Map through services
                <li key={index}> {/* List item */}
                  <a href="#" className="text-gray-400 hover:text-white transition"> {/* Service link */}
                    {service.text} {/* Service text */}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div> {/* Contact info column */}
            <h4 className="text-lg font-bold mb-6">Contact Info</h4> {/* Column title */}
            <ul className="space-y-4"> {/* Contact details list */}
              <li className="flex items-start"> {/* Address item */}
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" /> {/* Location icon */}
                <span className="text-gray-400"> {/* Address text */}
                  Westlands Business Centre<br />Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center"> {/* Phone item */}
                <Phone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" /> {/* Phone icon */}
                <span className="text-gray-400">+254 723 456 789</span> {/* Phone number */}
              </li>
              <li className="flex items-center"> {/* Email item */}
                <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" /> {/* Email icon */}
                <span className="text-gray-400">info@mistcoolafrica.co.ke</span> {/* Email address */}
              </li>
            </ul>
            
            {/* Newsletter Signup */}
            <div className="mt-8"> {/* Newsletter container */}
              <h5 className="font-bold mb-4">Subscribe to Newsletter</h5> {/* Newsletter title */}
              <div className="flex"> {/* Newsletter form */}
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-grow px-4 py-2 rounded-l-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500" // Email input
                />
                <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition"> {/* Subscribe button */}
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm"> {/* Copyright container */}
          <div className="flex flex-col md:flex-row justify-between items-center"> {/* Copyright content */}
            <div className="mb-4 md:mb-0"> {/* Copyright text */}
              © {currentYear} Mistcool Africa. All rights reserved. {/* Copyright notice */}
            </div>
            <div className="flex flex-wrap justify-center gap-6"> {/* Additional links */}
              <a href="#" className="hover:text-white transition">Privacy Policy</a> {/* Privacy policy link */}
              <a href="#" className="hover:text-white transition">Terms of Service</a> {/* Terms link */}
              <a href="#" className="hover:text-white transition">Sitemap</a> {/* Sitemap link */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Export Footer component
export default Footer;