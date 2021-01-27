export default (state = [], action) => {
    switch (action.type) {
        case "SET_LOADS":
            return action.loads
        default:
            return state
    }
}