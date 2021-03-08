import { resetLoginForm } from './loginForm.js'
import { getLoads, clearLoads } from './loads.js'
import { getDirections, clearDirections } from './directions.js'
import { getComments, clearComments } from './comments.js'

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
                    return alert(response.error)
                }
                onUserLoaded(response.data, dispatch);
                history.push('/')
            })
            .catch(console.log)
    }
}

export const logout = event => {
    return dispatch => {
        dispatch(clearCurrentUser())
        dispatch(clearLoads())
        dispatch(clearDirections())
        dispatch(clearComments())
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
                    return alert(response.error)
                }

                onUserLoaded(response.data, dispatch);
            })
            .catch(console.log)
    }
}

const onUserLoaded = (userData, dispatch) => {
    dispatch(setCurrentUser(userData))
    dispatch(getLoads())
    dispatch(getComments())
    dispatch(getDirections())
    dispatch(resetLoginForm())
}