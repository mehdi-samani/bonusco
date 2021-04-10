import React, { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Dashboard from "../Components/Dashbord/Dashbord";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import NotFound from "../Components/NotFound/NotFound";

const RouterMain = (props) => {
  return (
    <Router {...props}>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Route path="/*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterMain;
