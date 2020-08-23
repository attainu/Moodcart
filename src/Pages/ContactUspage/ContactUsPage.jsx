import React from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../../Components/Navbar.jsx";
import Footer from "../../Components/Footer";
import Contact from "../../Components/ContactUsCard";
import "../../App.css";

const ContactUsPage = ({ user }) => {
  return (
    <div className="contactUsPage">
      <Navbar />
      <div className="contactDetailsDesign">
        <Contact />
      </div>
    </div>
  );
};

export default ContactUsPage;
