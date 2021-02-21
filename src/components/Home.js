import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => (
   <div className = "home">
        <h1>Welcome to the Load Board App</h1>

        <span>
        <Link to="/login">Log In</Link>
        </span>
        
    </div>
);

export default Home;