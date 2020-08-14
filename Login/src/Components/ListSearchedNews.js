import React, { Component } from "react";

const ListSearchedNews = ({ snews, mode }) => {
  if (snews !== undefined) {
    return (
      <>
        <div class='card mb-3' style='max-width: 540px;' mode={mode}>
          <div class='row no-gutters'>
            <div class='col-md-4'>
              <img src='...' class={snews.image.contentUrl} alt='...' />
            </div>
            <div class='col-md-8'>
              <div class='card-body'>
                <h5 class='card-title'>Title: {snews.name}</h5>
                <p class='card-text'>Description: {snews.description}</p>
                <p class='card-text'>
                  <small class='text-muted'>
                    datePublished on : {snews.datePublished}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default ListSearchedNews;
