// src/components/Gallery.js
import React from 'react';
import '../styles/components/Gallery.css';

const Gallery = () => {
  const images = [
    { src: require('../assets/images/gallery1.jpg'), alt: 'Gallery Image 1' },
    { src: require('../assets/images/gallery2.jpg'), alt: 'Gallery Image 2' },
    { src: require('../assets/images/gallery3.jpg'), alt: 'Gallery Image 3' },
    { src: require('../assets/images/gallery4.jpg'), alt: 'Gallery Image 4' },
    { src: require('../assets/images/gallery5.jpg'), alt: 'Gallery Image 5' },
  ];

  return (
    <section className="gallery-section">
      <h2>Our Gallery</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
