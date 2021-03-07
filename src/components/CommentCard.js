import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const CommentCard = ({ comment }) => {
    return (
        <Card style={{ background: '#33ff9f'}}>
        <p>{comment.attributes.content}</p>
        <Link to={`/comments/${comment.id}/edit`}>Edit</Link>
        </Card>
    )
}

export default CommentCard