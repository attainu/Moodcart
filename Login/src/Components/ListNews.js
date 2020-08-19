import React from "react";
import Flippy, { FrontSide, BackSide } from "./FlipCard";
import { Link } from "react-router-dom";
import "./ListNews.css";

const ListNews = ({ snews, flippy, mode, children, ...restprops }) => {
  console.log(snews);
  if (snews !== undefined) {
    return (
      <Flippy
        mode={mode}
        className='flips'
        style={{
          textAlign: "left",
          width: "390px",
          height: "448px",
          margin: "20px",
          transition: "2s",
          overflow: "hidden",
          position: "inherit",
          borderRadius: "10px",
        }}
        ref={(r) => (restprops.flippyHorizontal = r)}
        flipOnClick={false}>
        <FrontSide
          className='frontFlip'
          style={{
            background: "#4481eb",
            color: "white",
            position: "relative",
            padding: "0px",
          }}>
          <div className='newsImageDiv'>
            <img className='newsImage' src={snews.image} alt='img' />
          </div>
          <div style={{ margin: "5px" }}>
            <h3>{!snews.title ? "" : snews.title.slice(0, 80)}...</h3>
            <p>
              {snews.description !== null
                ? snews.description.slice(0, 110)
                : ""}
              ...
            </p>
            <button
              type='button'
              onClick={() => restprops.flippyHorizontal.toggle()}>
              Read more
            </button>
          </div>
        </FrontSide>
        <BackSide
          className='backFlip'
          style={{
            color: "white",
            background: "#4481eb",
          }}>
          <p>
            {snews.summarization.length > 550
              ? snews.summarization.slice(0, 480)
              : snews.summarization}
          </p>
          <button
            type='button'
            onClick={() => restprops.flippyHorizontal.toggle()}>
            Go back
          </button>
        </BackSide>
      </Flippy>
    );
  } else {
    return <h1>Hello</h1>;
  }
};

export default ListNews;
