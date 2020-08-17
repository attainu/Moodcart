import React from "react";
import Search from "../Components/Search";
import Navbar from "../Components/Navbar";
import { connect } from "react-redux";

const profilePage = ({ user }) => {
  return (
    <div>
      <Navbar />
      <h1 style={{ color: "white" }}>{user.name}</h1>
    </div>
  );
};

const mapStateToProps = (storeState) => {
  return {
    user: storeState.userState.user,
  };
};

export default connect(mapStateToProps)(profilePage);
