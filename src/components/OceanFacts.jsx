import React, { useState } from 'react';

const OceanFacts = () => {
  const [activeCategory, setActiveCategory] = useState('general');

  const factCategories = {
    general: {
      title: 'General Ocean Facts',
      facts: [
        'The ocean covers 71% of Earth\'s surface',
        'The average ocean depth is 12,100 feet',
        'The ocean contains 97% of Earth\'s water',
        'The Pacific Ocean is the largest and deepest ocean'
      ]
    },
    biodiversity: {
      title: 'Marine Life',
      facts: [
        'Scientists estimate there are 1-2 million marine species',
        'The blue whale is the largest animal ever known to exist',
        'Coral reefs support 25% of all marine life',
        'The ocean is home to the world\'s largest living structure (Great Barrier Reef)'
      ]
    },
    climate: {
      title: 'Climate Impact',
      facts: [
        'Oceans absorb 30% of CO2 emissions',
        'Sea levels are rising 3.3mm per year',
        'Ocean temperatures have increased by 0.88°C since 1900',
        '90% of global warming occurs in the ocean'
      ]
    },
    conservation: {
      title: 'Conservation Status',
      facts: [
        'Only 7% of the ocean is protected',
        '33% of fish stocks are overfished',
        '8 million tons of plastic enter oceans yearly',
        'Coral reefs could disappear by 2050'
      ]
    }
  };

  return (
    <div className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ocean Facts & Statistics</h2>
          <p className="text-xl text-gray-600">Discover fascinating facts about our oceans</p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(factCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              {factCategories[category].title}
            </button>
          ))}
        </div>

        {/* Facts Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {factCategories[activeCategory].facts.map((fact, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover-lift transition-all duration-300"
            >
              <div className="flex items-start">
                <span className="text-2xl mr-4">🌊</span>
                <p className="text-gray-600 text-lg">{fact}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to Learn More?</h3>
          <p className="text-gray-600 mb-8">
            Explore our comprehensive resources on ocean conservation and marine science
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#education"
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Explore Education
            </a>
            <a
              href="#conservation"
              className="px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors"
            >
              Conservation Efforts
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OceanFacts; 