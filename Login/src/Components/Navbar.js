import React, { useState } from "react";
import "./NavBar.css";
import { GoogleLogout } from "react-google-login";
import { logOutUser } from "../Redux/actions/userAction";
import { connect } from "react-redux";
import bookmark from "./bookmark.svg";
import { Navbar, Nav, NavItem, NavbarBrand } from "reactstrap";
import { NavLink, Link, Redirect } from "react-router-dom";
import Keys from "../config";
import Category from "./category";

const SuNavbar = ({ user, logOutUser }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  let userData;
  if (user != null) {
    userData = JSON.parse(window.localStorage.getItem("user"));
  } else {
    userData = null;
  }
  console.log(userData);

  const handleLogoutFailure = (err) => {
    console.error(err);
  };

  const handleLogoutSuccess = () => {
    alert("Logged out successfully");
    logOutUser();
  };

  return (
    <div className="navBar" expand="md">
      <div>
        <Link to="/" id="link" className="webName">
          <h1 className="webNameH1">StayUpdated</h1>
        </Link>
      </div>
      <div className="positions" navbar>
        {!user ? (
          <Redirect to="/login" />
        ) : (
          <>
            <Category />
            <div id="navItem1">
              <Link to="/bookmark">
                <img src={bookmark} className="App-logo" alt="logo" />
              </Link>
            </div>

            <Link to="/profile/" data-tip="Profile">
              <img
                src={userData.imageUrl}
                className="App-logo-profile App-logo"
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
          </>
        )}
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
