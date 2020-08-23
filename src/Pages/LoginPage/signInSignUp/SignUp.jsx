import React, { useState } from "react";
// import { Component } from "react";
import { connect } from "react-redux";
import { setUser } from "../../../Redux/actions/userAction";
import { Redirect } from "react-router-dom";
import * as firebase from "firebase";
import { auth } from "../../../FirebaseConfig";

const SignUp = ({ user, setUser }) => {
  // setUser({ ...response.profileObj, ...response.tokenObj });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

  const OnSignUp = () => {
    console.log(email, password);
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        console.log("error");
      });
    setUser(...email, ...password);
  };

  document.addEventListener("DOMContentLoaded", (event) => {
    const app = firebase.app();
    console.log(app);
  });

  const GoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user01 = result.user;
        console.log(user01);
        setUser({ user01 });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const FacebookLogin = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user01 = result.user;
        console.log(user01);
        setUser({ user01 });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (user) return <Redirect to='/' />;

  return (
    <form action='' className='sign-up-form'>
      <h2 className='title'>Sign Up</h2>
      <div className='input-field'>
        <i className='fas fa-envelope'></i>
        <input
          type='text'
          placeholder='Email'
          onChange={onEmailChange}
          autoComplete='on'
        />
      </div>
      <div className='input-field'>
        <i className='fas fa-envelope'></i>
        <input
          type='password'
          placeholder='Password'
          onChange={onPasswordChange}
          autoComplete='on'
        />
      </div>
      <input
        type='submit'
        value='Register'
        className='btn solid'
        onClick={OnSignUp}
      />
      <p className='social-text'>Or Sign up with social platform</p>
      <div className='social-media'>
        <a href='#' className='social-icon'>
          <i className='fab fa-facebook-f' onClick={FacebookLogin}></i>
        </a>
        <a href='#' className='social-icon'>
          <i className='fab fa-google' onClick={GoogleLogin}></i>
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
