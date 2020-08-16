import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategoryWiseNews } from "../Redux/actions/newsAction";
import SearchedNews from "../Components/CategoryNews";
import Navbar from "../Components/Navbar";
import Search from "../Components/Search";
import PuffLoader from "react-spinners/PuffLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class CategoryPage extends Component {
  componentDidMount() {
    const category = this.props.match.params.category;
    console.log("I am getting mounted");
    this.props.fetchCategoryWiseNews(category);
  }

  componentDidUpdate(prevProps) {
    const prevCategory = prevProps.match.params.category;
    const newCategory = this.props.match.params.category;
    if (prevCategory !== newCategory) {
      this.props.fetchCategoryWiseNews(newCategory);
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

export default connect(mapStateToProps, { fetchCategoryWiseNews })(
  CategoryPage
);
