import React from 'react';
import CommentForm from './CommentForm'
import { createComment } from '../actions/comments'
import { getDirections } from '../actions/directions'
import { connect } from 'react-redux'

const CommentFormWrapper = ({ history, createComment, directions, directionId }) => {
  //getDirections();

  console.log({ directions })

  const handleSubmit = (formData, userId, directionId) => {
    console.log({ directionId })
    createComment({
      ...formData,
      userId,
      directionId
    }, history)
  }

  return <CommentForm history={history} handleSubmit={handleSubmit} />
};

const mapStateToProps = ({ directions }) => {
  return ({
    directions,
    directionId: directions.selectedDirection
  })
}
export default connect(mapStateToProps, { createComment, getDirections })(CommentFormWrapper);