import React from 'react'
import CommentCard from './CommentCard.js'
import { connect } from 'react-redux'

const Comments = ({ comments, direction }) => {
    const visibleComments = comments.filter(comment => comment.relationships.direction.data.id == direction);
    console.log({direction})
    const commentCards = visibleComments.length > 0
        ? visibleComments.map(c => <CommentCard comment={c} key={c.id}/>)
        : null
    return (
        commentCards
    )
}

const mapStateToProps = ({ comments, directions }) => {
    return {
        comments,
        direction: directions.selectedDirection
    }
}

export default connect (mapStateToProps)(Comments)