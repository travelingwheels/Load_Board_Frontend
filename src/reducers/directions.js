// const initialState = []

export default (state = [], action) => {
    switch (action.type) {
        case "SET_DIRECTIONS":
            return action.directions
        default:
            return state
    }
}