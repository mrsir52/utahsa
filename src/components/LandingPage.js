import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css';


const LandingPage = () => 
  
    <div className="landing">
   
    <div className="dark-overlay landing-inner text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="display-3 mb-4">Utah Sports Analytics</h1>
            <p className="lead">
              {' '}
              Create a developer profile/portfolio, share posts and get help
              from other developers
            </p>
            <hr />
            <Link className="btn btn-lg btn-info mr-2" to='/Register'>
              Sign Up
            </Link>
            <Link className="btn btn-lg btn-light" to='/'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
   
  </div>
  

export default LandingPage
