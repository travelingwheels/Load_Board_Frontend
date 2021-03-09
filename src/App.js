import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import NavBar from './components/NavBar.js'
import CommentFormWrapper from './components/CommentFormWrapper.js'
import Login from './components/Login.js'
import Home from './components/Home.js'
import Directions from './components/Directions.js'
import Comments from './components/Comments.js'
import CommentCard from './components/CommentCard.js'
import EditCommentWrapper from './components/EditCommentWrapper.js'
import MainContainer from './components/MainContainer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import FigureImage from 'react-bootstrap/FigureImage';
import { Route, Switch, withRouter } from 'react-router-dom'


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn, comments } = this.props
    console.log({ comments })
    return (
      <div className="App">
        <header>

        </header>
        { loggedIn ? <NavBar location={this.props.location} /> : <Home />}

        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/' render={() => loggedIn ? <MainContainer /> : null} />
          <Route exact path='/directions/:id' component={Directions} />
          <Route exact path='/directions' component={Directions} />
          <Route exact path='/comments' component={Comments} />
          <Route exact path='/comments/new' component={CommentFormWrapper} />
          <Route exact path='/comments/:id' render={props => {
            const comment = comments.find(comment => comment.id === props.match.params.id)
            return comment ? <CommentCard comment={comment} {...props} /> : <></>;
          }
          } />
          <Route exact path='/comments/:id/edit' render={props => {
            const comment = comments.find(comment => comment.id === props.match.params.id)
            // console.log('comments')
            return comment ? <EditCommentWrapper comment={comment} {...props} /> : <></>;
          }} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    comments: state.comments
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
