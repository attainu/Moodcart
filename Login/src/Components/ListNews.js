import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./ListNews.css";

const limitDescription = (text, letterCount) => {
  return text.length <= letterCount ? text : `${text.slice(0, letterCount)}...`;
};

const ListNews = ({ snews, flippy, mode }) => {
  if (snews !== undefined) {
    return (
      <Flippy
        mode={mode}
        className="flips"
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
      >
        <FrontSide
          className="frontFlip"
          style={{
            background: "#4481eb",
            color: "white",
            position: "relative",
            padding: "0px",
          }}
        >
          <div className="newsImageDiv">
            <img className="newsImage" src={snews.image} alt="img" />
          </div>
          <div style={{ margin: "5px" }}>
            <h3>{snews.title}</h3>

            <p>
              {snews.description !== null
                ? snews.description.slice(0, 130)
                : ""}
              ...
            </p>
            <button
              flipOnClick={true}
              flipDirection="horizontal"
              ref={(r) => (flippy = r)}
            >
              Read more
            </button>
          </div>
        </FrontSide>
        <BackSide
          className="backFlip"
          style={{
            color: "white",
            background: "#4481eb",
          }}
        >
          <p>{snews.summarization}</p>
        </BackSide>
      </Flippy>
    );
  } else {
    return <h1>Hello</h1>;
  }
};

export default ListNews;
