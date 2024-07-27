// src/components/ContactForm.js
import React from 'react';
import '../styles/components/ContactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-form-section">
      <h2>Contáctanos</h2>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;
