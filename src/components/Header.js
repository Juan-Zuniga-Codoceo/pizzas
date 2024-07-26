// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import '../styles/components/Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/orders">Orders</Link></li>
          <li className="cart-icon">
            <Link to="/orders">
              <FaShoppingCart size={24} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
