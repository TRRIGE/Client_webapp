import React from "react";

const GetInTouch = () => {
  return (
    <div className="container">
      <div className="row section text-center" id="marginTopOuter">
        <h2>What’s Next?</h2>
        <p className="display-5" style={{ color: "#56dbb1", fontWeight: 800 }}>
          Get In Touch
        </p>
        <div className="col-9 mx-auto">
          <p>
            I am actively exploring new opportunities and welcome any inquiries
            or connections. My inbox is open, so feel free to reach out if you
            have any questions, potential collaborations, or just want to say
            hello. I’ll try my best to get back to you!
          </p>
          <a
            href="mailto:rutujakothekar9@gmail.com"
            className="text-decoration-none"
          >
            <button type="button" className="btn" id="navButtonConnect">
              Start a Conversation
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
