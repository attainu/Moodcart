import React, { Component } from "react";
import { CardDeck } from "reactstrap";
import ListCategoryNews from "./ListCategoryNews";
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";
import "./CategoryNews.css";
import Footer from "./Footer";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const CategoryNews = ({ categoryNews, mode = "category" }) => {
  console.log(categoryNews.value);
  if (categoryNews) {
    return (
      <>
        <CardDeck className="cardDeck">
          {categoryNews.value.map((categoryNews) => (
            <ListCategoryNews
              key={categoryNews.name}
              snews={categoryNews}
              mode={mode}
            />
          ))}
        </CardDeck>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <div className="sweet-loading">
          <PuffLoader
            css={override}
            size={150}
            color={"#123abc"}
            loading={true}
          />
        </div>
        <Footer />
      </>
    );
  }
};
export default CategoryNews;
