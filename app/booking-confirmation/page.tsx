import { CheckCircle2, Download, Calendar, MapPin, Users, CreditCard, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function BookingConfirmationPage() {
  const bookingDetails = {
    confirmationNumber: "SE-2024-78391",
    hotelName: "Grand Pacific Resort",
    hotelImage: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Santorini, Greece",
    checkIn: "March 15, 2024",
    checkOut: "March 18, 2024",
    nights: 3,
    guests: 2,
    roomType: "Ocean View Suite",
    totalAmount: "$847.50",
    guestName: "Sarah Johnson",
    guestEmail: "sarah.johnson@email.com",
    guestPhone: "+1 (555) 123-4567",
    paymentMethod: "**** 4242"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Booking Confirmed!</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Thank you for choosing StayEase. Your reservation has been successfully confirmed and you'll receive a confirmation email shortly.
          </p>
        </div>

        {/* Confirmation Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          {/* Confirmation Number Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">Confirmation Number</p>
                <p className="text-white text-2xl font-bold">{bookingDetails.confirmationNumber}</p>
              </div>
              <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>

          <div className="p-8">
            {/* Hotel Details */}
            <div className="flex flex-col lg:flex-row gap-8 mb-8">
              <div className="lg:w-1/3">
                <div className="relative h-48 lg:h-full rounded-xl overflow-hidden">
                  <Image
                    src={bookingDetails.hotelImage}
                    alt={bookingDetails.hotelName}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-2/3">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{bookingDetails.hotelName}</h2>
                <div className="flex items-center text-slate-600 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  {bookingDetails.location}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <p className="text-sm text-slate-500">Check-in</p>
                        <p className="font-semibold text-slate-900">{bookingDetails.checkIn}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <p className="text-sm text-slate-500">Check-out</p>
                        <p className="font-semibold text-slate-900">{bookingDetails.checkOut}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <p className="text-sm text-slate-500">Guests</p>
                        <p className="font-semibold text-slate-900">{bookingDetails.guests} Adults</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Room Type</p>
                      <p className="font-semibold text-slate-900">{bookingDetails.roomType}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Summary */}
            <div className="border-t border-slate-200 pt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Guest Information */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Guest Information</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-slate-500">Primary Guest</p>
                      <p className="font-medium text-slate-900">{bookingDetails.guestName}</p>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-slate-400 mr-2" />
                      <p className="text-slate-700">{bookingDetails.guestEmail}</p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-slate-400 mr-2" />
                      <p className="text-slate-700">{bookingDetails.guestPhone}</p>
                    </div>
                  </div>
                </div>

                {/* Payment & Summary */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Payment Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600">{bookingDetails.nights} nights</span>
                      <span className="text-slate-900">$282.50 × 3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Taxes & fees</span>
                      <span className="text-slate-900">$117.00</span>
                    </div>
                    <div className="border-t border-slate-200 pt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-slate-900">Total</span>
                        <span className="text-2xl font-bold text-blue-600">{bookingDetails.totalAmount}</span>
                      </div>
                    </div>
                    <div className="flex items-center mt-4">
                      <CreditCard className="w-4 h-4 text-slate-400 mr-2" />
                      <span className="text-slate-600">Paid with card ending in {bookingDetails.paymentMethod}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">What's Next?</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>You'll receive a confirmation email within the next few minutes</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Check-in begins at 3:00 PM on your arrival date</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Bring a valid ID and the credit card used for booking</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Need Help?</h3>
            <div className="space-y-4">
              <p className="text-slate-600">
                Our customer support team is available 24/7 to assist you with any questions about your booking.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/marketing/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center transition-colors"
                >
                  Contact Support
                </Link>
                <Link
                  href="/dashboard/bookings"
                  className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg text-center transition-colors"
                >
                  Manage Booking
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/dashboard/bookings"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-center transition-colors"
          >
            View All Bookings
          </Link>
          <Link
            href="/marketing"
            className="border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-8 py-3 rounded-xl font-semibold text-center transition-colors"
          >
            Book Another Stay
          </Link>
        </div>
      </div>
    </div>
  )
}