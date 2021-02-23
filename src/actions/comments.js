// synchronous
export const setComments =comments => {
    return {
        type: "SET_COMMENTS",
       comments
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