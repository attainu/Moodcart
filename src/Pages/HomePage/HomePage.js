import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchTrendingNews } from "../../Redux/actions/newsAction";
import { News } from "../../Components/news.jsx";
import Navbar from "../../Components/Navbar.jsx";
import Search from "../../Components/Search.jsx";
import Footer from "../../Components/Footer.jsx";
import Select from "../../Components/Select.jsx";

import "./home.css";

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
        <div className="selectSearch">
          <Select />
          <Search />
        </div>

        <News news={this.props.news} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    user: storeState.userState.user,
    news: storeState.newsState.news,
  };
};

export default connect(mapStateToProps, { fetchTrendingNews })(HomePage);
