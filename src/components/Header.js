// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import CartPopup from './CartPopup';
import '../styles/components/Header.css';

const Header = ({ cartItems, handleRemoveFromCart, handleSubmitOrder }) => {
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
          <li><Link to="/delivery">Delivery</Link></li> {/* Enlace a Delivery */}
          <li className="cart-icon">
            <FaShoppingCart size={24} onClick={handleCartClick} />
          </li>
        </ul>
      </nav>
      {isCartOpen && (
        <CartPopup
          items={cartItems}
          onRemoveFromCart={handleRemoveFromCart}
          onClose={handleCloseCart}
          onSubmit={handleSubmitOrder}
        />
      )}
    </header>
  );
};

export default Header;
