'use client'

import React from 'react'
import Image from 'next/image'
import { Wrench, Car, Award, Check } from 'lucide-react'

const FeaturesAndBrands = () => {
  const features = [
    {
      icon: Wrench,
      title: 'Modern Diagnostics',
      description: 'Using the latest computer scanning tools and diagnostic equipment to identify issues quickly and accurately.',
      buttonText: 'Read More'
    },
    {
      icon: Car,
      title: 'NCT Preparation',
      description: 'Comprehensive pre-NCT inspections and repairs to ensure your vehicle passes the test first time.',
      buttonText: 'Read More'
    },
    {
      icon: Award,
      title: 'Expert Repairs',
      description: 'Certified mechanics with the latest technology and manufacturer-approved parts for all repairs.',
      buttonText: 'Read More'
    }
  ]

  const carBrands = [
    'Toyota', 'Ford', 'Volkswagen', 'BMW',
    'Audi', 'Nissan', 'Hyundai', 'Mercedes'
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
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="text-blue-600 w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    {feature.buttonText}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section B: Car Brands We Service */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=800&q=80"
                alt="Modern garage with car"
                width={800}
                height={600}
                className="rounded-lg shadow-lg object-cover w-full h-96"
              />
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Car Brands We Service
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We service all major makes and models using manufacturer-approved parts and 
                the latest diagnostic equipment. Our certified technicians have experience 
                with European, Asian, and American vehicles, ensuring quality service 
                regardless of your car's brand.
              </p>

              {/* Brand List */}
              <div className="grid grid-cols-2 gap-4">
                {carBrands.map((brand, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="text-blue-600 w-5 h-5" />
                    <span className="text-gray-700 font-medium">{brand}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeaturesAndBrands