import React from 'react'

const DirectionCard = ({ direction }) => {
    return (
        <>
        <p>{direction.attributes.content}</p>
        </>
    )
}

export default DirectionCard