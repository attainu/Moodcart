import React, { Component } from "react";
import { CardDeck } from "reactstrap";
import ListCountryNews from "./ListCountryNews";
import ListNews from "./ListNews";
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";
import Footer from "./Footer";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const SearchedNews = ({ countryNews, mode = "country" }) => {
  console.log(countryNews);
  if (countryNews) {
    return (
      <>
        <CardDeck
          style={{
            justifyContent: "center",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {countryNews.map((countryNews) => (
            <ListNews key={countryNews.id} snews={countryNews} mode={mode} />
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
            color={"#0F5BDF"}
            loading={true}
          />
        </div>
        <Footer />
      </>
    );
  }
};
export default SearchedNews;
