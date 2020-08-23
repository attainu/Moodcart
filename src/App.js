import React, { useStates } from "react";
import "./App.css";
import "./Components/Css/ListNews.css";
import Container from "./Pages/LoginPage/Container/Container";
import { Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ProfilePage from "./Pages/ProfilePage/profilePage";
import ContactUsPage from "./Pages/ContactUspage/ContactUsPage";
import BookmarkPage from "./Pages/BookmarkPage/BookMark";
import CountryNewsPage from "./Pages/CountryPage/NewsByCountryPage";
// import OneNewsPage from "./Pages/OneNewsPage";
import SearchPage from "./Pages/SearchPage/SearchPage";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import { auth } from "./FirebaseConfig";
import { functions } from "firebase";

function App({ user, setUser }) {
  // const [user, setUser] = useStates(false);
  auth.onAuthStateChanged(function (user) {
    if (user) {
      setUser(user);
    } else {
      console.log("no user is signed in");
    }
  });
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
        <Route exact path='/contactUs' component={ContactUsPage} />
        <Route exact path='/Search/:searchQuery' component={SearchPage} />
        <Route exact path='/category/:category' component={CategoryPage} />
        <Route exact path='/country/:country' component={CountryNewsPage} />

        <Redirect to='/home' />
      </Switch>
    </div>
  );
}

export default App;
