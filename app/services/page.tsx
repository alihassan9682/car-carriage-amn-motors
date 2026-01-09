'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
const ServicesPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [status, setStatus] = useState<'' | 'loading' | 'success' | 'error'>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, subject: 'Services Page Inquiry' })
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
        alert('Message sent successfully!')
      } else {
        throw new Error('Failed to send message')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
      alert('Failed to send message. Please try again later.')
    } finally {
      setTimeout(() => setStatus(''), 5000)
    }
  }

  const services = [
    {
      title: 'Car Servicing',
      slug: 'car-servicing',
      image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Tyres Dublin',
      slug: 'tyres-dublin',
      image: 'https://plus.unsplash.com/premium_photo-1675810094370-a4201445776f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Water Pumps',
      slug: 'water-pumps',
image:'/pump.png'    },
    {
      title: 'Radiators',
      slug: 'radiators',
      image:'/radiators.png'
    },
    {
      title: 'Exhausts',
      slug: 'exhausts',
image:'/exhuasts.png'    },
    {
      title: 'Alternators',
      slug: 'alternators',
      image: "/alternators.png"
    },
    {
      title: 'Starter Motors',
      slug: 'starter-motors',
      image: '/statermotors.png'
    },
    {
      title: 'Car Breakdowns',
      slug: 'car-breakdowns',
      image: '/breakdown.png',
    },
    {
      title: 'Changing Timing Belts',
      slug: 'changing-timing-belts',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Car Battery Replacement',
      slug: 'car-battery-replacement',
      image: 'https://plus.unsplash.com/premium_photo-1658527217852-a4fba95fcd66?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Fault Diagnosis',
      slug: 'fault-diagnosis',
      image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Light Repairs',
      slug: 'light-repairs',
      image: 'https://images.unsplash.com/photo-1748550729817-b3b810be9603?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Breakdowns Dublin',
      slug: 'breakdowns-dublin',
      image: '/dublin.png'
    },
    {
      title: 'None Starters',
      slug: 'none-starters',
      image: '/nonestarters.png'
    },
    {
      title: 'Brake Pads',
      slug: 'brake-pads',
      image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Suspension',
      slug: 'suspension',
      image: "/suspension.png"
    },
    {
      title: 'Fuel Injectors',
      slug: 'fuel-injectors',
      image: '/fuel.png'
    },
    {
      title: 'Break Discs',
      slug: 'break-discs',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Steering Racks',
      slug: 'steering-racks',
      image: '/racks.png'
    },
    {
      title: 'Drive Shafts',
      slug: 'drive-shafts',
      image: '/image.png'
    },
    {
      title: 'Differentials',
      slug: 'differentials',
      image: '/diff.png'
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
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <Link href={`/services/${service.slug}`}>
                    <button className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-200">
                      READ MORE
                    </button>
                  </Link>
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