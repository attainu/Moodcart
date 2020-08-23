import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Css/responsiveCat.css";

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
      <form className="responsiveCat" onSubmit={this.handleSubmit} size="lg">
        <button
          size="lg"
          className="cate"
          value="Entertainment"
          type="submit"
          onClick={this.handleChange}
        >
          Entertainment
        </button>
        <button
          size="lg"
          className="cate"
          value="ScienceAndTechnology"
          type="submit"
          onClick={this.handleChange}
        >
          Sci-Tech
        </button>
        <button
          size="lg"
          className="cate"
          value="Politics"
          type="submit"
          onClick={this.handleChange}
        >
          Politics
        </button>
        <button
          size="lg"
          className="cate"
          value="Sports"
          type="submit"
          onClick={this.handleChange}
        >
          Sports
        </button>
        <button
          size="lg"
          className="cate"
          value="LifeStyle"
          type="submit"
          onClick={this.handleChange}
        >
          LifeStyle
        </button>
        <button
          size="lg"
          className="cate"
          value="Business"
          type="submit"
          onClick={this.handleChange}
        >
          Business
        </button>
      </form>
    );
  }
}

export default withRouter(category);
