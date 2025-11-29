import React from 'react';
import { Logo, ArrowRight } from './ui/Icons';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F8F9FB] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large CTA Banner */}
        <div className="bg-[#0B0F19] rounded-[3rem] p-12 lg:p-20 text-white flex flex-col lg:flex-row justify-between items-center gap-10 mb-20 relative overflow-hidden">
             {/* Simple glow effect */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>

            <h2 className="text-4xl lg:text-6xl font-bold relative z-10">
                Ready to work with us ?
            </h2>
            <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors relative z-10">
                Get Started
                <ArrowRight className="w-5 h-5" />
            </button>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="space-y-6">
                <Logo />
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                    We offers a comprehensive suite of digital marketing services that cover all aspects of our online presence. From SEO and social media marketing to content creation and PPC advertising.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:border-black transition-colors"><Facebook className="w-4 h-4" /></a>
                    <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:border-black transition-colors"><Twitter className="w-4 h-4" /></a>
                    <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:border-black transition-colors"><Linkedin className="w-4 h-4" /></a>
                    <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:border-black transition-colors"><Instagram className="w-4 h-4" /></a>
                </div>
            </div>

            {/* Navigation */}
            <div>
                <h4 className="font-bold mb-6">Navigation</h4>
                <ul className="space-y-4 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-black">Service</a></li>
                    <li><a href="#" className="hover:text-black">Agency</a></li>
                    <li><a href="#" className="hover:text-black">Case Study</a></li>
                    <li><a href="#" className="hover:text-black">Resource</a></li>
                    <li><a href="#" className="hover:text-black">Contact</a></li>
                </ul>
            </div>

            {/* Licence */}
            <div>
                <h4 className="font-bold mb-6">Licence</h4>
                <ul className="space-y-4 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-black">Copyright</a></li>
                    <li><a href="#" className="hover:text-black">Email Address</a></li>
                </ul>
            </div>

            {/* Contact */}
            <div>
                <h4 className="font-bold mb-6">Contact</h4>
                <ul className="space-y-4 text-sm text-gray-500">
                    <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> (406) 555-0120</li>
                    <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> Hey@boostim.com</li>
                    <li className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /> 
                        <span>2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
                    </li>
                </ul>
            </div>
        </div>

      </div>
    </footer>
  );
};
