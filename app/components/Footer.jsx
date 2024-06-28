import { Saira } from "next/font/google";
import Link from "next/link";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaDribbble, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export const saira = Saira({
  subsets: ["latin"],
  weight: "500",
});

const Footer = () => {
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
    <div className="half-height-backgroundforFooter">
      <div className="container-fluid">
        <div className="row ms-3 me-3 text-center">
          <div
            // ref={ref}
            // initial={{ opacity: 0, y: 50 }}
            // animate={controls}
            // transition={{ duration: 0.9 }}
            className="card"
            id="footerBlackcontent"
          >
            <div className="card-body text-white d-lg-flex justify-lg-content-between d-md-flex justify-md-content-between">
              <div className="col-lg-4 col-md-4" id="fontFam">
                <p className={saira.className}>Start a Project</p>
              </div>
              <div className="col-lg-4 col-md-4" id="fontFamFooter">
                <p>
                  Interested in working together? We should queue up a time to
                  chat. I&rsquo;ll buy the coffee.
                </p>
              </div>
              <div className="col-lg-4 col-md-4">
                <Link href="/contact">
                  <button type="button" className="btn" id="navButtonFooter">
                    Let&rsquo;s do This!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            // ref={ref}
            // initial={{ opacity: 0, y: 50 }}
            // animate={controls}
            // transition={{ duration: 0.9 }}
            className="col text-center text-white"
            id="footerMargin"
          >
            <h4>
              Living, learning, & leveling up <br />
              one day at a time.
            </h4>
            <div className="mb-5 mt-5">
              <div>
                <div id="social">
                  <li className="linkedin">
                    <a
                      href="https://www.linkedin.com/in/rutuja-kothekar-b98498273/"
                      target="_blank"
                    >
                      <button className="borderlinkedin">
                        <FiLinkedin className="fs-5" />
                      </button>
                    </a>
                  </li>

                  <li className="github">
                    <a href="https://github.com/rutuuujaa" target="_blank">
                      <button className="bordergithub">
                        <FiGithub className="fs-5" />
                      </button>
                    </a>
                  </li>

                  <li className="twitter">
                    <a
                      href="https://twitter.com/kothekar_rutuja"
                      target="_blank"
                    >
                      <button className="borderTwitter">
                        <FaXTwitter className="fs-5" />
                      </button>
                    </a>
                  </li>

                  <li className="instagram">
                    <a
                      href="https://www.linkedin.com/in/rutuja-kothekar-b98498273/"
                      target="_blank"
                    >
                      <button className="borderInsta">
                        <FaInstagram className="fs-5" />
                      </button>
                    </a>
                  </li>

                  <li className="dribbble me-0">
                    <a
                      href="https://www.linkedin.com/in/rutuja-kothekar-b98498273/"
                      target="_blank"
                    >
                      <button className="borderDribble">
                        <FaDribbble className="fs-5" />
                      </button>
                    </a>
                  </li>
                </div>
              </div>
            </div>
            <p>
              © Copyright {new Date().getFullYear()} - Designed and built by
              Rutuja Kothekar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
