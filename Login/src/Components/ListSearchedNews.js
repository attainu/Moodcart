import React, { Component } from "react";
import "./ListSearchNews.css";
import News from "./news.jpg";

const ListSearchedNews = ({ snews, mode }) => {
  // console.log(snews.image.contentUrl);
  if (snews == undefined) {
    return (
      <>
        <h1>im here</h1>;
      </>
    );
  } else {
    return (
      <div
        className='card mb-3'
        style={{
          maxWidth: "540px",
          color: "white",
          backgroundColor: "#4481eb",
          marginTop: "5px",
          padding: "5px",
        }}
        mode={mode}>
        <div className='row no-gutters'>
          <div className='col-md-4'>
            <img
              src={
                snews.hasOwnProperty("image") ? snews.image.contentUrl : News
              }
              className='imgStyle'
              alt='...'
            />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h4 className='card-title'>Title: {snews.name}</h4>
              <p className='card-text'>Description: {snews.description}</p>
              <p className='card-text'>
                <small className='text-muted'>
                  Published on : {snews.datePublished}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ListSearchedNews;
