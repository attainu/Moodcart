import React, { Component } from "react";
// import ListNews from "./ListNews";
import { CardDeck } from "reactstrap";
import ListSearchedNews from "./ListSearchedNews";
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const SearchedNews = ({ news, mode = "search" }) => {
  console.log("data", news.value);
  if (news) {
    return (
      <CardDeck
        style={{
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {news.map((news) => (
          <ListSearchedNews key={news.name} snews={news} mode={mode} />
        ))}
      </CardDeck>
    );
  } else {
    return (
      <div className="sweet-loading">
        <PuffLoader
          css={override}
          size={150}
          color={"#0F5BDF"}
          loading={true}
        />
      </div>
    );
  }
};
export default SearchedNews;
