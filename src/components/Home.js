import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => (
   <div className = "home">
        <h1>Welcome to the Load Board App</h1>

        <span>
            To see your schedule, please  <Link to="/login" className="Login">Log In</Link>
        </span>
        
    </div>
);

export default Home;