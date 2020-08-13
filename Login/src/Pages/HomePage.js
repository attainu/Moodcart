import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchTrendingNews } from "../Redux/actions/newsAction";
import News from "../Components/news";
import Navbar from "../Components/Navbar";
import "./home.css";

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchTrendingNews();
  }
  render() {
    if (!this.props.user) return <Redirect to='/login' />;
    return !this.props.user ? (
      <Redirect to='/login' />
    ) : (
      <>
        <Navbar />
        <News news={this.props.news} />
      </>
      // <h1>Hello</h1>
    );
  }
}

const mapStateToProps = (storeState) => {
  console.log(storeState.newsState.news);
  return {
    user: storeState.userState.user,
    news: storeState.newsState.news,
  };
};

export default connect(mapStateToProps, { fetchTrendingNews })(HomePage);
