'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Home, Info, Wrench, Star, Calendar, Mail, HelpCircle } from 'lucide-react'

interface NavItem {
  name: string
  href: string
  icon: any
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems: NavItem[] = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Services', href: '/services', icon: Wrench },
    { name: 'Reviews', href: '/reviews', icon: Star },
    { name: 'Appointment', href: '/appointment', icon: Calendar },
    { name: 'Contact', href: '/contact', icon: Mail },
    { name: 'FAQ', href: '/faq', icon: HelpCircle }
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo3-removebg-preview.png"
                alt="All Motors Logo"
                width={150}
                height={80}
                className="h-auto w-auto max-h-24"
                priority
              />
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center text-gray-400 font-medium text-nowrap text-md hover:text-blue-900 transition-all duration-300 px-3 py-2 rounded-md hover:bg-blue-50 group"
                  >
                    <Icon className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-900 transition-colors" />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:cursor-pointer hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white border-t border-gray-200 shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center text-gray-400 font-bold text-lg hover:text-blue-900 hover:bg-blue-50 block px-4 py-3 rounded-md transition-all duration-200 border-l-4 border-transparent hover:border-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
