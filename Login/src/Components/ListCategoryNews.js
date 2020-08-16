import React, { Component } from "react";

const ListCategoryNews = ({ snews, mode }) => {
  return (
    <div>
      <h6 style={{ color: "white" }}>{snews.name}</h6>
    </div>
  );
};

export default ListCategoryNews;
