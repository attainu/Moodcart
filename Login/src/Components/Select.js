import React, { Component } from "react";

class Select extends Component {
  state = {
    country: "",
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(event.target.value);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { history } = this.props;
    history.push(`/category/${this.state.category}`);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select>
          <option value='au' onClick={this.handleChange}>
            Austrelia
          </option>
          <option value='in' onClick={this.handleChange}>
            India
          </option>
          <option value='us' onClick={this.handleChange}>
            America
          </option>
          <option value='jp' onClick={this.handleChange}>
            Japan
          </option>
        </select>
      </form>
    );
  }
}

export default Select;
