import React from 'react';
import { Play, Plus } from 'lucide-react';

export const StatsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Provide the best service with out of the box ideas
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            we are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed in the digital world. With years of experience and a deep understanding of the ever-evolving online landscape, we stay at the forefront of industry trends and technologies.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 h-auto lg:h-[400px]">
          
          {/* Card 1: 920+ Projects */}
          <div className="bg-black text-white rounded-[2rem] p-10 flex flex-col justify-between relative overflow-hidden group">
            {/* Glossy gradient effect */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-gray-800/50 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="text-6xl font-bold flex items-start gap-1">
                920<span className="text-[#a3e635] text-4xl mt-2">+</span>
              </h3>
              <p className="text-gray-400 mt-2">Project finish with superbly</p>
            </div>

            <div className="relative z-10 flex items-center gap-2 mt-12">
               {/* Avatars */}
               <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-12 h-12 rounded-full bg-gray-400 border-2 border-black"></div>
                 ))}
               </div>
               <div className="w-12 h-12 rounded-full bg-transparent border-2 border-white/20 flex items-center justify-center text-white">
                 <Plus className="w-6 h-6" />
               </div>
            </div>
          </div>

          {/* Card 2: Video/Work Placeholder */}
          <div className="lg:col-span-2 bg-gray-300 rounded-[2rem] relative overflow-hidden min-h-[300px]">
            {/* Placeholder Image/Overlay */}
            <div className="absolute inset-0 bg-gray-400/50 flex items-center justify-center">
              <h3 className="text-4xl lg:text-6xl font-bold text-white tracking-widest uppercase opacity-80">
                How We Work
              </h3>
            </div>
            
            {/* Play Button */}
            <button className="absolute bottom-8 right-8 w-20 h-20 bg-[#a3e635] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg cursor-pointer z-20">
              <Play className="w-8 h-8 text-black fill-black ml-1" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
