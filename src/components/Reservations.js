// src/components/Reservations.js
import React from 'react';
import '../styles/components/Reservations.css';

const Reservations = () => {
  return (
    <section className="reservations-section">
      <h2>Reservations</h2>
      <form className="reservations-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" required />

        <label htmlFor="date">Date</label>
        <input type="date" id="date" name="date" required />

        <label htmlFor="time">Time</label>
        <input type="time" id="time" name="time" required />

        <label htmlFor="guests">Number of Guests</label>
        <input type="number" id="guests" name="guests" min="1" max="20" required />

        <button type="submit">Reserve Now</button>
      </form>
    </section>
  );
};

export default Reservations;
