// src/components/Menu.js
import React from 'react';
import '../styles/components/Menu.css';

const Menu = ({ onAddToCart }) => {
  const menuItems = [
    { name: 'Margherita', price: 12.99 },
    { name: 'Pepperoni', price: 14.99 },
    { name: 'Veggie', price: 13.99 },
  ];

  return (
    <div className="menu-section">
      <h3>Menú</h3>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
            <button onClick={() => onAddToCart(item)}>Agregar al Carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
