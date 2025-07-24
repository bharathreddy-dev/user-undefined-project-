"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  hotelName?: string;
  stayDuration?: string;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
  showPagination?: boolean;
  itemsPerPage?: number;
  variant?: "default" | "grid" | "carousel";
  showRatings?: boolean;
  className?: string;
}

export default function Testimonials({
  testimonials,
  showPagination = true,
  itemsPerPage = 3,
  variant = "default",
  showRatings = true,
  className = ""
}: TestimonialsProps) {
  const defaultTestimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Travel Blogger",
      company: "Wanderlust Adventures",
      content: "StayEase made our European tour absolutely seamless. The hotel selection was incredible, and the booking process was so smooth. We stayed at 8 different properties and each one exceeded our expectations. The customer service was outstanding!",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      hotelName: "Grand Palace Vienna",
      stayDuration: "7 nights"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Executive",
      company: "Tech Solutions Inc",
      content: "As someone who travels frequently for business, I need reliability. StayEase has never let me down. Their corporate booking features save me hours, and the quality of accommodations is consistently excellent. Highly recommended!",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      hotelName: "Metropolitan Business Hotel",
      stayDuration: "3 nights"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Event Planner",
      company: "Celebrations & Co",
      content: "Planning destination weddings requires perfect accommodations for guests. StayEase helped us secure group bookings with amazing rates. The variety of options and seamless coordination made our job so much easier. Our clients were thrilled!",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400",
      hotelName: "Coastal Resort & Spa",
      stayDuration: "4 nights"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Family Traveler",
      company: "Thompson Family",
      content: "With three kids, finding the right accommodations can be challenging. StayEase's family-friendly filters and detailed property information helped us find perfect places for our family vacations. The kids loved the pools and activities!",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      hotelName: "Family Paradise Resort",
      stayDuration: "5 nights"
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Digital Nomad",
      company: "Remote Creative Studio",
      content: "Working remotely while traveling requires reliable internet and comfortable workspaces. StayEase's detailed amenity information and verified reviews helped me choose properties that met all my professional needs. Game changer!",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3771814/pexels-photo-3771814.jpeg?auto=compress&cs=tinysrgb&w=400",
      hotelName: "Urban Loft Co-living",
      stayDuration: "14 nights"
    },
    {
      id: 6,
      name: "Robert Williams",
      role: "Luxury Travel Advisor",
      company: "Elite Escapes",
      content: "I recommend StayEase to all my high-end clients. Their curated selection of luxury properties and white-glove service consistently delivers exceptional experiences. The attention to detail and personalized support is unmatched in the industry.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      hotelName: "Platinum Tower Suites",
      stayDuration: "6 nights"
    }
  ];

  const displayTestimonials = testimonials || defaultTestimonials;
  const [currentPage, setCurrentPage] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalPages = Math.ceil(displayTestimonials.length / itemsPerPage);

  useEffect(() => {
    if (variant === "carousel") {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % displayTestimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [variant, displayTestimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  const getCurrentItems = () => {
    if (variant === "carousel") {
      return [displayTestimonials[currentSlide]];
    }
    const startIndex = currentPage * itemsPerPage;
    return displayTestimonials.slice(startIndex, startIndex + itemsPerPage);
  };

  if (variant === "carousel") {
    return (
      <div className={`w-full ${className}`}>
        <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 md:p-12 overflow-hidden">
          <div className="absolute top-6 left-6 text-blue-200 opacity-50">
            <Quote className="w-16 h-16 md:w-20 md:h-20" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <Image
                  src={displayTestimonials[currentSlide]?.avatar || ""}
                  alt={displayTestimonials[currentSlide]?.name || ""}
                  fill
                  className="rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              <blockquote className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                "{displayTestimonials[currentSlide]?.content}"
              </blockquote>
              {showRatings && (
                <div className="flex justify-center mb-4">
                  {renderStars(displayTestimonials[currentSlide]?.rating || 5)}
                </div>
              )}
              <div className="text-center">
                <div className="font-semibold text-gray-900 text-lg">
                  {displayTestimonials[currentSlide]?.name}
                </div>
                <div className="text-blue-600 font-medium">
                  {displayTestimonials[currentSlide]?.role}
                </div>
                <div className="text-gray-500 text-sm">
                  {displayTestimonials[currentSlide]?.company}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-3 mt-8">
            {displayTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-blue-600 w-8" : "bg-blue-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentSlide(
                currentSlide === 0 ? displayTestimonials.length - 1 : currentSlide - 1
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-blue-600"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() =>
              setCurrentSlide((currentSlide + 1) % displayTestimonials.length)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-blue-600"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <div className={`w-full ${className}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
              
              {showRatings && (
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
              )}
              
              <blockquote className="text-gray-700 text-sm leading-relaxed mb-4">
                "{testimonial.content}"
              </blockquote>
              
              {testimonial.hotelName && (
                <div className="text-xs text-blue-600 font-medium">
                  Stayed at {testimonial.hotelName}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="space-y-8">
        {getCurrentItems().map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-8 border border-gray-100"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  className="rounded-full object-cover border-2 border-gray-100"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <div className="font-semibold text-lg text-gray-900 mb-1">
                      {testimonial.name}
                    </div>
                    <div className="text-blue-600 font-medium text-sm">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                  
                  {showRatings && (
                    <div className="flex mt-2 md:mt-0">
                      {renderStars(testimonial.rating)}
                    </div>
                  )}
                </div>
                
                <blockquote className="text-gray-700 leading-relaxed mb-4">
                  "{testimonial.content}"
                </blockquote>
                
                {testimonial.hotelName && (
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                      {testimonial.hotelName}
                    </span>
                    {testimonial.stayDuration && (
                      <span className="bg-gray-50 text-gray-600 px-3 py-1 rounded-full">
                        {testimonial.stayDuration}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {showPagination && totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4 mt-8">
          <button
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-gray-600 hover:text-blue-600"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-10 h-10 rounded-full text-sm font-medium transition-all duration-300 ${
                  i === currentPage
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-sm"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
            disabled={currentPage === totalPages - 1}
            className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-gray-600 hover:text-blue-600"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}