import React from 'react';
import './Navbar.css';
import { LogoutButton } from './AuthenticationHelper';
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Café Name</h1>
      <ul className="nav-links">
        <li><a href="#menu">Menu</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact"><LogoutButton/></a></li>
        <li>hii</li>

      </ul>
    </nav>
  );
};

export default Navbar;
