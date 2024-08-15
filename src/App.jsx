// src/App.jsx
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import ContactUs from './ContactUs';
import Footer from './Footer';
import './App.css';


function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Home />
        <AboutUs />
        <Gallery />
        <ContactUs />
      </div>
      <footer > <Footer /></footer>
    </div>
  
  );
}

export default App;
