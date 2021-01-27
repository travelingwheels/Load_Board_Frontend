import React from 'react'
import LoadCard from './LoadCard.js'
import { connect } from 'react-redux'

const Loads = props => {
    const loadCards = props.loads.length > 0 ? props.loads.map(l => <LoadCard load={l} key={l.id}/>) : null
    return (
        loadCards
    )
}

const mapStateToProps = ({ loads }) => {
    return {
        loads
    }
}

export default connect (mapStateToProps)(Loads)