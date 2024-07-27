// src/components/Delivery.js
import React, { useState } from 'react';
import '../styles/components/Delivery.css';

const Delivery = ({ cartItems, handleRemoveFromCart, handleSubmitOrder }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [formValid, setFormValid] = useState(false);

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  const validateForm = () => {
    if (name && phone && address) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const handleSubmit = () => {
    if (formValid) {
      handleSubmitOrder();
    } else {
      alert('Por favor, completa todos los campos del formulario.');
    }
  };

  return (
    <div className="delivery-section">
      <h2>Ordena Delivery</h2>
      <div className="delivery-content">
        <form className="address-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              validateForm();
            }}
          />
          <label htmlFor="phone">Teléfono:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              validateForm();
            }}
          />
          <label htmlFor="address">Dirección de Entrega:</label>
          <input
            type="text"
            id="address"
            name="address"
            required
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              validateForm();
            }}
          />
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
          <div className="total-amount">
            <strong>Total:</strong> ${totalAmount.toFixed(2)}
          </div>
          <button className="cta-button" onClick={handleSubmit} disabled={!formValid}>
            Confirmar Pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
