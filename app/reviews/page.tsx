'use client'

import React from 'react'
import { Star } from 'lucide-react'

const ReviewsPage = () => {
    const reviews = [
        {
            name: 'Taj Mohiuddin',
            rating: 5,
            date: '5 days ago',
            content: 'I recently required support after my vehicle failed the NCT, and AMN Motors delivered an outstanding experience from start to finish. Their team responded immediately, invited me to come in without delay, and resolved the issue efficiently.',
            response: 'You are always welcome'
        },
        {
            name: 'mubashar ahmad',
            rating: 5,
            date: '6 days ago',
            content: 'Highly recommended! My old van was completely dead and had failed the CVRT several times. I was really stressed and not in a position to buy a new van. AMN Motors gave my van a new life — they fixed everything and helped it pass the CVRT.',
            response: 'Thanks a lot for your Appreciation.'
        },
        {
            name: 'faisal shahzad',
            rating: 5,
            date: 'a month ago',
            content: 'One of best mechanic in town many thanks to Naseer bahi always helpful 💯 percent recommend …',
            response: 'You welcome'
        },
        {
            name: 'imtiaz hussain',
            rating: 5,
            date: '6 days ago',
            content: 'I bought a tyre very reasonable price and good service highly recommended',
            response: 'Thanks Bro'
        },
        {
            name: 'Akeel Mukhtar',
            rating: 1,
            date: 'a week ago',
            content: 'Avoid avoid. Only good for oil change etc...',
            response: 'You never came to me fix a car. why are you Angry for. you Avoiding with out reason'
        },
        {
            name: 'Nabeel Rahim',
            rating: 5,
            date: '6 days ago',
            content: 'Very reliable and great service hundred percent recommend',
            response: 'Thanks buddy'
        },
        {
            name: 'Sadaf Raza',
            rating: 5,
            date: 'a month ago',
            content: 'Great people to look after your car problems. They also take walk ins.',
            response: 'Thanks'
        },
        {
            name: 'Ali',
            rating: 5,
            date: '6 days ago',
            content: 'Very good mechanic. Personal he is good guy',
            response: 'You are the Great'
        },
        {
            name: 'Abid Rashid',
            rating: 5,
            date: '6 days ago',
            content: 'Very good service Very nice person',
            response: 'Any time welcome'
        },
        {
            name: 'Kamran Hussain',
            rating: 5,
            date: '2 months ago',
            content: 'The staff is very professional and respectful. God bless them',
            response: 'Thanks'
        },
        {
            name: 'Drmohsin Akhtar',
            rating: 5,
            date: 'a month ago',
            content: 'Best service spot in dublin and charges are normal.',
            response: 'Thanks'
        },
        {
            name: 'Rao Sharif',
            rating: 5,
            date: 'a day ago',
            content: 'Very helpfull and kind person with ready good work too worth to drive',
            response: 'Thanks for your kindness'
        },
        {
            name: 'Kevin',
            rating: 5,
            date: '4 days ago',
            content: 'The right people to look after your car. Highly recommend very diligent and professional. Thanks',
            response: 'You are always welcome'
        },
        {
            name: 'Sohaib Ahmad',
            rating: 5,
            date: '6 days ago',
            content: 'Top-notch workshop – 5 stars all the way! Naseer bhai and the team are honest, professional, and fixed my car quickly at a fair price. Highly recommend, my new go-to garage.',
            response: 'Thanks Boss you are always welcome'
        }
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Page Header */}
            <section className="bg-[#F5F5F5] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl text-gray-700 md:text-5xl font-bold mb-4">Customer Reviews</h1>
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} fill={i < 4 ? "currentColor" : "none"} stroke="currentColor" className="w-6 h-6" />
                                ))}
                            </div>
                            <span className="text-2xl font-bold text-gray-800">4.8</span>
                            <span className="text-gray-600">(18 Reviews)</span>
                        </div>
                        <nav className="text-gray-600">
                            <span className="hover:text-blue-600 cursor-pointer">Home</span>
                            <span className="mx-2">&gt;</span>
                            <span className="text-blue-600">Reviews</span>
                        </nav>
                    </div>
                </div>
            </section>

            {/* Reviews Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {reviews.map((review, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{review.name}</h3>
                                        <p className="text-gray-500 text-sm">{review.date}</p>
                                    </div>
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                fill={i < review.rating ? "currentColor" : "none"}
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-6 italic">
                                    "{review.content}"
                                </p>
                                {review.response && (
                                    <div className="bg-blue-50 rounded-lg p-4 mt-4 border-l-4 border-blue-600">
                                        <p className="text-xs font-bold text-blue-600 uppercase mb-1">Response from owner</p>
                                        <p className="text-gray-800 text-sm">{review.response}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Write a Review CTA */}
            <section className="bg-blue-600 py-16 text-white text-center">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Satisfied with our service?</h2>
                    <p className="text-xl mb-8 opacity-90">Share your experience with us and help others find quality car care.</p>
                    <a
                        href="https://www.google.com/maps/place/AMN+MOTORS+LTD/@53.4433558,-6.3871528,17z/data=!4m8!3m7!1s0x4867136a54ce1f61:0x3178c63d9659878f!8m2!3d53.4433558!4d-6.3871528!9m1!1b1!16s%2Fg%2F11vrrrtgjr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                    >
                        Leave a Google Review
                    </a>
                </div>
            </section>
        </div>
    )
}

export default ReviewsPage
