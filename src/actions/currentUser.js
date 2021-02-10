import { resetLoginForm } from './loginForm.js'
import { getLoads, clearLoads } from './loads.js'
import { getDirections } from './directions.js'

// synchronous
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

// asynchronous action creators
 export const login = (credentials, history) => {
    return dispatch => {
      return fetch("http://localhost:3001/api/v1/login", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setCurrentUser(response.data))
            dispatch(getLoads())
            dispatch(getDirections())
            dispatch(resetLoginForm())
            history.push('/')
          }
        })
        .catch(console.log)
    }
  }

export const logout = event => {
    return dispatch => {
        dispatch(clearCurrentUser())
        dispatch(clearLoads())
        return fetch('http://localhost:3001/api/v1/logout', {
            credentials: "include",
            method: "DELETE"
        })
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/get_current_user", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-type": "application/json"
            },
        })
        .then(res => res.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setCurrentUser(response.data))
                dispatch(getLoads())
                // dispatch({type: "RESET_LOGIN_FORM"})
            }
        })
        .catch(console.log)
    }
}