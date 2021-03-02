import React from 'react';
import CommentForm from './CommentForm'
import { createComment } from '../actions/comments'
import { connect } from 'react-redux'

const CommentFormWrapper = ({ history, createComment }) => {

  const handleSubmit = (formData, userId) => {
    createComment({
      ...formData,
      userId
    }, history)
  }
  return  <CommentForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, { createComment })(CommentFormWrapper);