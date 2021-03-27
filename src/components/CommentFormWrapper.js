import React from 'react';
import CommentForm from './CommentForm'
import { createComment } from '../actions/comments'
import { getDirections } from '../actions/directions'
import { connect } from 'react-redux'

const CommentFormWrapper = ({ history, createComment, directions, directionId }) => {
  //getDirections();

  const handleSubmit = (formData, userId, directionId) => {
    //console.log({ directionId })
    console.log('a')
    createComment({
      ...formData,
      userId,
      directionId
    }, history)
    console.log('g')
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