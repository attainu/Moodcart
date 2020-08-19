import React from "react";
import { News } from "./news.jpg";
import "./ListCategoryNews.css";

const ListCategoryNews = ({ snews, mode }) => {
  return (
    <div className="categoryCard">
      <div className=" categoryImgDiv">
        <div className="categoryImgDiv2">
          <img
            className="imgBoxes"
            src={
              snews.hasOwnProperty("image")
                ? snews.image.thumbnail.contentUrl
                : News
            }
            alt="newsPhoto"
          />
        </div>
      </div>
      <div className="categoryDetails">
        <h5
          className="categoryDate"
          style={{ marginTop: "10px", text: "muted" }}
        >
          {snews.datePublished.slice(0, 10)}
        </h5>
        <h2 className="categoryTitle">{snews.name}</h2>
        <h3 className="categoryDesc">{snews.description}</h3>
      </div>
    </div>
  );
};

export default ListCategoryNews;
