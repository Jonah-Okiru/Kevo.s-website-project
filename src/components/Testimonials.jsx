// src/components/Testimonials.jsx
import { Star, Quote } from 'lucide-react'; // Import star and quote icons

// Testimonials section component
const Testimonials = () => {
  // Testimonials data array
  const testimonials = [
    {
      name: "James Kamau", // Client name
      role: "Facility Manager", // Client role
      company: "Nairobi Business Park", // Client company
      content: "Climate Care Solutions installed our office cooling system 3 years ago and it's been running perfectly. Their maintenance team is always prompt and professional.", // Testimonial content
      rating: 5, // Star rating
      imageColor: "bg-blue-100" // Placeholder color
    },
    {
      name: "Sarah Johnson",
      role: "Hotel Owner",
      company: "Coast Paradise Resort",
      content: "The energy-efficient system they installed reduced our electricity bills by 30%. Excellent service from design to installation.",
      rating: 5,
      imageColor: "bg-green-100"
    },
    {
      name: "David Ochieng",
      role: "Factory Director",
      company: "Industrial Solutions Ltd",
      content: "Their industrial cooling system has been crucial for our production process. Reliable and efficient service for 5 years running.",
      rating: 5,
      imageColor: "bg-purple-100"
    }
  ];

  // Client logos data - actual companies an HVAC business might work with
  const clientLogos = [
    {
      name: "Kenya Power",
      logo: "/logos/kplc-logo.png", // Placeholder path - update with actual file
      alt: "Kenya Power Logo"
    },
    {
      name: "Safaricom",
      logo: "/logos/safaricom-logo.png",
      alt: "Safaricom Logo"
    },
    {
      name: "Nairobi Hospital",
      logo: "/logos/nairobi-hospital-logo.jpg",
      alt: "Nairobi Hospital Logo"
    },
    {
      name: "Safari Park Hotel",
      logo: "/logos/safari-park-logo.jpg",
      alt: "Safari Park Hotel Logo"
    },
    {
      name: "Uchumi Supermarkets",
      logo: "/logos/uchumi-logo.jpg",
      alt: "Uchumi Supermarkets Logo"
    },
    {
      name: "Bidco Africa",
      logo: "/logos/bidco-logo.jpg",
      alt: "Bidco Africa Logo"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50"> {/* Testimonials section */}
      <div className="container mx-auto px-4"> {/* Container with padding */}
        
        {/* Section Header */}
        <div className="text-center mb-16"> {/* Centered header */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4"> {/* Quote icon container */}
            <Quote className="h-8 w-8 text-blue-600" /> {/* Quote icon */}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"> {/* Section title */}
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto"> {/* Section description */}
            Trusted by businesses and homeowners across Africa for reliable cooling solutions
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8"> {/* Three-column grid */}
          {testimonials.map((testimonial, index) => ( // Map through testimonials
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-8 relative" // Testimonial card
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-blue-100" /> {/* Decorative quote icon */}
              
              {/* Rating Stars */}
              <div className="flex mb-6"> {/* Stars container */}
                {[...Array(testimonial.rating)].map((_, i) => ( // Render star icons based on rating
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" /> // Star icon
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-600 mb-8 italic">"{testimonial.content}"</p> {/* Testimonial text */}

              {/* Client Info */}
              <div className="flex items-center"> {/* Client info container */}
                <div className={`w-12 h-12 rounded-full ${testimonial.imageColor} flex items-center justify-center text-gray-700 font-bold mr-4`}> {/* Client avatar placeholder */}
                  {testimonial.name.charAt(0)} {/* First letter of name */}
                </div>
                <div> {/* Client details */}
                  <div className="font-bold text-gray-800">{testimonial.name}</div> {/* Client name */}
                  <div className="text-gray-600">{testimonial.role}</div> {/* Client role */}
                  <div className="text-sm text-gray-500">{testimonial.company}</div> {/* Client company */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-20 pt-12 border-t border-gray-200"> {/* Client logos section */}
          <p className="text-center text-gray-600 mb-8">Trusted by leading companies</p> {/* Section label */}
          
          {/* Updated Logos Grid with actual images */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-8 items-center"> {/* Logos grid */}
            {clientLogos.map((client, index) => ( // Map through actual client logos
              <div 
                key={index}
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100" // Logo container with hover effect
              >
                {/* Client Logo Image */}
                <img 
                  src={client.logo} 
                  alt={client.alt}
                  className="h-auto w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100" // Grayscale effect on hover
                  onError={(e) => { // Fallback in case image doesn't load
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="text-center">
                        <div class="text-gray-400 font-semibold text-sm">${client.name}</div>
                      </div>
                    `;
                  }}
                />
              </div>
            ))}
          </div>

          {/* Alternative: If you want to display the company names alongside logos */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              Serving clients across various sectors including healthcare, hospitality, retail, and manufacturing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export Testimonials component
export default Testimonials;