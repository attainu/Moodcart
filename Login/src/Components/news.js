import React, { Component } from "react";
import ListNews from "./ListNews";
import { CardDeck } from "reactstrap";
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const News = ({ news, mode = "trending", ...restprops }) => {
  if (news) {
    return (
      <CardDeck
        style={{ marginLeft: "60px", display: "flex", flexWrap: "wrap" }}>
        {news.map((snews) => (
          <ListNews key={snews.id} snews={snews} mode={mode} />
        ))}
      </CardDeck>
    );
  } else {
    return (
      <div className='sweet-loading'>
        <PuffLoader
          css={override}
          size={150}
          color={"#123abc"}
          loading={true}
        />
      </div>
    );
    // return <h1 style={{ textAlign: "center" }}>Loading</h1>;
  }
};

export default News;
