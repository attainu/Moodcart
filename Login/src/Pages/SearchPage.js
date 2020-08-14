import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSearchedNews } from "../Redux/actions/newsAction";
import SearchedNews from "../Components/searchedNews";
import Navbar from "../Components/Navbar";
import Search from "../Components/Search";

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
    if (this.props.news) {
      return (
        <>
          <Navbar />
          <Search />
          <SearchedNews News={this.props.news} mode='search' />{" "}
        </>
      );
    } else {
      return (
        <>
          <Navbar />
          <Search />
          <h1>Loading</h1>;
        </>
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
