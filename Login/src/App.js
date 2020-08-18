import React from "react";
import "./App.css";
import "./Components/ListNews.css";
import Container from "./Pages/LoginPage/Container/Container";
import { Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/profilePage";
import BookmarkPage from "./Pages/BookmarkPage/bookmark";
import CountryNewsPage from "./Pages/NewsByCountryPage";
import OneNewsPage from "./Pages/OneNewsPage";
import SearchPage from "./Pages/SearchPage";
import CategoryPage from "./Pages/CategoryPage";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/login' component={Container} />
        <Route
          exact
          path='/home'
          render={(routeProps) => <HomePage {...routeProps} />}
        />
        <Route exact path='/profile' component={ProfilePage} />
        <Route exact path='/bookmark' component={BookmarkPage} />
        <Route exact path='/Search/:searchQuery' component={SearchPage} />
        <Route exact path='/category/:category' component={CategoryPage} />
        <Route exact path='/country/:country' component={CountryNewsPage} />
        <Route exact path='/snews/:snewsid' component={OneNewsPage} />
        <Redirect to='/home' />
      </Switch>
    </div>
  );
}

export default App;
