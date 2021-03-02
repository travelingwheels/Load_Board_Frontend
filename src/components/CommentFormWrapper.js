import React from 'react';
import CommentForm from './CommentForm'
import { createComment } from '../actions/comments'
import { connect } from 'react-redux'

const CommentFormWrapper = ({ history, createComment }) => {

  const handleSubmit = (formData, userId, directionId) => {
    createComment({
      ...formData,
      userId,
      directionId
    }, history)
  }
  return  <CommentForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, { createComment })(CommentFormWrapper);