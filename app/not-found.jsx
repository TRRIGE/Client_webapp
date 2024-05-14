import React from "react";
import Link from "next/link";

const errorPage = () => {
  return (
    <section className="py-3 py-md-5 min-vh-100 d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h2 className="d-flex justify-content-center align-items-center gap-2 mb-4">
                <span
                  className="display-1 fw-bold"
                  style={{ color: "#56dbb1" }}
                >
                  4
                </span>
                <i
                  className="bi bi-exclamation-circle-fill display-4"
                  style={{ color: "#6e07f3" }}
                ></i>
                <span
                  className="display-1 fw-bold bsb-flip-h"
                  style={{ color: "#56dbb1" }}
                >
                  4
                </span>
              </h2>
              <h3 className="h2 mb-2">Oops! You're lost.</h3>
              <p className="mb-5">
                The page you are looking for was not found.
              </p>
              {/* <a
                className="btn bsb-btn-5xl btn-dark rounded-pill px-5 fs-6 m-0"
                href="/"
                role="button"
              >
                Back to Home
              </a> */}
              <Link href="/">
                <button type="button" className="btn pe-4 ps-4" id="navButton">
                  <i className="bi bi-house me-2"></i> Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default errorPage;
