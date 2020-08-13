import React from "react";
// import { Component } from "react";
import { connect } from "react-redux";
import { setUser } from "../../../Redux/actions/userAction";
import Keys from "../../../config";
import { GoogleLogin } from "react-google-login";
import { Redirect } from "react-router-dom";

const SignIn = ({ user, setUser }) => {
  const responseGoogle = (response) => {
    if (response.error) {
      console.error(response.error);
    }
    setUser({ ...response.profileObj, ...response.tokenObj });
  };
  if (user) return <Redirect to='/' />;
  return (
    <form className='sign-in-form'>
      <h2 className='title'>Sign in </h2>
      <div className='input-field'>
        <i className='fas fa-user'></i>
        <input type='text' placeholder='Username' />
      </div>

      <div className='input-field'>
        <i className='fas fa-lock'></i>
        <input type='password' placeholder='Password' />
      </div>

      <input type='submit' value='Login' className='btn solid' />
      <p className='social-text'>Or Sign in with social platform</p>

      <div className='social-media'>
        <a href='#' className='social-icon'>
          <i className='fab fa-facebook-f'></i>
        </a>
        <a href='#' className='social-icon'>
          <i className='fab fa-twitter'></i>
        </a>
        <GoogleLogin
          style={{ border: "none" }}
          clientId={Keys.Client_id}
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}>
              <a href='#' className='social-icon'>
                <i className='fab fa-google'></i>
              </a>
            </button>
          )}
          buttonText='Login'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        ,
        {/* <GoogleLogin
          clientId={}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}></GoogleLogin> */}
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

export default connect(mapStateToProps, { setUser })(SignIn);
