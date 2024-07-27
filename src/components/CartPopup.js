// src/components/CartPopup.js
import React from 'react';
import '../styles/components/CartPopup.css';

const CartPopup = ({ items, onClose, onRemoveFromCart, onSubmit }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-popup">
      <h3>Carrito de Compras</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
            <button onClick={() => onRemoveFromCart(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <div className="total">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <button className="cta-button" onClick={onSubmit}>
        Confirmar Pedido
      </button>
      <button className="close-button" onClick={onClose}>
        Cerrar
      </button>
    </div>
  );
};

export default CartPopup;
