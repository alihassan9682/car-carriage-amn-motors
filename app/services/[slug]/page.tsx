'use client'

import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import { Check, Phone, Mail, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const serviceDetailsData = {
    'car-servicing': {
        title: 'Car Servicing',
        description: 'Regular car servicing is essential to maintain the performance, safety, and longevity of your vehicle. Our comprehensive service includes multi-point inspections, oil and filter changes, and thorough checks of all critical systems.',
        image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=800&q=80',
        points: ['Full Engine Diagnostics', 'Oil and Filter Replacement', 'Brake Fluid Check', 'Coolant Level Check', 'Battery Health Test', 'Tyre Pressure & Tread Check']
    },
    'tyres-dublin': {
        title: 'Tyres Dublin',
        description: 'We offer a wide range of premium and budget tyres for all vehicle types. Our expert team provides professional fitting, balancing, and alignment services to ensure your safety on Dublin roads.',
      image: 'https://plus.unsplash.com/premium_photo-1675810094370-a4201445776f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
,        points: ['Tyre Fitting & Balancing', 'Wheel Alignment', 'Puncture Repair', 'Winter Tyre Specialists', 'All Major Brands Available', 'Pressure Monitoring']
    },
    'water-pumps': {
        title: 'Water Pumps',
        description: 'The water pump is the heart of your engine\'s cooling system. We provide specialist replacement and repair services to prevent engine overheating and ensure optimal performance.',
image:'/pump.png',     
   points: ['System Leak Analysis', 'Pump Replacement', 'Coolant Flush', 'Overheating Diagnosis', 'Gasket Replacement', 'Belt Inspection']
    },
    'radiators': {
        title: 'Radiators',
        description: 'A faulty radiator can lead to serious engine damage. We offer professional radiator repair, flushing, and replacement services to keep your engine running cool.',
      image:'/radiators.png'
,        points: ['Radiator Repair', 'Flush & Fill Service', 'Hose Replacement', 'Thermostat Testing', 'Fan Motor Repair', 'Cooling System Pressure Test']
    },
    'exhausts': {
        title: 'Exhausts',
        description: 'From minor leaks to full system replacements, we handle all exhaust related issues. A healthy exhaust improves fuel efficiency and reduces harmful emissions.',
image:'/exhuasts.png',        points: ['Exhaust Repair & Fitting', 'Catalytic Converter Test', 'Emission Checks', 'Muffler Replacement', 'Bracket & Hanger Repair', 'System Performance Tuning']
    },
    'alternators': {
        title: 'Alternators',
        description: 'Charging issues are often traced back to the alternator. We provide expert diagnostic and replacement services for all vehicle charging systems.',
      image: "/alternators.png",
        points: ['Charging System Test', 'Alternator Replacement', 'Voltage Regulator Check', 'Drive Belt Inspection', 'Battery Connection Clean', 'Electrical Load Test']
    },
    'starter-motors': {
        title: 'Starter Motors',
        description: 'If your car won\'t start, the starter motor is a likely culprit. Our technicians can quickly diagnose and replace faulty starters to get you back on the road.',
      image: '/statermotors.png',
        points: ['Ignition System Test', 'Starter Motor Replacement', 'Solenoid Repair', 'Cabling Inspection', 'Key Fob Battery Check', 'Neutral Safety Switch Test']
    },
    'car-breakdowns': {
        title: 'Car Breakdowns',
        description: 'Stranded on the side of the road? Our breakdown recovery and repair service is here to help. We provide timely assistance to get your vehicle to our workshop safely.',
      image: '/breakdown.png',
        points: ['Emergency Towing', 'Roadside Assistance', 'On-Site Diagnostics', 'Battery Jump Starts', 'Flat Tyre Assistance', 'Secure Vehicle Storage']
    },
    'changing-timing-belts': {
        title: 'Changing Timing Belts',
        description: 'A snapped timing belt can cause catastrophic engine damage. We provide preventative replacement services following manufacturer recommendations to protect your engine.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80'
,        points: ['Belt & Tensioner Kit', 'Water Pump Sync', 'Pulley Inspection', 'Precise Timing Settings', 'Engine Performance Check', 'Camshaft Seal Replacement']
    },
    'car-battery-replacement': {
        title: 'Car Battery Replacement',
        description: 'Don\'t let a dead battery ruin your day. We stock a wide range of high-quality batteries for all vehicles and provide professional testing and installation.',
      image: 'https://plus.unsplash.com/premium_photo-1658527217852-a4fba95fcd66?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
,        points: ['Battery Health Analysis', 'Professional Installation', 'Terminal Cleaning', 'Alternator Output Test', 'Parasitic Drain Check', 'Old Battery Recycling']
    },
    'fault-diagnosis': {
        title: 'Fault Diagnosis',
        description: 'Modern vehicles require advanced tools. We use the latest diagnostic equipment to accurately identify and resolve complex electronic and mechanical issues.',
        image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=800&q=80',
        points: ['OBD-II Scanning', 'Engine Light Reset', 'Electronic System Testing', 'Sensor Calibration', 'Software Updates', 'Real-time Data Logging']
    },
    'light-repairs': {
        title: 'Light Repairs',
        description: 'Broken headlights or indicators? We provide quick and efficient bulb and light assembly repairs to ensure your visibility and compliance with road safety laws.',
      image: 'https://images.unsplash.com/photo-1748550729817-b3b810be9603?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
,        points: ['Bulb Replacement', 'Headlight Restoration', 'Lens Repair', 'Wiring Inspection', 'Switch Diagnostics', 'Alignment & Levelling']
    },
    'breakdowns-dublin': {
        title: 'Breakdowns Dublin',
        description: 'Specialized breakdown support for the Dublin area. We know the local routes and can reach you quickly to provide recovery or roadside fixes.',
      image: '/dublin.png'
,        points: ['Local Recovery Service', 'Rapid Response Team', 'City Center Specialist', 'Motorway Assistance', 'Fuel Delivery', 'Lockout Service']
    },
    'none-starters': {
        title: 'None Starters',
        description: 'If your vehicle simply won\'t start, our experts will find the root cause—whether it\'s fuel, air, spark, or electrical—and provide a lasting solution.',
      image: '/nonestarters.png'
,        points: ['Fuel Pump Testing', 'Spark Plug Inspection', 'Immobilizer Diagnostics', 'Air Intake Check', 'ECM/PCM Analysis', 'Compression Testing']
    },
    'brake-pads': {
        title: 'Brake Pads',
        description: 'Worn brake pads are dangerous. We offer professional inspection and replacement using high-quality friction materials for maximum stopping power and safety.',
        image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=800&q=80',
        points: ['Pad Thickness Check', 'Premium Material Options', 'Sensor Replacement', 'Shim & Hardware Kit', 'Calliper Lubrication', 'Brake Dust Cleaning']
    },
    'suspension': {
        title: 'Suspension',
        description: 'Enjoy a smoother ride and better handling. We repair and replace shocks, struts, and steering components to restore your vehicle\'s comfort and stability.',
      image: "/suspension.png"
,        points: ['Shock Absorbers', 'Strut Replacement', 'Ball Joint Repair', 'Control Arm Check', 'Bushings & Bearings', 'Ride Height Adjustment']
    },
    'fuel-injectors': {
        title: 'Fuel Injectors',
        description: 'Clean and efficient fuel delivery is key to engine performance. We provide specialist testing, cleaning, and replacement of fuel injectors for petrol and diesel engines.',
      image: '/fuel.png'
,        points: ['Ultrasonic Cleaning', 'Flow Rate Testing', 'Seal Replacement', 'Diesel Injector Experts', 'Fuel Rail Inspection', 'Efficiency Analysis']
    },
    'break-discs': {
        title: 'Break Discs',
        description: 'Warped or scored brake discs reduce performance and safety. We provide professional disc replacement and resurfacing to ensure a smooth, vibration-free braking experience.',
        image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
        points: ['Surface Analysis', 'Precision Fitting', 'Rust Removal', 'Performance Rotors', 'Vibration Diagnosis', 'Mounting Surface Clean']
    },
    'steering-racks': {
        title: 'Steering Racks',
        description: 'Leaking or heavy steering? Our expert team can repair or replace steering racks and pumps to restore precise control to your vehicle.',
      image: '/racks.png'
,        points: ['Power Steering Leak Fix', 'Rack & Pinion Repair', 'Pump Replacement', 'Fluid Flush', 'Tie Rod End Check', 'Alignment Integration']
    },
    'drive-shafts': {
        title: 'Drive Shafts',
        description: 'Clicking or vibration while driving? We specialize in CV joint and drive shaft repairs to maintain smooth power delivery to your wheels.',
      image: '/image.png'
,        points: ['CV Joint Replacement', 'Drive Shaft Balancing', 'Boot Repair & Grease', 'U-Joint Service', 'Axle Inspection', 'Drivetrain Diagnostics']
    },
    'differentials': {
        title: 'Differentials',
        description: 'Strange noises from the rear of the car? We provide expert differential repair and fluid change services for all rear-wheel and all-wheel-drive vehicles.',
      image: '/diff.png'
,        points: ['Gear Inspection', 'Bearing Replacement', 'Seal & Gasket Fix', 'Fluid Change', 'LSD Specialist Service', 'Noise Diagnosis']
    }
}

const ServiceDetailPage = () => {
    const params = useParams()
    const slug = params.slug as string
    const service = serviceDetailsData[slug as keyof typeof serviceDetailsData]

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })

    const [status, setStatus] = useState<'' | 'loading' | 'success' | 'error'>('')

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
                    <Link href="/services" className="text-blue-600 hover:underline">Return to Services</Link>
                </div>
            </div>
        )
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, subject: `Service Inquiry: ${service.title}` })
            })

            if (response.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', phone: '', subject: service.title, message: '' })
                alert('Thank you for your message! Our team will contact you shortly.')
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
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <Link href="/services" className="flex items-center text-blue-600 hover:text-blue-700 font-medium mb-4 group transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to All Services
                    </Link>
                    <nav className="text-sm text-gray-500">
                        Home / Services / <span className="text-gray-900 font-medium">{service.title}</span>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-10 gap-12">

                    {/* Left Side - Main Content (70%) */}
                    <div className="lg:col-span-7">
                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8 tracking-tight">{service.title}</h1>

                        {/* Main Image */}
                        <div className="mb-10 group overflow-hidden rounded-2xl shadow-xl">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Description Text */}
                        <div className="prose prose-blue max-w-none mb-10">
                            <p className="text-xl text-gray-700 leading-relaxed italic border-l-4 border-blue-600 pl-6 mb-8">
                                {service.description}
                            </p>
                        </div>

                        {/* Service Highlights */}
                        <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                Our <span className="text-blue-600 ml-2">{service.title}</span> Expertise
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                {service.points.map((point, index) => (
                                    <div key={index} className="flex items-center space-x-4 p-3 rounded-xl hover:bg-blue-50 transition-colors">
                                        <div className="bg-blue-600 rounded-full p-1 shadow-sm">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-gray-800 font-medium">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Call Us Box */}
                        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between">
                            <div className="mb-6 md:mb-0">
                                <h3 className="text-2xl font-bold mb-2">Need immediate assistance?</h3>
                                <p className="opacity-90 font-medium whitespace-nowrap">Speak with our certified technicians today.</p>
                            </div>
                            <a href="tel:0894451010" className="flex items-center space-x-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition-colors shadow-xl">
                                <Phone className="w-6 h-6" />
                                <span>089 445 1010</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Sidebar (30%) */}
                    <div className="lg:col-span-3 space-y-8">
                        <div className="bg-white border-2 border-blue-600 rounded-2xl p-8 shadow-xl sticky top-32">
                            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6 underline decoration-blue-600 decoration-4 underline-offset-8">QUICK QUOTE</h3>

                            <div className="text-center mb-8">
                                <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-100 shadow-inner">
                                    <Mail className="w-10 h-10 text-blue-600" />
                                </div>
                                <p className="text-gray-600 font-medium leading-relaxed">
                                    Book your <span className="text-blue-600 font-bold">{service.title}</span> today and get a response within 2 hours.
                                </p>
                            </div>

                            <Link href="/appointment" className="block w-full">
                                <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl hover:bg-blue-700 transition-all font-bold text-xl shadow-lg hover:shadow-blue-200 active:scale-95">
                                    BOOK NOW
                                </button>
                            </Link>
                        </div>

                        <div className="bg-gray-900 rounded-2xl p-8 text-white shadow-xl">
                            <h4 className="text-lg font-bold mb-4 flex items-center">
                                <Check className="w-5 h-5 text-green-500 mr-2" />
                                Why Choose AMN?
                            </h4>
                            <ul className="space-y-3 opacity-90 text-sm font-medium">
                                <li>• Experienced Professionals</li>
                                <li>• High-Quality Parts</li>
                                <li>• Fair & Honest Pricing</li>
                                <li>• Modern Diagnostics</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Contact Form */}
                <div className="mt-20">
                    <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h3>
                            <p className="text-gray-500 font-medium">Have questions about our {service.title} service? We're here to help.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 focus:bg-white focus:outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 focus:bg-white focus:outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="08X XXX XXXX"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 focus:bg-white focus:outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 focus:bg-white focus:outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Your Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Tell us about your vehicle issues..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 focus:bg-white focus:outline-none transition-all resize-none"
                                />
                            </div>

                            <div className="md:col-span-2 pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-5 px-8 rounded-2xl hover:bg-blue-700 transition-all font-bold text-xl shadow-lg hover:shadow-blue-100"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetailPage
