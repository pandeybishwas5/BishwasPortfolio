import { useState, useEffect } from 'react';
import './app.scss';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';
import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('dark-mode') === 'true';
    setDarkMode(savedMode);
    document.body.classList.toggle('dark-mode', savedMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('dark-mode', !darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div>
      <ToastContainer />
      <section id="Homepage">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <Hero />
      </section>
      <section id="Services">
        <Parallax darkMode={darkMode} />
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
