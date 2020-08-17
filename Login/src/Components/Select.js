import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Select extends Component {
  state = {
    country: "",
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    console.log(event.target.value);
  };

  handleSubmit = (event) => {
    console.log("hii");
    event.preventDefault();
    this.props.history.push(`/country/${this.state.country}`);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} value={this.state.country}>
        <label>
          <select onChange={this.handleChange}>
            <option value='au' type='submit'>
              Austrelia
            </option>
            <option value='in' type='submit'>
              India
            </option>
            <option value='us' type='submit'>
              America
            </option>
            <option value='jp' type='submit'>
              Japan
            </option>
          </select>
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default withRouter(Select);
