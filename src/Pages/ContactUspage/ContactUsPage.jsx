import React from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../../Components/Navbar.jsx";
import Footer from "../../Components/Footer";
import Contact from "../../Components/ContactUsCard";

const ContactUsPage = ({ user }) => {
  return (
    <div>
      <Navbar />
      <h1>Contact up page</h1>
      <Contact />
    </div>
  );
};

export default ContactUsPage;
