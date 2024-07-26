// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import CartPopup from './CartPopup';
import '../styles/components/Header.css';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const items = [
    { name: 'Margherita', price: 12.99 },
    { name: 'Pepperoni', price: 14.99 },
  ];

  const total = items.reduce((sum, item) => sum + item.price, 0);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li className="cart-icon">
            <FaShoppingCart size={24} onClick={handleCartClick} />
          </li>
        </ul>
      </nav>
      {isCartOpen && <CartPopup items={items} total={total} onClose={handleCloseCart} />}
    </header>
  );
};

export default Header;
