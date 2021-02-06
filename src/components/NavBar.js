import React from 'react'
import { connect } from 'react-redux'
// import Login from './Login.js'
import Logout from './Logout.js'


const NavBar = ({ currentUser, loggedIn }) => {

      return(
         <div className="NavBar">
           { loggedIn ? <><p id="loggedin">Logged in as {currentUser.attributes.userName}</p><Logout/></> : null}
           
         </div>
         )
    }

    const mapStateToProps = ({ currentUser }) => {
        return {
            currentUser,
            loggedIn: !!currentUser
        }
    }

export default connect(mapStateToProps)(NavBar)