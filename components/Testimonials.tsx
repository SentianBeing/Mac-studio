'use client';

import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-4xl font-medium leading-relaxed mb-12">
            “ {current.quote} ”
          </h2>

          <div className="flex items-center justify-between border-t border-gray-200 pt-8">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div>
                    <h4 className="font-bold text-lg">{current.author}</h4>
                    <p className="text-sm text-gray-500">{current.role} of {current.company}</p>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="flex gap-3">
                    <button 
                        onClick={prev}
                        className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button 
                        onClick={next}
                        className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                    >
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
                <span className="text-sm font-medium">0{currentIndex + 1}/0{TESTIMONIALS.length}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};