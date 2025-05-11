import React, { useState } from 'react';

const oceanConservationData = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    title: "Plastic Pollution Crisis",
    description: "A sea turtle entangled in plastic waste, highlighting the devastating impact of marine debris on ocean wildlife. Over 8 million tons of plastic enter our oceans annually.",
    category: "Pollution"
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1520942702018-0862200e6873?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    title: "Coral Reef Degradation",
    description: "Bleached coral reefs showing the effects of climate change and ocean acidification. 50% of the world's coral reefs have been lost in the last 30 years.",
    category: "Climate Change"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    title: "Overfishing Impact",
    description: "Empty fishing nets symbolizing the threat of overfishing. 90% of large fish populations have been depleted due to overfishing.",
    category: "Marine Life"
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    title: "Ocean Cleanup Efforts",
    description: "Volunteers participating in beach cleanup, demonstrating how individual actions can make a difference in ocean conservation.",
    category: "Solutions"
  },
  {
    id: 5,
    imageUrl: "https://ars.els-cdn.com/content/image/1-s2.0-S0301479721019514-ga1.jpg",
    title: "Marine Protected Areas",
    description: "Thriving marine ecosystem in a protected area, showing the positive impact of conservation efforts and sustainable management.",
    category: "Solutions"
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    title: "Ocean Acidification",
    description: "Shellfish affected by ocean acidification, illustrating how increased CO2 levels are changing ocean chemistry and threatening marine life.",
    category: "Climate Change"
  }
];

const Modal = ({ isOpen, onClose, item }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-2xl w-[90%] max-w-2xl max-h-[80vh] overflow-hidden shadow-2xl transform transition-all duration-300 scale-100"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-all hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal content */}
        <div className="flex flex-col h-full">
          {/* Image section */}
          <div className="w-full h-48 sm:h-64">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content section */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {item.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
              
              <p className="text-gray-600 leading-relaxed">{item.description}</p>

              {/* Additional information section */}
              <div className="pt-4 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">How You Can Help</h4>
                <ul className="space-y-2 text-gray-600">
                  {item.category === "Pollution" && (
                    <>
                      <li>• Reduce single-use plastic consumption</li>
                      <li>• Participate in beach cleanups</li>
                      <li>• Properly dispose of waste</li>
                    </>
                  )}
                  {item.category === "Climate Change" && (
                    <>
                      <li>• Reduce carbon footprint</li>
                      <li>• Support renewable energy initiatives</li>
                      <li>• Advocate for climate action</li>
                    </>
                  )}
                  {item.category === "Marine Life" && (
                    <>
                      <li>• Choose sustainable seafood</li>
                      <li>• Support marine conservation organizations</li>
                      <li>• Reduce chemical runoff</li>
                    </>
                  )}
                  {item.category === "Solutions" && (
                    <>
                      <li>• Volunteer for conservation projects</li>
                      <li>• Support marine protected areas</li>
                      <li>• Educate others about ocean conservation</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OceanConservation = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ocean Conservation Awareness</h2>
          <p className="text-xl text-gray-600">Understanding the challenges and solutions for protecting our oceans</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {oceanConservationData.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              onClick={() => handleCardClick(item)}
            >
              <div className="relative h-64">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal 
        isOpen={selectedItem !== null} 
        onClose={handleCloseModal} 
        item={selectedItem}
      />
    </div>
  );
};

export default OceanConservation; 