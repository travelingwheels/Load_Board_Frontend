import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import NavBar from './components/NavBar.js'
import CommentForm from './components/CommentForm.js'
import Login from './components/Login.js'
import  Home from './components/Home.js'
import  Directions from './components/Directions.js'
import  Comments from './components/Comments.js'
import MainContainer from './components/MainContainer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, withRouter } from 'react-router-dom'


class App extends React.Component {
  
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return (
      <div className="App">
        { loggedIn  ?  <NavBar location={this.props.location}/> : <Home/> }
       
        <Switch>
             <Route exact path='/login' component={Login}/>
             <Route exact path='/' render={()=> loggedIn ? <MainContainer/> : null}/>
             <Route  exact path='/directions' component={Directions}/>
             <Route  exact path='/comments' component={Comments}/>
             <Route  exact path='/comments/new' component={CommentForm}/>
         </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
