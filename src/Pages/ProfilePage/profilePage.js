import React from "react";
import Search from "../../Components/Search";
import { Redirect } from "react-router-dom";
import Navbar from "../../Components/Navbar.jsx";
import { connect } from "react-redux";
import "./profilePage.css";
import Footer from "../../Components/Footer";

const profilePage = ({ user }) => {
  console.log(user);
  if (!user && user.lenght <= 1) return <Redirect to='/login' />;
  return (
    <div className='profilePage'>
      <Navbar />
      <div className='profileContainer'>
        <div className='profileCard'>
          <img
            className='userImage'
            src={user.user01.photoURL}
            alt='User Profile Image'
          />
          <h2 style={{ color: "white" }}>Name:- {user.user01.displayName}</h2>
          <h3 style={{ color: "white" }}>Email:- {user.user01.email}</h3>
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
