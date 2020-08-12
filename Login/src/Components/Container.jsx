import React, { Component } from "react";
import FormContainer from "./FormContainer";
import PanelsContainer from "./Panels/PanelsContainer";

export class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
    };
  }
  handleClick = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <div
        className={this.state.toggle ? "container sign-up-mode" : "container"}
      >
        <FormContainer />
        <PanelsContainer onClick={this.handleClick} />
      </div>
    );
  }
}

export default Container;
