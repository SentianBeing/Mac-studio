'use client';

import React, { useState } from 'react';
import { CASE_STUDIES } from '../constants';

const FILTER_TABS = [
  { label: 'All Work [20]', value: 'all' },
  { label: 'UI/UX Design[10]', value: 'uiux' },
  { label: 'Digital Marketing [5]', value: 'marketing' },
  { label: 'Branding [5]', value: 'branding' },
];

export const CaseStudies: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('uiux');

  return (
    <section className="py-24 bg-[#0B0F19] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-10">
            Real-world examples of how we have helped companies achieve their marketing objectives.
          </h2>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-6 py-2 rounded-full border text-sm transition-all duration-300 ${
                  activeFilter === tab.value
                    ? 'bg-[#a3e635] border-[#a3e635] text-black font-semibold'
                    : 'border-white/20 text-white hover:border-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Horizontal Scroll/Grid */}
        <div className="relative overflow-x-auto pb-8 no-scrollbar">
            <div className="flex gap-8 min-w-max lg:min-w-0 lg:grid lg:grid-cols-12 items-center">
                
                {/* Static Circular Item */}
                <div className="w-[300px] h-[300px] lg:col-span-4 shrink-0 rounded-full bg-white/10 flex items-center justify-center relative group cursor-pointer border border-white/5 hover:border-white/20 transition-all">
                    <div className="w-[150px] h-[150px] bg-[#a3e635] rounded-full flex items-center justify-center z-10 scale-90 group-hover:scale-100 transition-transform duration-300">
                        <span className="text-black font-bold text-lg">See Details</span>
                    </div>
                </div>

                {/* Project Cards */}
                {CASE_STUDIES.slice(0, 2).map((study) => (
                    <div key={study.id} className="lg:col-span-4 shrink-0 w-[350px] lg:w-full h-[450px] bg-white/10 rounded-3xl overflow-hidden relative group cursor-pointer border border-white/10">
                         {/* Image */}
                         <img src={study.image} alt={study.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                         
                         {/* Content Overlay */}
                         <div className="absolute inset-0 p-8 flex flex-col justify-between">
                            <div className="flex justify-between items-start text-xs font-medium tracking-wide text-white/80 uppercase">
                                <span className="border-t border-white/50 pt-2">{study.year}</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                            </div>
                         </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};