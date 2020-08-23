import React from "react";
import Search from "../../Components/Search";
import { Redirect } from "react-router-dom";
import Navbar from "../../Components/Navbar.jsx";
import { connect } from "react-redux";
import "./profilePage.css";
import Footer from "../../Components/Footer";
import Avtar from "../../Components/Aeets/download.png";

const profilePage = ({ user }) => {
  console.log(user);
  // if (!user && user.lenght <= 1) return <Redirect to='/login' />;
  return (
    <div className='profilePage'>
      <Navbar />
      <div className='profileContainer'>
        <div className='profileCard'>
          <img
            className='userImage'
            src={!user.user01 ? Avtar : user.user01.photoURL}
            alt='User Profile Image'
          />
          <h2 style={{ color: "white" }}>
            {user.user01 ? user.user01.displayName : ""}
          </h2>
          <h3 style={{ color: "white" }}>
            {user.user01 ? user.user01.email : ""}
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};
const mapStateToProps = (storeState) => {
  return {
    user: storeState.userState.user,
  };
};
export default connect(mapStateToProps)(profilePage);
