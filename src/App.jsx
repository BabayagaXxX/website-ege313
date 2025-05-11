import { useState, useEffect } from 'react'
import './App.css'
import OceanConservation from './components/OceanConservation'
import OceanEducation from './components/OceanEducation'
import OceanFacts from './components/OceanFacts'
import Footer from './components/Footer'

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <button 
                onClick={scrollToTop}
                className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
              >
                OceanWave
              </button>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#facts" className="nav-link text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Facts</a>
                <a href="#education" className="nav-link text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Education</a>
                <a href="#conservation" className="nav-link text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Conservation</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -bottom-24 left-0 right-0 h-48 bg-blue-500/20 transform -skew-y-6 wave-animation"></div>
          <div className="absolute -bottom-12 left-0 right-0 h-24 bg-blue-400/20 transform -skew-y-3 wave-animation" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Dive Into The <span className="text-blue-600">Digital Ocean</span>
              </h1>
              <p className="text-xl text-gray-600">
                Explore the depths of digital innovation with our cutting-edge platform. Let us guide you through the waves of technology.
              </p>
              <div className="flex space-x-4">
                <a href="#facts" className="cta-button inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-lg">
                  Start Your Journey
                </a>
                <a href="#education" className="hover-lift inline-flex items-center px-6 py-3 border border-blue-200 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative hover-lift">
              <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="./src/assets/BG.jpg" 
                  alt="Ocean Waves" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section id="facts">
        <OceanFacts />
      </section>

      {/* Education Section */}
      <section id="education">
        <OceanEducation />
      </section>

      {/* Ocean Conservation Section */}
      <section id="conservation">
        <OceanConservation />
      </section>

      {/* Design Image Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" 
            alt="Ocean Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Discover the Beauty of Our Oceans</h2>
            <p className="text-xl text-blue-100">A journey through the wonders of marine life</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
