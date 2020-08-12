import React from "react";
import { Component } from "react";

class SignUp extends Component {
  render() {
    return (
      <form action="" className="sign-up-form">
        <h2 className="title">Sign Up</h2>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-field">
          <i className="fas fa-envelope"></i>
          <input type="text" placeholder="Email" />
        </div>
        <div className="input-field">
          <i className="fas fa-envelope"></i>
          <input type="password" placeholder="Password" />
        </div>
        <input type="submit" value="Register" className="btn solid" />
        <p className="social-text">Or Sign up with social platform</p>

        <div className="social-media">
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>

          <a href="#" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>

          <a href="#" className="social-icon">
            <i className="fab fa-google"></i>
          </a>

          <a href="#" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </form>
    );
  }
}

export default SignUp;
