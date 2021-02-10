import React from 'react'
import Container from 'react-bootstrap/Container';
import Loads from './Loads.js'
import Directions from './Directions.js'


const MainContainer = () => {
    return (
        <Container className="App">
            <Loads/>
            <Directions/>
        </Container>
    )
}

export default MainContainer