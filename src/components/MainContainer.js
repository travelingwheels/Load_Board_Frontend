import React from 'react'
import Container from 'react-bootstrap/Container';
import Loads from './Loads.js'
import Directions from './Directions.js'
import { Link } from 'react-router-dom'


const MainContainer = () => {
    return (
        <Container className="App">
            <Loads/>
            <Link to="/directions">Directions</Link>
        </Container>
    )
}

export default MainContainer