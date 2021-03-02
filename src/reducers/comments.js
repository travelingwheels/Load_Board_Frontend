const initialState = []

export default (state = [], action) => {
    switch (action.type) {
        case "SET_COMMENTS":
            return action.comments
        case "ADD_COMMENT":
            return state.concat(action.comments)
         case "UPDATE_COMMENT":
            return state.map(comment => comment.id === action.comment.id ? action.comment : comment)
        case "DELETE_ COMMENT":
            return state.filter(comment => comment.id === action.commentId ? false : true)
        case "CLEAR_COMMENTS":
            return initialState
        default:
            return state
    }
}