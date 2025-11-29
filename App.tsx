import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FB] text-gray-900 font-sans selection:bg-[#a3e635] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <CaseStudies />
        <Testimonials />
        <FAQ />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
