// src/components/Contact.js
import React from 'react';
import ContactForm from './ContactForm';
import '../styles/components/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Contáctanos</h2>
      <div className="contact-content">
        <div className="contact-form-container">
          <ContactForm />
        </div>
        <div className="location-section">
          <h2>Ubicación</h2>
          <div className="map-container">
            <iframe
              title="Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0965212375167!2d-122.42067578468267!3d37.77851877975998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064ef5d93e5%3A0x7e28b1d85c0df473!2sRed%20Bamboo%20NYC!5e0!3m2!1sen!2sus!4v1628094768254!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
