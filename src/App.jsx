import React from 'react';
import './app.scss';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';
import ParallaxComponent from './components/parallax/ParallaxComponent';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <ToastContainer />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <ParallaxComponent />
      </section>
      <section id="Portfolio">
        <Services />
      </section>
      <Portfolio /> 
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
