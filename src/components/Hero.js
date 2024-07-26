// src/components/Hero.js
import React from 'react';
import '../styles/components/Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to Pizza Restaurant</h1>
        <p>Delicious pizzas made with love.</p>
        <button className="hero-button">Order Now</button>
      </div>
    </div>
  );
};

export default Hero;
