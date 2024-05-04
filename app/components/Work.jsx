import React from "react";

const Work = () => {
  return (
    <div className="half-height-backgroundforWork" id="marginTopOuter">
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center mb-5 text-white" id="marginTop">
            <h2>My Recent Work</h2>
            <p>
              Here are a few past design projects I've worked on. Want to see
              more?{" "}
              <a
                href="mailto:rutujakothekar9@gmail.com"
                className="link-offset-2 link-underline link-underline-opacity-0"
                style={{ color: "#6e07f3" }}
              >
                Email me.
              </a>
            </p>
          </div>
        </div>
        <div className="row ms-3 me-3">
          <div className="col-lg-4">
            <div
              className="card p-4 text-center"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body">
                <h2 className="card-title mb-3">HealthChat</h2>
                <p className="card-text mb-5">
                  The Health Care Chat Bot Project, powered by artificial
                  intelligence, seeks to elevate healthcare accessibility.
                </p>
                <a
                  href="https://healthchat-3pvr.onrender.com/"
                  target="_blank"
                  className="link-offset-2 link-underline link-underline-opacity-0 me-2"
                  id="projectBtn"
                >
                  <i className="bi bi-box-arrow-up-right"></i> healthChat.com
                </a>
                <a
                  href="#"
                  className="link-offset-2 link-underline link-underline-opacity-0"
                  id="projectBtn"
                >
                  <i className="bi bi-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="card p-4 text-center"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body">
                <h2 className="card-title mb-3">Stocklook</h2>
                <p className="card-text mb-5">
                  Build a thorough Stock Management System, ensuring streamlined
                  tracking and organization of inventory data.
                </p>
                <a
                  href="#"
                  className="link-offset-2 link-underline link-underline-opacity-0 me-2"
                  id="projectBtn"
                >
                  <i className="bi bi-box-arrow-up-right"></i> stocklook.com
                </a>
                <a
                  href="#"
                  className="link-offset-2 link-underline link-underline-opacity-0"
                  id="projectBtn"
                >
                  <i className="bi bi-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="card p-4 text-center"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body">
                <h2 className="card-title mb-3">TodoList</h2>
                <p className="card-text mb-5">
                  Remainder Web Application, solution designed to streamline and
                  enhance your daily work management.
                </p>
                <a
                  href="#"
                  className="link-offset-2 link-underline link-underline-opacity-0 me-2"
                  id="projectBtn"
                >
                  <i className="bi bi-box-arrow-up-right"></i> todolist.com
                </a>
                <a
                  href="#"
                  className="link-offset-2 link-underline link-underline-opacity-0"
                  id="projectBtn"
                >
                  <i className="bi bi-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
