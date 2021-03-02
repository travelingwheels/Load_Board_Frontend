import React from "react";
import CommentForm from './CommentForm'
import { updateComment, deleteComment } from '../actions/myComments'
import { setFormDataForEdit, resetCommentForm } from '../actions/commentForm'
import { connect } from 'react-redux'

class EditCommentWrapper extends React.Component {
    componentDidMount(){
        this.props.comment && this.props.setFormDataForEdit(this.props.comment)
    }

    componentDidUpdate(prevProps) {
        this.props.comment && !prevProps.comment && this.props.setFormDataForEdit(this.props.comment)
      }
    
      componentWillUnmount() {
        this.props.resetCommentForm()
      }

      handleSubmit = (formData) => {
        const { updateComment, comment, history } = this.props
        updateComment({
          ...formData,
          commentId: comment.id
        }, history)
      }

      render() {
        const { history, deleteComment, comment } = this.props
        const commentId = comment ? comment.id : null
        return  <>
                  <CommentForm editMode handleSubmit={this.handleSubmit} />
                  <br/>
                  <button style={{color: "red"}} onClick={()=>deleteComment(commentId, history)}>Delete this Comment</button>
                </>
      }
};

export default connect(null, { updateComment, setFormDataForEdit, resetCommentForm, deleteComment })(EditCommentWrapper);