import React from 'react'
import { useState } from 'react'
import CommentCard from './CommentCard.js'
import { connect } from 'react-redux'
import { render } from '@testing-library/react';

class Comments extends React.Component    {

    state = {
        search: ''
    }

    handleChange(e) {
        this.setState({
            search: e.target.value
        })
    }

    render() {
        const { comments, direction } = this.props
        let comData = []
        const searchTerm = this.state.search;
                comData = comments.filter(i => {
                    return i.attributes.content.includes(searchTerm)
                })
                console.log(comData)
            
        const visibleComments = comData.filter(comment => comment.relationships.direction.data.id == direction);
        //console.log({direction})
        const commentCards = visibleComments.length > 0
            ? visibleComments.map(c => <CommentCard comment={c} key={c.id}/>)
            : null
        return (
            <>
            <input type='text' value={this.state.search} onChange={(e) => this.handleChange(e)}/>
            {commentCards}
            </>
        )
    }
}

const mapStateToProps = ({ comments, directions }) => {
    return {
        comments,
        direction: directions.selectedDirection
    }
}

export default connect (mapStateToProps)(Comments)