// synchronous
export const setDirections = directions => {
    return {
        type: "SET_DIRECTIONS",
        directions
    }
}

// asynchronous actions
export const getDirections = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/directions", {
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
                dispatch(setDirections(response.data))
            }
        })
        .catch(console.log)
    }
}