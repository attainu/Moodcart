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
      <div className='searchCard'>
        <img
          className='imgBox'
          src={snews.hasOwnProperty("image") ? snews.image.contentUrl : News}
          alt='newsPhoto'
        />
        <h3>{snews.name}</h3>
      </div>
    );
  }
};

export default ListSearchedNews;
