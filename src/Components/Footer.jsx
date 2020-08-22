import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='Footer' style={{ color: "white" }}>
      © Copyright 2020 Stay-Updated | All rights reserved.
      <br />
      <Link to='/contactUs/'>Contact Us</Link>
    </div>
  );
};

export default Footer;
