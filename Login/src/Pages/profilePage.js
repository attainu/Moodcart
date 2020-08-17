import React from "react";
import Search from "../Components/Search";
import Navbar from "../Components/Navbar";
import { connect } from "react-redux";
import "./profilePage.css";

const profilePage = ({ user }) => {
  console.log(user);
  return (
    <div className="profilePage">
      <Navbar />
      <div className="profileContainer">
        <div className="profileCard">
          <img
            className="userImage"
            src={user.imageUrl}
            alt="User Profile Image"
          />
          <h2 style={{ color: "white" }}>Name:- {user.name}</h2>
          <h3 style={{ color: "white" }}>Email:- {user.email}</h3>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (storeState) => {
  return {
    user: storeState.userState.user,
  };
};
export default connect(mapStateToProps)(profilePage);
