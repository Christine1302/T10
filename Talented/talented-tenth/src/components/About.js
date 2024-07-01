// src/components/About.js
import React from 'react';
import '../App.css'; // Add your styles here

const About = () => {
    return (
      <div className="about container w3-padding-large" id="about">
        <div className="text-one">
          <h2>About Us</h2>
          <p>...Insert Talented Tenth Bio</p>
          <p>Blah blah blah blah blah blah blah blah blah blah. Blah blah blah blah blah blah blah blah blah blah. Blah blah blah blah blah blah blah blah blah blah. Blah blah blah blah blah blah blah blah blah blah. Blah blah blah blah blah blah blah blah blah blah.</p>
        </div>
        <div className="text-one">
          <h2>Our Mission</h2>
          <p>Our mission is to empower exceptional young men of color by embracing W.E.B. Du Bois' "Talented Tenth" philosophy. We provide alternative education to overcome inequalities, fostering leadership, creativity, critical thinking, and self-expression in a supportive environment. Our goal is to develop their talents and inspire future generations.</p>
        </div>
      </div>
    );
  };
  
  const Numbers = () => {
    return (
      <div className="w3-panel w3-black numbers">
        <h2 className="w3-center w3-xxxlarge">WE'VE PROUDLY HAD</h2>
        <p className="w3-center w3-xxxlarge show-medium">
          <svg x="0px" y="0px" width="36" fill="#bed9f3" stroke="#bed9f3" viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
            <g id="Down-arrow">
              <path d="M17.2929993,29.7070007c-0.3906994-0.3906002-0.3906994-1.0234013,0-1.4140015
                c0.3906002-0.3906002,1.0234013-0.3906002,1.4140015,0L32,41.5858994l13.2929993-13.2929001
                c0.3906002-0.3906002,1.0234013-0.3906002,1.4140015,0c0.3906994,0.3906002,0.3906994,1.0234013,0,1.4140015L32.7070007,43.7070007
                C32.3164005,44.097599,31.6835995,44.097599,31.2929993,43.7070007L17.2929993,29.7070007z" />
            </g>
          </svg>
        </p>
        <div className="container w3-padding-large">
          <div className="text">
            <p className="number">100</p>
            <p>Participants</p>
          </div>
          <div className="text">
            <p className="number">8</p>
            <p>Trips</p>
          </div>
          <div className="text">
            <p className="number">20</p>
            <p>Active Years</p>
          </div>
        </div>
      </div>
    );
  };
  
  export { About, Numbers };
