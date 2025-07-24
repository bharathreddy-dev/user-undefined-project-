"use client";

'use client'

import { useState } from 'react'
import { Search, Calendar, CreditCard, CheckCircle, ArrowRight, Users, MapPin, Star } from 'lucide-react'

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      id: 1,
      title: "Search & Discover",
      description: "Find your perfect stay by searching destinations, dates, and preferences. Browse through thousands of verified hotels worldwide.",
      icon: Search,
      color: "from-blue-500 to-indigo-600",
      details: [
        "Advanced search filters",
        "Real-time availability",
        "Price comparison",
        "Guest reviews & ratings"
      ]
    },
    {
      id: 2,
      title: "Select Your Stay",
      description: "Compare hotels, read reviews, and choose the perfect accommodation that matches your needs and budget.",
      icon: MapPin,
      color: "from-indigo-500 to-purple-600",
      details: [
        "Detailed hotel information",
        "Photo galleries",
        "Amenities overview",
        "Location insights"
      ]
    },
    {
      id: 3,
      title: "Book Securely",
      description: "Complete your reservation with our secure payment system. Get instant confirmation and enjoy peace of mind.",
      icon: CreditCard,
      color: "from-purple-500 to-pink-600",
      details: [
        "Secure payment gateway",
        "Multiple payment options",
        "Instant confirmation",
        "24/7 customer support"
      ]
    },
    {
      id: 4,
      title: "Enjoy Your Stay",
      description: "Check-in hassle-free and enjoy your vacation. Rate your experience to help other travelers.",
      icon: CheckCircle,
      color: "from-pink-500 to-red-600",
      details: [
        "Mobile check-in",
        "Digital room keys",
        "Concierge services",
        "Post-stay reviews"
      ]
    }
  ]

  const features = [
    {
      icon: Users,
      title: "Trusted by millions",
      description: "Over 2 million happy customers worldwide"
    },
    {
      icon: Star,
      title: "Best price guarantee",
      description: "We match any lower price you find elsewhere"
    },
    {
      icon: Calendar,
      title: "Free cancellation",
      description: "Cancel up to 24 hours before check-in"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">StayEase</span> Works
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Booking your perfect stay has never been easier. Follow these simple steps to discover and book amazing accommodations worldwide.
          </p>
        </div>

        {/* Main Steps */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Steps Navigation */}
          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = activeStep === index
              
              return (
                <div
                  key={step.id}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    isActive ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                    isActive 
                      ? 'border-blue-500 bg-white shadow-xl shadow-blue-100' 
                      : 'border-slate-200 bg-white/70 hover:border-slate-300 hover:bg-white hover:shadow-lg'
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-semibold text-slate-500">Step {step.id}</span>
                          {isActive && <ArrowRight className="w-4 h-4 text-blue-500" />}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Active Step Details */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-200">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${steps[activeStep].color} flex items-center justify-center mb-6 shadow-lg`}>
                {(() => {
                  const Icon = steps[activeStep].icon
                  return <Icon className="w-10 h-10 text-white" />
                })()}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {steps[activeStep].title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                {steps[activeStep].description}
              </p>

              <div className="space-y-3">
                {steps[activeStep].details.map((detail, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                    <span className="text-slate-700">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    {activeStep + 1} of {steps.length}
                  </span>
                  <div className="flex gap-2">
                    {steps.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          index === activeStep ? 'bg-blue-500' : 'bg-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to book your perfect stay?
          </h3>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Join millions of travelers who trust StayEase for their accommodation needs. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Searching
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}