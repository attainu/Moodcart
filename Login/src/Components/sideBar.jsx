import React, { Component } from "react";
import Select from "react-select";

const options = [
  { label: "Albania", value: 355 },
  { label: "Argentina", value: 54 },
  { label: "Austria", value: 43 },
  { label: "Cocos Islands", value: 61 },
  { label: "Kuwait", value: 965 },
  { label: "Sweden", value: 46 },
  { label: "Venezuela", value: 58 },
];

const Styele = {
  width: "300px",
};

class Conutry extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        styles={{ Styele }}
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}
export default Conutry;
