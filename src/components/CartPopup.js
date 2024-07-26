// src/components/CartPopup.js
import React from 'react';
import '../styles/components/CartPopup.css';

const CartPopup = ({ items, total, onClose }) => {
  return (
    <div className="cart-popup-overlay" onClick={onClose}>
      <div className="cart-popup" onClick={(e) => e.stopPropagation()}>
        <h3>Shopping Cart</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <p>Total: ${total.toFixed(2)}</p>
        <button onClick={() => alert('Proceed to payment')}>Proceed to Payment</button>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CartPopup;
