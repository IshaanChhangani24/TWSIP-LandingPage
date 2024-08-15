import React from "react";
import img1 from "./HTML.png"; 
import img2 from "./CSS.png";
import img3 from "./Javascript.png";
import img4 from "./C++.png";
import img5 from "./Java-logo.png";
import img6 from "./Python.png";

const cardData = [
  { img: img1, title: "HTML", description: "Learn HTML, the building block of web development.", buttonText: "Learn HTML" },
  { img: img2, title: "CSS", description: "Master CSS to style your web pages beautifully.", buttonText: "Learn CSS" },
  { img: img3, title: "JavaScript", description: "Dive into JavaScript to add interactivity to your websites.", buttonText: "Learn JavaScript" },
  { img: img4, title: "C++", description: "Explore C++ for powerful system-level programming.", buttonText: "Learn C++" },
  { img: img5, title: "Java", description: "Understand Java for enterprise-level applications.", buttonText: "Learn Java" },
  { img: img6, title: "Python", description: "Get started with Python for data science and machine learning.", buttonText: "Learn Python" }
];

const Gallery = () => (
  <section id="gallery" className="gallery-section">
    <div className="gallery-container">
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.img} alt={`Card ${index + 1}`} className="card-img"/>
          <div className="card-content">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button>{card.buttonText}</button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Gallery;
