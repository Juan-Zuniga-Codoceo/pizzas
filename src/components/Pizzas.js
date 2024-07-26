// src/components/Pizzas.js
import React from 'react';
import '../styles/components/MenuItems.css';

const Pizzas = () => {
  const pizzas = [
    {
      id: 1,
      name: 'Margherita',
      description: 'Classic delight with fresh tomatoes and mozzarella cheese.',
      image: require('../assets/images/pizza1.jpg'),
      rating: 4.5,
      price: '$12.99',
    },
    {
      id: 2,
      name: 'Pepperoni',
      description: 'Spicy pepperoni with a blend of cheese and tomato sauce.',
      image: require('../assets/images/pizza2.jpg'),
      rating: 4.7,
      price: '$14.99',
    },
    {
      id: 3,
      name: 'Veggie',
      description: 'Loaded with fresh vegetables and a touch of basil.',
      image: require('../assets/images/pizza3.jpg'),
      rating: 4.3,
      price: '$13.99',
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
      <h2>Pizzas</h2>
      <div className="menu-items">
        {pizzas.map(pizza => (
          <div key={pizza.id} className="menu-item">
            <img src={pizza.image} alt={pizza.name} />
            <h3>{pizza.name}</h3>
            <p>{pizza.description}</p>
            <div className="rating">
              {renderStars(pizza.rating)}
              <span className="rating-number">{pizza.rating}</span>
            </div>
            <p className="price">{pizza.price}</p>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pizzas;
