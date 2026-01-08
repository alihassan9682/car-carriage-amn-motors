'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { useRouter } from "next/navigation"
interface FAQItem {
  question: string
  answer: string
}

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  })

  const faqItems: FAQItem[] = [
    {
      question: "How often should I change my oil?",
      answer: "Most vehicles need an oil change every 5,000-7,500 miles, but check your owner's manual for specific recommendations."
    },
    {
      question: "What do I do if my Check Engine light comes on?",
      answer: "Don't panic, but schedule a diagnostic check as soon as possible to identify and address any potential issues."
    },
    {
      question: "Do you provide NCT preparation?",
      answer: "Yes, we offer comprehensive NCT preparation services to ensure your vehicle passes its test successfully."
    },
    {
      question: "When do I need to change my timing belt?",
      answer: "Timing belts typically need replacement every 60,000-100,000 miles, depending on your vehicle's make and model."
    },
    {
      question: "How do I know if I need new tyres?",
      answer: "Check for worn tread depth (less than 2mm), visible damage, or uneven wear patterns across the tyre surface."
    },
    {
      question: "What's included in a full car service?",
      answer: "A full service includes oil change, filter replacements, brake inspection, battery check, and comprehensive safety diagnostics."
    },
    {
      question: "Do you offer mobile mechanic services?",
      answer: "Yes, our mobile mechanics are available throughout Dublin for on-site repairs and maintenance services."
    },
    {
      question: "How long does a typical car service take?",
      answer: "Most standard services take 2-4 hours, while more comprehensive services may require a full day."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Question submitted:', formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Section A: Page Header */}
      <section className="bg-[#F5F5F5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center flex justify-between items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-700">FAQ</h1>
            <nav className="text-blue-600 flex items-center">
              <span className="text-gray-700 cursor-pointer hover:text-blue-600">Home</span>
              <span className="mx-2 text-gray-700">&gt;</span>
              <span>FAQ</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Section B: FAQ Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Car Service & Maintenance <span className="text-blue-600">FAQ</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 cursor-pointer text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className=" font-semibold text-gray-900 pr-4">{item.question}</span>
                  {openIndex === index ? (
                    <Minus className="text-blue-600 w-5 h-5 flex-shrink-0" />
                  ) : (
                    <Plus className="text-blue-600 cursor-pointer w-5 h-5 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section C: Ask a Question Form */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Have a Car Repair <span className="text-blue-600">Question?</span>
            </h2>
            <p className="text-lg text-gray-600">
              Get your Car Service & Maintenance Questions Answered by a Mechanic.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <textarea
                name="question"
                placeholder="Your Question..."
                value={formData.question}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Ask Question
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Section D: Bottom CTA */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Schedule Your <span className="text-blue-600">Appointment</span> Today
          </h2>
          <div className="text-4xl md:text-5xl font-bold text-white mb-8">
            0861770636
          </div>
          <button onClick={() => router.push("/appointment")} className="bg-transparent cursor-pointer text-white px-8 py-3 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-gray-900 transition-colors">
            Schedule An Appointment
          </button>
        </div>
      </section>
    </div>
  )
}

export default FAQPage