import React from "react";
import "./Css/ContactUsCard.css";
import Randeep from "./Aeets/Randeep.jpg";
import Surya from "./Aeets/surya.jpg";
import linkdin from "./icons8-linkedin.svg";

const ContactUsCard = () => {
  return (
    <div className="card">
      <div className="contact">
        <img src={Surya} className="photo" />
        <h2>Surya Thombre</h2>
        <h4>Suryathombre000gmail.com</h4>
        <a
          href="https://www.linkedin.com/in/surya-thombre-310320166/"
          target="_blank"
        >
          <img src={linkdin} className="linkedinLogo" />
        </a>
      </div>
      <div className="contact">
        <img src={Randeep} className="photo" />
        <h2>Randeep Rana</h2>
        <h5>Randeepsinghchauhan23@gmail.com</h5>
        <a
          href="https://www.linkedin.com/in/randeep-rana-40905b1a7/"
          target="_blank"
        >
          <img src={linkdin} className="linkedinLogo" />
        </a>
      </div>
    </div>
  );
};

export default ContactUsCard;
