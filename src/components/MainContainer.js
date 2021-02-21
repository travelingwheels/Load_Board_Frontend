import React from 'react'
import Container from 'react-bootstrap/Container';
import Loads from './Loads.js'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const MainContainer = ({  loggedIn }) => {
    return (
        <Container className="App">
             { loggedIn ? <>
            <Loads/>
            <Link to="/directions">Directions</Link>
            </> : null}
        </Container>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser,
        loggedIn: !!currentUser
    }
}

export default  connect(mapStateToProps)( MainContainer)