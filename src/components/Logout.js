import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser.js'
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button'


const Logout = ({ logout, history }) => {

      return (
        <form onSubmit={(event) => {
          event.preventDefault()
          logout()
          history.push('/')
         }
        }>
          <Button as="input" type="submit" value="logout" />
        </form>
      )
    }

export default withRouter(connect(null, { logout })(Logout))