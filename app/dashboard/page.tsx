"use client";

'use client'

import { useState, useEffect } from 'react'
import { Calendar, Users, TrendingUp, DollarSign, Clock, MapPin, Star, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface BookingData {
  id: string
  hotelName: string
  guestName: string
  checkIn: string
  checkOut: string
  status: 'confirmed' | 'pending' | 'cancelled'
  amount: number
  image: string
}

interface MetricData {
  label: string
  value: string
  change: string
  trend: 'up' | 'down'
  icon: React.ReactNode
}

export default function DashboardOverview() {
  const [timeRange, setTimeRange] = useState('7d')
  const [recentBookings, setRecentBookings] = useState<BookingData[]>([])
  const [metrics, setMetrics] = useState<MetricData[]>([])

  useEffect(() => {
    // Simulate loading data
    setRecentBookings([
      {
        id: '1',
        hotelName: 'Grand Plaza Hotel',
        guestName: 'John Smith',
        checkIn: '2024-01-15',
        checkOut: '2024-01-18',
        status: 'confirmed',
        amount: 899,
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: '2',
        hotelName: 'Oceanview Resort',
        guestName: 'Sarah Johnson',
        checkIn: '2024-01-20',
        checkOut: '2024-01-25',
        status: 'pending',
        amount: 1250,
        image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: '3',
        hotelName: 'City Center Inn',
        guestName: 'Mike Davis',
        checkIn: '2024-01-12',
        checkOut: '2024-01-14',
        status: 'confirmed',
        amount: 450,
        image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: '4',
        hotelName: 'Mountain Lodge',
        guestName: 'Emma Wilson',
        checkIn: '2024-01-22',
        checkOut: '2024-01-26',
        status: 'cancelled',
        amount: 680,
        image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ])

    setMetrics([
      {
        label: 'Total Bookings',
        value: '2,847',
        change: '+12.5%',
        trend: 'up',
        icon: <Calendar className="w-5 h-5" />
      },
      {
        label: 'Revenue',
        value: '$48,290',
        change: '+8.2%',
        trend: 'up',
        icon: <DollarSign className="w-5 h-5" />
      },
      {
        label: 'Occupancy Rate',
        value: '87.4%',
        change: '-2.1%',
        trend: 'down',
        icon: <Users className="w-5 h-5" />
      },
      {
        label: 'Avg. Daily Rate',
        value: '$156',
        change: '+5.7%',
        trend: 'up',
        icon: <TrendingUp className="w-5 h-5" />
      }
    ])
  }, [timeRange])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pl-64 pr-6 pb-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
              <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your properties.</p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
              </select>
              <Link
                href="/dashboard/bookings"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
              >
                <span>View All Bookings</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <div className="text-blue-600">{metric.icon}</div>
                </div>
                <div className={`flex items-center space-x-1 text-sm ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.trend === 'up' ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4" />
                  )}
                  <span>{metric.change}</span>
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</p>
                <p className="text-gray-600 text-sm">{metric.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Bookings */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Recent Bookings</h2>
                  <Link
                    href="/dashboard/bookings"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    View all
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center space-x-4 p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                        <Image
                          src={booking.image}
                          alt={booking.hotelName}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-gray-900">{booking.hotelName}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                            {booking.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{booking.guestName}</p>
                        <div className="flex items-center text-xs text-gray-500 space-x-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{booking.checkIn} - {booking.checkOut}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <DollarSign className="w-3 h-3" />
                            <span>${booking.amount}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats & Actions */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Link
                  href="/dashboard/hotels"
                  className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Manage Hotels</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-400" />
                </Link>
                <Link
                  href="/dashboard/bookings"
                  className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">View Bookings</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-400" />
                </Link>
                <Link
                  href="/dashboard/account"
                  className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Account Settings</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-400" />
                </Link>
              </div>
            </div>

            {/* Performance Summary */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Performance Summary</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Average Rating</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium">4.8</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Response Time</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-green-500" />
                    <span className="font-medium">2.3 hrs</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Properties</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Active Listings</span>
                  <span className="font-medium text-green-600">11</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}