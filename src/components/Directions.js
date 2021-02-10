import React from 'react'
import DirectionCard from './DirectionCard.js'
import { connect } from 'react-redux'

const Directions = props => {
    const directionCards = props.directions.length > 0 ? props.directions.map(d => <DirectionCard direction={d} key={d.id}/>) : null
    return (
        directionCards
    )
}

const mapStateToProps = ({ directions }) => {
    return {
        directions
    }
}

export default connect (mapStateToProps)(Directions)