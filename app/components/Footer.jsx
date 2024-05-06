import React from "react";

const Footer = () => {
  return (
    <div className="half-height-backgroundforFooter">
      <div className="container-fluid">
        <div className="row ms-3 me-3">
          <div className="col">
            <div className="card" id="footerBlackcontent">
              <div className="card-body text-white d-flex justify-content-between">
                <h3 className="">Start a Project</h3>
                <h6>
                  Interested in working together? We should <br />
                  queue up a time to chat. I’ll buy the coffee.
                </h6>
                <button type="button" className="btn" id="navButtonFooter">
                  Let's do This!
                </button>
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
                      <button className="borderlinkedin">
                        <i className="bi bi-linkedin"></i>
                      </button>
                    </li>

                    <li className="facebook me-3">
                      <button className="borderFacebook">
                        <i className="bi bi-facebook"></i>
                      </button>
                    </li>

                    <li className="twitter me-3">
                      <button className="borderTwitter">
                        <i className="bi bi-twitter"></i>
                      </button>
                    </li>

                    <li className="instagram me-3">
                      <button className="borderInsta">
                        <i className="bi bi-instagram"></i>
                      </button>
                    </li>

                    <li className="dribbble me-3">
                      <button className="borderDribble">
                        <i className="bi bi-dribbble"></i>
                      </button>
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
