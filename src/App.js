import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import NavBar from './components/NavBar.js'
import Logout from './components/Logout.js'
import Login from './components/Login.js'
import Loads from './components/Loads.js'
import  Home from './components/Home.js'
import  Directions from './components/Directions.js'
import MainContainer from './components/MainContainer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return (
      <div className="App">
        { loggedIn ? <Logout/> : null }
        <NavBar/>
        <Switch>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/' render={(props)=> loggedIn ? <Loads {...props}/> : <Home {...props}/>}/>
      <Route  path='/directions' component={Directions}/>
      </Switch>
      <MainContainer/>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    logginIn: !!state.currentUser
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
