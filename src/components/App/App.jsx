import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { useDispatch } from "react-redux";

import Nav from "../Nav/Nav";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import ActivityPage from "../ActivityPage/ActivityPage";
import LandingPage from "../LandingPage/LandingPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import BookmarksPage from "../BookmarksPage/BookmarksPage";
import CalendarPage from "../CalendarPage/CalendarPage";
import CreateActivityPage from "../CreateActivityPage/CreateActivityPage";
import AddActivityPage from "../AddActivityPage/AddActivityPage";
import DetailsPage from "../DetailsPage/DetailsPage";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/login */}
          <Redirect exact from="/" to="/login" />

          {/* Visiting localhost:3000/home will show the home page. */}
          <ProtectedRoute exact path="/add-activity">
            <AddActivityPage />
          </ProtectedRoute>
          <ProtectedRoute exact path="/home">
            <ActivityPage />
          </ProtectedRoute>
          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute exact path="/details">
            <DetailsPage />
          </ProtectedRoute>
          <ProtectedRoute exact path="/bookmarks">
            <BookmarksPage />
          </ProtectedRoute>
          <ProtectedRoute
            // shows AboutPage at all times (logged in or not)
            exact
            path="/calendar"
          >
            <CalendarPage />
          </ProtectedRoute>
          <ProtectedRoute
            // shows AboutPage at all times (logged in or not)
            exact
            path="/create"
          >
            <CreateActivityPage />
          </ProtectedRoute>

          {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}

          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows RegisterPage at "/registration"
            exact
            path="/register"
            authRedirect="/home"
          >
            <RegisterPage />
          </ProtectedRoute>

          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows LandingPage at "/home"
            exact
            path="/login"
            authRedirect="/home"
          >
            <LandingPage />
          </ProtectedRoute>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
