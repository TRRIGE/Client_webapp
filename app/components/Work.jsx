import { Saira } from "next/font/google";
import React from "react";
import { FiGithub } from "react-icons/fi";

export const saira = Saira({
  subsets: ["latin"],
  weight: "400",
});

const Work = () => {
  return (
    <div className="half-height-backgroundforWork" id="marginTopOuter">
      <div className="container-fluid">
        <div className="row" id="work">
          <div
            className="col-lg-6 col-sm-8 col-md-10 mx-auto text-center mb-5 text-white"
            id="marginTop"
          >
            <h2 id="fontFam" className={saira.className}>
              My Recent Work
            </h2>
            <p>
              During my college years and various internships, I explored
              countless digital products. Inspired by the challenge, I began
              crafting my own, driven by a passion for innovative design.
            </p>
          </div>
        </div>
        <div className="row ms-3 me-3">
          <div className="col-lg-4 mt-lg-3 col-md-6">
            <div className="card text-center" id="workCard">
              <div className="card-body">
                <h2 className={`card-title mb-3 fw-bold ${saira.className}`}>
                  Stocklook
                </h2>
                <p className="card-text">
                  Build a thorough Stock Management System, ensuring streamlined
                  tracking and organization of inventory data.
                </p>
                <p className="mt-5 mb-4 projectSkills">
                  React Bootstrap CSS MongoDb
                </p>
                <a
                  href="https://github.com/rutuuujaa/StockManager_Next-master"
                  target="_blank"
                  className="link-offset-2 link-underline link-underline-opacity-0"
                  id="projectBtn"
                >
                  <FiGithub className="me-1 fs-6" /> GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card text-center" id="workCard">
              <div className="card-body">
                <h2 className={`card-title mb-3 fw-bold ${saira.className}`}>
                  HealthChat
                </h2>
                <p className="card-text">
                  The Health Care Chat Bot Project, powered by artificial
                  intelligence, seeks to elevate healthcare accessibility.
                </p>
                <p className="mt-5 mb-4 projectSkills">
                  Python JavaScript Flask CSS
                </p>
                <a
                  href="https://github.com/rutuuujaa/HealthChat-main"
                  target="_blank"
                  className="link-offset-2 link-underline link-underline-opacity-0"
                  id="projectBtn"
                >
                  <FiGithub className="me-1 fs-6" /> GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-lg-3">
            <div className="card text-center" id="workCard">
              <div className="card-body">
                <h2 className={`card-title mb-3 fw-bold ${saira.className}`}>
                  TodoList
                </h2>
                <p className="card-text">
                  Todolist Web Application, solution designed to streamline and
                  enhance your daily work management.
                </p>
                <p className={`mt-5 mb-4 projectSkills ${saira.className}`}>
                  React Bootstrap CSS JavaScript
                </p>
                <a
                  href="https://github.com/rutuuujaa/Todolist"
                  target="_blank"
                  className="link-offset-2 link-underline link-underline-opacity-0"
                  id="projectBtn"
                >
                  <FiGithub className="bi bi-github me-1 fs-6" /> GitHub
                  <span id="getInTouch"></span>
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
