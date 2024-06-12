import { useRef, useEffect } from "react";
import "./services.scss";
import { motion, useAnimation } from "framer-motion";
import { FaCode, FaBrain, FaChartLine, FaLaptopCode } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
  exit: {
    y: 500,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Services = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // Adjust this value as needed
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    } else {
      controls.start("exit");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="services"
      ref={ref}
      initial="initial"
      animate={controls}
      variants={variants}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on developing innovative solutions
          <br /> that drive business success
        </p>
        <hr />
      </motion.div>
      
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="People" />
          <h1>
            <motion.b whileHover={{ color: "#EC811B" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "#EC811B" }}>For Your</motion.b> Business.
          </h1>
          <button className="techStackBtn">My Tech Stack</button>
        </div>
      </motion.div>
      
      <motion.div className="listContainer" variants={variants}>
        {[
          { title: "Programming Languages", content: "Python, Java, C++, JavaScript", icon: <FaCode /> },
          { title: "Machine Learning Frameworks", content: "TensorFlow, PyTorch, scikit-learn", icon: <FaBrain /> },
          { title: "Data Analysis", content: "Pandas, NumPy, Matplotlib", icon: <FaChartLine /> },
          { title: "Web Development", content: "React, Node.js, Django", icon: <FaLaptopCode /> },
        ].map((item, index) => (
          <motion.div
            className="box"
            key={index}
            variants={variants}
          >
            <div className="icon">{item.icon}</div>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
