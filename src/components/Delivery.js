// src/components/Delivery.js
import React, { useState } from 'react';
import Menu from './Menu';
import CartPopup from './CartPopup';
import '../styles/components/Delivery.css';

const Delivery = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleSubmit = () => {
    alert('Pedido confirmado');
  };

  return (
    <div className="delivery-section">
      <h2>Ordena Delivery</h2>
      <form className="address-form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="phone">Teléfono:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <label htmlFor="address">Dirección de Entrega:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </form>
      <Menu onAddToCart={handleAddToCart} />
      <button className="cta-button" onClick={handleCartClick}>
        Ver Carrito
      </button>
      {isCartOpen && (
        <CartPopup
          items={cartItems}
          onRemoveFromCart={handleRemoveFromCart}
          onClose={handleCloseCart}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Delivery;
