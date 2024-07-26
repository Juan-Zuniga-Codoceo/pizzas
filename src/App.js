import React from 'react';
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
import './styles/App.css';

function App() {
  return (
    <Router>
      <div id="root">
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/menu/pizzas" element={<Pizzas />} />
            <Route path="/menu/accompaniments" element={<Accompaniments />} />
            <Route path="/menu/drinks" element={<Drinks />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
