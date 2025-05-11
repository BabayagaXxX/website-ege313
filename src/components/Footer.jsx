import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">OceanWave</h3>
            <p className="text-blue-100">
              Dedicated to raising awareness about ocean conservation and marine life protection through education and information.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#facts" className="text-blue-100 hover:text-white transition-colors">
                  Ocean Facts
                </a>
              </li>
              <li>
                <a href="#education" className="text-blue-100 hover:text-white transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#conservation" className="text-blue-100 hover:text-white transition-colors">
                  Conservation
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://oceanservice.noaa.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors">
                  NOAA Ocean Service
                </a>
              </li>
              <li>
                <a href="https://www.worldwildlife.org/initiatives/oceans" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors">
                  WWF Oceans
                </a>
              </li>
              <li>
                <a href="https://www.nationalgeographic.com/environment/oceans/" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors">
                  National Geographic Oceans
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-blue-100 mb-4">
              Always visit to our Website for the latest ocean conservation news and updates.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 text-sm">
              © {currentYear} OceanWave. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 