// synchronous actions
export const setLoads = loads => {
    return {
        type: "SET_LOADS",
        loads
    }
}

// asynchronous actions
export const getLoads = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/loads", {
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
                dispatch(setLoads(response.data))
            }
        })
        .catch(console.log)
    }
}