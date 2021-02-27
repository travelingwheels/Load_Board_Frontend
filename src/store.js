import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import loads from './reducers/loads.js'
import directions from './reducers/directions.js'
import comments from './reducers/comments.js'
import commentForm from './reducers/commentForm.js'

const reducer = combineReducers({
    currentUser,
    loginForm,
    loads,
    directions,
    comments,
    commentForm
  })
  
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))
  
  export default store