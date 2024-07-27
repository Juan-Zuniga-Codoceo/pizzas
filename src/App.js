// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import MenuPage from './components/MenuPage';
import Pizzas from './components/Pizzas';
import Accompaniments from './components/Accompaniments';
import Drinks from './components/Drinks';
import Reservations from './components/Reservations';
import Orders from './components/Orders';
import Delivery from './components/Delivery';
import Contact from './components/Contact';
import './styles/App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  const handleSubmitOrder = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <div id="root">
        <Header cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
        <main>
          <Routes>
            <Route exact path="/" element={<Home onAddToCart={handleAddToCart} />} />
            <Route path="/menu" element={<MenuPage onAddToCart={handleAddToCart} />} />
            <Route path="/menu/pizzas" element={<Pizzas onAddToCart={handleAddToCart} />} />
            <Route path="/menu/accompaniments" element={<Accompaniments onAddToCart={handleAddToCart} />} />
            <Route path="/menu/drinks" element={<Drinks onAddToCart={handleAddToCart} />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/delivery" element={<Delivery cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} handleSubmitOrder={handleSubmitOrder} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
