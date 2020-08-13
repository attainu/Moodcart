import React, { Component } from "react";
import ListNews from "./ListNews";
import { CardDeck } from "reactstrap";
import { Spinner } from "reactstrap";

class News extends Component {
  render() {
    if (this.props.news) {
      return (
        <CardDeck
          style={{ marginLeft: "60px", display: "flex", flexWrap: "wrap" }}>
          {this.props.news.map((snews) => (
            <ListNews key={snews.id} snews={snews} />
          ))}
        </CardDeck>
      );
    } else {
      return <Spinner color='primary' />;
    }
  }
}

// class News extends Component {
//   render() {
//     return <CardDeck>

//     </CardDeck>
//   }
// }

export default News;
