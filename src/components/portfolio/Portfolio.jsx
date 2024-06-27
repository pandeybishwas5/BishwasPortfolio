import { useRef, useEffect, useState } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Next.js PDF Chat App",
    img: "/chat.png",
    desc: "Discover a seamless way to interact with your PDF documents using our cutting-edge app, built with NextJS 13.4, DrizzleORM, OpenAI, Stripe, TypeScript, Tailwind, and hosted on Vercel. Upload your PDFs and engage in dynamic conversations with the content, leveraging the power of AI to extract, analyze, and discuss the information within.",
    link: "https://answer-bot-sepia.vercel.app/",
  },
  {
    id: 2,
    title: "Disease Prediction App",
    img: "/health.png",
    desc: "Leveraging Flask, a Python web framework, this application integrates advanced machine learning models to predict health conditions and diagnose ailments based on patient data. It offers users, including healthcare providers and patients, personalized insights and recommendations for proactive healthcare management.",
    link: "https://github.com/pandeybishwas5/Health_Prediction",
  },
  {
    id: 3,
    title: "React Food Order App",
    img: "/food.png",
    desc: "A responsive React application designed for seamless user interaction. This app allows users to browse a variety of menus, add items to their cart, and place orders effortlessly.",
    link: "https://github.com/pandeybishwas5/FoodOrderApp",
  },
  {
    id: 4,
    title: "Full Stack Restaurant App",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Leveraging Flask, a Python web framework, this application integrates advanced machine learning models to predict health conditions and diagnose ailments based on patient data. It offers users, including healthcare providers and patients, personalized insights and recommendations for proactive healthcare management.",
    link: "https://github.com/pandeybishwas5/Health_Prediction",
  },
];


const isMobileDevice = () => window.innerWidth <= 768;

const Single = ({ item, isMobile }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className="portfolio-item">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          {isMobile ? (
            <div className="textContainer">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <a href={item.link} target="_blank"><button>See Demo</button></a>
            </div>
          ) : (
            <motion.div className="textContainer" style={{ y }}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <a href={item.link} target="_blank"><button>See Demo</button></a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const [isMobile, setIsMobile] = useState(isMobileDevice());

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} isMobile={isMobile} />
      ))}
    </div>
  );
};

export default Portfolio;
