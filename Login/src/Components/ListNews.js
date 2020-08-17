import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./ListNews.css";

const limitDescription = (text, letterCount) => {
  return text.length <= letterCount ? text : `${text.slice(0, letterCount)}...`;
};

const ListNews = ({ snews, flippy, mode, children, ...restprops }) => {
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
          // border: "0.01px solid white",
        }}
        flipOnClick={true} // default false
        flipDirection='horizontal' // horizontal or vertical
        ref={(r) => (flippy = r)}>
        <FrontSide
          className='frontFlip'
          style={{
            background: "#4481eb",
            // background: "red",
            color: "white",
            position: "relative",
            padding: "0px",
          }}>
          <img
            src={snews.image}
            alt='img'
            style={{
              width: "100%",
              height: "220px",
              background: "#4481eb",
              color: "white",
            }}
          />
          <div style={{ margin: "5px" }}>
            <h3>{snews.title}</h3>
            <p>{snews.description.slice(0, 125)}...</p>
          </div>
        </FrontSide>
        <BackSide
          className='backFlip'
          style={{
            color: "white",
            background: "#4481eb",
          }}>
          <p>{snews.summarization}</p>
          <span
            style={{
              fontSize: "12px",
              position: "absolute",
              bottom: "10px",
              width: "100%",
            }}
            isF>
            {restprops.children}
            <br />
            (BACK SIDE)
          </span>
        </BackSide>
      </Flippy>
    );
  } else {
    return <h1>Hello</h1>;
  }
};

export default ListNews;
