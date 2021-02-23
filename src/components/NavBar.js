import React from 'react'
import { connect } from 'react-redux'
// import Login from './Login.js'
import Logout from './Logout.js'


const NavBar = ({ currentUser, loggedIn }) => {

      return(
         <div className="NavBar">
           { loggedIn ? <><p>Logged in as { currentUser.attributes.username }, Truck Number: { currentUser.attributes.truck_number}</p><Logout/></> : null}
           
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