// src/components/TestimonialsSection.js
import React from 'react';
import '../styles/components/TestimonialsSection.css';

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <h2>What Our Customers Say</h2>
      <div className="testimonials">
        <div className="testimonial">
          <p>"Best pizza in town! Highly recommend."</p>
          <h4>- John Doe</h4>
        </div>
        <div className="testimonial">
          <p>"Amazing flavors and great service. A must-try!"</p>
          <h4>- Jane Smith</h4>
        </div>
        <div className="testimonial">
          <p>"Loved the variety and freshness of the ingredients."</p>
          <h4>- Mark Wilson</h4>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
