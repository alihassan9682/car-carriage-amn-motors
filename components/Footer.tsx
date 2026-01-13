'use client'

import Link from 'next/link'
import { Home, Star, Mail, Phone, MapPin, Clock } from 'lucide-react'

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
                <svg className="w-5 h-5 mr-3 text-blue-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.106"/>
                </svg>
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
                <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-blue-500" /> Mon-Sat</span>
                <span>9:00am - 6pm</span>
              </div>
              {/* <div className="flex items-center justify-between">
                <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-blue-500" /> Fri</span>
                <span>8:30am - 1pm</span>
              </div> */}
              <div className="flex items-center justify-between">
                <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-red-500" /> Sun</span>
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