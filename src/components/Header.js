// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import CartPopup from './CartPopup';
import '../styles/components/Header.css';

const Header = ({ cartItems = [], onRemoveFromCart }) => { // Default to an empty array if cartItems is undefined
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
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/menu">Menú</Link></li>
          <li><Link to="/reservations">Reservaciones</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/delivery">Delivery</Link></li>
        </ul>
        <div className="cart-icon" onClick={handleCartClick}>
          <FaShoppingCart size={24} />
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </div>
      </nav>
      {isCartOpen && <CartPopup items={cartItems} onClose={handleCloseCart} onRemoveFromCart={onRemoveFromCart} />}
    </header>
  );
};

export default Header;
