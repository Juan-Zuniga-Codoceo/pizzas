// src/components/MenuPage.js
import React from 'react';
import '../styles/components/MenuPage.css';

const MenuPage = () => {
  return (
    <section className="menu-page">
      <h2>Full Menu</h2>
      <div className="menu-category">
        <h3>Pizzas</h3>
        <ul>
          <li>Pizza Margherita</li>
          <li>Pepperoni Pizza</li>
          <li>Veggie Pizza</li>
          {/* Add more pizzas as needed */}
        </ul>
      </div>
      <div className="menu-category">
        <h3>Accompaniments</h3>
        <ul>
          <li>Garlic Bread</li>
          <li>Chicken Wings</li>
          <li>Salads</li>
          {/* Add more accompaniments as needed */}
        </ul>
      </div>
      <div className="menu-category">
        <h3>Drinks</h3>
        <ul>
          <li>Coke</li>
          <li>Pepsi</li>
          <li>Orange Juice</li>
          {/* Add more drinks as needed */}
        </ul>
      </div>
    </section>
  );
};

export default MenuPage;
