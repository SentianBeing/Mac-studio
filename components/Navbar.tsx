'use client';

import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';
import { Logo, ChevronDown } from './ui/Icons';
import { Bell, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black transition-colors"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4 text-gray-400" />}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="px-6 py-2.5 border border-gray-200 rounded-full text-sm font-semibold hover:border-black transition-colors">
              Get started
            </button>
            <button className="p-2.5 rounded-full bg-black text-white hover:bg-gray-800 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-black"></span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center justify-between text-base font-medium text-gray-700 hover:text-black py-2 border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </a>
          ))}
          <div className="flex gap-4 mt-2">
            <button className="flex-1 px-6 py-3 border border-gray-200 rounded-full text-sm font-semibold hover:border-black">
              Get started
            </button>
            <button className="p-3 rounded-full bg-black text-white hover:bg-gray-800">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};