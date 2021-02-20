import React from 'react'
import CommentCard from './CommentCard.js'
import { connect } from 'react-redux'

const Comments = props => {
    const commentCards = props.comments.length > 0 ? props.comments.map(c => <CommentCard comment={c} key={c.id}/>) : null
    return (
        commentCards
    )
}

const mapStateToProps = ({ comments }) => {
    return {
        comments
    }
}

export default connect (mapStateToProps)(Comments)