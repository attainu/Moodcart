import React from "react";
import "./App.css";
import Container from "./Pages/LoginPage/Container/Container";
import { Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/profilePage";
import BookmarkPage from "./Pages/BookmarkPage/BookMark";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Container} />
        <Route
          exact
          path="/home"
          render={(routeProps) => <HomePage {...routeProps} />}
        />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/bookmark" component={BookmarkPage} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;
