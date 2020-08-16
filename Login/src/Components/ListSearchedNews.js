import React, { Component } from "react";
import "./ListSearchNews.css";

const ListSearchedNews = ({ snews, mode }) => {
  if (snews == undefined) {
    return (
      <>
        <h1>im here</h1>;
      </>
    );
  } else {
    console.log(snews);
    return (
      <div className="searchCard">
        {/* <img className="imgBox" src={snews.image.contentUrl} alt="newsPhoto" /> */}
        <h3>{snews.name}</h3>
      </div>
    );
  }
};

export default ListSearchedNews;
