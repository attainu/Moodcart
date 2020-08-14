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
import SideBar from "./sideBar";

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
    <Navbar className='bgColor' expand='md'>
      <NavbarBrand>
        <Link to='/' id='link'>
          {" "}
          <h1>StayUpdated</h1>{" "}
        </Link>
      </NavbarBrand>
      <Nav className='mr-auto' className='positions' navbar>
        {!user ? (
          <NavItem>
            <NavLink className='ml-3' to='/login'>
              Login
            </NavLink>
          </NavItem>
        ) : (
          <>
            <NavItem>
              <Link to='/bookmark'>
                <img src={bookmark} className='App-logo' alt='logo' />
              </Link>
            </NavItem>
            <NavItem>
              <NavLink to='/profile/' data-tip='Profile'>
                <img
                  src={userData.imageUrl}
                  className='App-logo-profile App-logo'
                  alt='logo'
                />
              </NavLink>
            </NavItem>
            <NavItem>
              <GoogleLogout
                clientId={Keys.Client_id}
                buttonText='Logout'
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
