import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <section id="menu" className="menu">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        <div className="menu-item">
          <img src="path-to-image1.jpg" alt="Item 1" />
          <h3>Coffee</h3>
        </div>
        <div className="menu-item">
          <img src="path-to-image2.jpg" alt="Item 2" />
          <h3>Croissants</h3>
        </div>
        <div className="menu-item">
          <img src="path-to-image3.jpg" alt="Item 3" />
          <h3>Pastries</h3>
        </div>
      </div>
    </section>
  );
};

export default Menu;
