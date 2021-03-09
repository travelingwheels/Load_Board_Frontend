import { resetCommentForm } from './commentForm'

// synchronous
export const setComments =comments => {
    return {
        type: "SET_COMMENTS",
       comments
    }
}

export const addComment = comment => {
    return {
        type: "ADD_COMMENT",
        comment
    }
}

export const clearComments = () => {
    return {
      type: "CLEAR_COMMENTS"
    }
  }

  export const deleteCommentSuccess = commentId => {
      return {
          type: "DELETE_COMMENT",
          commentId
      }
  }

  export const updateCommentSuccess = comment => {
      return {
          type: "UPDATE_COMMENT",
          comment
      }
  }

// asynchronous actions
export const getComments = () => {
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/comments/`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-type": "application/json"
            },
        })
        .then(res => res.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setComments(response.data))
            }
        })
        .catch(console.log)
    }
}

export const createComment = (commentData, history) => {
    return dispatch => {
        const sendCommentData = {
            content: commentData.content,
            user_id: commentData.userId,
            direction_id: commentData.directionId
        }
        return fetch("http://localhost:3001/api/v1/comments", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body : JSON.stringify(sendCommentData)
        })
        .then(response => response.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                console.log(resp)
                dispatch(addComment(resp.data))
                dispatch(resetCommentForm())
                history.push(`/comments`)
            }
        })
        .catch(console.log)
    }
}

export const updateComment = (commentData, history) => {
    return dispatch => {
        const sendCommentData = {
            content: commentData.content,
            user_id: commentData.userId
        }
        return fetch(`http://localhost:3001/api/v1/comments/${commentData.commentId}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendCommentData)
        })
        .then(response => response.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(updateCommentSuccess(resp.data))
                history.push(`/comments`)
            }
        })
        .catch(console.log)
    }
}

export const deleteComment = (commentId, history) => {
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/comments/${commentId}`, {
            credentials: "include",
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(deleteCommentSuccess(commentId))
                dispatch(getComments())
                history.push(`/comments`)
            }
        })
        .catch(console.log)
    }
}