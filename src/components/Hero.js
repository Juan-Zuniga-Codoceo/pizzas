// src/components/Hero.js
import React from "react";
import "../styles/components/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Nuestra Pizza, Tu Felicidad</h1>
        <p>Deliciosas pizzas hechas con los mejores ingredientes</p>
        <p>
          <em>"¡Sabor que te enamora, calidad que te sorprende!"</em>
        </p>
        <button
          className="hero-button"
          onClick={() => (window.location.href = "/Menu")}
        >
          Ordena Ahora
        </button>
      </div>
    </div>
  );
};

export default Hero;
