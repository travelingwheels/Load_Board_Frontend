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

// asynchronous actions
export const getComments = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/comments", {
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
            user_id: commentData.userId
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
                dispatch(addComment(resp.data))
                dispatch(resetCommentForm())
                history.push(`/comments/${resp.data.id}`)
            }
        })
        .catch(console.log)
    }
}