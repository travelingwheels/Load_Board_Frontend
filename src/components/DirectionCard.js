import React from 'react'
import { Link } from 'react-router-dom'

const DirectionCard = ({ direction }) => {
    return (
        <>
        <p>{direction.attributes.content}</p>
        <Link to="/comments">Comments</Link>
        </>
    )
}

export default DirectionCard