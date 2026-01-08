'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState<'' | 'loading' | 'success' | 'error'>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, subject: formData.subject || 'General Contact' })
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="text-sm text-gray-500 mb-2">
            Home / Contact Us
          </nav>
          <h1 className="text-3xl font-bold text-blue-600">Contact Us</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Get In Touch</h2>
            <p className="text-gray-600 mb-8">Have a query or need a quote? Call us or fill out the form.</p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">Kilbride Road, Ballymacarney, Hollystown, Co. Meath, D15 T622, Ireland</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">086 177 0636</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">Info@amnmotors.com</p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Opening Hours</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Thursday</span>
                  <span>8:30am - 6pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span>8:30am - 1pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>Closed</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
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
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
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
      </div>
    </div>
  )
}

export default ContactPage