'use client';

import HeroSection from './components/HeroSection';
import FeaturedHotels from './components/FeaturedHotels';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import HotelSearch from './components/HotelSearch';

export default function Page() {
  return (
    <div className="p-8">
        <HeroSection />
        <FeaturedHotels />
        <HowItWorks />
        <Testimonials />
        <HotelSearch />
    </div>
  );
}