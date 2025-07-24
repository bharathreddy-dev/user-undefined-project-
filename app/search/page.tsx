"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Star, MapPin, Wifi, Car, Coffee, Dumbbell, Heart, Filter, SlidersHorizontal } from 'lucide-react';

const hotelResults = [
  {
    id: 1,
    name: "Grand Plaza Hotel",
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.8,
    reviews: 324,
    location: "Downtown Manhattan",
    price: 299,
    originalPrice: 399,
    amenities: ["wifi", "parking", "gym", "breakfast"],
    description: "Luxury hotel in the heart of Manhattan with stunning city views and world-class amenities."
  },
  {
    id: 2,
    name: "Seaside Resort & Spa",
    image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.6,
    reviews: 189,
    location: "Miami Beach",
    price: 259,
    originalPrice: 329,
    amenities: ["wifi", "parking", "gym"],
    description: "Beautiful beachfront resort with spa services and ocean views."
  },
  {
    id: 3,
    name: "Mountain View Lodge",
    image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.7,
    reviews: 156,
    location: "Aspen, Colorado",
    price: 189,
    originalPrice: 249,
    amenities: ["wifi", "breakfast"],
    description: "Cozy mountain lodge with breathtaking views and rustic charm."
  },
  {
    id: 4,
    name: "City Center Hotel",
    image: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.5,
    reviews: 278,
    location: "Chicago, IL",
    price: 149,
    originalPrice: 199,
    amenities: ["wifi", "gym"],
    description: "Modern hotel in downtown Chicago with easy access to attractions."
  },
  {
    id: 5,
    name: "Boutique Garden Hotel",
    image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.9,
    reviews: 92,
    location: "San Francisco",
    price: 349,
    originalPrice: 449,
    amenities: ["wifi", "parking", "breakfast"],
    description: "Intimate boutique hotel with beautiful garden courtyard and personalized service."
  },
  {
    id: 6,
    name: "Historic Downtown Inn",
    image: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.4,
    reviews: 203,
    location: "Boston, MA",
    price: 179,
    originalPrice: 229,
    amenities: ["wifi", "breakfast"],
    description: "Historic inn with classic charm in the heart of Boston's historic district."
  }
];

const amenityIcons = {
  wifi: <Wifi className="w-4 h-4" />,
  parking: <Car className="w-4 h-4" />,
  breakfast: <Coffee className="w-4 h-4" />,
  gym: <Dumbbell className="w-4 h-4" />
};

export default function SearchResultsPage() {
  const [sortBy, setSortBy] = useState('recommended');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (hotelId: number) => {
    setFavorites(prev => 
      prev.includes(hotelId) 
        ? prev.filter(id => id !== hotelId)
        : [...prev, hotelId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Search Results</h1>
              <p className="text-gray-600 mt-1">42 hotels found for your search</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </button>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl shadow-sm border p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Filter Results</h3>
              
              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Price Range (per night)
                </label>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-blue-600"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Star Rating */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Star Rating
                </label>
                <div className="space-y-2">
                  {[5, 4, 3, 2].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                      <div className="flex items-center ml-2">
                        {[...Array(rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-sm text-gray-600 ml-1">& up</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Amenities
                </label>
                <div className="space-y-2">
                  {[
                    { key: 'wifi', label: 'Free WiFi' },
                    { key: 'parking', label: 'Free Parking' },
                    { key: 'breakfast', label: 'Free Breakfast' },
                    { key: 'gym', label: 'Fitness Center' }
                  ].map((amenity) => (
                    <label key={amenity.key} className="flex items-center">
                      <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                      <span className="text-sm text-gray-600 ml-2">{amenity.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1">
            <div className="space-y-6">
              {hotelResults.map((hotel) => (
                <div key={hotel.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row">
                    {/* Hotel Image */}
                    <div className="lg:w-80 h-64 lg:h-auto relative">
                      <Image
                        src={hotel.image}
                        alt={hotel.name}
                        fill
                        className="object-cover rounded-t-xl lg:rounded-l-xl lg:rounded-t-none"
                      />
                      <button
                        onClick={() => toggleFavorite(hotel.id)}
                        className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                      >
                        <Heart 
                          className={`w-5 h-5 ${
                            favorites.includes(hotel.id) 
                              ? 'fill-red-500 text-red-500' 
                              : 'text-gray-600'
                          }`} 
                        />
                      </button>
                    </div>

                    {/* Hotel Details */}
                    <div className="flex-1 p-6">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">{hotel.name}</h3>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium text-gray-700 ml-1">{hotel.rating}</span>
                              <span className="text-sm text-gray-500 ml-1">({hotel.reviews} reviews)</span>
                            </div>
                          </div>

                          <div className="flex items-center text-gray-600 mb-3">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span className="text-sm">{hotel.location}</span>
                          </div>

                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {hotel.description}
                          </p>

                          <div className="flex items-center gap-3 mb-4">
                            {hotel.amenities.map((amenity) => (
                              <div key={amenity} className="flex items-center text-gray-600">
                                {amenityIcons[amenity as keyof typeof amenityIcons]}
                                <span className="text-xs ml-1 capitalize">{amenity}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="lg:text-right">
                          <div className="mb-2">
                            <span className="text-sm text-gray-500 line-through">${hotel.originalPrice}</span>
                            <div className="text-2xl font-bold text-gray-900">${hotel.price}</div>
                            <span className="text-sm text-gray-600">per night</span>
                          </div>

                          <Link
                            href={`/hotels/${hotel.id}`}
                            className="inline-block w-full lg:w-auto px-6 py-3 bg-blue-600 text-white text-center font-medium rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                Load More Results
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}