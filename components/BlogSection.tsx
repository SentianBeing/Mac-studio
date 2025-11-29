import React from 'react';
import { BLOG_POSTS } from '../constants';
import { ArrowRight } from 'lucide-react';

export const BlogSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                    Digital Marketing & SEO Services That Grow Traffic & Increase Revenue
                </h2>
            </div>
            
            <div className="max-w-md text-right lg:text-left">
                <p className="text-gray-500 text-sm mb-6">
                    We are the top digital marketing agency for branding corp. We offer a full range of services to help clients improve their search engine rankings and drive more traffic to their websites.
                </p>
                <button className="px-8 py-3 border border-black rounded-full font-semibold hover:bg-black hover:text-white transition-colors">
                    See more
                </button>
            </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, index) => (
                <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow flex flex-col justify-between min-h-[340px]">
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-2">
                                <div className={`w-3 h-3 rounded-full ${post.color}`}></div>
                            </div>
                            <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4 leading-snug">
                            {post.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            {post.description}
                        </p>
                    </div>

                    <div className="mt-8 flex justify-end">
                        <button className={`w-12 h-12 rounded-full flex items-center justify-center border transition-colors ${index === 0 ? 'bg-black text-white border-black' : 'border-gray-200 hover:border-black'}`}>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};
