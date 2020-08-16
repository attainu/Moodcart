import React, { Component } from "react";

const ListCategoryNews = ({ snews, mode }) => {
  return (
    <div>
      <h1 style={{ color: "white" }}>{snews.name}</h1>
    </div>
  );
};

export default ListCategoryNews;
