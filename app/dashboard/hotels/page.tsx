"use client";

'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Plus, Search, Filter, MapPin, Star, Edit3, Trash2, Eye, MoreVertical } from 'lucide-react'

export default function DashboardHotels() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [showFilters, setShowFilters] = useState(false)

  const hotels = [
    {
      id: '1',
      name: 'Luxury Ocean Resort',
      location: 'Miami Beach, FL',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      reviews: 324,
      rooms: 45,
      availableRooms: 12,
      pricePerNight: 299,
      status: 'active',
      bookings: 89
    },
    {
      id: '2',
      name: 'Downtown Business Hotel',
      location: 'New York, NY',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80',
      rating: 4.5,
      reviews: 156,
      rooms: 80,
      availableRooms: 23,
      pricePerNight: 189,
      status: 'active',
      bookings: 67
    },
    {
      id: '3',
      name: 'Mountain View Lodge',
      location: 'Aspen, CO',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      reviews: 203,
      rooms: 25,
      availableRooms: 5,
      pricePerNight: 450,
      status: 'active',
      bookings: 45
    },
    {
      id: '4',
      name: 'Historic City Inn',
      location: 'Boston, MA',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      rating: 4.3,
      reviews: 98,
      rooms: 35,
      availableRooms: 0,
      pricePerNight: 159,
      status: 'maintenance',
      bookings: 32
    },
    {
      id: '5',
      name: 'Beachfront Paradise',
      location: 'San Diego, CA',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      reviews: 267,
      rooms: 60,
      availableRooms: 18,
      pricePerNight: 329,
      status: 'active',
      bookings: 78
    },
    {
      id: '6',
      name: 'Urban Boutique Hotel',
      location: 'Seattle, WA',
      image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80',
      rating: 4.6,
      reviews: 189,
      rooms: 42,
      availableRooms: 8,
      pricePerNight: 219,
      status: 'draft',
      bookings: 0
    }
  ]

  const filteredHotels = hotels.filter(hotel => {
    const matchesSearch = hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || hotel.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'maintenance': return 'bg-yellow-100 text-yellow-800'
      case 'draft': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pl-64 pr-6 pb-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Hotel Management</h1>
              <p className="text-gray-600 mt-1">Manage your hotel listings and monitor performance</p>
            </div>
            <Link 
              href="/dashboard/hotels/new"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add New Hotel
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Total Hotels</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{hotels.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-green-600 font-medium">+2</span>
                <span className="text-gray-600 ml-1">from last month</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Active Hotels</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{hotels.filter(h => h.status === 'active').length}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-green-600 font-medium">+1</span>
                <span className="text-gray-600 ml-1">from last week</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Total Rooms</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{hotels.reduce((sum, hotel) => sum + hotel.rooms, 0)}</p>
                </div>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Plus className="w-6 h-6 text-indigo-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-gray-600">Available: </span>
                <span className="text-indigo-600 font-medium ml-1">{hotels.reduce((sum, hotel) => sum + hotel.availableRooms, 0)}</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Total Bookings</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{hotels.reduce((sum, hotel) => sum + hotel.bookings, 0)}</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-green-600 font-medium">+12%</span>
                <span className="text-gray-600 ml-1">from last month</span>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search hotels by name or location..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Filter className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">Filters</span>
                </button>
                
                {showFilters && (
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="draft">Draft</option>
                  </select>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredHotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(hotel.status)}`}>
                    {hotel.status.charAt(0).toUpperCase() + hotel.status.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">{hotel.name}</h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {hotel.location}
                    </div>
                  </div>
                  <div className="relative">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreVertical className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="font-medium text-gray-900">{hotel.rating}</span>
                    <span className="ml-1">({hotel.reviews})</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">{hotel.availableRooms}</span>
                    <span>/{hotel.rooms} available</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">${hotel.pricePerNight}</span>
                    <span className="text-gray-600 text-sm">/night</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Total Bookings</div>
                    <div className="font-semibold text-gray-900">{hotel.bookings}</div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Link
                    href={`/hotels/${hotel.id}`}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium text-center transition-colors"
                  >
                    View Details
                  </Link>
                  <button className="p-2 border border-gray-200 hover:bg-gray-50 rounded-lg transition-colors">
                    <Edit3 className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 border border-gray-200 hover:bg-red-50 hover:border-red-200 rounded-lg transition-colors">
                    <Trash2 className="w-5 h-5 text-gray-600 hover:text-red-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredHotels.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No hotels found</h3>
            <p className="text-gray-600 mb-6">
              {searchTerm || filterStatus !== 'all' 
                ? 'Try adjusting your search criteria or filters.' 
                : 'Get started by adding your first hotel listing.'
              }
            </p>
            <Link
              href="/dashboard/hotels/new"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add New Hotel
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}