// src/components/Reservations.js
import React from 'react';
import '../styles/components/Reservations.css';

const Reservations = () => {
  return (
    <section className="reservations-section">
      <h2>Reserva una Mesa</h2>
      <div className="calendly-container">
        <iframe
          src="https://calendly.com/zcja-1989/reserva-tu-mesa"
          width="100%"
          height="800" // Ajusta la altura a 800px o la altura que prefieras
          frameBorder="0"
          title="Calendly - Reserva una Mesa"
        ></iframe>
      </div>
    </section>
  );
};

export default Reservations;
