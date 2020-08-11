import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/profilePage";
import BookmarkPage from "./Pages/BookmarkPage/BookMark";
import "./App.css";
import "./Pages/LoginPage/SignIn&Up.css";
import LoginPage from "./Components/LoginComponent/Container";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/Login" component={LoginPage} />
        <Route
          exact
          path="/"
          render={(routeProps) => <HomePage {...routeProps} />}
        />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/bookmar" component={BookmarkPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
