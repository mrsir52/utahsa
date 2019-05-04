import React, { Fragment, useState } from "react";
import { connect } from 'react-redux'
import { setAlert } from '../actions/alert'
import axios from 'axios'
import PropTypes from 'prop-types'

//import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Register = ({setAlert}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });
  const {name, email, password, password2} = formData;
  const onChange = e => setFormData({...formData, [e.target.name]:e.target.value })
  
  const onSubmit = async e => {
    e.preventDefault()
    if(password !== password2) {
      setAlert('passwords do not match', 'danger')
    } else {
      console.log('Success')
    }
  }


  return <Fragment>
    
    <form onSubmit={e => onSubmit(e)}>
    <div className="form-group">
           <label htmlFor="inputName">Name</label>
           <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="nameHelp"
            placeholder="Enter Name"
            name="name"
            value={name}
            onChange={e => onChange(e)}
          />
        </div>
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
            minLength='6'
          />
          
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail2">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="inputConfirmPassword2"
            placeholder="Confirm password"
            name="password2"
            value={password2}
            onChange={e => onChange(e)}
            minLength='6'
          />
          
        </div>
        <button className="btn btn-secondary" >Register</button>
    </form>
  </Fragment>
}

 Register.propTypes = { setAlert: PropTypes.func.isRequired }
export default connect(null, {setAlert})(Register)


// {
//   const newCoach = {
//     name,
//     email,
//     password,
//     password2
//   }
//   try {
    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }
    // const body = JSON.stringify(newCoach)
    // const res = await axios.post('http://localhost:5000/api/coaches/register', body, config)
    // console.log(res.data)
//     const url = "http://localhost:5000/api/coaches/register";
// const data = JSON.stringify(newCoach);
// const res = await fetch(url, {
//   method: "POST",
//   body: data,
//   headers: {
//     "Content-Type": "application/json"
//   }
// })
// console.log(res.data)
//   } catch (err) {
//     console.error(err.response.data)
//   }
// }