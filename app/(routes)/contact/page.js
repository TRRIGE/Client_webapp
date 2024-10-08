'use client'

import { Saira } from "next/font/google";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import hero from "../../../public/hero.jpg";
import emailjs from '@emailjs/browser';

export const saira = Saira({
  subsets: ["latin"],
  weight: "400",
});

const Page = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  const [isPending, setIsPending] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    var success = document.getElementById("success");
    e.preventDefault();
    setIsPending(true);
    emailjs.sendForm('service_43dyfke', 'template_r0vqeza', form.current, 'j-OEvWU-o-jF8HUHt')
      .then((result) => {
        e.target.reset();
        success.style.display = "block";
        setIsPending(false);
        checkForm();
      }, (error) => {
        console.log(error);
      });

    setTimeout(() => {
      success.style.display = "none";
    }, 7000);
  }

  function checkForm() {
    var nameValue = document.getElementById('form_name').value.trim();
    var lastNameValue = document.getElementById('form_lastName').value.trim();
    var emailValue = document.getElementById('form_email').value.trim();
    var messageValue = document.getElementById('message').value.trim();

    var submitButton = document.getElementById('navButtonConnect');

    if (nameValue !== '' && lastNameValue !== '' && emailValue !== '' && messageValue !== '') {
      submitButton.removeAttribute('disabled');
    } else {
      submitButton.setAttribute('disabled', 'disabled');
    }
  }

  return (
    <div className="container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.9 }}
        className="row">
        <div className="col text-center mt-3">
          <Image
            src={hero}
            height={85}
            width={85}
            alt="hero image"
            style={{ borderRadius: "100%" }}
          />
        </div>
        <h1 className={`text-center mt-3 mb-5 ${saira.className}`}>Thanks for taking the time to reach out.<br /> How can I help you today?</h1>
        <div className="col-lg-8 mx-auto mb-5">
          <form ref={form} onSubmit={sendEmail}>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-4">
                  <input type="text" name="form_name" id="form_name" className="form-control" placeholder="Name" style={{ height: '50px' }} onInput={checkForm} />
                  <label htmlFor="form_name">Name</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating mb-4">
                  <input type="text" name="form_lastName" id="form_lastName" className="form-control" placeholder="Lastname" style={{ height: '50px' }} onInput={checkForm} />
                  <label htmlFor="form_lastName">Lastname</label>
                </div>
              </div>
            </div>
            <div className="form-floating mb-4">
              <input type="email" name="form_email" id="form_email" className="form-control" placeholder="Email" style={{ height: '50px' }} onInput={checkForm} />
              <label htmlFor="form_email">Email</label>
            </div>
            <div className="form-floating mb-4">
              <textarea name="message" id="message" className="form-control" placeholder="Leave a comment here" style={{ height: '100px' }} onInput={checkForm}></textarea>
              <label htmlFor="message">Message</label>
            </div>
            <div className="text-center">
              <button type="submit" id='navButtonConnect' value="Send" className="btn" disabled>
                Send Message
              </button>
            </div>
            {isPending && (
              <div className='fw-bold text-center mt-2' id="pending">Your message is sending...</div>
            )}
            <div className='fw-bold text-center mt-2' id="success">Your message sent successfully!</div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
