'use client'

import { useState, useEffect } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    text: "Fantastic service! The team at AMN Motors got my car back on the road quickly. Highly recommended for their professionalism.",
    author: "John D. "
  },
  {
    id: 2,
    text: "Outstanding work on my BMW repair. They diagnosed the issue accurately and fixed it at a fair price. Will definitely return!",
    author: "Sarah M. "
  },
  {
    id: 3,
    text: "AMN Motors exceeded my expectations. Quick turnaround, excellent communication, and my car runs like new. Five stars!",
    author: "Mike R. "
  },
  {
    id: 4,
    text: "Professional and trustworthy service. They explained everything clearly and didn't try to oversell. Highly recommend!",
    author: "Lisa K. "
  },
  {
    id: 5,
    text: "Best auto repair shop in town! Fair pricing, quality work, and friendly staff. My go-to place for all car maintenance.",
    author: "David L."
  }
]

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1920&q=80)'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gray-200 bg-opacity-70"></div>
      
      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Quote Icon */}
        <div className="mb-8">
          <Quote className="text-gray-700 w-16 h-16 mx-auto" />
        </div>
        
        {/* Testimonial Content with Side Navigation */}
        <div className="relative min-h-[200px] flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute cursor-pointer left-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute inset-0 px-16 transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Review Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 font-medium mb-8 leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              
              {/*  Name */}
              <cite className="text-lg text-gray-700 font-medium">
                {testimonial.author}
              </cite>
            </div>
          ))}
          
          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 cursor-pointer top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-gray-700' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSlider