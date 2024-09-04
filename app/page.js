'use client'

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ScrollToTop from "react-scroll-to-top";

const Page = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ?
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#a4ecd5' }}>
          <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            id="loaderText"
          >
            Code Develope Vibe
          </motion.div>
        </div>
        :
        <>
          <ScrollToTop smooth color="#6e07f3" />
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <div className="container">
            <Experience />
          </div>
          <Work />
          <div className="container">
            <GetInTouch />
          </div>
          <Footer />
        </>
      }
    </>
  );
};

export default Page;
