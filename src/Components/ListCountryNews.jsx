import React, { Component } from "react";
import { News } from "./news.jpg";
import "./Css/ListCountryNews.css";

const ListCountryNews = ({ snews, mode }) => {
  console.log(snews);
  return (
    <div className='categoryCard'>
      <img className='imgBox' src={snews.image} alt='newsPhoto' />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3>{snews.title}</h3>
        <p>{snews.description}</p>
      </div>
    </div>
  );
};

export default ListCountryNews;
