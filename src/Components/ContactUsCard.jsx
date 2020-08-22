import React from "react";
import "./Css/ContactUsCard.css";
import Randeep from "./Aeets/Randeep.jpg";
import Surya from "./Aeets/surya.jpg";

const ContactUsCard = () => {
  return (
    <div className='card'>
      <div className='contact'>
        <img src={Surya} className='photo' />
        <h2>Name: Surya Thombre</h2>
        <h4>Email: Suryathombre000gmail.com</h4>
      </div>
      <div className='contact'>
        <img src={Randeep} className='photo' />
        <h4>Name: Randeep Rana</h4>
        <br />
        <h4>Email: </h4>
      </div>
    </div>
  );
};

export default ContactUsCard;
