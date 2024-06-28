import { Saira } from "next/font/google";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const saira = Saira({
  subsets: ["latin"],
  weight: "400",
});

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <div className="half-height-background" id="skills">
      <div className="container-fluid">
        <div
          // ref={ref}
          // initial={{ opacity: 0, y: 50 }}
          // animate={controls}
          // transition={{ duration: 0.9 }}
          className="row"
          style={{ marginLeft: "15px", marginRight: "15px" }}
        >
          <div className="card-group text-center no-margin-on-mobile">
            <div
              className="card"
              style={{ paddingTop: "90px" }}
              id="skillsCard"
            >
              <i
                className="bi bi-stack mb-2"
                style={{ fontSize: "60px", color: "#56dbb1" }}
              ></i>
              <div className="card-body mt-2">
                <h4
                  className={`card-title mb-3 ${saira.className}`}
                  id="fontFam"
                  style={{ fontSize: "24px" }}
                >
                  Designer
                </h4>
                <p className="card-text mb-4">
                  I value simple content structure, clean designs, and
                  thoughtful interactions.
                </p>
                <p className="card-text mb-4">
                  <span style={{ color: "#6e07f3", fontWeight: 600 }}>
                    Things I enjoy designing:{" "}
                  </span>
                  <br /> UX, UI, Web, Logos
                </p>
                <p>
                  <span style={{ color: "#6e07f3", fontWeight: 600 }}>
                    Design Tools:{" "}
                  </span>
                  <br />
                  Figma <br />
                  Pen & Paper <br />
                  Sketch <br />
                  Webflow
                </p>
              </div>
            </div>
            <div
              className="card"
              style={{ paddingTop: "90px" }}
              id="skillsCard"
            >
              <i
                className="bi bi-code-square mb-2"
                style={{ fontSize: "60px", color: "#56dbb1" }}
              ></i>
              <div className="card-body mt-2">
                <h4
                  className={`card-title mb-3 ${saira.className}`}
                  id="fontFam"
                  style={{ fontSize: "24px" }}
                >
                  Frontend Developer
                </h4>
                <p className="card-text mb-4">
                  I like to code things from scratch, and enjoy bringing ideas
                  to life in the browser.
                </p>
                <p className="card-text mb-4">
                  <span style={{ color: "#6e07f3", fontWeight: 600 }}>
                    Languages I Use:{" "}
                  </span>
                  <br /> HTML, CSS, JavaScript, jQuery
                </p>
                <p>
                  <span style={{ color: "#6e07f3", fontWeight: 600 }}>
                    Dev Tools:{" "}
                  </span>
                  <br />
                  Bootstrap
                  <br />
                  React
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
            <div
              className="card"
              style={{ paddingTop: "90px" }}
              id="skillsCard"
            >
              <i
                className="bi bi-database-check mb-2"
                style={{ fontSize: "60px", color: "#56dbb1" }}
              ></i>
              <div className="card-body mt-2">
                <h4
                  className={`card-title mb-3 ${saira.className}`}
                  id="fontFam"
                  style={{ fontSize: "24px" }}
                >
                  Backend Developer
                </h4>
                <p className="card-text mb-4">
                  I enjoy crafting and turning concepts into powerful
                  functionality behind the scenes.
                </p>
                <p className="card-text mb-4">
                  <span style={{ color: "#6e07f3", fontWeight: 600 }}>
                    Languages I Use:{" "}
                  </span>
                  <br /> Node, Express, JavaScript
                </p>
                <p>
                  <span style={{ color: "#6e07f3", fontWeight: 600 }}>
                    Dev Tools:{" "}
                  </span>
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
    </div>
  );
};

export default Skills;
