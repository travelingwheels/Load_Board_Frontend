// synchronous
export const setDirections = directions => {
    return {
        type: "SET_DIRECTIONS",
        directions
    }
}

export const setDirection = direction => {
    return {
        type: "SET_DIRECTION",
        direction
    }
}

export const clearDirections = () => {
    return {
        type: "CLEAR_DIRECTIONS"
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
                    // Remove repeated elements
                    console.log(response.data)
                    
                    const directions = response.data.filter(({ id }, index, arr) => !arr.slice(0, index).find(d => d.id === id));
                    console.log(directions)
                    dispatch(setDirections(directions))
                }
            })
            .catch(console.log)
    }
}