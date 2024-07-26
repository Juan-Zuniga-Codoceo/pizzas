// src/components/Home.js
import React from 'react';
import Hero from './Hero';
import FeaturedMenu from './FeaturedMenu';
import AboutSection from './AboutSection';
import TestimonialsSection from './TestimonialsSection';
import '../styles/components/Home.css';

const Home = () => {
  return (
    <main>
      <div className="section section-dark">
        <Hero />
      </div>
      <div className="section-separator">
        <div className="section-separator-line"></div>
        <div className="section-separator-icon menu-icon"></div>
        <div className="section-separator-line"></div>
      </div>
      <div className="section section-dark">
        <FeaturedMenu />
      </div>
      <div className="section-separator">
        <div className="section-separator-line"></div>
        <div className="section-separator-icon utensils-icon"></div>
        <div className="section-separator-line"></div>
      </div>
      <div className="section section-dark">
        <AboutSection />
      </div>
      <div className="section-separator">
        <div className="section-separator-line"></div>
        <div className="section-separator-icon pizza-icon"></div>
        <div className="section-separator-line"></div>
      </div>
      <div className="section section-dark">
        <TestimonialsSection />
      </div>
    </main>
  );
};

export default Home;
