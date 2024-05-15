import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import hero from "../../public/hero.jpg";
import heroPage from "../../public/heroPage.svg";

const Hero = () => {
  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="row"
      >
        <div className="col text-center" id="heroTopMargin">
          <p id="heroTitle">Designer, Fullstack Developer & Self-Learner</p>
          <p className="fs-4">
            I design and code beautifully simple things, and I love what I do.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="row"
      >
        <div className="col text-center mt-4">
          <Image
            src={hero}
            height={205}
            width={205}
            alt="hero image"
            style={{ borderRadius: "100%" }}
            priority
          />
        </div>
      </motion.div>
      <div className="row">
        <div className="col text-center">
          <Image
            src={heroPage}
            height={350}
            width={860}
            alt="heroPage image"
            id="heroPage"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
