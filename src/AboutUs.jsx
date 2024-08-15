import React from "react";
import img from "./About-us.jpeg";


const AboutUs = () => (
    <section id="about-us" className="about-section">
      <h2 className="about-h2">About Us</h2>
      <div className="about-container">
        <div className="about-img"> 
          <img src={img} alt="" srcset="" />
        </div >
        <div className="about-para"> 
               <p>Ishaan Education is a E-Learning platform that provides coures and quality notes of every topic, of every subject and according to the university syllabus of Computer Science field. <br />
                Here study materials have been prepared in such a manner that is easy to understand and it saves time as students get all related study materials arranged at a place. While using this site, you agree to have read and accepted our terms of use, Disclaimer, cookie and privacy policy. <br />
                This Website is everyone for IT & Non-IT students <br />
                Our Courses provide <br />
                HTLM <br />
                CSS <br />
                Javascript <br />
                C++ <br />
                Java <br />
                Python <br /> </p>
        </div>
      </div>
    </section>
  );
  
  export default AboutUs;

