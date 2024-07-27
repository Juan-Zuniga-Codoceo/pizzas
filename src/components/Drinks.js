// src/components/Drinks.js
import React from 'react';
import drink1 from '../assets/images/drink1.jpg';
import drink2 from '../assets/images/drink2.jpg';
import drink3 from '../assets/images/drink3.jpg';
import '../styles/components/MenuItems.css';

const Drinks = ({ onAddToCart }) => {
  const drinks = [
    {
      id: 1,
      name: 'Coca Cola',
      description: 'Classic Coca Cola soft drink.',
      image: drink1,
      rating: 4.5,
      price: 1.99,
    },
    {
      id: 2,
      name: 'Orange Juice',
      description: 'Freshly squeezed orange juice.',
      image: drink2,
      rating: 4.8,
      price: 2.99,
    },
    {
      id: 3,
      name: 'Beer',
      description: 'Cold beer to refresh your day.',
      image: drink3,
      rating: 4.7,
      price: 3.99,
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
      <h2>Drinks</h2>
      <div className="menu-items">
        {drinks.map(drink => (
          <div key={drink.id} className="menu-item">
            <img src={drink.image} alt={drink.name} />
            <h3>{drink.name}</h3>
            <p>{drink.description}</p>
            <div className="rating">
              {renderStars(drink.rating)}
              <span className="rating-number">{drink.rating}</span>
            </div>
            <p className="price">${drink.price.toFixed(2)}</p>
            <button className="buy-button" onClick={() => onAddToCart(drink)}>Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Drinks;
