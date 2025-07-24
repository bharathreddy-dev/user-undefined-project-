"use client";

import { useState } from 'react';
import { Calendar, MapPin, Users, Search, Plus, Minus } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface GuestCount {
  adults: number;
  children: number;
  rooms: number;
}

export default function HotelSearch() {
  const router = useRouter();
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState<GuestCount>({
    adults: 2,
    children: 0,
    rooms: 1
  });
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);

  const handleGuestChange = (type: keyof GuestCount, increment: boolean) => {
    setGuests(prev => ({
      ...prev,
      [type]: increment ? prev[type] + 1 : Math.max(type === 'adults' ? 1 : 0, prev[type] - 1)
    }));
  };

  const handleSearch = () => {
    const searchParams = new URLSearchParams({
      destination,
      checkIn,
      checkOut,
      adults: guests.adults.toString(),
      children: guests.children.toString(),
      rooms: guests.rooms.toString()
    });
    
    router.push(`/search?${searchParams.toString()}`);
  };

  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-6">
          <h2 className="text-2xl font-bold text-white mb-2">Find Your Perfect Stay</h2>
          <p className="text-blue-100">Discover amazing hotels worldwide with StayEase</p>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-6">
            {/* Destination */}
            <div className="lg:col-span-4">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Destination
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Where are you going?"
                  className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            {/* Check-in Date */}
            <div className="lg:col-span-3">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Check-in
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  min={today}
                  className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            {/* Check-out Date */}
            <div className="lg:col-span-3">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Check-out
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  min={checkIn || tomorrow}
                  className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="lg:col-span-2 relative">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Guests & Rooms
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <button
                  type="button"
                  onClick={() => setShowGuestDropdown(!showGuestDropdown)}
                  className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-left bg-white"
                >
                  {guests.adults + guests.children} guests, {guests.rooms} room{guests.rooms !== 1 ? 's' : ''}
                </button>

                {showGuestDropdown && (
                  <div className="absolute top-full mt-2 w-80 bg-white border border-slate-200 rounded-lg shadow-xl z-50 p-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-slate-900">Adults</div>
                          <div className="text-sm text-slate-500">Ages 13 or above</div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button
                            type="button"
                            onClick={() => handleGuestChange('adults', false)}
                            className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-50 disabled:opacity-50"
                            disabled={guests.adults <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">{guests.adults}</span>
                          <button
                            type="button"
                            onClick={() => handleGuestChange('adults', true)}
                            className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-50"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-slate-900">Children</div>
                          <div className="text-sm text-slate-500">Ages 0-12</div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button
                            type="button"
                            onClick={() => handleGuestChange('children', false)}
                            className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-50 disabled:opacity-50"
                            disabled={guests.children <= 0}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">{guests.children}</span>
                          <button
                            type="button"
                            onClick={() => handleGuestChange('children', true)}
                            className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-50"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-slate-900">Rooms</div>
                          <div className="text-sm text-slate-500">Separate rooms</div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button
                            type="button"
                            onClick={() => handleGuestChange('rooms', false)}
                            className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-50 disabled:opacity-50"
                            disabled={guests.rooms <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">{guests.rooms}</span>
                          <button
                            type="button"
                            onClick={() => handleGuestChange('rooms', true)}
                            className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-50"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setShowGuestDropdown(false)}
                        className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSearch}
              className="px-12 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-800 transition-all transform hover:scale-105 shadow-lg flex items-center space-x-3"
            >
              <Search className="w-5 h-5" />
              <span>Search Hotels</span>
            </button>
          </div>

          {/* Popular Destinations */}
          <div className="mt-8 pt-8 border-t border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Popular Destinations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: 'New York', image: 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=200' },
                { name: 'Paris', image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=200' },
                { name: 'Tokyo', image: 'https://images.pexels.com/photos/248195/pexels-photo-248195.jpeg?auto=compress&cs=tinysrgb&w=200' },
                { name: 'London', image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=200' },
                { name: 'Dubai', image: 'https://images.pexels.com/photos/261110/pexels-photo-261110.jpeg?auto=compress&cs=tinysrgb&w=200' },
                { name: 'Bali', image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=200' }
              ].map((destination) => (
                <button
                  key={destination.name}
                  onClick={() => {
                    setDestination(destination.name);
                    handleSearch();
                  }}
                  className="group relative overflow-hidden rounded-lg aspect-square hover:scale-105 transition-transform"
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-colors" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-white font-medium text-sm block bg-black bg-opacity-50 rounded px-2 py-1">
                      {destination.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}