import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const LoadCard = ({ load }) => {
    return (
        <Card style={{ background: '#216498'}}>
        <h3>{load.attributes.customer_name}</h3>
        <p>{load.attributes.city}</p>
        <p>{load.attributes.state}</p>
        Click below for <Link to={`/directions/${load.id}`} className="link">Directions</Link>
        </Card>
    )
}

export default LoadCard