'use client';

import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">Digital Marketing FAQs</h2>
            <p className="text-gray-500 leading-relaxed">
              As a leading digital marketing agency, we are dedicated to providing comprehensive educational resources and answering frequently asked questions to help our clients.
            </p>
            <div className="flex gap-4 pt-4">
                <button className="px-6 py-3 border border-black rounded-full font-semibold hover:bg-black hover:text-white transition-colors">
                    More Questions
                </button>
                <button className="px-6 py-3 font-semibold underline decoration-1 underline-offset-4 hover:opacity-70">
                    Contact Us
                </button>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-gray-200">
                {FAQS.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={index} className="py-6 first:pt-0">
                            <button 
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className="w-full flex justify-between items-start text-left gap-4 group"
                            >
                                <span className="text-xl font-semibold group-hover:text-gray-600 transition-colors">
                                    {faq.question}
                                </span>
                                <span className="flex-shrink-0 mt-1">
                                    {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                                </span>
                            </button>
                            <div 
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <p className="text-gray-500 leading-relaxed pr-8">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};