import { useRef, useEffect } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";

const ParallaxComponent = ({ type }) => {
  const ref = useRef(null);
  const controls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end -90%"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["-200%", "-480%"]);
  const yManOnMountain = useTransform(scrollYProgress, [0, 1], ["40%", "-50%"]);
  const yJungle5 = useTransform(scrollYProgress, [0, 1], ["45%", "-80%"]);
  const yJungle4 = useTransform(scrollYProgress, [0, 1], ["60%", "-70%"]);
  const yJungle3 = useTransform(scrollYProgress, [0, 1], ["50%", "-60%"]);
  const yJungle2 = useTransform(scrollYProgress, [0, 1], ["40%", "-50%"]);
  const yJungle1 = useTransform(scrollYProgress, [0, 1], ["10%", "-40%"]);
  const yMountains = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);
  const yLogoland = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);

  useEffect(() => {
    controls.start({ y: window.scrollY });
  }, [controls]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(135deg, #f9f9f9, #E7E7E7)"
            : "linear-gradient(135deg, #E7E7E7, #f9f9f9)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "M" : "My Services"}
      </motion.h1>
      <motion.div key="mountains" className="mountains" style={{ y: yMountains }}></motion.div>
      <motion.div key="jungle1" className="jungle1" style={{ y: yJungle1 }}></motion.div>
      <motion.div key="jungle2" className="jungle2" style={{ y: yJungle2 }}></motion.div>
      <motion.div key="jungle3" className="jungle3" style={{ y: yJungle3 }}></motion.div>
      <motion.div key="jungle4" className="jungle4" style={{ y: yJungle4 }}></motion.div>
      <motion.div key="jungle5" className="jungle5" style={{ y: yJungle5 }}></motion.div>
      <motion.div key="logoland" className="logoland" style={{ y: yLogoland }}></motion.div>
      <motion.div
        className="background"
        style={{
          y: yManOnMountain,
          backgroundImage: `url(${type === "services" ? "/background.png" : "/man_on_mountain.png"})`,
        }}
      ></motion.div>
      <motion.div className="manonmountain" style={{ y: yManOnMountain }}></motion.div>
    </div>
  );
};

export default ParallaxComponent;
