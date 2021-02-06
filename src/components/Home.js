import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
    <>
        <h1>Welcome to the Load Board App</h1>

        <p>
        <Link to="/login">Log In</Link>
        </p>
        
    </>
);

export default Home;