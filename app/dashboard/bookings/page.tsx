"use client";

'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, Star, Users, Clock, CreditCard, Eye, X, CheckCircle, AlertCircle, XCircle } from 'lucide-react'

interface Booking {
  id: string
  hotelName: string
  hotelImage: string
  location: string
  checkIn: string
  checkOut: string
  guests: number
  rooms: number
  totalAmount: number
  status: 'confirmed' | 'pending' | 'cancelled'
  rating: number
  bookingReference: string
  hotelId: string
}

const mockBookings: Booking[] = [
  {
    id: '1',
    hotelName: 'Grand Ocean Resort',
    hotelImage: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Miami Beach, FL',
    checkIn: '2024-03-15',
    checkOut: '2024-03-18',
    guests: 2,
    rooms: 1,
    totalAmount: 899,
    status: 'confirmed',
    rating: 4.8,
    bookingReference: 'SE-2024-001',
    hotelId: 'grand-ocean-resort'
  },
  {
    id: '2',
    hotelName: 'Mountain View Lodge',
    hotelImage: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Aspen, CO',
    checkIn: '2024-04-20',
    checkOut: '2024-04-25',
    guests: 4,
    rooms: 2,
    totalAmount: 1450,
    status: 'pending',
    rating: 4.6,
    bookingReference: 'SE-2024-002',
    hotelId: 'mountain-view-lodge'
  },
  {
    id: '3',
    hotelName: 'City Center Hotel',
    hotelImage: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'New York, NY',
    checkIn: '2024-02-10',
    checkOut: '2024-02-12',
    guests: 1,
    rooms: 1,
    totalAmount: 420,
    status: 'cancelled',
    rating: 4.2,
    bookingReference: 'SE-2024-003',
    hotelId: 'city-center-hotel'
  },
  {
    id: '4',
    hotelName: 'Beachfront Paradise',
    hotelImage: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Malibu, CA',
    checkIn: '2024-05-05',
    checkOut: '2024-05-08',
    guests: 2,
    rooms: 1,
    totalAmount: 1200,
    status: 'confirmed',
    rating: 4.9,
    bookingReference: 'SE-2024-004',
    hotelId: 'beachfront-paradise'
  }
]

export default function DashboardBookings() {
  const [bookings] = useState<Booking[]>(mockBookings)
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const [filterStatus, setFilterStatus] = useState<string>('all')

  const filteredBookings = bookings.filter(booking => 
    filterStatus === 'all' || booking.status === filterStatus
  )

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'pending':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />
      case 'cancelled':
        return <XCircle className="w-4 h-4 text-red-500" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const calculateNights = (checkIn: string, checkOut: string) => {
    const start = new Date(checkIn)
    const end = new Date(checkOut)
    const diffTime = Math.abs(end.getTime() - start.getTime())
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  return (
    <div className="min-h-screen bg-gray-50 pl-0 pt-0 lg:pl-64 lg:pt-20">
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Bookings</h1>
          <p className="text-gray-600">Manage and track all your hotel reservations</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                <p className="text-2xl font-bold text-gray-900">{bookings.length}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Confirmed</p>
                <p className="text-2xl font-bold text-green-600">
                  {bookings.filter(b => b.status === 'confirmed').length}
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {bookings.filter(b => b.status === 'pending').length}
                </p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Spent</p>
                <p className="text-2xl font-bold text-indigo-600">
                  ${bookings.reduce((sum, booking) => sum + booking.totalAmount, 0).toLocaleString()}
                </p>
              </div>
              <div className="p-3 bg-indigo-100 rounded-lg">
                <CreditCard className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="flex border-b border-gray-200">
            {[
              { key: 'all', label: 'All Bookings', count: bookings.length },
              { key: 'confirmed', label: 'Confirmed', count: bookings.filter(b => b.status === 'confirmed').length },
              { key: 'pending', label: 'Pending', count: bookings.filter(b => b.status === 'pending').length },
              { key: 'cancelled', label: 'Cancelled', count: bookings.filter(b => b.status === 'cancelled').length }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilterStatus(tab.key)}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  filterStatus === tab.key
                    ? 'border-blue-500 text-blue-600 bg-blue-50'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {filteredBookings.map((booking) => (
            <div key={booking.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex flex-col sm:flex-row gap-4 flex-1">
                    <div className="relative w-full sm:w-24 h-48 sm:h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={booking.hotelImage}
                        alt={booking.hotelName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {booking.hotelName}
                          </h3>
                          <div className="flex items-center text-gray-600 mb-2">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span className="text-sm">{booking.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                            <span className="text-sm font-medium text-gray-700">{booking.rating}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          {getStatusIcon(booking.status)}
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(booking.status)}`}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          <div>
                            <p className="font-medium">Check-in</p>
                            <p>{formatDate(booking.checkIn)}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          <div>
                            <p className="font-medium">Check-out</p>
                            <p>{formatDate(booking.checkOut)}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-gray-600">
                          <Users className="w-4 h-4 mr-2" />
                          <div>
                            <p className="font-medium">Guests</p>
                            <p>{booking.guests} guests, {booking.rooms} room{booking.rooms > 1 ? 's' : ''}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-gray-900">
                          <CreditCard className="w-4 h-4 mr-2" />
                          <div>
                            <p className="font-medium">Total</p>
                            <p className="text-lg font-bold">${booking.totalAmount.toLocaleString()}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => setSelectedBooking(booking)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                    
                    <Link
                      href={`/hotels/${booking.hotelId}`}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-center"
                    >
                      View Hotel
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBookings.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings found</h3>
            <p className="text-gray-600 mb-6">
              {filterStatus === 'all' 
                ? "You haven't made any bookings yet."
                : `No ${filterStatus} bookings found.`
              }
            </p>
            <Link
              href="/search"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Find Hotels
            </Link>
          </div>
        )}
      </div>

      {/* Booking Details Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Booking Details</h2>
              <button
                onClick={() => setSelectedBooking(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src={selectedBooking.hotelImage}
                  alt={selectedBooking.hotelName}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedBooking.hotelName}
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{selectedBooking.location}</span>
                </div>
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
                  <span className="font-medium text-gray-700">{selectedBooking.rating} out of 5</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Booking Information</h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Booking Reference</span>
                      <span className="font-medium text-gray-900">{selectedBooking.bookingReference}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status</span>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(selectedBooking.status)}
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(selectedBooking.status)}`}>
                          {selectedBooking.status.charAt(0).toUpperCase() + selectedBooking.status.slice(1)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Guests</span>
                      <span className="font-medium text-gray-900">{selectedBooking.guests}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rooms</span>
                      <span className="font-medium text-gray-900">{selectedBooking.rooms}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Stay Details</h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Check-in</span>
                      <span className="font-medium text-gray-900">{formatDate(selectedBooking.checkIn)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Check-out</span>
                      <span className="font-medium text-gray-900">{formatDate(selectedBooking.checkOut)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Nights</span>
                      <span className="font-medium text-gray-900">
                        {calculateNights(selectedBooking.checkIn, selectedBooking.checkOut)}
                      </span>
                    </div>
                    
                    <div className="flex justify-between pt-3 border-t border-gray-200">
                      <span className="text-gray-900 font-semibold">Total Amount</span>
                      <span className="text-2xl font-bold text-gray-900">
                        ${selectedBooking.totalAmount.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-6 border-t border-gray-200">
                <Link
                  href={`/hotels/${selectedBooking.hotelId}`}
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
                >
                  View Hotel
                </Link>
                <button
                  onClick={() => setSelectedBooking(null)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}