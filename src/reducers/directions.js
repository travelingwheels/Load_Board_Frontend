const initialState = []

export default (state = [], action) => {
    switch (action.type) {
        case "SET_DIRECTIONS":
            return action.directions
        case "CLEAR_DIRECTIONS":
            return initialState
        default:
            return state
    }
}