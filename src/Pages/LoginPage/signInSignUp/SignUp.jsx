import React from "react";
// import { Component } from "react";
import Keys from "../../../config";
import { connect } from "react-redux";
import { setUser } from "../../../Redux/actions/userAction";
import { GoogleLogin } from "react-google-login";
import { Redirect } from "react-router-dom";

const SignUp = ({ user, setUser }) => {
  const responseGoogle = (response) => {
    if (response.error) {
      console.error(response.error);
    }
    setUser({ ...response.profileObj, ...response.tokenObj });
  };
  if (user) return <Redirect to='/' />;

  return (
    <form action='' className='sign-up-form'>
      <h2 className='title'>Sign Up</h2>
      <div className='input-field'>
        <i className='fas fa-user'></i>
        <input type='text' placeholder='Username' />
      </div>
      <div className='input-field'>
        <i className='fas fa-envelope'></i>
        <input type='text' placeholder='Email' />
      </div>
      <div className='input-field'>
        <i className='fas fa-envelope'></i>
        <input type='password' placeholder='Password' />
      </div>
      <input type='submit' value='Register' className='btn solid' />
      <p className='social-text'>Or Sign up with social platform</p>

      <div className='social-media'>
        <a href='#' className='social-icon'>
          <i className='fab fa-facebook-f'></i>
        </a>

        <a href='#' className='social-icon'>
          <i className='fab fa-twitter'></i>
        </a>
        <GoogleLogin
          clientId={Keys.Client_id}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}>
          <a href='#' className='social-icon'>
            <i className='fab fa-google'></i>
          </a>
        </GoogleLogin>
        <a href='#' className='social-icon'>
          <i className='fab fa-linkedin-in'></i>
        </a>
      </div>
    </form>
  );
};

const mapStateToProps = (storeState) => {
  return {
    user: storeState.userState.user,
  };
};

export default connect(mapStateToProps, { setUser })(SignUp);
