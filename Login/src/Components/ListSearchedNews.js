import React, { Component } from "react";
import "./ListSearchNews.css";
import News from "./news.jpg";

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
        <div className="searchImgDiv">
          <div className="searchImgDiv2">
            <img
              className="imgBoxes"
              src={
                snews.hasOwnProperty("image") ? snews.image.contentUrl : News
              }
              alt="newsPhoto"
            />
          </div>
        </div>
        <div className="searchDetails">
          <h2 className="searchData" style={{ color: "red" }}>
            {snews.name}
          </h2>

          <h3 className="searchData" style={{ color: "blue" }}>
            {snews.description}
          </h3>
        </div>
      </div>
    );
  }
};

export default ListSearchedNews;
