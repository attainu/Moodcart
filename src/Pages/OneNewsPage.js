import React, { Component } from "react";
import { connect } from "react-redux";

const OneNewsPage = () => {
  return <div style={{ color: "white" }}>{this.props.snews.title}</div>;
};

const mapStateToProps = (storeState) => {
  return {
    user: storeState.userState.user,
    news: storeState.newsState.news,
  };
};

export default connect(mapStateToProps)(OneNewsPage);
