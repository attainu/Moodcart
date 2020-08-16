import React, { Component } from "react";
import { CardDeck } from "reactstrap";
import ListCategoryNews from "./ListCategoryNews";
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";
import "./CategoryNews.css";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const CategoryNews = ({ news, mode = "category" }) => {
  console.log("data", news.value);
  if (news) {
    return (
      <CardDeck className="cardDeck">
        {news.value.map((news) => (
          <ListCategoryNews key={news.name} snews={news} mode={mode} />
        ))}
      </CardDeck>
    );
  } else {
    return (
      <div className="sweet-loading">
        <PuffLoader
          css={override}
          size={150}
          color={"#123abc"}
          loading={true}
        />
      </div>
    );
  }
};
export default CategoryNews;
