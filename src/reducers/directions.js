const initialState = {
    directions: [],
    selectedDirection: null
}

/*[{
    id: 1,
    text: '...'
}]

{
    selectedDirection: 1,
    directions: [{
        id: 1,
        text: '...'
    }]
}*/

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_DIRECTIONS":
            return {
                ...state,
                directions: action.directions
            }
        case "SET_DIRECTION":
            return {
                ...state,
               selectedDirection: action.direction
            }
        case "CLEAR_DIRECTIONS":
            return initialState
        default:
            return state
    }
}