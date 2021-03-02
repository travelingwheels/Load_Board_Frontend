import React from 'react'
import { Card } from 'react-bootstrap'

const CommentCard = ({ comment }) => {
    return (
        <Card style={{ background: '#33ff9f'}}>
        <p>{comment.attributes.content}</p>
        </Card>
    )
}

export default CommentCard