import Head from "next/head";
import React from "react";
import {
  Header,
  Nav,
  About,
  Experience,
  Portfolio,
  Contact,
  Footer,
} from "../components/blocks/index";
import { motion, useScroll, useSpring } from "framer-motion";

const MainPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      <motion.div className="progress-bar z-10" style={{ scaleX }} />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainPage;
