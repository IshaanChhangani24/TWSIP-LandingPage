// src/components/Navbar.jsx
import React from 'react';
import './App.css';
import img from './Logo.jpeg'


const Navbar = () => (
  <nav className="navbar">
                <img src={img} alt="Logo" className="navbar-logo" />

    <a href="#home">Home</a>
    <a href="#about-us">About Us</a>
    <a href="#gallery">Course</a>
    <a href="#contact-us">Contact Us</a>
  </nav>
);

export default Navbar;

