import {setAlert} from './alert'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types'
import axios from 'axios'

//Register User
// export const register = ({name, email, password}) => async dispatch => {
//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
//     const body = JSON.stringify({ name, email, password })
//     try {
    //     const url = "http://localhost:5000/api/users";
    // const data = JSON.stringify({ name, email, password });
    //     const res = fetch(url, {
    //       method: "POST",
    //       body: data,
    //       headers: {
    //         "Content-Type": "application/json"
    //       }
    //     })
//         const res = axios.post('http://localhost:5000/api/users', body, config)
//         dispatch({
//             type: REGISTER_SUCCESS,
//             payload: res.data
//         })
//     } catch (err) {
//         const errors = err.response.data.errors;
//         if(errors){
//             errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
//         }
//         dispatch({
//             type: REGISTER_FAIL
//         })
        
//     }
// }

export const register = ({ name, email, password }) => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    const body = JSON.stringify({ name, email, password });
  
    try {
      const res = await axios.post('http://localhost:5000/api/users', body, config);
  
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
  
      
    } catch (err) {
      const errors = err.response.data.errors;
  
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      }
  
      dispatch({
        type: REGISTER_FAIL
      });
    }
  };