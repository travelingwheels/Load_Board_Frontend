import React from 'react'
import Container from 'react-bootstrap/Container';
import Loads from './Loads.js'
import { connect } from 'react-redux'


const MainContainer = ({  loggedIn }) => {
    return (
        <Container className="MainContainer">
             { loggedIn ? <>
            <Loads/>
            
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