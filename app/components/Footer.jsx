import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="half-height-backgroundforFooter">
      <div className="container-fluid">
        <div className="row ms-3 me-3 text-center">
          <div className="card" id="footerBlackcontent">
            <div className="card-body text-white d-lg-flex justify-lg-content-between">
              <div className="col-lg-4" id="fontFam">
                <p>Start a Project</p>
              </div>
              <div className="col-lg-4" id="fontFamFooter">
                <p>
                  Interested in working together? We should queue up a time to
                  chat. I&rsquo;ll buy the coffee.
                </p>
              </div>
              <div className="col-lg-4">
                <Link href="/project">
                  <button type="button" className="btn" id="navButtonFooter">
                    <i className="bi bi-rocket-takeoff me-3"></i>Let&rsquo;s do
                    This!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center text-white" id="footerMargin">
            <h4>
              Living, learning, & leveling up <br />
              one day at a time.
            </h4>
            <div className="mb-5 mt-5">
              <div className="center">
                <div id="social">
                  <ul>
                    <li className="linkedin me-3">
                      <a
                        href="https://www.linkedin.com/in/rutuja-kothekar-b98498273/"
                        target="_blank"
                      >
                        <button className="borderlinkedin">
                          <i className="bi bi-linkedin"></i>
                        </button>
                      </a>
                    </li>

                    <li className="facebook me-3">
                      <a>
                        <button className="borderFacebook">
                          <i className="bi bi-facebook"></i>
                        </button>
                      </a>
                    </li>

                    <li className="twitter me-3">
                      <a>
                        <button className="borderTwitter">
                          <i className="bi bi-twitter"></i>
                        </button>
                      </a>
                    </li>

                    <li className="instagram me-3">
                      <a>
                        <button className="borderInsta">
                          <i className="bi bi-instagram"></i>
                        </button>
                      </a>
                    </li>

                    <li className="dribbble me-3">
                      <a>
                        <button className="borderDribble">
                          <i className="bi bi-dribbble"></i>
                        </button>
                      </a>
                    </li>
                  </ul>
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
