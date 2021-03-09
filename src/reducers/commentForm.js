const initialState = {
    content: ""
}

export default (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_NEW_COMMENT_FORM":
            console.log('INSIDE UPDATE_NEW_COMMENT_FORM ', JSON.stringify(action.formData));
            const returnVal = {
                ...state,
                [action.formData.name]: action.formData.value
            }
            console.log('returnVal: ', JSON.stringify(returnVal));
            return returnVal
        case "RESET_NEW_COMMENT_FORM":
            return initialState
        case "SET_FORM_DATA_FOR_EDIT":
            return action.commentFormData
        default:
            return state
    }
}