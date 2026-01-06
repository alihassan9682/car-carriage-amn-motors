'use client'

const CallToAction = () => {
  return (
    <section className="bg-blue-600 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
          <h2 className="text-xl md:text-2xl font-semibold text-white text-center md:text-left">
            Book an Appointment Now with our Online Form
          </h2>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  )
}

export default CallToAction