import React, { useState, useEffect } from 'react';
import './App.css'; // Ensure this CSS file is in the same directory

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'https://topperworld.in/media/2023/12/HTML.png',
    'https://topperworld.in/media/2023/12/CSS.png',
    'https://topperworld.in/media/2023/02/Javascript.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [slides.length]);

  return (
    <section id="home" className="section">
      <p>Ishaan Education website is madeup for educational purpose for IT developers</p>
      <div className="slider">
        <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="slide"
            >
              <img src={slide} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
