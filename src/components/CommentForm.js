import React from 'react';
import { updateCommentForm } from '../actions/commentForm'
import { connect } from 'react-redux'

const CommentForm = ({ formData, updateCommentForm, userId,  directionId,  handleSubmit,  editMode }) => {
    const { content } = formData

    const handleChange = event => {
        const { name, value } = event.target
        console.log('updating comment....');
        updateCommentForm( name, value)
    }

    return (
        <form onSubmit={event => {
            event.preventDefault()
            handleSubmit(formData, userId, directionId)
          }}>
            <textarea
                placeholder="Your Comment"
                name="content"
                onChange={handleChange}
                value={content}
                /><br/>
            <input
                type="submit"
                value={editMode ? "Update Comment" : "Create Comment"}
            />
        </form>
    )
};

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
        formData: state.commentForm,
        userId: state.currentUser?.id,
        directionId: state.directions.selectedDirection
    }
}

// mapDispatchToProps

export default connect(mapStateToProps, { updateCommentForm })(CommentForm);