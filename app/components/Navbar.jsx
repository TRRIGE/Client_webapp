import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary pt-3 sticky-top">
      <div className="container">
        <a
          className="navbar-brand"
          href="/"
          style={{ color: "#7510f7", fontSize: "32px", fontWeight: 600 }}
        >
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
        >
          <span className="navbar-toggler-icon"></span>
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
            <li className="nav-item me-4">
              <a className="nav-link" href="#work">
                Work
              </a>
            </li>
          </ul>
          <a href="#connect">
            <button type="button" className="btn" id="navButton">
              Say Hello
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
