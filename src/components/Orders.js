// src/components/Orders.js
import React, { useState } from 'react';
import '../styles/components/Orders.css';

const Orders = () => {
  const [order, setOrder] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    items: [],
    total: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const handleAddItem = (item) => {
    setOrder((prevOrder) => {
      const items = [...prevOrder.items, item];
      const total = items.reduce((sum, currentItem) => sum + currentItem.price, 0);
      return { ...prevOrder, items, total };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar el pedido a tu servidor
    console.log('Order submitted:', order);
  };

  const menuItems = [
    { id: 1, name: 'Margherita', price: 12.99 },
    { id: 2, name: 'Pepperoni', price: 14.99 },
    { id: 3, name: 'Veggie', price: 13.99 },
  ];

  return (
    <section className="orders-section">
      <h2>Place Your Order</h2>
      <form className="orders-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={order.name} onChange={handleInputChange} required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={order.email} onChange={handleInputChange} required />

        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" value={order.phone} onChange={handleInputChange} required />

        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" value={order.address} onChange={handleInputChange} required />

        <h3>Menu Items</h3>
        <div className="menu-items">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-item">
              <p>{item.name} - ${item.price.toFixed(2)}</p>
              <button type="button" onClick={() => handleAddItem(item)}>Add to Order</button>
            </div>
          ))}
        </div>

        <h3>Order Summary</h3>
        <ul>
          {order.items.map((item, index) => (
            <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
          ))}
        </ul>
        <p>Total: ${order.total.toFixed(2)}</p>

        <button type="submit">Submit Order</button>
      </form>
    </section>
  );
};

export default Orders;
