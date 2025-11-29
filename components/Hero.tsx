import React from 'react';
import { ArrowRight } from './ui/Icons';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 bg-[#F8F9FB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 max-w-2xl relative z-10">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              Stay ahead of the curve with our forward-thinking
            </h1>
            <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
              An award-winning SEO agency with disciplines in digital marketing, design, and website development, focused on understanding you.
            </p>
            
            <div className="flex flex-wrap items-center gap-6">
              <button className="group flex items-center gap-3 bg-black text-white pl-8 pr-2 py-2 rounded-full font-medium hover:bg-gray-800 transition-all">
                Schedule Call
                <span className="bg-white text-black rounded-full p-2 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
              <a href="#" className="font-semibold text-gray-900 border-b border-black pb-0.5 hover:opacity-70">
                View Case Study
              </a>
            </div>

            <div className="pt-12">
              <div className="flex flex-wrap items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <p className="text-xs font-semibold text-black max-w-[100px] leading-tight">Trusted by the world's biggest brands</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Afterpay_logo.svg" alt="Afterpay" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Basecamp_Logo.svg" alt="Basecamp" className="h-7" />
                <div className="flex items-center gap-1 font-bold text-xl"><span className="text-2xl">∞</span>maze</div>
              </div>
            </div>
          </div>

          {/* Right Graphics */}
          <div className="relative lg:h-[600px] w-full flex items-center justify-center lg:justify-end">
            {/* Background Shape */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gray-200 rounded-bl-full z-0 hidden lg:block"></div>

            {/* Floating Card 1: 230+ */}
            <div className="relative z-10 bg-gray-100 p-8 rounded-3xl w-72 shadow-lg mb-20 mr-10 lg:mr-20">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-black rounded-full flex items-center justify-center text-[#a3e635]">
                 <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-5xl font-bold mt-4 mb-2">230+</h3>
              <p className="text-sm text-gray-500 leading-snug">
                some big companies that we work with, and trust us very much
              </p>
              <div className="mt-6 w-full bg-gray-300 h-1.5 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-black rounded-full"></div>
              </div>
            </div>

            {/* Floating Card 2: Drive More Traffic */}
            <div className="absolute bottom-0 right-0 lg:right-10 z-20 bg-black text-white p-8 rounded-3xl w-80 lg:w-96 shadow-2xl">
              <div className="flex items-center gap-2 mb-6 text-gray-400 text-xs uppercase tracking-wide">
                <div className="w-8 h-[1px] bg-gray-500"></div>
                Drive More Traffic and Sales
              </div>
              <h3 className="text-2xl font-semibold mb-8 leading-snug">
                Drive more traffic and product sales
              </h3>
              
              {/* Bar Chart Visualization */}
              <div className="flex items-end justify-between h-24 gap-4 px-2">
                <div className="w-full bg-[#a3e635] h-[40%] rounded-t-md opacity-80 hover:opacity-100 transition-opacity"></div>
                <div className="w-full bg-[#a3e635] h-[70%] rounded-t-md opacity-90 hover:opacity-100 transition-opacity"></div>
                <div className="w-full bg-[#a3e635] h-[100%] rounded-t-md hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
