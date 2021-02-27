const initialState = []

export default (state = [], action) => {
    switch (action.type) {
        case "SET_COMMENTS":
            return action.comments
        case "ADD_COMMENT":
            return state.comments.concat(action.comments)
        case "CLEAR_COMMENTS":
            return initialState
        default:
            return state
    }
}