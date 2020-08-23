import React, { useState } from "react";
import "./Css/NavBar.css";
import { GoogleLogout } from "react-google-login";
import { logOutUser } from "../Redux/actions/userAction";
import { connect } from "react-redux";
import bookmark from "./bookmark.svg";
import { NavLink, Link, Redirect } from "react-router-dom";
import Keys from "../config";
import Category from "./category";
import ResponsiveCat from "./ResponsiveCategories";

const SuNavbar = ({ user, logOutUser }) => {
  const [toggle, setToggle] = useState(false);

  let userData;
  if (user != null) {
    userData = JSON.parse(window.localStorage.getItem("user"));
  } else {
    userData = null;
  }
  console.log(userData);

  function myFunction() {
    setToggle(!toggle);
  }

  const handleLogoutFailure = (err) => {
    console.error(err);
  };

  const handleLogoutSuccess = () => {
    alert("Logged out successfully");
    logOutUser();
  };

  return (
    <div className="navBar topnav" expand="md" id="myTopnav">
      <div className="navBarWidth">
        <div className="iconTitle">
          <a href="javascript:void(0);" className="icon" onClick={myFunction}>
            <i style={{ fontSize: "xx-large" }} className="fa fa-bars"></i>
          </a>
          {toggle ? <ResponsiveCat /> : null}

          <Link to="/" id="link" className="webName">
            <h1 className="webNameH1">StayUpdated</h1>
          </Link>
        </div>
        <div>
          {!user ? (
            <Redirect to="/login" />
          ) : (
            <div className="logedin">
              <Category />
              <Link
                className="App-logo-profile App-logo"
                to="/profile/"
                data-tip="Profile"
              >
                <img
                  src={userData.imageUrl}
                  className="App-logo-profile"
                  alt="logo"
                />
              </Link>
              <div id="navItem3">
                <GoogleLogout
                  clientId={Keys.Client_id}
                  buttonText="Logout"
                  onLogoutSuccess={handleLogoutSuccess}
                  onFailure={handleLogoutFailure}
                />
              </div>
            </div>
          )}
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

export default connect(mapStateToProps, { logOutUser })(SuNavbar);
