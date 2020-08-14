import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Search extends Component {
  state = {
    searchQuery: "",
  };

  handleChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSubmit = (event) => {
    console.log("Hi there");
    event.preventDefault();
    this.props.history.push(`/search/${this.state.searchQuery}`);
  };

  render() {
    return (
      <form
        className='input-group mb-3'
        onSubmit={this.handleSubmit}
        style={{
          margin: "10px auto",
          width: "60%",
          display: "flex",
          flexDirection: "row",
        }}>
        <input
          type='text'
          className='form-control '
          placeholder='search topics'
          // aria-describedby='button-addon2'
          name='searchQuery'
          onChange={this.handleChange}
          value={this.state.searchQuery}
          style={{
            width: "300px",
            height: "50px",
            borderWidth: "5px",
            borderColor: "#5995FD",
            borderRadius: "25px",
          }}
        />
        <div className='input-group-append'>
          <input
            className='btn btn-outline-secondary'
            type='submit'
            id='button-addon2'
            value='Search'
          />
        </div>
      </form>
    );
  }
}

export default withRouter(Search);

{
  /* 
} */
}

{
  /* */
}
