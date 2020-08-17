import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class category extends Component {
  state = {
    category: "",
  };

  handleChange = (event) => {
    this.setState({ category: event.target.value });
    console.log(event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("hi there");
    const { history } = this.props;
    history.push(`/category/${this.state.category}`);
  };

  render() {
    return (
      <form
        className='buttonGroup'
        onSubmit={this.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "row",
          marginRight: "25px",
          marginBottom: "5px",
        }}
        size='lg'>
        <button
          size='lg'
          value='Entertainment'
          type='submit'
          onClick={this.handleChange}>
          Entertainment
        </button>
        <button
          size='lg'
          value='ScienceAndTechnology'
          type='submit'
          onClick={this.handleChange}>
          ScienceAndTech
        </button>
        <button
          size='lg'
          value='Politics'
          type='submit'
          onClick={this.handleChange}>
          Politics
        </button>
        <button
          size='lg'
          value='Sports'
          type='submit'
          onClick={this.handleChange}>
          Sports
        </button>
        <button
          size='lg'
          value='LifeStyle'
          type='submit'
          onClick={this.handleChange}>
          LifeStyle
        </button>
        <button
          size='lg'
          value='Business'
          type='submit'
          onClick={this.handleChange}>
          Business
        </button>
      </form>
    );
  }
}

export default withRouter(category);
