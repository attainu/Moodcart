import React from "react";
import "./App.css";
import "./Components/Css/ListNews.css";
import Container from "./Pages/LoginPage/Container/Container";
import { Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ProfilePage from "./Pages/ProfilePage/profilePage";
import BookmarkPage from "./Pages/BookmarkPage/BookMark";
import CountryNewsPage from "./Pages/CountryPage/NewsByCountryPage";
// import OneNewsPage from "./Pages/OneNewsPage";
import SearchPage from "./Pages/SearchPage/SearchPage";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";

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

        <Redirect to='/home' />
      </Switch>
    </div>
  );
}

export default App;
