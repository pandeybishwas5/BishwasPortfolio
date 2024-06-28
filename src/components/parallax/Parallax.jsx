import { useRef, useEffect, useState } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ darkMode }) => {
  const ref = useRef();
  const [key, setKey] = useState(""); // State to force re-render

  useEffect(() => {
    setKey(darkMode ? "planets" : "sun"); // Update key based on darkMode
  }, [darkMode]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background: "var(--background-color)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        My Services
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${darkMode ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;