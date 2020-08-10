import React from "react";
import Navbar from "./Components/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/profilePage";
import BookmarkPage from "./Pages/BookmarkPage/BookMark";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route
          exact
          path='/'
          render={(routeProps) => <HomePage {...routeProps} />}
        />
        <Route exact path='/Login' component={LoginPage} />
        <Route exact path='/profile' component={ProfilePage} />
        <Route exact path='/bookmar' component={BookmarkPage} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
