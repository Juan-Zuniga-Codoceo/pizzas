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
import Contact from './components/Contact';
import Delivery from './components/Delivery';  // Importar el componente Delivery
import './styles/App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const handleSubmitOrder = () => {
    alert('Pedido confirmado');
    setCartItems([]);
  };

  return (
    <Router>
      <div id="root">
        <Header
          cartItems={cartItems}
          handleRemoveFromCart={handleRemoveFromCart}
          handleSubmitOrder={handleSubmitOrder}
        />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/menu/pizzas" element={<Pizzas handleAddToCart={handleAddToCart} />} />
            <Route path="/menu/accompaniments" element={<Accompaniments handleAddToCart={handleAddToCart} />} />
            <Route path="/menu/drinks" element={<Drinks handleAddToCart={handleAddToCart} />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/delivery" element={<Delivery />} /> {/* Agregar la ruta para Delivery */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
