import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNewsByCountry } from "../Redux/actions/newsAction";
import SearchedNews from "../Components/searchedNews";
import Navbar from "../Components/Navbar";
import Search from "../Components/Search";
import PuffLoader from "react-spinners/PuffLoader";
import { css } from "@emotion/core";
import "../App.css";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class countryPage extends Component {
  componentDidMount() {
    const country = this.props.match.params.country;
    console.log("I am getting mounted");
    this.props.fetchNewsByCountry(country);
  }

  componentDidUpdate(prevProps) {
    const prevCountry = prevProps.match.params.country;
    const newCountry = this.props.match.params.country;
    if (prevCountry !== newCountry) {
      this.props.fetchNewsByCountry(newCountry);
    }
  }
  render() {
    if (!this.props.news) {
      return (
        <>
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
        </>
      );
    } else {
      return (
        <>
          <Navbar />
          <Search />
          <SearchedNews news={this.props.news} mode='contry' />{" "}
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

export default connect(mapStateToProps, { fetchNewsByCountry })(countryPage);
