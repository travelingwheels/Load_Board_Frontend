import React from 'react'
import { Card } from 'react-bootstrap'

const LoadCard = ({ load }) => {
    return (
        <Card style={{ background: '#216498'}}>
        <h3>{load.attributes.customer_name}</h3>
        <p>{load.attributes.city}</p>
        <p>{load.attributes.state}</p>
        </Card>
    )
}

export default LoadCard