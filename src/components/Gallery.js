// src/components/Gallery.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import gallery1 from '../assets/images/gallery1.jpg';
import gallery2 from '../assets/images/gallery2.jpg';
import gallery3 from '../assets/images/gallery3.jpg';
import gallery4 from '../assets/images/gallery4.jpg';
import '../styles/components/Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery-section">
      <h2>Nuestra Galería</h2>
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
        <div>
          <img src={gallery1} alt="Gallery Image 1" />
        </div>
        <div>
          <img src={gallery2} alt="Gallery Image 2" />
        </div>
        <div>
          <img src={gallery3} alt="Gallery Image 3" />
        </div>
        <div>
          <img src={gallery4} alt="Gallery Image 4" />
        </div>
      </Carousel>
    </div>
  );
};

export default Gallery;
