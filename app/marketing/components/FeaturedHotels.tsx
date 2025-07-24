"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, MapPin, Wifi, Car, Coffee, Dumbbell } from "lucide-react";

interface Hotel {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  image: string;
  amenities: string[];
  description: string;
  featured: boolean;
}

const featuredHotels: Hotel[] = [
  {
    id: "1",
    name: "The Grand Palace Resort",
    location: "Bali, Indonesia",
    rating: 4.9,
    reviewCount: 1247,
    price: 299,
    originalPrice: 399,
    image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800",
    amenities: ["wifi", "pool", "spa", "restaurant"],
    description: "Luxurious beachfront resort with world-class amenities and stunning ocean views.",
    featured: true
  },
  {
    id: "2",
    name: "Mountain View Lodge",
    location: "Swiss Alps, Switzerland",
    rating: 4.8,
    reviewCount: 892,
    price: 450,
    originalPrice: 550,
    image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
    amenities: ["wifi", "ski", "fireplace", "restaurant"],
    description: "Cozy alpine lodge with breathtaking mountain vistas and premium ski access.",
    featured: true
  },
  {
    id: "3",
    name: "Urban Boutique Hotel",
    location: "New York, USA",
    rating: 4.7,
    reviewCount: 2156,
    price: 350,
    originalPrice: 425,
    image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800",
    amenities: ["wifi", "gym", "bar", "concierge"],
    description: "Modern luxury hotel in the heart of Manhattan with stylish contemporary design.",
    featured: true
  },
  {
    id: "4",
    name: "Tropical Paradise Resort",
    location: "Maldives",
    rating: 4.9,
    reviewCount: 756,
    price: 650,
    originalPrice: 800,
    image: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800",
    amenities: ["wifi", "overwater", "spa", "diving"],
    description: "Exclusive overwater bungalows with crystal clear lagoon views and pristine beaches.",
    featured: true
  },
  {
    id: "5",
    name: "Historic Castle Hotel",
    location: "Edinburgh, Scotland",
    rating: 4.6,
    reviewCount: 1543,
    price: 275,
    originalPrice: 350,
    image: "https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=800",
    amenities: ["wifi", "historic", "restaurant", "garden"],
    description: "Restored medieval castle with elegant rooms and rich historical character.",
    featured: true
  },
  {
    id: "6",
    name: "Desert Oasis Resort",
    location: "Dubai, UAE",
    rating: 4.8,
    reviewCount: 1098,
    price: 525,
    originalPrice: 650,
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800",
    amenities: ["wifi", "pool", "spa", "desert"],
    description: "Luxury desert resort with infinity pools and authentic Arabian hospitality.",
    featured: true
  }
];

const getAmenityIcon = (amenity: string) => {
  switch (amenity) {
    case "wifi":
      return <Wifi className="w-4 h-4" />;
    case "gym":
      return <Dumbbell className="w-4 h-4" />;
    case "restaurant":
    case "bar":
      return <Coffee className="w-4 h-4" />;
    case "parking":
      return <Car className="w-4 h-4" />;
    default:
      return <Star className="w-4 h-4" />;
  }
};

export default function FeaturedHotels() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Featured Hotels
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover our handpicked collection of exceptional hotels offering unmatched luxury,
            comfort, and unforgettable experiences around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredHotels?.map((hotel) => (
            <div
              key={hotel?.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={hotel?.image || ""}
                  alt={hotel?.name || "Hotel"}
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-slate-800">
                      {hotel?.rating}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {hotel?.name}
                    </h3>
                    <div className="flex items-center text-slate-600 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{hotel?.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {hotel?.description}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  {hotel?.amenities?.slice(0, 4)?.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center w-8 h-8 bg-slate-100 rounded-full text-slate-600"
                    >
                      {getAmenityIcon(amenity)}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(hotel?.rating || 0)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-slate-600">
                      ({hotel?.reviewCount} reviews)
                    </span>
                  </div>
                </div>

                <div className="flex items-end justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-slate-900">
                      ${hotel?.price}
                    </span>
                    {hotel?.originalPrice && (
                      <span className="text-lg text-slate-500 line-through">
                        ${hotel?.originalPrice}
                      </span>
                    )}
                    <span className="text-sm text-slate-600">/night</span>
                  </div>
                  <Link
                    href={`/hotels/${hotel?.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/search"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View All Hotels
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}