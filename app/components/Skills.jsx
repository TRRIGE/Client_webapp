import React from "react";

const Skills = () => {
  return (
    <div className="half-height-background" id="skills">
      <div className="container">
        <div className="card-group text-center no-margin-on-mobile">
          <div className="card" style={{ paddingTop: "70px" }}>
            <i
              className="bi bi-layers mb-2"
              style={{ fontSize: "50px", color: "#64ffda" }}
            ></i>
            <div className="card-body mt-2">
              <h4 className="card-title mb-3" style={{ color: "#ccd6f6" }}>
                Designer
              </h4>
              <p className="card-text mb-4">
                I value simple content structure, clean designs, and thoughtful
                interactions.
              </p>
              <p className="card-text mb-4">
                <span style={{ color: "#64ffda" }}>
                  Things I enjoy designing:{" "}
                </span>
                <br /> UX, UI, Web, Logos
              </p>
              <p>
                <span style={{ color: "#64ffda" }}>Design Tools: </span>
                <br />
                Figma <br />
                Pen & Paper <br />
                Sketch <br />
                Webflow
              </p>
            </div>
          </div>
          <div className="card" style={{ paddingTop: "70px" }}>
            <i
              className="bi bi-code-square mb-2"
              style={{ fontSize: "50px", color: "#64ffda" }}
            ></i>
            <div className="card-body mt-2">
              <h4 className="card-title mb-3" style={{ color: "#ccd6f6" }}>
                Frontend Developer
              </h4>
              <p className="card-text mb-4">
                I like to code things from scratch, and enjoy bringing ideas to
                life in the browser.
              </p>
              <p className="card-text mb-4">
                <span style={{ color: "#64ffda" }}>Languages I Use: </span>
                <br /> HTML, CSS, JavaScript, Tailwind CSS, jQuery, Git
              </p>
              <p>
                <span style={{ color: "#64ffda" }}>Dev Tools: </span>
                <br />
                Bootstrap
                <br />
                React
                <br />
                Next
                <br />
                EJS
                <br />
                Github
                <br />
                Vercel
                <br />
                VSCode
                <br />
              </p>
            </div>
          </div>
          <div className="card" style={{ paddingTop: "70px" }}>
            <i
              className="bi bi-database-check mb-2"
              style={{ fontSize: "50px", color: "#64ffda" }}
            ></i>
            <div className="card-body mt-2">
              <h4 className="card-title mb-3" style={{ color: "#ccd6f6" }}>
                Backend Developer
              </h4>
              <p className="card-text mb-4">
                I enjoy crafting and turning concepts into powerful
                functionality behind the scenes.
              </p>
              <p className="card-text mb-4">
                <span style={{ color: "#64ffda" }}>Languages I Use: </span>
                <br /> Node, Express, JavaScript, Python, PHP
              </p>
              <p>
                <span style={{ color: "#64ffda" }}>Dev Tools: </span>
                <br />
                Firebase
                <br />
                Postman
                <br />
                MongoDB
                <br />
                MySQL
                <br />
                Render
                <br />
                VSCode
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
