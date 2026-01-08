'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface CarouselItem {
  id: number
  imageSrc: string
  title: string
  description: string
}

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const carouselItems: CarouselItem[] = [
    {
      id: 1,
      imageSrc: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80',
      title: 'Expert Auto Care',
      description: 'Professional maintenance and repair services to keep your vehicle running at its best.'
    },
    {
      id: 2,
      imageSrc: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1920&q=80',
      title: 'Precision Diagnostics',
      description: 'Using the latest technology to identify and resolve complex vehicle issues accurately.'
    },
    {
      id: 3,
      imageSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80',
      title: 'Quality Repairs',
      description: 'Certified mechanics providing reliable structural and mechanical repairs for all makes.'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [carouselItems.length])

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <Image
            src={item.imageSrc}
            alt={item.title}
            fill
            className="object-cover"
            priority={index === 0}
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

          {/* Text content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <h1 className={`text-5xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ease-in-out transform ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                  {item.title}
                </h1>
                <p className={`text-xl md:text-2xl text-white/90 leading-relaxed transition-all duration-1000 ease-in-out transform delay-300 ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
              ? 'bg-white scale-110'
              : 'bg-white/50 hover:bg-white/75'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroCarousel