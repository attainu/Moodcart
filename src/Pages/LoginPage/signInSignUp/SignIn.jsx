import React, { useState } from "react";
import { connect } from "react-redux";
import { setUser } from "../../../Redux/actions/userAction";
import { Redirect } from "react-router-dom";
import * as firebase from "firebase";
import { auth } from "../../../FirebaseConfig";

const SignIn = ({ user, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

  const onSignIn = () => {
    console.log(email, password);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(function (result) {
        console.log(result);
      })
      .catch(function (error) {
        console.log(error);
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
    <form className='sign-in-form'>
      <h2 className='title'>Sign in </h2>
      <div className='input-field'>
        <i className='fas fa-user'></i>
        <input type='text' placeholder='email' onChange={onEmailChange} />
      </div>

      <div className='input-field'>
        <i className='fas fa-lock'></i>
        <input
          type='password'
          placeholder='Password'
          onChange={onPasswordChange}
        />
      </div>

      <input
        type='submit'
        value='Login'
        className='btn solid'
        onClick={onSignIn}
      />
      <p className='social-text'>Or Sign in with social platform</p>

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

export default connect(mapStateToProps, { setUser })(SignIn);
