import { Saira } from "next/font/google";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

export const saira = Saira({
  subsets: ["latin"],
  weight: "400",
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav className="navbar navbar-expand-lg bg-white pt-2 sticky-top">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="container"
      >
        <a className={`navbar-brand ${saira.className}`} href="#" id="navBrand">
          Rutuja Kothekar
        </a>
        <motion.button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="navbarToggler"
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span role="button">
            <i
              className="bi bi-list fs-1"
              aria-hidden="true"
              style={{ color: isOpen ? "#64ffda" : "#6e07f3" }}
            ></i>
          </span>
        </motion.button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item me-lg-3">
              <a className="nav-link" href="#work">
                Work
              </a>
            </li>
          </ul>
          <Link href="#getInTouch" className="d-grid text-decoration-none">
            <button type="button" className="btn" id="navButton">
              Say Hello
            </button>
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
