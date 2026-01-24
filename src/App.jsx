// src/App.jsx

// Importing all components
import Header from './components/Header'; // Header component with navigation
import Hero from './components/Hero'; // Hero section component
import About from './components/About'; // About section component
import Services from './components/Services'; // Services section component
import Projects from './components/Projects'; // Projects section component
import Testimonials from './components/Testimonials'; // Testimonials section component
import Contact from './components/Contact'; // Contact section component
import Footer from './components/Footer'; // Footer component

// Main App component that renders all sections
function App() {
  return (
    <div className="min-h-screen bg-gray-50"> {/* Main container with minimum full screen height */}
      <Header /> {/* Navigation header */}
      <main> {/* Main content area */}
        <Hero /> {/* Hero banner section */}
        <About /> {/* About company section */}
        <Services /> {/* Services offered section */}
        <Projects /> {/* Projects portfolio section */}
        <Testimonials /> {/* Client testimonials */}
        <Contact /> {/* Contact information section */}
      </main>
      <Footer /> {/* Page footer */}
    </div>
  );
}

// Export App component as default
export default App;