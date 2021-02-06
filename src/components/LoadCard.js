import React from 'react'

const LoadCard = ({ load }) => {
    return (
        <>
        <h3>{load.attributes.customer_name}</h3>
        <p>{load.attributes.city}</p>
        <p>{load.attributes.state}</p>
        </>
    )
}

export default LoadCard