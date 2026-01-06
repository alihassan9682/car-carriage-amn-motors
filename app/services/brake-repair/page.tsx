'use client'

import { useState } from 'react'
import { Check, Phone, Mail } from 'lucide-react'

const BrakeRepairPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form Data:', formData)
    alert('Message Sent!')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const brakeServices = [
    'ABS Brake Repair',
    'Brake Fluid Check',
    'Brake Pads',
    'Handbrake Adjustment',
    'Brake Disc Replacement',
    'Brake System Diagnosis',
    'Emergency Brake Repair',
    'Brake Line Inspection'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="text-sm text-gray-500 mb-2">
            Home / Services / Brake Repair
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          
          {/* Left Side - Main Content (70%) */}
          <div className="lg:col-span-7">
            {/* Title */}
            <h1 className="text-4xl font-bold text-blue-600 mb-8">Car Brake Repair</h1>
            
            {/* Main Image */}
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1486262715619-01b80258e715?auto=format&fit=crop&w=1000&q=80"
                alt="Mechanic working on car brakes"
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Service Lists */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                {brakeServices.slice(0, 4).map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 mb-3">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              <div>
                {brakeServices.slice(4, 8).map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 mb-3">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description Text */}
            <div className="mb-8">
              <p className="text-gray-600 leading-relaxed">
                Your vehicle's braking system is one of the most critical safety components. Our expert team 
                provides comprehensive brake repair and maintenance services to ensure your safety on the road. 
                From routine brake pad replacements to complex ABS system repairs, we use only high-quality 
                parts and advanced diagnostic equipment to keep your brakes performing at their best.
              </p>
            </div>

            {/* Call Us Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-blue-600" />
                <span className="text-lg font-semibold text-gray-900">
                  Call Us Now: (01) 123 4567
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Sidebar (30%) */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-center text-gray-900 mb-6">FAST QUOTE</h3>
              
              <div className="text-center mb-6">
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-600">
                  Book your car brake repair or check here. Fast response.
                </p>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Contact Form and Map */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Google Map Placeholder */}
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-600 text-lg font-medium">Google Maps Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrakeRepairPage