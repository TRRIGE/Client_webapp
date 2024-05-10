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
                    <h1 className="text-center mt-3 mb-5">I’m excited to learn about your <br />project. Ready to get started?</h1>
                    <div className="col-lg-8 mx-auto mb-5">
                        <div className="row">
                            <div className="col">
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input type="text" id="form3Example1" className="form-control" placeholder="Name" style={{ height: '50px' }} />
                                </div>
                            </div>
                            <div className="col">
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input type="email" id="form3Example2" className="form-control" placeholder="Email" style={{ height: '50px' }} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <select className="form-select" aria-label="Default select example" style={{ height: '50px' }}>
                                        <option selected disabled>Type of project
                                        </option>
                                        <option value="1">Wep App</option>
                                        <option value="2">Responsive Design</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col">
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <select className="form-select" aria-label="Default select example" style={{ height: '50px' }}>
                                        <option selected disabled>Budget
                                        </option>
                                        <option value="1">₹3000 - ₹5000</option>
                                        <option value="2">₹5000 - ₹7000</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="form-floating mb-4">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
                            <label htmlFor="floatingTextarea2">Additional Details</label>
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
