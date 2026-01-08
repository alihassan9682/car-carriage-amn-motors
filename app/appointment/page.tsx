'use client'

import { useState } from 'react'
import { Calendar, Clock, User, Phone, Mail, Car } from 'lucide-react'

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    service: '',
    date: '',
    time: '',
    message: ''
  })

  const [status, setStatus] = useState<'' | 'loading' | 'success' | 'error'>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const subject = `Appointment Booking: ${formData.service} for ${formData.vehicle}`
      const message = `
        Vehicle: ${formData.vehicle}
        Service: ${formData.service}
        Preferred Date: ${formData.date}
        Preferred Time: ${formData.time}
        Message: ${formData.message}
      `

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject,
          message
        })
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', vehicle: '', service: '', date: '', time: '', message: '' })
        alert('Appointment request sent successfully! We will contact you to confirm.')
      } else {
        throw new Error('Failed to send message')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
      alert('Failed to send request. Please try again later.')
    } finally {
      setTimeout(() => setStatus(''), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book an Appointment</h1>
          <p className="text-xl text-gray-600">Schedule your vehicle service with our expert team</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Car className="w-4 h-4 mr-2" />
                  Vehicle Details
                </label>
                <input
                  type="text"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  placeholder="Make, Model, Year"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Clock className="w-4 h-4 mr-2" />
                  Preferred Time
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Time</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Required
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Service</option>
                <option value="car-servicing">Car Servicing</option>
                <option value="tyres-dublin">Tyres Dublin</option>
                <option value="water-pumps">Water Pumps</option>
                <option value="radiators">Radiators</option>
                <option value="exhausts">Exhausts</option>
                <option value="alternators">Alternators</option>
                <option value="starter-motors">Starter Motors</option>
                <option value="car-breakdowns">Car Breakdowns</option>
                <option value="changing-timing-belts">Changing Timing Belts</option>
                <option value="car-battery-replacement">Car Battery Replacement</option>
                <option value="fault-diagnosis">Fault Diagnosis</option>
                <option value="light-repairs">Light Repairs</option>
                <option value="breakdowns-dublin">Breakdowns Dublin</option>
                <option value="none-starters">None Starters</option>
                <option value="brake-pads">Brake Pads</option>
                <option value="suspension">Suspension</option>
                <option value="fuel-injectors">Fuel Injectors</option>
                <option value="break-discs">Break Discs</option>
                <option value="steering-racks">Steering Racks</option>
                <option value="drive-shafts">Drive Shafts</option>
                <option value="differentials">Differentials</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Any additional details about your vehicle or service requirements..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}