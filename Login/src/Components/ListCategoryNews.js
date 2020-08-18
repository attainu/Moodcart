import React, { Component } from "react";
import { News } from "./news.jpg";
import "./ListCategoryNews.css";

const ListCategoryNews = ({ snews, mode }) => {
  // console.log(snews);
  return (
    <div className="categoryCard">
      <img
        className="imgBox"
        src={
          snews.hasOwnProperty("image")
            ? snews.image.thumbnail.contentUrl
            : News
        }
        alt="newsPhoto"
      />
      <h3>{snews.name}</h3>
    </div>
  );
};

export default ListCategoryNews;
