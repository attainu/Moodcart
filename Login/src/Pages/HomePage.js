import React, { Component } from "react";
import { connect } from "react-redux";

export class HomePage extends Component {
  render() {
    return <div>HomePage</div>;
  }
}

const mapStateToProps = (storeState) => {
  return {
    user: storeState.userState.user,
  };
};

export default connect(mapStateToProps)(HomePage);
