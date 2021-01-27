import React from 'react'

const LoadCard = ({ load }) => {
    return (
        <p>{load.attributes.customer_name}</p>
    )
}

export default LoadCard