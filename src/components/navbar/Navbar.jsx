import "./navbar.scss"
import {motion} from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import { useState, useEffect } from "react";
import DarkMode from "../DarkMode/DarkMode";

const Navbar = () => {

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
    <div className="navbar">
      <Sidebar className="sidebar"/>
        <div className="wrapper">
          
            <motion.span 
                initial={{opacity:0, scale:0.5}} 
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                >
                    BISHWAS
            </motion.span>

            <div className="darkmode">
            <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>

            <div className="social">
                <a href="https://github.com/pandeybishwas5" target="_blank" rel="noopener noreferrer"><img src="/github.png" alt="github_image" /></a>
                <a href="https://www.linkedin.com/in/bishwaspandey/" target="_blank" rel="noopener noreferrer"><img src="/linkedin.png" alt="linkedin_image" /></a>
                <a href="https://www.youtube.com/channel/UCw9_l405uEkodmBTJVzlmzg" target="_blank" rel="noopener noreferrer"><img src="/youtube.png" alt="youtube_image" /></a>
                <a href="https://www.instagram.com/biswas_pandey/" target="_blank" rel="noopener noreferrer"><img src="/instagram.png" alt="instagram_image" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar;