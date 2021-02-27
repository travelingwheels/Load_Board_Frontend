import React from 'react'
import { Link } from 'react-router-dom'

const DirectionCard = ({ direction }) => {
    return (
        <>
        <p>{direction.attributes.content}</p>
        <Link to="/comments">Comments</Link><br/>
        <Link to="/comments/new">Add a Comment</Link>
        </>
    )
}

export default DirectionCard