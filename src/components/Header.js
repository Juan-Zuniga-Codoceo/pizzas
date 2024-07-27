// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import CartPopup from './CartPopup';
import '../styles/components/Header.css';

const Header = ({ cartItems, onRemoveFromCart }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

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
          <li><Link to="/delivery">Delivery</Link></li>
          <li className="cart-icon" onClick={handleCartClick}>
            <FaShoppingCart size={24} />
            {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
          </li>
        </ul>
      </nav>
      {isCartOpen && <CartPopup items={cartItems} onClose={handleCloseCart} onRemoveFromCart={onRemoveFromCart} />}
    </header>
  );
};

export default Header;
