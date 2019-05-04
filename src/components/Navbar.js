import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

const Navbar= () => {
  return (
    <Fragment>
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
              <Link className="nav-link" to="/Register" title="Home">
                Sign Up
              </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Login" title="Home">
                Log in
              </Link>
              </li>
            </ul>
             
             </div>
            </div>
            </nav>
    </Fragment>
  )
}
export default Navbar