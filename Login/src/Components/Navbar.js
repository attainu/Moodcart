import React from "react";
import "./NavBar.css";
import { GoogleLogout } from "react-google-login";
import { logOutUser } from "../Redux/actions/userAction";
import { connect } from "react-redux";
import logo from "./news-logo.svg";
import profile from "./profile.svg";
import bookmark from "./bookmark.svg";
import { Navbar, Nav, NavItem, NavbarBrand } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import Keys from "../config";

const SuNavbar = (props) => {
  const handleLogoutFailure = (err) => {
    console.error(err);
  };

  const handleLogoutSuccess = (res) => {
    console.log(res);
  };

  return (
    <Navbar className='bgColor' expand='md'>
      <NavbarBrand>
        <img src={logo} className='App-logo' alt='logo' />
        <Link to='/'>StayUpdated</Link>
      </NavbarBrand>
      <Nav className='mr-auto' className='positions'>
        {!props.user ? (
          <NavItem>
            <NavLink className='ml-3' to='/login'>
              Login
            </NavLink>
          </NavItem>
        ) : (
          <>
            <NavItem>
              <NavLink to='/bookmar/'>
                <img src={bookmark} className='App-logo' alt='logo' />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/profile/'>
                <img src={profile} className='App-logo' alt='logo' />
              </NavLink>
            </NavItem>
            <GoogleLogout
              clientId={Keys.Client_id}
              buttonText='Logout'
              onLogoutSuccess={handleLogoutSuccess}
              onFailure={handleLogoutFailure}
            />
          </>
        )}
        {/* <NavItem>
            <NavLink to='/home'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/profile'>Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/Login'>Login</NavLink>
          </NavItem> */}
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
