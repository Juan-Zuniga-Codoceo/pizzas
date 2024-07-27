// src/components/Drinks.js
import React, { useState } from 'react';
import drink1 from '../assets/images/drink1.jpg';
import drink2 from '../assets/images/drink2.jpg';
import drink3 from '../assets/images/drink3.jpg';
import '../styles/components/MenuItems.css';

const Drinks = () => {
  const [cart, setCart] = useState([]);

  const drinks = [
    {
      id: 1,
      name: 'Coca Cola',
      description: 'Classic Coca Cola soft drink.',
      image: drink1,
      rating: 4.5,
      price: '$1.99',
    },
    {
      id: 2,
      name: 'Orange Juice',
      description: 'Freshly squeezed orange juice.',
      image: drink2,
      rating: 4.8,
      price: '$2.99',
    },
    {
      id: 3,
      name: 'Beer',
      description: 'Cold beer to refresh your day.',
      image: drink3,
      rating: 4.7,
      price: '$3.99',
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

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart`);
  };

  return (
    <section className="menu-items-section">
      <h2>Drinks</h2>
      <div className="menu-items">
        {drinks.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="rating">
              {renderStars(item.rating)}
              <span className="rating-number">{item.rating}</span>
            </div>
            <p className="price">{item.price}</p>
            <button className="buy-button" onClick={() => addToCart(item)}>Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Drinks;
