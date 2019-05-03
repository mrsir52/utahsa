import React, { Component } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";


export class Routing extends Component {    
  render() {   
    return (
      <div>
        <Router>
          <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
            <div className="container">
              <Link className="navbar-brand" to="/" title="Home">
                Home
              </Link>
              <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                {' '}
                  Players
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
              <Link className="nav-link" to="/" title="Home">
                Sign Up
              </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/" title="Home">
                Log in
              </Link>
              </li>
            </ul>
             
             </div>
            </div>
            </nav>
            
              <Switch>
                <Route exact path="/" component={LandingPage} />
              </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Routing;

