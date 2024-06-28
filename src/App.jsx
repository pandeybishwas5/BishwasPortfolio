
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


  return (
    <div>
      <ToastContainer />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax />
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
