import React from 'react'
import DirectionCard from './DirectionCard.js'
import { connect } from 'react-redux'

const Directions = (props) => {
    console.log(props);
    let directionId =  props.match.params.id;
    console.log(' directionId: ', directionId);
    const { directions } = props.directions;
    let directionCard = null;
    if (directionId) {
        const selectedDirection = directions.find(({ id } ) => directionId == id)
        directionCard = selectedDirection &&  <DirectionCard direction={selectedDirection} key={selectedDirection.id} />
    }
    else {
        directionCard = directions.map((direction) => {
            return (
                <DirectionCard direction={direction} key={direction.id}/>
            )
        }) 
    }

    console.log('directionCard', directionCard);

    return (
        directionCard ?  directionCard : null
    )
}

// enable you to read data from the redux store via props of a react component
const mapStateToProps = ({ directions }) => {
    return {
        directions
    }
}

export default connect (mapStateToProps)(Directions)