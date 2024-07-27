// src/components/Home.js
import React from 'react';
import Hero from './Hero';
import FeaturedMenu from './FeaturedMenu';
import Gallery from './Gallery';
import RestaurantHistory from './RestaurantHistory';
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
        <div className="cta-section">
          <h2>Reserva una Mesa o Pide a Domicilio</h2>
          <button className="cta-button" onClick={() => window.location.href='/reservations'}>
            Reserva Ahora
          </button>
          <button className="cta-button" onClick={() => window.location.href='/delivery'}>
            Ordena Delivery
          </button>
        </div>
      </div>
      <div className="section-separator">
        <div className="section-separator-line"></div>
        <div className="section-separator-icon camera-icon"></div>
        <div className="section-separator-line"></div>
      </div>
      <div className="section section-dark">
        <Gallery />
      </div>
      <div className="section-separator">
        <div className="section-separator-line"></div>
        <div className="section-separator-icon pizza-icon"></div>
        <div className="section-separator-line"></div>
      </div>
      <div className="section section-dark">
        <RestaurantHistory />
      </div>
    </main>
  );
};

export default Home;
