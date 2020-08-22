import React, { Component } from "react";
import ListNews from "./ListNews";
import ListSearchedNews from "./ListSearchedNews";
import { CardDeck } from "reactstrap";
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export const News = ({ news, mode = "trending", ...restprops }) => {
  if (news != undefined) {
    console.log(news);
    return (
      <CardDeck
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {news.map((snews) => (
          <ListNews key={snews.id} snews={snews} mode={mode} />
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

export const SearchedNews = ({ news, mode = "search", ...restprops }) => {
  console.log(news);
  if (news) {
    return (
      <CardDeck
        style={{ marginLeft: "60px", display: "flex", flexWrap: "wrap" }}
      >
        {news.map((snews) => (
          <ListSearchedNews key={snews.id} snews={snews} mode={mode} />
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
