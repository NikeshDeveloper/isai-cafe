import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h2>Welcome to Your</h2>
        <h1>Café Name</h1>
        <p>Enjoy freshly brewed coffee and delicious pastries. Order online now!</p>
        <button className="btn-primary">Order Online</button>
      </div>
      <div className="hero-image">
        <img src="path-to-your-image.jpg" alt="Coffee and Croissant" />
      </div>
    </section>
  );
};

export default Hero;
