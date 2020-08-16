import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./ListNews.css";

const limitDescription = (text, letterCount) => {
  return text.length <= letterCount ? text : `${text.slice(0, letterCount)}...`;
};

const ListNews = ({ snews, flippy, mode }) => {
  // const text = snews.description;

  if (snews !== undefined) {
    return (
      <Flippy
        flipOnHover={false}
        flipOnClick={true}
        mode={mode}
        flipDirection='horizontal'
        ref={(r) => (flippy = r)}
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
        }}>
        <FrontSide
          className='frontFlip'
          style={{
            background: "#4481eb",
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
            <h4>{snews.title}...</h4>
            <p>{snews.description}</p>
          </div>
        </FrontSide>
        <BackSide
          className='backFlip'
          style={{
            color: "white",
            background: "#4481eb",
          }}>
          <p>{snews.summarization}</p>
        </BackSide>
      </Flippy>
    );
  } else {
    return <h1>Hello</h1>;
  }
};

export default ListNews;
