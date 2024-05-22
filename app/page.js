'use client'

import React, { useEffect, useState } from 'react'
import DotLoader from "react-spinners/DotLoader";
import { color, motion, useAnimation } from 'framer-motion';
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

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3500);
  }, [])

  return (
    <>
      {loading ?
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'white' }}>
          <DotLoader
            color={"#6e07f3"}
            loading={loading}
            className='mb-5'
            size={25}
          />
          <motion.div
            // initial={{ opacity: 0, y: -50 }}
            // animate={controls}
            // transition={{ duration: 0.9 }}
            style={{ color: '#6e07f3', letterSpacing: '3.5px', wordSpacing: '5px' }}
          >Code Develope Vibe</motion.div>
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
  )
}

export default Page