import React from "react";
import "./App.css";
import "./Components/ListNews.css";
import Container from "./Pages/LoginPage/Container/Container";
import { Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/profilePage";
import BookmarkPage from "./Pages/BookmarkPage/BookMark";
import CountryNewsPage from "./Pages/NewsByCountryPage";
import SearchPage from "./Pages/SearchPage";
import CategoryPage from "./Pages/CategoryPage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Switch>
          <Route path="/login" component={Container} />
          <Route
            exact
            path="/home"
            render={(routeProps) => <HomePage {...routeProps} />}
          />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/bookmark" component={BookmarkPage} />
          <Route exact path="/Search/:searchQuery" component={SearchPage} />
          <Route exact path="/category/:category" component={CategoryPage} />
          <Route exact path="/country/:country" component={CountryNewsPage} />
          <Redirect to="/home" />
        </Switch>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
