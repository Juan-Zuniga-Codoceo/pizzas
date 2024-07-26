// src/components/Accompaniments.js
import React from 'react';
import '../styles/components/MenuItems.css';

const Accompaniments = () => {
  const accompaniments = [
    {
      id: 1,
      name: 'Garlic Bread',
      description: 'Toasted bread with garlic and olive oil.',
      image: require('../assets/images/accompaniments1.jpg'),
      rating: 4.6,
      price: '$5.99',
    },
    {
      id: 2,
      name: 'Chicken Wings',
      description: 'Crispy chicken wings with a side of sauce.',
      image: require('../assets/images/accompaniments2.jpg'),
      rating: 4.8,
      price: '$8.99',
    },
    {
      id: 3,
      name: 'Salads',
      description: 'Fresh and healthy salads with a variety of toppings.',
      image: require('../assets/images/accompaniments3.jpg'),
      rating: 4.5,
      price: '$6.99',
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
      <h2>Accompaniments</h2>
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
            <p className="price">{item.price}</p>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accompaniments;
