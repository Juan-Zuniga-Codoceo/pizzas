// src/components/MenuSection.js
import React from 'react';
import '../styles/components/MenuSection.css';

const MenuSection = ({ title, image, description }) => {
  return (
    <div className="menu-section">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default MenuSection;
