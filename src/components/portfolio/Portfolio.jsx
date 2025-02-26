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
    title: "ATMEX Restaurant Website",
    img: "/thumbnail.png",
    desc: "I designed a responsive front end and a robust Django backend, increasing mobile user engagement by 65%. By building and integrating REST APIs with Django, I optimized server performance, reducing response time by 30%. I implemented secure Stripe API integration, ensuring 100% error-free payment transactions, and utilized PostgreSQL to manage user accounts, orders, and menu data with zero data loss. Additionally, I developed user authentication and role-based access control to enhance platform security and usability. Finally, I deployed the application on Contabo VPS, enabling seamless live access and testing.",
    link: "https://atmex-minto.com",
  },
  {
    id: 3,
    title: "Disease Prediction App",
    img: "/health.png",
    desc: "Leveraging Flask, a Python web framework, this application integrates advanced machine learning models to predict health conditions and diagnose ailments based on patient data. It offers users, including healthcare providers and patients, personalized insights and recommendations for proactive healthcare management.",
    link: "https://github.com/pandeybishwas5/Health_Prediction",
  },
  {
    id: 4,
    title: "React Food Order App",
    img: "/foodorder.png",
    desc: "A responsive React application designed for seamless user interaction. This app allows users to browse a variety of menus, add items to their cart, and place orders effortlessly.",
    link: "https://github.com/pandeybishwas5/FoodOrderApp",
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
