import React from "react";

const Rightpanel = ({ props }) => {
  return (
    <div className="panel right-panel">
      <div className="content">
        <h3>Welcome Back!</h3>
        <p>
          Trending Topics, Your Favourites Category wise news and Latest Updates
          Are waiting for you Click here to.
        </p>
        <button
          onClick={props.onClick}
          className="btn transparent"
          id="sign-in-btn"
        >
          Sing In
        </button>
      </div>
      <img className="image" src={require("./desk.svg")} alt="" />
    </div>
  );
};

export default Rightpanel;
