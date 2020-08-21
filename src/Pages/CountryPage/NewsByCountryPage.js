import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNewsByCountry } from "../../Redux/actions/newsAction";
import CountryNews from "../../Components/CountryNews.jsx";
import Navbar from "../../Components/Navbar.jsx";
import Search from "../../Components/Search.jsx";
import PuffLoader from "react-spinners/PuffLoader";
import { css } from "@emotion/core";
import Select from "../../Components/Select.jsx";
import "../../App.css";
import Footer from "../../Components/Footer";

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
    if (!this.props.countryNews) {
      return (
        <>
          <Navbar />
          <div className="selectSearch">
            <Select />
            <Search />
          </div>
          <div className="sweet-loading">
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
          <div className="selectSearch">
            <Select />
            <Search />
          </div>
          <CountryNews countryNews={this.props.countryNews} mode="country" />{" "}
        </>
      );
    }
  }
}
const mapStateToProps = (storeState) => {
  console.log(storeState.countryNewsState.countryNews);
  return {
    countryNews: storeState.countryNewsState.countryNews,
  };
};

export default connect(mapStateToProps, { fetchNewsByCountry })(countryPage);
