// src/components/Hero.js
import React from 'react';
import '../App.css';

const Hero = () => {
  return (
    <div className="hero" id="home">
        <div className="text container">
          <p className="pre-title"></p>
          <h1 className="title"> TALENTED<span>Tenth</span></h1>
          <p className="post-title"></p>
          <a href="#events" className="w3-button w3-round-large w3-black w3-hover-yellow">
            OUR EVENTS
            </a> 
        </div>
      </div>
  );
};

export default Hero;
