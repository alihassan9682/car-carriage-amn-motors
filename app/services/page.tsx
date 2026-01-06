'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const ServicesPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  const services = [
    {
      title: 'Car Servicing',
      image: 'https://images.unsplash.com/photo-1632823469850-1d4e8b2b6c8a?w=400&h=300&fit=crop'
    },
    {
      title: 'Car Electrics',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    },
    {
      title: 'Engine Diagnostics',
      image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&h=300&fit=crop'
    },
    {
      title: 'Tyre Centre',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop'
    },
    {
      title: 'Panel Beating',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=300&fit=crop'
    },
    {
      title: 'Car Battery Repair',
      image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop'
    },
    {
      title: 'NCT Preparation',
      image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=400&h=300&fit=crop'
    },
    {
      title: 'Spray Painting',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop'
    },
    {
      title: 'Car Safety Check',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=300&fit=crop'
    },
    {
      title: 'Clutch and Gearbox',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop'
    },
    {
      title: 'Brakes',
      image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=400&h=300&fit=crop'
    },
    {
      title: 'Exhausts',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Section A: Page Header */}
      <section className="bg-[#F5F5F5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl text-gray-700 md:text-5xl font-bold mb-4">Our Services</h1>
            <nav className="text-gray-600">
              <span className="hover:text-blue-600 cursor-pointer">Home</span>
              <span className="mx-2">&gt;</span>
              <span className="text-blue-600">Services</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Section B: Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                    READ MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section C: Contact & Map Area */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Map */}
            <div>
              <div className='h-3/4'>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h3>
                <div className="h-full w-full rounded-xl overflow-hidden border border-gray-200">
                  <iframe
                    title="AMN Motors Location"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3636.7487128375588!2d74.3440384!3d31.506432!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919018ac358e067%3A0x0!2zMzFCDU5JIDQ0LjMiTiA3NMKwMjAnOTAuMCJF!5e0!3m2!1sen!2s!4vYOUR_TIMESTAMP"
                    width="100%"
                    height="100%"
                    className="border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage