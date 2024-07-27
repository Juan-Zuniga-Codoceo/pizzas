// src/components/Delivery.js
import React from 'react';
import '../styles/components/Delivery.css';

const Delivery = ({ cartItems, handleRemoveFromCart, handleSubmitOrder }) => {
  return (
    <div className="delivery-section">
      <h2>Ordena Delivery</h2>
      <div className="delivery-content">
        <form className="address-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="phone">Teléfono:</label>
          <input type="tel" id="phone" name="phone" required />
          <label htmlFor="address">Dirección de Entrega:</label>
          <input type="text" id="address" name="address" required />
        </form>
        <div className="cart-summary">
          <h3>Resumen del Carrito</h3>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <span>{item.name} - ${item.price.toFixed(2)}</span>
                <button onClick={() => handleRemoveFromCart(index)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <button className="cta-button" onClick={handleSubmitOrder}>
            Confirmar Pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
