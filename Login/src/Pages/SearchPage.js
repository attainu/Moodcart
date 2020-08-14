import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSearchedNews } from "../Redux/actions/newsAction";
import News from "../Components/news";

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
    return this.props.news ? (
      <News News={this.props.news} mode='search' />
    ) : (
      <h1>Loading</h1>
    );
  }
}
const mapStateToProps = (storeState) => {
  return {
    news: storeState.newsState.news,
  };
};

export default connect(mapStateToProps, { fetchSearchedNews })(SearchPage);
