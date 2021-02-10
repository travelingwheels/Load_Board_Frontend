import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
//import users from './reducers/users.js'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import loads from './reducers/loads.js'
import directions from './reducers/directions.js'

const reducer = combineReducers({
    // users,
    currentUser,
    loginForm,
    loads,
    directions
  })
  
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))
  
  export default store