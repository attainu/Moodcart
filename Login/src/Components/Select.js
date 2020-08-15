import React from "react";
import Select from "react-select";
import "./select.css";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "3", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

class SelectCountry extends React.Component {
  state = {
    selectedOption: null,
    country: "",
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption.value);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        styles={{ borderRadius: "20%" }}
        className='style'
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}
export default SelectCountry;
