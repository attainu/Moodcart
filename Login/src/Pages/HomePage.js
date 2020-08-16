import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchTrendingNews } from "../Redux/actions/newsAction";
import { News } from "../Components/news";
import Navbar from "../Components/Navbar";
import Search from "../Components/Search";
import "./home.css";
import Category from "../Components/category";

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchTrendingNews();
  }
  render() {
    if (!this.props.user) return <Redirect to="/login" />;
    return !this.props.user ? (
      <Redirect to="/login" />
    ) : (
      <>
        <Navbar />
        <Search />
        <News news={this.props.news} />
      </>
      // <h1>Hello</h1>
    );
  }
}

const mapStateToProps = (storeState) => {
  // console.log(storeState.newsState.news);
  return {
    user: storeState.userState.user,
    news: storeState.newsState.news,
  };
};

export default connect(mapStateToProps, { fetchTrendingNews })(HomePage);
