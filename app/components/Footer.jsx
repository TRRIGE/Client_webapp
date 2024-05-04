import React from "react";

const Footer = () => {
  return (
    <div className="half-height-backgroundforFooter">
      <div className="container-fluid">
        <div className="row ms-3 me-3">
          <div className="col">
            <div
              className="card"
              style={{
                borderRadius: "15px",
                backgroundColor: "#141c3a",
                padding: "40px 120px 40px 120px",
              }}
            >
              <div className="card-body text-white d-flex justify-content-between">
                <h3 className="">Start a Project</h3>
                <h6 className="">
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
            <h3>
              Living, learning, & leveling up <br />
              one day at a time.
            </h3>
            <div className="mb-5 mt-5">
              <a
                data-mdb-ripple-init
                class="btn text-white btn-floating m-1"
                style={{ backgroundColor: "#3b5998" }}
                href="#!"
                role="button"
              >
                <i class="bi bi-facebook"></i>
              </a>
              <a
                data-mdb-ripple-init
                class="btn text-white btn-floating m-1"
                style={{ backgroundColor: "#55acee" }}
                href="#!"
                role="button"
              >
                <i class="bi bi-twitter"></i>
              </a>
              <a
                data-mdb-ripple-init
                class="btn text-white btn-floating m-1"
                style={{ backgroundColor: "#dd4b39" }}
                href="#!"
                role="button"
              >
                <i class="bi bi-google"></i>
              </a>
              <a
                data-mdb-ripple-init
                class="btn text-white btn-floating m-1"
                style={{ backgroundColor: "#ac2bac" }}
                href="#!"
                role="button"
              >
                <i class="bi bi-instagram"></i>
              </a>
              <a
                data-mdb-ripple-init
                class="btn text-white btn-floating m-1"
                style={{ backgroundColor: "#0082ca" }}
                href="#!"
                role="button"
              >
                <i class="bi bi-linkedin"></i>
              </a>
              <a
                data-mdb-ripple-init
                class="btn text-white btn-floating m-1"
                style={{ backgroundColor: "#333333" }}
                href="#!"
                role="button"
              >
                <i class="bi bi-github"></i>
              </a>
            </div>
            <p className="lead">
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
