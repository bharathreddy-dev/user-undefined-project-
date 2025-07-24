'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function MarketingFooter() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: 'Home', path: '/marketing' },
    { name: 'About', path: '/marketing/about' },
    { name: 'Contact', path: '/marketing/contact' },
    { name: 'Search Hotels', path: '/search' }
  ];

  const supportLinks = [
    { name: 'Help Center', path: '#' },
    { name: 'Safety Information', path: '#' },
    { name: 'Cancellation Options', path: '#' },
    { name: 'Disability Support', path: '#' }
  ];

  const companyLinks = [
    { name: 'Careers', path: '#' },
    { name: 'Press', path: '#' },
    { name: 'Policies', path: '#' },
    { name: 'Terms & Conditions', path: '#' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, path: '#' },
    { name: 'Twitter', icon: Twitter, path: '#' },
    { name: 'Instagram', icon: Instagram, path: '#' },
    { name: 'LinkedIn', icon: Linkedin, path: '#' }
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <Link href="/marketing" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
                StayEase
              </Link>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                Your trusted partner for finding the perfect accommodation. Discover comfort, convenience, and unforgettable experiences with every stay.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-slate-300">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>support@stayease.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-300">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-300">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.path} 
                    className="text-slate-300 hover:text-blue-400 transition-colors text-sm block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.path} 
                    className="text-slate-300 hover:text-blue-400 transition-colors text-sm block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.path} 
                    className="text-slate-300 hover:text-blue-400 transition-colors text-sm block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-slate-300 text-sm mb-4">
              Subscribe to our newsletter for exclusive deals and travel tips.
            </p>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <div className="text-slate-400 text-sm">
              © {currentYear} StayEase. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.path}
                    className="text-slate-400 hover:text-blue-400 transition-colors p-2 hover:bg-slate-800 rounded-full"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply opacity-5"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply opacity-5"></div>
      </div>
    </footer>
  );
}