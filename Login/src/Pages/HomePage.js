import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../Components/Navbar";

export class HomePage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div>HomePage</div>;
      </>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    user: storeState.userState.user,
  };
};

export default connect(mapStateToProps)(HomePage);
