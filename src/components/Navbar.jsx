import React from 'react';
import './Navbar.css';
import Profile from './Profile';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Café Name</h1>
      <ul className="nav-links">
        <li><a href="#menu">Menu</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><Profile/></li>

      </ul>
    </nav>
  );
};

export default Navbar;
