"use client";

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Home, 
  Calendar, 
  Building2, 
  User, 
  Menu, 
  X,
  ChevronLeft,
  BarChart3,
  Settings
} from 'lucide-react'

const DashboardSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  const navigationItems = [
    {
      name: 'Overview',
      path: '/dashboard',
      icon: Home
    },
    {
      name: 'Bookings',
      path: '/dashboard/bookings',
      icon: Calendar
    },
    {
      name: 'Hotels',
      path: '/dashboard/hotels',
      icon: Building2
    },
    {
      name: 'Account',
      path: '/dashboard/account',
      icon: User
    }
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileSidebar}
        className="lg:hidden fixed top-4 left-4 z-20 p-2 rounded-lg bg-white shadow-lg border border-slate-200 hover:bg-slate-50 transition-colors"
      >
        <Menu size={20} className="text-slate-600" />
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-15"
          onClick={toggleMobileSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed left-0 top-0 h-screen bg-white border-r border-slate-200 shadow-lg z-10 transition-all duration-300 ease-in-out overflow-y-auto
          ${isCollapsed ? 'w-16' : 'w-64'}
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className={`flex items-center justify-between p-4 border-b border-slate-200 ${isCollapsed ? 'px-2' : 'px-4'}`}>
            {!isCollapsed && (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Building2 size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold text-slate-800">StayEase</span>
              </div>
            )}
            
            <div className="flex items-center space-x-2">
              {/* Mobile Close Button */}
              <button
                onClick={toggleMobileSidebar}
                className="lg:hidden p-1 rounded-md hover:bg-slate-100 transition-colors"
              >
                <X size={18} className="text-slate-600" />
              </button>
              
              {/* Desktop Collapse Button */}
              <button
                onClick={toggleSidebar}
                className="hidden lg:block p-1 rounded-md hover:bg-slate-100 transition-colors"
              >
                <ChevronLeft 
                  size={18} 
                  className={`text-slate-600 transition-transform duration-200 ${isCollapsed ? 'rotate-180' : ''}`} 
                />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.path
              
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMobileOpen(false)}
                  className={`
                    flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative
                    ${isActive 
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md' 
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                    }
                    ${isCollapsed ? 'justify-center px-2' : ''}
                  `}
                >
                  <Icon 
                    size={20} 
                    className={`
                      ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-700'}
                      transition-colors duration-200
                    `} 
                  />
                  {!isCollapsed && (
                    <span className="font-medium">{item.name}</span>
                  )}
                  
                  {/* Tooltip for collapsed state */}
                  {isCollapsed && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-slate-800 text-white text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-20">
                      {item.name}
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-slate-800 rotate-45"></div>
                    </div>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-slate-200">
            <div className={`flex items-center space-x-3 ${isCollapsed ? 'justify-center' : ''}`}>
              <div className="w-8 h-8 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full flex items-center justify-center">
                <User size={16} className="text-white" />
              </div>
              {!isCollapsed && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800 truncate">Admin User</p>
                  <p className="text-xs text-slate-500 truncate">admin@stayease.com</p>
                </div>
              )}
            </div>
            
            {!isCollapsed && (
              <div className="mt-3 pt-3 border-t border-slate-200">
                <Link
                  href="/dashboard/account"
                  className="flex items-center space-x-2 px-2 py-1.5 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-md transition-colors"
                >
                  <Settings size={16} />
                  <span>Settings</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardSidebar