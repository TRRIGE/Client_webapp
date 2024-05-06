import React from 'react'
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import Hero from './components/Hero';
import Navbar from './components/Navbar';


const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <GetInTouch />
      <Footer />
    </>
  )
}

export default page