import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const DirectionCard = ({ direction }) => {
    return (
        <Card style={{ background: '#33e3ff'}} >
        <p>{direction.attributes.content}</p>
        <Link to="/comments">Comments</Link><br/>
        <Link to="/comments/new">Add a Comment</Link>
        </Card>
    )
}

export default DirectionCard