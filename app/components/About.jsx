import { Saira } from "next/font/google";
import React from "react";

export const saira = Saira({
  subsets: ["latin"],
  weight: "400",
});

const About = () => {
  return (
    <div id="aboutBcakground">
      <div className="container">
        <div className="row" id="about">
          <div
            className="col-lg-7 mx-auto text-center text-white"
            id="marginTop"
          >
            <h2 id="fontFam" className={saira.className}>
              Hi, I&rsquo;m Rutuja.<span id="break"></span> Nice to meet you.
            </h2>
            <p className="text-white mt-4">
              Embarking on my journey as a budding freelance designer,
              I&rsquo;ve eagerly embraced remote opportunities, collaborated
              with startups, and worked alongside skilled professionals to craft
              digital solutions for diverse audiences. I&rsquo;m fueled by
              curiosity, quietly confident, and committed to continuous growth.
            </p>
            <a
              href="Rutuja_Kothekar.pdf"
              className="text-decoration-none"
              target="_blank"
            >
              <button type="button" className="btn mt-3" id="navButtonAbout">
                Hire Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
