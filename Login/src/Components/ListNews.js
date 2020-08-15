import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

// const limitDescription = (description, letterCount) => {
//   return description.length <= letterCount
//     ? description
//     : `${description.slice(0, letterCount)}...`;
// };

const ListNews = ({ snews, flippy, mode }) => {
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
          width: "400px",
          height: "500px",
          margin: "20px",
          transition: "2s",
          paddingRight: "10px",
          overflow: "hidden",
          position: "inherit",
        }}>
        <FrontSide
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
              width: "390px",
              height: "200px",
              background: "#4481eb",
              color: "white",
            }}
          />
          <div style={{ margin: "5px" }}>
            <h4>
              <span style={{ fontWeight: "bold" }}>Title: </span>
              {snews.title}
            </h4>
            <p>
              <span style={{ fontWeight: "bold" }}>Description: </span>
              {snews.description}
            </p>
          </div>
        </FrontSide>
        <BackSide style={{ color: "white", background: "#4481eb" }}>
          <p>{snews.summarization}</p>
        </BackSide>
      </Flippy>
    );
  } else {
    return <h1>Hello</h1>;
  }
};

export default ListNews;
