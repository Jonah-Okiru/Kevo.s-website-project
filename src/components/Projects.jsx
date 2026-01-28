// src/components/Projects.jsx
import { useState } from 'react';
import { ExternalLink, X as CloseIcon, Calendar, MapPin, Users, CheckCircle, ArrowLeft, ArrowRight, Clock, Building, Home, Factory } from 'lucide-react';

const Projects = () => {
  // State for selected category, selected project, and current slide
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Enhanced projects data with more details
  const projects = [
    {
      id: 1,
      category: "Commercial",
      title: "Nairobi Office Tower",
      description: "Complete HVAC system for 30-story office building",
      detailedDescription: "We installed a state-of-the-art VRF (Variable Refrigerant Flow) system for this 30-story commercial tower in Nairobi's central business district. The project involved designing and installing a centralized cooling system that serves over 200 office spaces while maintaining optimal energy efficiency.",
      imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
      ],
      location: "Nairobi CBD, Kenya",
      date: "January 2024",
      duration: "4 Months",
      size: "30,000 sq ft",
      budget: "KES 8.5 Million",
      teamSize: "12 Engineers",
      challenges: [
        "Limited installation space",
        "Minimizing disruption to ongoing business",
        "Energy efficiency requirements",
        "Noise reduction specifications"
      ],
      solutions: [
        "Modular VRF system installation",
        "Night and weekend work schedule",
        "Energy recovery ventilation system",
        "Sound-dampening equipment"
      ],
      results: [
        "40% energy savings compared to previous system",
        "99.9% uptime since installation",
        "Improved indoor air quality",
        "Reduced maintenance costs by 30%"
      ],
      technologies: ["VRF Systems", "Building Management System", "Smart Thermostats", "Energy Recovery Units"],
      client: "Prime Commercial Properties Ltd"
    },
    {
      id: 2,
      category: "Industrial",
      title: "Mombasa Cold Storage",
      description: "Large-scale refrigeration system for seafood export",
      detailedDescription: "This project involved designing and installing a comprehensive cold storage solution for a seafood export company in Mombasa. The system maintains precise temperature control across multiple storage zones for different seafood products.",
      imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
      ],
      location: "Mombasa Port, Kenya",
      date: "November 2023",
      duration: "3 Months",
      size: "15,000 sq ft",
      budget: "KES 6.2 Million",
      teamSize: "8 Engineers",
      challenges: [
        "Marine environment corrosion",
        "Continuous operation requirement",
        "Multiple temperature zones",
        "Food safety compliance"
      ],
      solutions: [
        "Stainless steel components",
        "Redundant compressor system",
        "Zoned temperature control",
        "HACCP compliant design"
      ],
      results: [
        "Zero spoilage since installation",
        "30% energy efficiency improvement",
        "24/7 reliable operation",
        "Full compliance with export standards"
      ],
      technologies: ["Industrial Chillers", "Cold Rooms", "Blast Freezers", "Monitoring System"],
      client: "Ocean Harvest Seafood Exporters"
    },
    {
      id: 3,
      category: "Residential",
      title: "Karen Luxury Villas",
      description: "Smart home cooling system for luxury residential complex",
      detailedDescription: "We implemented a complete smart home cooling solution for a luxury villa complex in Karen, featuring zone-based temperature control, smart integration, and energy-efficient design for maximum comfort.",
      imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
      ],
      location: "Karen, Nairobi",
      date: "September 2023",
      duration: "2 Months",
      size: "8,000 sq ft (per villa)",
      budget: "KES 4.8 Million",
      teamSize: "6 Engineers",
      challenges: [
        "Architectural integration",
        "Silent operation requirement",
        "Smart home integration",
        "Aesthetic considerations"
      ],
      solutions: [
        "Concealed ductwork design",
        "High-efficiency silent units",
        "Home automation integration",
        "Custom grille designs"
      ],
      results: [
        "25% energy savings",
        "Perfect integration with smart home",
        "Near-silent operation",
        "Increased property value"
      ],
      technologies: ["Ducted Systems", "Smart Thermostats", "Zone Control", "Home Automation"],
      client: "Elite Homes Development"
    },
    {
      id: 4,
      category: "Commercial",
      title: "Kisumu Mall",
      description: "Central cooling system for shopping mall",
      detailedDescription: "Centralized HVAC system installation for a large shopping mall in Kisumu, designed to handle high occupancy while maintaining comfort across all retail spaces.",
      imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
      ],
      location: "Kisumu, Kenya",
      date: "July 2023",
      duration: "5 Months",
      size: "50,000 sq ft",
      budget: "KES 12 Million",
      teamSize: "15 Engineers",
      challenges: [
        "High occupancy variations",
        "Multiple tenant requirements",
        "Retail operation hours",
        "Public space safety"
      ],
      solutions: [
        "Variable air volume system",
        "Individual tenant controls",
        "Scheduled operation modes",
        "Enhanced air filtration"
      ],
      results: [
        "35% more energy efficient than standard",
        "Individual tenant billing capability",
        "Enhanced air quality",
        "Reduced maintenance calls"
      ],
      technologies: ["Chilled Water System", "AHUs", "VAV Boxes", "BMS"],
      client: "Lakeview Mall Management"
    },
    {
      id: 5,
      category: "Industrial",
      title: "Nakuru Factory",
      description: "Process cooling for manufacturing plant",
      detailedDescription: "Industrial process cooling system for a manufacturing plant in Nakuru, designed to maintain precise temperatures for production processes and equipment cooling.",
      imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
      ],
      location: "Nakuru Industrial Area",
      date: "May 2023",
      duration: "4 Months",
      size: "25,000 sq ft",
      budget: "KES 7.5 Million",
      teamSize: "10 Engineers",
      challenges: [
        "Process heat load variations",
        "Equipment compatibility",
        "Factory floor layout",
        "Continuous operation"
      ],
      solutions: [
        "Process chillers with redundancy",
        "Customized heat exchangers",
        "Overhead piping design",
        "24/7 monitoring system"
      ],
      results: [
        "Process efficiency improved by 20%",
        "Equipment lifespan extended",
        "Zero production downtime",
        "Reduced water consumption"
      ],
      technologies: ["Process Chillers", "Cooling Towers", "Heat Exchangers", "PLC Controls"],
      client: "Nakuru Manufacturing Co."
    },
    {
      id: 6,
      category: "Residential",
      title: "Runda Estate Homes",
      description: "Ducted air conditioning for residential estate",
      detailedDescription: "Complete ducted air conditioning system installation for a luxury residential estate in Runda, featuring whole-home comfort solutions with individual zone controls.",
      imageUrl: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
      ],
      location: "Runda, Nairobi",
      date: "March 2023",
      duration: "3 Months",
      size: "6,500 sq ft (average)",
      budget: "KES 3.8 Million",
      teamSize: "5 Engineers",
      challenges: [
        "Multiple house designs",
        "Architectural preservation",
        "Noise minimization",
        "Energy efficiency targets"
      ],
      solutions: [
        "Custom ductwork designs",
        "Minimally invasive installation",
        "Sound-insulated equipment",
        "High SEER rated units"
      ],
      results: [
        "30% more efficient than code",
        "Hidden installation - no visual impact",
        "Whisper-quiet operation",
        "Increased home value by 15%"
      ],
      technologies: ["Ducted Mini-Splits", "Zone Controls", "Smart Thermostats", "Air Purification"],
      client: "Runda Estate Development"
    }
  ];

  // Filter categories
  const categories = ["All", "Commercial", "Residential", "Industrial"];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Handle project detail view
  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setCurrentSlide(0);
  };

  // Handle slide navigation
  const nextSlide = () => {
    if (selectedProject) {
      const totalImages = [selectedProject.imageUrl, ...selectedProject.additionalImages].length;
      setCurrentSlide((prev) => (prev + 1) % totalImages);
    }
  };

  const prevSlide = () => {
    if (selectedProject) {
      const totalImages = [selectedProject.imageUrl, ...selectedProject.additionalImages].length;
      setCurrentSlide((prev) => (prev - 1 + totalImages) % totalImages);
    }
  };

  // Get all images for current project
  const getProjectImages = () => {
    if (!selectedProject) return [];
    return [selectedProject.imageUrl, ...selectedProject.additionalImages];
  };

  return (
    <>
      <section id="projects" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Recent Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of successful cooling system installations across Africa
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button 
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center ${
                  selectedCategory === category 
                    ? "bg-blue-600 text-white shadow-lg" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md"
                }`}
              >
                {category === "Commercial" && <Building className="h-4 w-4 mr-2" />}
                {category === "Residential" && <Home className="h-4 w-4 mr-2" />}
                {category === "Industrial" && <Factory className="h-4 w-4 mr-2" />}
                {category}
                {selectedCategory === category && (
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                    {filteredProjects.length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white h-full flex flex-col"
              >
                {/* Project Image */}
                <div className="h-48 relative overflow-hidden bg-gray-100">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.className = `h-48 bg-gradient-to-br from-gray-300 to-gray-500 relative overflow-hidden`;
                    }}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`bg-white/90 backdrop-blur-sm text-sm font-medium px-3 py-1 rounded-full flex items-center ${
                      project.category === "Commercial" ? "text-blue-600" :
                      project.category === "Residential" ? "text-green-600" :
                      "text-orange-600"
                    }`}>
                      {project.category === "Commercial" && <Building className="h-3 w-3 mr-1" />}
                      {project.category === "Residential" && <Home className="h-3 w-3 mr-1" />}
                      {project.category === "Industrial" && <Factory className="h-3 w-3 mr-1" />}
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                  
                  {/* Project Details */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        {project.location}
                      </div>
                      <div className="text-sm text-gray-500">
                        {project.date}
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => handleViewDetails(project)}
                      className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center group"
                    >
                      View Details
                      <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
            <button 
              onClick={() => handleCategorySelect("All")}
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 text-lg px-6 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              View All Projects
              <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className={`bg-white rounded-lg ${isFullScreen ? 'w-full h-full' : 'max-w-6xl w-full max-h-[90vh]'} overflow-y-auto transition-all duration-300`}>
            <div className="p-6 md:p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      selectedProject.category === "Commercial" ? "bg-blue-100 text-blue-600" :
                      selectedProject.category === "Residential" ? "bg-green-100 text-green-600" :
                      "bg-orange-100 text-orange-600"
                    }`}>
                      {selectedProject.category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{selectedProject.title}</h2>
                  <p className="text-gray-600">{selectedProject.description}</p>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>

              {/* Image Gallery */}
              <div className="relative mb-8 rounded-xl overflow-hidden bg-gray-100">
                <div className="h-64 md:h-96 relative">
                  <img 
                    src={getProjectImages()[currentSlide]} 
                    alt={`${selectedProject.title} - Image ${currentSlide + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation Arrows */}
                  <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  {/* Fullscreen Toggle */}
                  <button 
                    onClick={() => setIsFullScreen(!isFullScreen)}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                  >
                    {isFullScreen ? 'Exit Fullscreen' : 'Fullscreen'}
                  </button>

                  {/* Slide Indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {getProjectImages().map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 w-2 rounded-full transition-all ${
                          currentSlide === index 
                            ? 'bg-white w-8' 
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column - Project Details */}
                <div>
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 text-blue-800">Project Overview</h3>
                    <p className="text-gray-700">{selectedProject.detailedDescription}</p>
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Calendar className="h-4 w-4 text-blue-500 mr-2" />
                        <span className="font-medium">Project Date</span>
                      </div>
                      <p className="text-gray-700">{selectedProject.date}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Clock className="h-4 w-4 text-blue-500 mr-2" />
                        <span className="font-medium">Duration</span>
                      </div>
                      <p className="text-gray-700">{selectedProject.duration}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Building className="h-4 w-4 text-blue-500 mr-2" />
                        <span className="font-medium">Size</span>
                      </div>
                      <p className="text-gray-700">{selectedProject.size}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Users className="h-4 w-4 text-blue-500 mr-2" />
                        <span className="font-medium">Team Size</span>
                      </div>
                      <p className="text-gray-700">{selectedProject.teamSize}</p>
                    </div>
                  </div>

                  {/* Client Information */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 text-blue-800">Client</h3>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-medium text-blue-800">{selectedProject.client}</p>
                      <p className="text-gray-600 mt-2">Project delivered on time and within budget, exceeding client expectations.</p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Challenges & Results */}
                <div>
                  {/* Challenges */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 text-blue-800">Challenges</h3>
                    <ul className="space-y-3">
                      {selectedProject.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 text-blue-800">Our Solutions</h3>
                    <ul className="space-y-3">
                      {selectedProject.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 text-blue-800">Results & Achievements</h3>
                    <ul className="space-y-3">
                      {selectedProject.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  {selectedProject.technologies && (
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-blue-800">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-8 border-t border-gray-200 flex justify-between">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  Close
                </button>
                <button 
                  onClick={() => {
                    // You could implement a share functionality here
                    alert('Share functionality would go here');
                  }}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Download Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;