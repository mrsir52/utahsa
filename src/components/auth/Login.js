import React, { Fragment, useState } from "react";
import axios from "axios";
//import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    console.log("Success");
  };

  return (
    <Fragment>
      <h1>Sign in</h1>
      <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <label htmlFor="inputEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Password</label>
          <input
            type="password"
            className="form-control"
            id="inputpassword"
            aria-describedby="passwordHelp"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            minLength="6"
          />
        </div>

        <button className="btn btn-secondary">Log In</button>
      </form>
    </Fragment>
  );
};
export default Login;
