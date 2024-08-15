import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <h3>Follow Us</h3>
      <div className="social-links">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">

          <img src="https://cdn.pixabay.com/photo/2016/08/01/21/00/icon-1562136_640.png" alt="Instagram" /> @abcInstaUser
        </a>
        <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="https://cdn.pixabay.com/photo/2015/08/03/13/58/whatsapp-873316_640.png" alt="WhatsApp" />
          +91 4115839579
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"> 
          <img src="https://cdn.pixabay.com/photo/2017/08/22/11/56/linked-in-2668696_640.png" alt="LinkedIn" /> IC_Educational
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="https://cdn.pixabay.com/photo/2016/11/06/09/54/facebook-1802605_640.png" alt="Facebook" /> IshaanEducation
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="https://cdn.pixabay.com/photo/2016/11/19/03/08/youtube-1837872_640.png" alt="YouTube" /> IshaanEducation
        </a>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
