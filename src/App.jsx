import React from 'react';
import './app.scss';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';
import ParallaxComponent from './components/parallax/ParallaxComponent';
import Portfolio from './components/portfolio/Portfolio';

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <ParallaxComponent />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio"> 
        <Portfolio />
      </section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
