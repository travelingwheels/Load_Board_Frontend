import React from 'react'
import { connect } from 'react-redux'
import Logout from './Logout.js'
import { Link } from 'react-router-dom'


const NavBar = ({ currentUser, loggedIn }) => {

      return(
         <div className="NavBar">
              <Link to={`/`}>Home</Link>
              <Link to={`/directions`}>Directions</Link>
              { loggedIn ? <><strong>Logged in as { currentUser.attributes.username }, Truck Number: { currentUser.attributes.truck_number}</strong><Logout/></> : null}
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