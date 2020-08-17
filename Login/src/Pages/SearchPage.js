import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSearchedNews } from "../Redux/actions/newsAction";
import SearchedNews from "../Components/searchedNews";
import Navbar from "../Components/Navbar";
import { Redirect } from "react-router-dom";
import Search from "../Components/Search";
import PuffLoader from "react-spinners/PuffLoader";
import { css } from "@emotion/core";
import "../App.css";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class SearchPage extends Component {
  componentDidMount() {
    const searchQuery = this.props.match.params.searchQuery;
    console.log("I am getting mounted");
    this.props.fetchSearchedNews(searchQuery);
  }

  componentDidUpdate(prevProps) {
    const prevSearchQuery = prevProps.match.params.searchQuery;
    const newSearchQuery = this.props.match.params.searchQuery;
    if (prevSearchQuery !== newSearchQuery) {
      this.props.fetchSearchedNews(newSearchQuery);
    }
  }
  render() {
    // if (!this.props.user) return <Redirect to='/login' />;
    if (!this.props.news) {
      return (
        <div className='searchPage'>
          <Navbar />
          <Search />
          <div className='sweet-loading'>
            <PuffLoader
              css={override}
              size={150}
              color={"#123abc"}
              loading={true}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className='searchPage'>
          <Navbar />
          <Search />
          <SearchedNews news={this.props.news} mode='search' />{" "}
        </div>
      );
    }
  }
}
const mapStateToProps = (storeState) => {
  console.log(storeState.newsState.news);
  return {
    news: storeState.newsState.news,
  };
};

export default connect(mapStateToProps, { fetchSearchedNews })(SearchPage);
