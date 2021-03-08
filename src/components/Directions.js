import React from 'react'
import DirectionCard from './DirectionCard.js'
import { connect } from 'react-redux'

const Directions = (props) => {
    console.log(props)
    const { directions } = props.directions;
    const userDirections = directions.filter(({ id } ) => props.match.params.id == id)
    const directionCards = userDirections.length > 0
        ? userDirections.map(d => <DirectionCard direction={d} key={d.id}/>)
        : null
    return (
        directionCards
    )
}

// enable you to read data from the redux store via props of a react component
const mapStateToProps = ({ directions }) => {
    return {
        directions
    }
}

export default connect (mapStateToProps)(Directions)