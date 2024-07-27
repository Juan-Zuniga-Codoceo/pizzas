// src/components/FeaturedMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/FeaturedMenu.css';

const FeaturedMenu = () => {
  return (
    <section className="featured-menu">
  <h2>Nuestro Menú</h2>
  <div className="menu-sections">
    <Link to="/menu/pizzas" className="menu-section">
      <img src={require('../assets/images/pizza-section.jpg')} alt="Pizzas" />
      <h3>Pizzas</h3>
      <p>Deliciosa variedad de pizzas con ingredientes frescos.</p>
    </Link>
    <Link to="/menu/accompaniments" className="menu-section">
      <img src={require('../assets/images/accompaniments-section.jpg')} alt="Acompañamientos" />
      <h3>Acompañamientos</h3>
      <p>Saborosos acompañamientos para complementar tu comida.</p>
    </Link>
    <Link to="/menu/drinks" className="menu-section">
      <img src={require('../assets/images/drinks-section.jpg')} alt="Bebidas" />
      <h3>Bebidas</h3>
      <p>Bebidas refrescantes para disfrutar con tu comida.</p>
    </Link>
  </div>
</section>

  );
};

export default FeaturedMenu;
