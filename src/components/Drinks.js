// src/components/Drinks.js
import React from 'react';
import '../styles/components/MenuItems.css';

const Drinks = () => {
  const drinks = [
    {
      id: 1,
      name: 'Coke',
      description: 'Classic Coca-Cola to refresh your meal.',
      image: require('../assets/images/drink1.jpg'),
      rating: 4.4,
      price: '$2.99',
    },
    {
      id: 2,
      name: 'Pepsi',
      description: 'Refreshing Pepsi to accompany your meal.',
      image: require('../assets/images/drink2.jpg'),
      rating: 4.3,
      price: '$2.99',
    },
    {
      id: 3,
      name: 'Orange Juice',
      description: 'Freshly squeezed orange juice.',
      image: require('../assets/images/drink3.jpg'),
      rating: 4.6,
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
            <p className="price">{drink.price}</p>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Drinks;
