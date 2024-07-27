// src/components/Delivery.js
import React, { useState } from 'react';
import '../styles/components/Delivery.css';
import creditCard from '../assets/images/credit-card.png';
import debitCard from '../assets/images/debit-card.png';
import cash from '../assets/images/cash.png';

const Delivery = ({ cartItems, onRemoveFromCart, handleSubmitOrder }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  const validateForm = () => {
    const errors = {};
    if (!name) errors.name = "El nombre es obligatorio";
    if (!phone) errors.phone = "El teléfono es obligatorio";
    if (!address) errors.address = "La dirección es obligatoria";
    if (!paymentMethod) errors.paymentMethod = "El método de pago es obligatorio";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsPopupOpen(true);
    } else {
      alert('Por favor, completa todos los campos del formulario.');
    }
  };

  const handleConfirmOrder = () => {
    setIsPopupOpen(false);
    handleSubmitOrder();
    alert('Pedido confirmado');
  };

  return (
    <div className="delivery-section">
      <h2>Ordena Delivery</h2>
      <div className="delivery-content">
        <div className="form-container">
          <form className="address-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {formErrors.name && <span className="error-message">{formErrors.name}</span>}
            <label htmlFor="phone">Teléfono:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
            <label htmlFor="address">Dirección de Entrega:</label>
            <input
              type="text"
              id="address"
              name="address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {formErrors.address && <span className="error-message">{formErrors.address}</span>}
            <label htmlFor="paymentMethod">Método de Pago:</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              required
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="">Selecciona un método de pago</option>
              <option value="creditCard">Tarjeta de Crédito</option>
              <option value="debitCard">Tarjeta de Débito</option>
              <option value="cash">Efectivo</option>
            </select>
            {formErrors.paymentMethod && <span className="error-message">{formErrors.paymentMethod}</span>}
          </form>
          <div className="payment-icons">
            <img src={creditCard} alt="Credit Card" />
            <img src={debitCard} alt="Debit Card" />
            <img src={cash} alt="Cash" />
          </div>
        </div>
        <div className="cart-summary">
          <h3>Resumen del Carrito</h3>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <span>{item.name} - ${item.price.toFixed(2)}</span>
                <button onClick={() => onRemoveFromCart(index)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <div className="total-amount">
            <strong>Total:</strong> ${totalAmount.toFixed(2)}
          </div>
          <button className="cta-button" onClick={handleSubmit}>
            Confirmar Pedido
          </button>
        </div>
      </div>
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Resumen del Pedido</h3>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <span>{item.name} - ${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="total-amount">
              <strong>Total:</strong> ${totalAmount.toFixed(2)}
            </div>
            <button className="cta-button" onClick={handleConfirmOrder}>
              Confirmar
            </button>
            <button className="cta-button" onClick={() => setIsPopupOpen(false)}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Delivery;
