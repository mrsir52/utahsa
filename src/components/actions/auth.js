import {setAlert} from './alert'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types'

//Register User
export const register = ({name, email, password}) => async dispatch => {
  
    try {
        const url = "http://localhost:5000/api/coaches/register";
        const data = JSON.stringify({ name, email, password });
        const res = await fetch(url, {
          method: "POST",
          body: data,
          headers: {
            "Content-Type": "application/json"
          }
        })
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        const errors = err.response.data.errors

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: REGISTER_FAIL
        })
        
    }
}