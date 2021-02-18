import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => (
   <Container>
        <h1>Welcome to the Load Board App</h1>

        <span>
        <Link to="/login">Log In</Link>
        </span>
        
    </Container>
);

export default Home;