import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = { country: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ country: event.target.value });
    console.log(event.target.value);
  };

  handleSubmit = (event) => {
    console.log("hii");
    event.preventDefault();
    this.props.history.push(`/country/${this.state.country}`);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value='au'>Australia</option>
            <option value='in'>India</option>
            <option value='us'>America</option>
            <option value='jp'>Japan</option>
            <option value='it'>Itely</option>
          </select>
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default withRouter(Select);
