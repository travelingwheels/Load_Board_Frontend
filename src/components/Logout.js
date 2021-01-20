import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser.js'
import Button from 'react-bootstrap/Button'


const Logout = ({ logout }) => {

      return (
        <form onSubmit={logout}>
          {/* <input type="submit" value="Log Out"/> */}
          <Button as="input" type="submit" value="logout" />
        </form>
      )
    }

export default connect(null, { logout })(Logout)