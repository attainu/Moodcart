import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <div className="content">
        <h3>New Here ? </h3>
        <p>
          Get Trending News First Please Sign Up and Connect With Us. In the Era
          Of Knowledge You need to Update Everytime.
        </p>
        <button
          onClick={this.props.props.onClick}
          className="btn transparent"
          id="sign-up-btn"
        >
          Sing Up
        </button>
      </div>
    );
  }
}

export default Content;
