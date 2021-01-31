import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import NavBar from './components/NavBar.js'
import Logout from './components/Logout.js'
import Loads from './components/Loads.js'
import MainContainer from './components/MainContainer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <Container className="App">
        <Logout/>
      <NavBar/>
      <Route exact path='/loads' component={Loads}/>
      <MainContainer/> 
      </Container>
    );
  }
}


export default connect(null, { getCurrentUser })(App);
