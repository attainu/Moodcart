import React, { Component } from "react";
import "./Css/ListSearchNews.css";
import News from "./news.jpg";

const ListSearchedNews = ({ snews, mode }) => {
  if (snews == undefined) {
    return (
      <>
        <h1>Helo world</h1>;
      </>
    );
  } else {
    console.log(snews);
    return (
      <div className='searchCard'>
        <div className='searchImgDiv'>
          <div className='searchImgDiv2'>
            <img
              className='imgBox'
              src={
                snews.hasOwnProperty("image") ? snews.image.contentUrl : News
              }
              alt='newsPhoto'
            />
          </div>
        </div>
        <div className='searchDetails'>
          <h5
            className='searchDate'
            style={{ marginTop: "10px", text: "muted" }}>
            {!snews.datePublished ? "" : snews.datePublished.slice(0, 10)}
          </h5>
          <h2 className='searchTitle'>{snews.name}</h2>

          <h3 className='searchDesc'>{snews.description}</h3>
        </div>
      </div>
    );
  }
};

export default ListSearchedNews;
