import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import { FaCode, FaBrain, FaChartLine, FaLaptopCode } from "react-icons/fa"; // Ensure react-icons is installed

const containerVariants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      ref={ref}
      variants={containerVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      <motion.div className="textContainer" variants={itemVariants}>
        <p>
          I focus on developing innovative solutions
          <br /> that drive business success
        </p>
        <hr />
      </motion.div>
      
      <motion.div className="titleContainer" variants={itemVariants}>
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
      
      <motion.div className="listContainer" variants={itemVariants}>
        {[
          { title: "Programming Languages", content: "Python, Java, C++, JavaScript", icon: <FaCode /> },
          { title: "Machine Learning Frameworks", content: "TensorFlow, PyTorch, scikit-learn", icon: <FaBrain /> },
          { title: "Data Analysis", content: "Pandas, NumPy, Matplotlib", icon: <FaChartLine /> },
          { title: "Web Development", content: "React, Node.js, Django", icon: <FaLaptopCode /> },
        ].map((item, index) => (
          <motion.div
            className="box"
            key={index}
            variants={itemVariants}
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
