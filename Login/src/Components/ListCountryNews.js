import React, { Component } from "react";
import { News } from "./news.jpg";
import "./ListCategoryNews.css";

const ListCategoryNews = ({ snews, mode }) => {
  console.log(snews);
  return (
    <div className='categoryCard'>
      <img className='imgBox' src={snews.image} alt='newsPhoto' />
      <h3>{snews.title}</h3>
    </div>
  );
};

export default ListCategoryNews;
