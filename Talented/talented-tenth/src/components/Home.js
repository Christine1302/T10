// src/components/Home.js
import React from 'react';
import Hero from './Hero';
import { About, Numbers } from './About';
import Events from './Events';
import '../App.css';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Numbers />
      <Events />
    </div>
  );
};

export default Home;
