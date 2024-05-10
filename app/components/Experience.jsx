import React from "react";

const Experience = () => {
  return (
    <div className="container">
      <div className="row" id="experience">
        <div className="col-lg-7 mx-auto text-center mb-5" id="marginTop">
          <h2 id="fontFam">Experience</h2>
          <p>
            In my prior employement i emerged with hands-on technical experience
            cultivated through practical applications.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card p-3" id="experienceCard">
            <div className="card-body">
              <div className="d-flex">
                <h5 className="card-title mb-2 fw-bold">InnoSewa Pvt. Ltd.</h5>
                <a
                  href="https://innosewa.com"
                  target="_blank"
                  className="link-offset-2 link-underline link-underline-opacity-0 ms-auto"
                  id="experienceBtn"
                >
                  <i className="bi bi-box-arrow-up-right fs-5"></i>
                </a>
              </div>
              <h6 className="mb-3" style={{ color: "#6e07f3" }}>
                Software and Business Development
              </h6>
              <p className="card-text">
                My primary responsibility entailed meticulously tailoring
                projects to precisely meet client needs, ensuring excellence in
                execution and exceeding expectations at every turn.
              </p>
              <p>
                Crafting intricate web application blueprints and structures
                meticulously tailored to suit client needs, ensuring a precise
                alignment with their unique requirements and objectives.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card p-3 experienceCard">
            <div className="card-body">
              <div className="d-flex">
                <h5 className="card-title mb-2 fw-bold">LiveTechSkills</h5>
                <h3></h3>
                <a
                  href="https://www.livetechskills.com/"
                  target="_blank"
                  className="link-offset-2 link-underline link-underline-opacity-0 ms-auto"
                  id="experienceBtn"
                >
                  {" "}
                  <i className="bi bi-box-arrow-up-right fs-5"></i>
                </a>
              </div>
              <h6 className="mb-3" style={{ color: "#6e07f3" }}>
                Full Stack Development
              </h6>
              <p className="card-text">
                Driven by a passion for crafting seamless user experiences, I
                excel in front-end finesse, ensuring every pixel aligns with
                user expectations and needs.
              </p>
              <p>
                With an insatiable curiosity for full-stack development, I
                eagerly immerse myself in both front-end and back-end realms,
                harnessing innovation to create robust solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
