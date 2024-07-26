// src/components/FeaturedMenu.js
import React from 'react';
import MenuSection from './MenuSection';
import '../styles/components/FeaturedMenu.css';

const FeaturedMenu = () => {
  return (
    <section className="featured-menu">
      <h2>Our Menu</h2>
      <div className="menu-sections">
        <MenuSection 
          title="Pizzas" 
          image={require('../assets/images/pizza-section.jpg')} 
          description="Delicious variety of pizzas with fresh ingredients."
        />
        <MenuSection 
          title="Accompaniments" 
          image={require('../assets/images/accompaniments-section.jpg')} 
          description="Tasty side dishes to complement your meal."
        />
        <MenuSection 
          title="Drinks" 
          image={require('../assets/images/drinks-section.jpg')} 
          description="Refreshing beverages to enjoy with your meal."
        />
      </div>
    </section>
  );
};

export default FeaturedMenu;
