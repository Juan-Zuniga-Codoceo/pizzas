// src/components/Accompaniments.js
import React from 'react';
import accompaniments1 from '../assets/images/accompaniments1.jpg';
import accompaniments2 from '../assets/images/accompaniments2.jpg';
import accompaniments3 from '../assets/images/accompaniments3.jpg';
import '../styles/components/MenuItems.css';

const Accompaniments = ({ onAddToCart }) => {
  const accompaniments = [
    {
      id: 1,
      name: 'Pan de Ajo',
      description: 'Pan tostado con ajo y aceite de oliva.',
      image: accompaniments1,
      rating: 4.6,
      price: 5.99,
    },
    {
      id: 2,
      name: 'Alitas de Pollo',
      description: 'Crujientes alitas de pollo con salsa a un lado.',
      image: accompaniments2,
      rating: 4.8,
      price: 8.99,
    },
    {
      id: 3,
      name: 'Ensaladas',
      description: 'Frescas y saludables ensaladas con una variedad de aderezos.',
      image: accompaniments3,
      rating: 4.5,
      price: 6.99,
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star">★</span>);
    }

    if (halfStar) {
      stars.push(<span key={fullStars} className="star">☆</span>);
    }

    return stars;
  };

  return (
    <section className="menu-items-section">
      <h2>Acompañamientos</h2>
      <div className="menu-items">
        {accompaniments.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="rating">
              {renderStars(item.rating)}
              <span className="rating-number">{item.rating}</span>
            </div>
            <p className="price">${item.price.toFixed(2)}</p>
            <button className="buy-button" onClick={() => onAddToCart(item)}>Comprar Ahora</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accompaniments;
