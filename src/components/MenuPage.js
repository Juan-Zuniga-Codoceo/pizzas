// src/components/MenuPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/MenuPage.css';

const MenuPage = () => {
  return (
    <section className="menu-page">
      <h2>Our Menu</h2>
      <div className="menu-sections">
        <Link to="/menu/pizzas" className="menu-section">
          <img src={require('../assets/images/pizza-section.jpg')} alt="Pizzas" />
          <h3>Pizzas</h3>
          <p>Delicious variety of pizzas with fresh ingredients.</p>
        </Link>
        <Link to="/menu/accompaniments" className="menu-section">
          <img src={require('../assets/images/accompaniments-section.jpg')} alt="Accompaniments" />
          <h3>Accompaniments</h3>
          <p>Tasty side dishes to complement your meal.</p>
        </Link>
        <Link to="/menu/drinks" className="menu-section">
          <img src={require('../assets/images/drinks-section.jpg')} alt="Drinks" />
          <h3>Drinks</h3>
          <p>Refreshing beverages to enjoy with your meal.</p>
        </Link>
      </div>
    </section>
  );
};

export default MenuPage;
