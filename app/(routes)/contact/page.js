import React from "react";
import Image from "next/image";
import hero from "../../../public/hero.jpg";

const Page = () => {
  return (
    <form>
      <div className="container">
        <div className="row">
          <div className="col text-center mt-3">
            <Image
              src={hero}
              height={85}
              width={85}
              alt="hero image"
              style={{ borderRadius: "100%" }}
            />
          </div>
          <h1 className="text-center mt-3 mb-5">Thanks for taking the time to reach out.<br /> How can I help you today?</h1>
          <div className="col-lg-8 mx-auto mb-5">
            <div className="row">
              <div className="col">
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example1" className="form-control" placeholder="Name" style={{ height: '50px' }} />
                </div>
              </div>
              <div className="col">
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example2" className="form-control" placeholder="Lastname" style={{ height: '50px' }} />
                </div>
              </div>
            </div>
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="email" id="form3Example3" className="form-control" placeholder="Email" style={{ height: '50px' }} />
            </div>
            <div className="form-floating mb-4">
              <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
              <label htmlFor="floatingTextarea2">Message</label>
            </div>
            <div className="text-center">
              <button type="button" className="btn" id="navButtonConnect">
                Send Your Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Page;
