import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav className="navbar navbar-expand-lg bg-white pt-2 sticky-top">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="container"
      >
        <a className="navbar-brand" href="/" id="navBrand">
          Rutuja Kothekar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="navbarToggler"
        >
          <span
            className="navbar-toggler-icon fs-6"
            aria-hidden="true"
            style={{ color: "red" }}
          ></span>
        </button>
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
