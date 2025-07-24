import Image from 'next/image'
import Link from 'next/link'
import { Star, Users, Award, Globe, Heart, Shield } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    { label: 'Hotels Worldwide', value: '50,000+' },
    { label: 'Happy Customers', value: '2M+' },
    { label: 'Countries Served', value: '190+' },
    { label: 'Years of Excellence', value: '15+' }
  ]

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: 'Customer First',
      description: 'Every decision we make puts our customers at the center, ensuring exceptional experiences.'
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      title: 'Trust & Safety',
      description: 'We prioritize secure bookings and verified accommodations for your peace of mind.'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: 'Global Reach',
      description: 'Connecting travelers with amazing stays across every corner of the world.'
    },
    {
      icon: <Award className="w-8 h-8 text-indigo-600" />,
      title: 'Excellence',
      description: 'We strive for excellence in every interaction and continuously improve our platform.'
    }
  ]

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      bio: 'Former VP at leading travel company with 15+ years in hospitality tech.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Ex-Google engineer passionate about building scalable travel platforms.'
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Customer Experience',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Customer success expert dedicated to creating memorable travel experiences.'
    },
    {
      name: 'David Kim',
      role: 'Head of Partnerships',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Building relationships with hotels worldwide to expand our offerings.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Redefining
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Travel</span>
              </h1>
              <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                StayEase connects millions of travelers with exceptional accommodations worldwide. 
                We're not just a booking platform—we're your trusted travel companion.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link 
                  href="/marketing/contact" 
                  className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Get in Touch
                </Link>
                <Link 
                  href="/auth" 
                  className="px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold border-2 border-slate-200 hover:border-slate-300 transition-colors"
                >
                  Join StayEase
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=600&fit=crop"
                alt="Modern hotel lobby"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white fill-current" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">4.9/5</div>
                    <div className="text-sm text-slate-600">Customer Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=500&fit=crop"
                alt="Team collaboration"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Founded in 2009 with a simple mission: make travel accessible and enjoyable for everyone. 
                  What started as a small team passionate about hospitality has grown into a global platform 
                  trusted by millions.
                </p>
                <p>
                  We believe that great travel experiences begin with finding the perfect place to stay. 
                  That's why we've built relationships with property owners worldwide, from boutique hotels 
                  to luxury resorts, ensuring our travelers have access to authentic, quality accommodations.
                </p>
                <p>
                  Today, StayEase continues to innovate, using cutting-edge technology to personalize your 
                  travel experience while maintaining the human touch that makes every journey special.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we serve our community of travelers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The passionate individuals behind StayEase, dedicated to making your travel dreams a reality.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join millions of travelers who trust StayEase for their perfect getaways. 
            Your next adventure is just a click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/auth" 
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-slate-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Start Booking
            </Link>
            <Link 
              href="/marketing" 
              className="px-8 py-4 bg-transparent text-white rounded-xl font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Hotels
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}