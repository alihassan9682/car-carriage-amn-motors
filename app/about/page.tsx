'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { 
  Wrench, 
  Zap, 
  Search, 
  Disc, 
  Hammer, 
  Battery,
  CheckCircle,
  Users,
  Clock,
  DollarSign,
  Award,
  Car,
  Settings,
  Calendar
} from 'lucide-react'
import { CompanyOverview } from '@/components';

const AboutPage = () => {
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

  const stats = [
    { icon: Award, number: '100%', label: 'Satisfaction' },
    { icon: Car, number: '15', label: 'Cars Daily' },
    { icon: Settings, number: '5000+', label: 'Tyres Fixed' },
    { icon: Calendar, number: '10', label: 'Years Experience' }
  ]

  const services = [
    {
      icon: Wrench,
      title: 'Car Servicing',
      description: 'Complete vehicle maintenance and servicing by certified technicians'
    },
    {
      icon: Zap,
      title: 'Car Electrics',
      description: 'Expert electrical diagnostics and repairs for all vehicle systems'
    },
    {
      icon: Search,
      title: 'Engine Diagnostics',
      description: 'Advanced computer diagnostics to identify and resolve engine issues'
    },
    {
      icon: Disc,
      title: 'Tyre Centre',
      description: 'Premium tire selection, fitting, and wheel alignment services'
    },
    {
      icon: Hammer,
      title: 'Panel Beating',
      description: 'Professional bodywork repairs and accident damage restoration'
    },
    {
      icon: Battery,
      title: 'Car Battery Repairs',
      description: 'Battery testing, replacement, and electrical system maintenance'
    }
  ]

  const benefits = [
    'Experienced Team',
    'Fast Turnaround',
    'Affordable Rates',
    'Quality Guarantee'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Section A: Page Header */}
      <section className="bg-[#F5F5F5]  text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center flex justify-between">
            <h1 className="text-4xl text-gray-700 md:text-5xl font-bold mb-4">About Us</h1>
            {/* <nav className="text-blue-400 flex flex-row items-end justify-end">
              <span className="text-black cursor-pointer">Home</span>
              <span className="mx-2">&gt;</span>
              <span>About Us</span>
            </nav> */}
          </div>
        </div>
      </section>

      {/* Section B: Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Welcome to AMN Motors
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At AMN Motors, we pride ourselves on delivering exceptional automotive services 
                with over a decade of experience in the industry. Our team of qualified mechanics 
                specializes in high-quality vehicle servicing, comprehensive repairs, and reliable 
                maintenance solutions. We understand that your vehicle is more than just transportation 
                – it's your lifeline to work, family, and adventure.
              </p>
              
              {/* Why Choose Us List */}
              {/* <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-blue-600 w-5 h-5" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div> */}
            </div>

            {/* Right Side - Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1632823469850-1d4e8b2b6c8a?w=400&h=300&fit=crop"
                  alt="Mechanic working on car engine"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg object-cover w-full h-48"
                />
                <Image
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=200&fit=crop"
                  alt="Car brake repair"
                  width={400}
                  height={200}
                  className="rounded-lg shadow-lg object-cover w-full h-32"
                />
              </div>
              <div className="pt-8">
                <Image
                  src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&h=350&fit=crop"
                  alt="Professional car diagnostic"
                  width={400}
                  height={350}
                  className="rounded-lg shadow-lg object-cover w-full h-56"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section C: Stats Counter */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
{/* <section>
      <CompanyOverview />
</section> */}
      {/* Section D: Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive range of automotive services ensures your vehicle 
              receives the expert care it deserves
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="text-blue-600 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section E: Contact & Map Area */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Map Placeholder */}
          <div>
<div className='h-3/4'>
  <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h3>

 <div className="h-[400px] w-full rounded-xl overflow-hidden border border-gray-200">
  <iframe
    title="AMN Motors Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.404461037053!2d-6.3871528!3d53.4433558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4867136a54ce1f61%3A0x3178c63d9659878f!2sAMN%20MOTORS%20LTD!5e0!3m2!1sen!2s!4v1767873298730!5m2!1sen!2s"
    className="w-full h-full border-0"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>


</div>


</div>


            {/* Right Side - Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h3>
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

export default AboutPage