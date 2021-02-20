import React from 'react'

const CommentCard = ({ comment }) => {
    return (
        <>
        <p>{comment.attributes.content}</p>
        </>
    )
}

export default CommentCard