
import "./hero.scss";
import { useState } from "react";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 30,
    },
  },
};

const Hero = () => {

  const [clickedButton, setClickedButton] = useState(null);


  const handleProjectsButtonClick = () => {
    document.getElementById("Portfolio").scrollIntoView({ behavior: "smooth" });
  };


  const handleContactButtonClick = () => {
    document.getElementById("Contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>BISHWAS PANDEY</motion.h2>
          <motion.h1 variants={textVariants}>
            Software and Machine Learning Engineer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              onClick={handleProjectsButtonClick}
            >
              My Projects
            </motion.button>
            <motion.button
              variants={textVariants}
              onClick={handleContactButtonClick} 
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.jpg"
            alt="scroll icon"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Software Developer Machine Learning Engineer Web Developer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="Hero image" />
      </div>
    </div>
  );
};

export default Hero;
