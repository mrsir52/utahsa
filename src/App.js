import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Navbar from "./components/Navbar";

//Redux
import { Provider } from 'react-redux'
import store from './store'

export class Routing extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={LandingPage} />
          <section className="container">
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </section>
        </Fragment>
      </Router>
      </Provider>
    );
  }
}

export default Routing;
