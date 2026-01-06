'use client'

import React from 'react'

const Footer = () => {
  const services = [
    'Car Servicing',
    'Tyres',
    'NCT Prep',
    'Diagnostics'
  ]

  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4">AMN Motors</h3>
            <p className="text-gray-300 leading-relaxed">
              Your trusted local garage for diagnostics, repairs, and servicing.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p>Shankill, Dublin</p>
              <p>Phone: 0861770636</p>
              <p>Email: Info@amnmotors.com</p>
            </div>
          </div>

          {/* Column 4: Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <div className="space-y-2 text-gray-300">
              <p>Mon-Thru: 8:30am - 6pm</p>
              <p>Fri: 8:30am - 1pm</p>
              <p>Sat-Sun: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-400">
            © 2025 AMN Motors. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer