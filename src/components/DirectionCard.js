import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { setDirection } from '../actions/directions'
import { connect } from 'react-redux'

const DirectionCard = ({ direction, setDirection }) => {
    const directionId = direction.id;
    return (
        <Card style={{ background: '#33e3ff'}} >
            <p>{direction.attributes.content}</p>
            <Link to={`/comments`}  onClick={() => setDirection(directionId)}>Comments</Link><br/>
            <Link to={`/comments/new`} onClick={() => setDirection(directionId)}>Add a Comment</Link>
        </Card>
    )
}

export default connect(null, { setDirection })(DirectionCard);