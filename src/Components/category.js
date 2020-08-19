import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../App.css";

class category extends Component {
  state = {
    category: "",
  };

  handleChange = (event) => {
    this.setState({ category: event.target.value });
    console.log(event.target.value);
  };

  handleSubmit = (event) => {
    // event.preventDefault();
    console.log("hi there");
    const { history } = this.props;
    history.push(`/category/${this.state.category}`);
  };

  render() {
    return (
      <form
        className="buttonGroup"
        onSubmit={this.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "row",
          marginRight: "25px",
        }}
        size="lg"
      >
        <button
          style={{ background: "none" }}
          size="lg"
          value="Entertainment"
          type="submit"
          onClick={this.handleChange}
        >
          Entertainment
        </button>
        <button
          style={{ background: "none" }}
          size="lg"
          value="ScienceAndTechnology"
          type="submit"
          onClick={this.handleChange}
        >
          Sci-Tech
        </button>
        <button
          style={{ background: "none" }}
          size="lg"
          value="Politics"
          type="submit"
          onClick={this.handleChange}
        >
          Politics
        </button>
        <button
          style={{ background: "none" }}
          size="lg"
          value="Sports"
          type="submit"
          onClick={this.handleChange}
        >
          Sports
        </button>
        <button
          style={{ background: "none" }}
          size="lg"
          value="LifeStyle"
          type="submit"
          onClick={this.handleChange}
        >
          LifeStyle
        </button>
        <button
          style={{ background: "none" }}
          size="lg"
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
