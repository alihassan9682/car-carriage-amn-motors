'use client'

import React from 'react'
import { 
  Wrench, 
  Zap, 
  Search, 
  Disc, 
  Hammer, 
  Battery,
  CheckCircle,
  Palette,
  Shield
} from 'lucide-react'

const CompanyOverview = () => {
  const services = [
    {
      icon: Wrench,
      title: 'CAR SERVICING',
      description: 'Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.'
    },
    {
      icon: Disc,
      title: 'TYRE CENTRE',
      description: 'Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.'
    },
    {
      icon: Zap,
      title: 'CAR ELECTRICS',
      description: 'Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.'
    },
    {
      icon: Hammer,
      title: 'PANEL BEATING',
      description: 'Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.'
    },
    {
      icon: Search,
      title: 'ENGINE DIAGNOSTICS',
      description: 'Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.'
    },
    {
      icon: Battery,
      title: 'CAR BATTERY REPAIRS',
      description: 'Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.'
    },
    {
      icon: CheckCircle,
      title: 'NCT PREPERATION',
      description: 'Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.'
    },
    {
      icon: Palette,
      title: 'SPRAY PAINTING',
      description: 'Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.'
    },
    {
      icon: Shield,
      title: 'SAFETY CHECK',
      description: 'Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Overview Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Company Overview
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              All Motors has been in operation 30+ years serving our customers car servicing needs however big or small, 
              we are based in Shankill but our mobile mechanics are available to assist in all areas around Dublin.
            </p>
          </div>
        </div>

        {/* Services Grid */}
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
  )
}

export default CompanyOverview