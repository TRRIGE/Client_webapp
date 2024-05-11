import React from "react";

const Work = () => {
  return (
    <div className="half-height-backgroundforWork" id="marginTopOuter">
      <div className="container-fluid">
        <div className="row" id="work">
          <div
            className="col-lg-7 mx-auto text-center mb-5 text-white"
            id="marginTop"
          >
            <h2 id="fontFam">My Recent Work</h2>
            <p>
              During my college years and various internships, I explored
              countless digital products. Inspired by the challenge, I began
              crafting my own, driven by a passion for innovative design.
            </p>
          </div>
        </div>
        <div className="row ms-3 me-3">
          <div className="col-lg-4">
            <div className="card p-4 text-center" id="workCard">
              <div className="card-body">
                <h2 className="card-title mb-3 fw-bold">Stocklook</h2>
                <p className="card-text mb-5">
                  Build a thorough Stock Management System, ensuring streamlined
                  tracking and organization of inventory data.
                </p>
                <a
                  href="https://github.com/rutuuujaa/StockManager_Next-master"
                  target="_blank"
                  className="link-offset-2 link-underline link-underline-opacity-0"
                  id="projectBtn"
                >
                  <i className="bi bi-github me-1"></i> GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card p-4 text-center" id="workCard">
              <div className="card-body">
                <h2 className="card-title mb-3 fw-bold">HealthChat</h2>
                <p className="card-text mb-5">
                  The Health Care Chat Bot Project, powered by artificial
                  intelligence, seeks to elevate healthcare accessibility.
                </p>
                <a
                  href="https://github.com/rutuuujaa/HealthChat-main"
                  target="_blank"
                  className="link-offset-2 link-underline link-underline-opacity-0"
                  id="projectBtn"
                >
                  <i className="bi bi-github me-1"></i> GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card p-4 text-center" id="workCard">
              <div className="card-body">
                <h2 className="card-title mb-3 fw-bold">TodoList</h2>
                <p className="card-text mb-5">
                  Remainder Web Application, solution designed to streamline and
                  enhance your daily work management.
                </p>
                <a
                  href="https://github.com/rutuuujaa/Todolist"
                  target="_blank"
                  className="link-offset-2 link-underline link-underline-opacity-0"
                  id="projectBtn"
                >
                  <i className="bi bi-github me-1" id="getInTouch"></i> GitHub
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
