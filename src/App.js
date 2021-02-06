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
      <Container className="App">
        { loggedIn ? <NavBar {...this.props}/> : <Home/> }
        <Switch>
      <Route exact path='/login' component={Login}/>
      {/* <Route exact path='/home' component={Home}/> */}
      </Switch>
      <MainContainer/> 
        <Logout/>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return ({
    logginIn: !!state.currentUser
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
