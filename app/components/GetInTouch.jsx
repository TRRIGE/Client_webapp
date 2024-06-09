import { Saira } from "next/font/google";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsChatSquareText } from "react-icons/bs";

export const saira = Saira({
  subsets: ["latin"],
  weight: "400",
});

const GetInTouch = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);
  return (
    <div className="container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.9 }}
        className="row section text-center"
        id="marginTopOuter"
      >
        <h2 id="fontFam" className={saira.className}>
          What&rsquo;s Next?
        </h2>
        <p className="display-5" style={{ color: "#6e07f3", fontWeight: 800 }}>
          Get In Touch
        </p>
        <div className="col-lg-7 col-sm-11 mx-auto">
          <p className="fs-5">
            I am actively exploring new opportunities and welcome any inquiries
            or connections. My inbox is open, so feel free to reach out if you
            have any questions, potential collaborations, or just want to say
            hello. I&rsquo;ll try my best to get back to you!
          </p>
          <a
            href="mailto:rutujakothekar9@gmail.com"
            className="text-decoration-none"
          >
            <button type="button" className="btn mt-3" id="navButtonConnect">
              <BsChatSquareText className="me-2" /> Let&rsquo;s Connect
            </button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default GetInTouch;
