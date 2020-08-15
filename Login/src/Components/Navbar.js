import React from "react";
import "./NavBar.css";
import { GoogleLogout } from "react-google-login";
import { logOutUser } from "../Redux/actions/userAction";
import { connect } from "react-redux";
import bookmark from "./bookmark.svg";
import { Navbar, Nav, NavItem, NavbarBrand } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import Keys from "../config";
// import ReactTooltip from "react-tooltip";
import Select from "./Select";

const SuNavbar = ({ user, logOutUser }) => {
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
    <Navbar className="bgColor" expand="md">
      <NavbarBrand>
        <Link to="/" id="link" className="webName">
          <h1 className="webNameH1">StayUpdated</h1>
        </Link>
      </NavbarBrand>
<<<<<<< HEAD
      <Nav className="mr-auto" className="positions" navbar>
        {!user ? (
          <NavItem>
            <NavLink className="ml-3" to="/login">
=======
      <Nav className='mr-auto' className='positions'>
        {!user ? (
          <NavItem style={{ margin: "5px" }}>
            <NavLink className='ml-3' to='/login'>
>>>>>>> 4e60c923bde5944610ad1e1b6be5eeebc593fba5
              Login
            </NavLink>
          </NavItem>
        ) : (
          <>
<<<<<<< HEAD
            <NavItem id="navItem1">
              <Link to="/bookmark">
                <img src={bookmark} className="App-logo" alt="logo" />
              </Link>
            </NavItem>
            <NavItem id="navItem2">
              <NavLink to="/profile/" data-tip="Profile">
=======
            <NavItem>
              <Select />
            </NavItem>
            <NavItem style={{ margin: "5px" }}>
              <Link to='/bookmark'>
                <img src={bookmark} className='App-logo' alt='logo' />
              </Link>
            </NavItem>
            <NavItem style={{ margin: "5px" }}>
              <NavLink to='/profile/' data-tip='Profile'>
>>>>>>> 4e60c923bde5944610ad1e1b6be5eeebc593fba5
                <img
                  src={userData.imageUrl}
                  className="App-logo-profile App-logo"
                  alt="logo"
                />
              </NavLink>
            </NavItem>
<<<<<<< HEAD
            <NavItem id="navItem3">
=======
            <NavItem style={{ margin: "5px" }}>
>>>>>>> 4e60c923bde5944610ad1e1b6be5eeebc593fba5
              <GoogleLogout
                clientId={Keys.Client_id}
                buttonText="Logout"
                onLogoutSuccess={handleLogoutSuccess}
                onFailure={handleLogoutFailure}
              />
            </NavItem>
          </>
        )}
      </Nav>
    </Navbar>
  );
};
const mapStateToProps = (storeState) => {
  return {
    user: storeState.userState.user,
  };
};

export default connect(mapStateToProps, { logOutUser })(SuNavbar);
