"use client";

'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Star, MapPin, Wifi, Car, Coffee, Dumbbell, Users, Calendar, Clock, ChevronLeft, ChevronRight, Heart, Share2, Shield, Award } from 'lucide-react'

export default function HotelDetailsPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [selectedRoom, setSelectedRoom] = useState(0)
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(2)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const hotel = {
    id: '1',
    name: 'Grand Royal Plaza Hotel',
    location: 'Downtown Manhattan, New York',
    rating: 4.8,
    reviews: 2847,
    price: 289,
    originalPrice: 349,
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
    ],
    amenities: [
      { icon: Wifi, name: 'Free WiFi' },
      { icon: Car, name: 'Parking' },
      { icon: Coffee, name: 'Restaurant' },
      { icon: Dumbbell, name: 'Fitness Center' },
      { icon: Users, name: 'Conference Room' },
      { icon: Shield, name: '24/7 Security' }
    ],
    description: 'Experience luxury at its finest at the Grand Royal Plaza Hotel. Located in the heart of Manhattan, our hotel offers stunning city views, world-class amenities, and exceptional service. Each room is elegantly appointed with modern furnishings and premium amenities to ensure your comfort.',
    highlights: [
      'Prime location in Downtown Manhattan',
      'Rooftop bar with panoramic city views',
      'Michelin-starred restaurant on-site',
      'State-of-the-art fitness center',
      'Concierge services available 24/7'
    ]
  }

  const roomTypes = [
    {
      name: 'Standard King Room',
      size: '32 sqm',
      occupancy: '2 guests',
      price: 289,
      originalPrice: 349,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop',
      amenities: ['King bed', 'City view', 'Free WiFi', 'Air conditioning']
    },
    {
      name: 'Deluxe Suite',
      size: '55 sqm',
      occupancy: '4 guests',
      price: 459,
      originalPrice: 529,
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=300&fit=crop',
      amenities: ['Separate living area', 'Harbor view', 'Mini bar', 'Jacuzzi']
    },
    {
      name: 'Presidential Suite',
      size: '85 sqm',
      occupancy: '6 guests',
      price: 789,
      originalPrice: 899,
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop',
      amenities: ['Private terrace', 'Butler service', 'Dining room', 'Premium amenities']
    }
  ]

  const reviews = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      date: '2 days ago',
      comment: 'Absolutely stunning hotel! The service was impeccable and the room was beautifully appointed. The rooftop bar has amazing views.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      date: '1 week ago',
      comment: 'Perfect location for business travel. Close to everything and the conference facilities are top-notch.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      rating: 4,
      date: '2 weeks ago',
      comment: 'Great hotel overall. The restaurant food was exceptional and the staff went above and beyond.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face'
    }
  ]

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % hotel.images.length)
  }

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + hotel.images.length) % hotel.images.length)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/search" className="flex items-center text-blue-600 hover:text-blue-700">
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back to results
            </Link>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-2 rounded-full ${isWishlisted ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'} hover:bg-red-100 hover:text-red-600 transition-colors`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
              <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="relative">
              <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={hotel.images[selectedImageIndex]}
                  alt="Hotel view"
                  fill
                  className="object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="flex space-x-2 mt-4">
                {hotel.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative w-20 h-16 rounded-lg overflow-hidden ${
                      selectedImageIndex === index ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`View ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Hotel Info */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{hotel.name}</h1>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{hotel.location}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(hotel.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {hotel.rating} ({hotel.reviews} reviews)
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-blue-600 mr-2" />
                  <span className="text-sm text-blue-600 font-medium">Premium Choice</span>
                </div>
              </div>

              <p className="text-gray-700 mb-6">{hotel.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {hotel.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <amenity.icon className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-700">{amenity.name}</span>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Why choose this hotel?</h3>
                <ul className="space-y-2">
                  {hotel.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Room Types */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose your room</h2>
              <div className="space-y-4">
                {roomTypes.map((room, index) => (
                  <div
                    key={index}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      selectedRoom === index ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedRoom(index)}
                  >
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="relative w-full md:w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={room.image}
                          alt={room.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{room.name}</h3>
                          <div className="text-right">
                            <div className="flex items-center">
                              <span className="text-sm text-gray-500 line-through mr-2">${room.originalPrice}</span>
                              <span className="text-2xl font-bold text-gray-900">${room.price}</span>
                            </div>
                            <span className="text-sm text-gray-600">per night</span>
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <span className="mr-4">{room.size}</span>
                          <span>{room.occupancy}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {room.amenities.map((amenity, amenityIndex) => (
                            <span
                              key={amenityIndex}
                              className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                            >
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Guest reviews</h2>
              <div className="space-y-6">
                {reviews.map((review, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
                    <div className="flex items-start space-x-4">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{review.name}</h4>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-6 text-blue-600 hover:text-blue-700 font-medium">
                Show all {hotel.reviews} reviews
              </button>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-8">
              <div className="mb-6">
                <div className="flex items-baseline justify-between mb-2">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 line-through mr-2">${hotel.originalPrice}</span>
                    <span className="text-3xl font-bold text-gray-900">${hotel.price}</span>
                  </div>
                  <span className="text-sm text-gray-600">per night</span>
                </div>
                <div className="text-sm text-green-600 font-medium">Save ${hotel.originalPrice - hotel.price}!</div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">${roomTypes[selectedRoom].price} × 2 nights</span>
                  <span className="font-semibold">${roomTypes[selectedRoom].price * 2}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Taxes & fees</span>
                  <span className="font-semibold">$45</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold border-t border-gray-200 pt-2">
                  <span>Total</span>
                  <span>${roomTypes[selectedRoom].price * 2 + 45}</span>
                </div>
              </div>

              <Link
                href="/checkout/session123"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
              >
                Book Now
              </Link>

              <div className="mt-4 text-center">
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Free cancellation until 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}