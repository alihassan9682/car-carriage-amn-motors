'use client'

import React from 'react'
import Link from 'next/link'
import { Home, Star, Mail, Phone, MapPin, Clock, ChevronRight } from 'lucide-react'

const Footer = () => {
  const footerServices = [
    { name: 'Car Servicing', slug: 'car-servicing' },
    { name: 'Tyres Dublin', slug: 'tyres-dublin' },
    { name: 'Brake Pads', slug: 'brake-pads' },
    { name: 'Diagnostics', slug: 'fault-diagnosis' }
  ]

  const quickLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Reviews', href: '/reviews', icon: Star },
    { name: 'Contact', href: '/contact', icon: Mail }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1: About */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-500">AMN Motors</h3>
            <p className="text-gray-400 leading-relaxed">
              Your trusted local garage for diagnostics, repairs, and professional servicing.
              Over 30 years of experience serving the Dublin community.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 border-blue-500 w-12 pb-2">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="flex items-center text-gray-400 hover:text-blue-500 transition-colors group">
                    <link.icon className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 border-blue-500 w-12 pb-2">Contact Info</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                <p>Hollystown, Meath, D15 T622</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                <p>0861770636</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                <p>Info@amnmotors.com</p>
              </div>
            </div>
          </div>

          {/* Column 4: Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 border-blue-500 w-12 pb-2">Opening Hours</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center justify-between">
                <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-blue-500" /> Mon-Thu</span>
                <span>8:30am - 6pm</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-blue-500" /> Fri</span>
                <span>8:30am - 1pm</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-red-500" /> Sat-Sun</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} AMN Motors. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer