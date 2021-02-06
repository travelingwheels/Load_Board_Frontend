const initialState = []

export default (state = [], action) => {
    switch (action.type) {
        case "SET_LOADS":
            return action.loads
         case "CLEAR_LOADS":
            return initialState
        default:
            return state
    }
}