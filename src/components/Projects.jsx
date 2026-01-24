// src/components/Projects.jsx
import { ExternalLink } from 'lucide-react'; // Import external link icon

// Projects section component
const Projects = () => {
  // Projects data array
  const projects = [
    {
      category: "Commercial", // Project category
      title: "Nairobi Office Tower", // Project title
      description: "Complete HVAC system for 30-story office building", // Project description
      imageColor: "from-blue-500 to-blue-700" // Gradient colors for placeholder
    },
    {
      category: "Industrial",
      title: "Mombasa Cold Storage",
      description: "Large-scale refrigeration system for seafood export",
      imageColor: "from-green-500 to-green-700"
    },
    {
      category: "Residential",
      title: "Karen Luxury Villas",
      description: "Smart home cooling system for luxury residential complex",
      imageColor: "from-purple-500 to-purple-700"
    },
    {
      category: "Commercial",
      title: "Kisumu Mall",
      description: "Central cooling system for shopping mall",
      imageColor: "from-orange-500 to-orange-700"
    },
    {
      category: "Industrial",
      title: "Nakuru Factory",
      description: "Process cooling for manufacturing plant",
      imageColor: "from-red-500 to-red-700"
    },
    {
      category: "Residential",
      title: "Runda Estate Homes",
      description: "Ducted air conditioning for residential estate",
      imageColor: "from-teal-500 to-teal-700"
    }
  ];

  // Filter categories
  const categories = ["All", "Commercial", "Residential", "Industrial"];

  return (
    <section id="projects" className="py-16 md:py-24 bg-white"> {/* Projects section */}
      <div className="container mx-auto px-4"> {/* Container with padding */}
        
        {/* Section Header */}
        <div className="text-center mb-12"> {/* Centered header */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"> {/* Section title */}
            Our Recent Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto"> {/* Section description */}
            Explore our portfolio of successful cooling system installations across Africa
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12"> {/* Filter buttons container */}
          {categories.map((category) => ( // Map through categories
            <button 
              key={category}
              className={`px-6 py-2 rounded-full font-medium transition ${ // Button styling
                category === "All" 
                  ? "bg-blue-600 text-white" // Active state
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200" // Inactive state
              }`}
            >
              {category} {/* Category name */}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Responsive grid */}
          {projects.map((project, index) => ( // Map through projects
            <div 
              key={index} 
              className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white" // Project card
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.imageColor} relative overflow-hidden`}> {/* Image container */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div> {/* Hover overlay */}
                <div className="absolute top-4 left-4"> {/* Category badge */}
                  <span className="bg-white/90 backdrop-blur-sm text-sm font-medium px-3 py-1 rounded-full">
                    {project.category} {/* Display category */}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6"> {/* Content container */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3> {/* Project title */}
                <p className="text-gray-600 mb-4">{project.description}</p> {/* Project description */}
                
                {/* Project Details */}
                <div className="flex items-center justify-between"> {/* Details container */}
                  <div className="text-sm text-gray-500"> {/* Location and size */}
                    <div>Nairobi, Kenya</div> {/* Project location */}
                    <div>5,000 sq ft</div> {/* Project size */}
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center"> {/* View details button */}
                    View Details
                    <ExternalLink className="h-4 w-4 ml-2" /> {/* External link icon */}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-12"> {/* View all container */}
          <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 text-lg"> {/* View all button */}
            View All Projects
            <span className="ml-2">→</span> {/* Arrow icon */}
          </button>
        </div>
      </div>
    </section>
  );
};

// Export Projects component
export default Projects;