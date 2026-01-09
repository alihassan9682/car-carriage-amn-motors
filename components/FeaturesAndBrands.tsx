'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Wrench, Car, Award, Check } from 'lucide-react'

const FeaturesAndBrands = () => {
  const features = [
    {
      icon: Wrench,
      title: 'Modern Diagnostics',
      description: 'Using the latest computer scanning tools and diagnostic equipment to identify issues quickly and accurately.',
      buttonText: 'Read More',
      href: '/services'
    },
    {
      icon: Car,
      title: 'NCT Preparation',
      description: 'Comprehensive pre-NCT inspections and repairs to ensure your vehicle passes the test first time.',
      buttonText: 'Read More',
      href: '/services'
    },
    {
      icon: Award,
      title: 'Expert Repairs',
      description: 'Certified mechanics with the latest technology and manufacturer-approved parts for all repairs.',
      buttonText: 'Read More',
      href: '/services'
    }
  ]

  const brands = [
    { id: 'audi', name: 'Audi', logo: 'https://www.carlogos.org/car-logos/audi-logo.png' },
    { id: 'bmw', name: 'BMW', logo: 'https://www.carlogos.org/car-logos/bmw-logo.png' },
    { id: 'mercedes', name: 'Mercedes-Benz', logo: 'https://www.carlogos.org/car-logos/mercedes-benz-logo.png' },
    { id: 'volvo', name: 'Volvo', logo: 'https://www.carlogos.org/car-logos/volvo-logo.png' },
    { id: 'toyota', name: 'Toyota', logo: 'https://www.carlogos.org/car-logos/toyota-logo.png' },
    { id: 'citroen', name: 'Citroën', logo: 'https://www.carlogos.org/car-logos/citroen-logo.png' },
    { id: 'nissan', name: 'Nissan', logo: 'https://www.carlogos.org/car-logos/nissan-logo.png' },
    { id: 'vw', name: 'Volkswagen', logo: 'https://www.carlogos.org/car-logos/volkswagen-logo.png' },
    { id: 'honda', name: 'Honda', logo: 'https://www.carlogos.org/car-logos/honda-logo.png' },
    { id: 'ford', name: 'Ford', logo: 'https://www.carlogos.org/car-logos/ford-logo.png' },
    { id: 'skoda', name: 'Skoda', logo: 'https://www.carlogos.org/car-logos/skoda-logo.png' },
    { id: 'jaguar', name: 'Jaguar', logo: 'https://www.carlogos.org/car-logos/jaguar-logo.png' },
    { id: 'kia', name: 'Kia', logo: 'https://www.carlogos.org/car-logos/kia-logo.png' },
    { id: 'renault', name: 'Renault', logo: 'https://www.carlogos.org/car-logos/renault-logo.png' }
  ]

  return (
    <div className="bg-white">
      {/* Section A: Three Column Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="text-center group p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                  <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition-transform">
                    <IconComponent className="text-blue-600 w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <Link href={feature.href} className="text-blue-600 font-bold hover:text-blue-700 transition-colors flex items-center justify-center mx-auto">
                    {feature.buttonText}
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section B: Brand Showcase */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              We Repair All Makes of <span className="text-blue-600">Automobiles</span>
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              We Work With All Makes and Models of Vehicles
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            {brands.map((brand) => (
              <div key={brand.id} className="bg-white p-8 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors group">
                <div className="relative w-full h-12 grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="mt-4 text-xs font-bold text-gray-400 group-hover:text-gray-900 transition-colors uppercase tracking-widest">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeaturesAndBrands