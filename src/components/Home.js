// src/components/Home.js
import React from 'react';
import Hero from './Hero';
import FeaturedMenu from './FeaturedMenu';
import AboutSection from './AboutSection';
import TestimonialsSection from './TestimonialsSection';

const Home = () => {
  return (
    <main>
      <div className="section-dark">
        <Hero />
      </div>
      <div className="section-light">
        <FeaturedMenu />
      </div>
      <div className="section-dark">
        <AboutSection />
      </div>
      <div className="section-light">
        <TestimonialsSection />
      </div>
    </main>
  );
};

export default Home;
