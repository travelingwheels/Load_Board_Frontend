import React from "react";

class EditCommentWrapper extends React.Component {
    componentDidMount(){
        this.props.trip && this.props.setFormDataForEdit(this.props.trip)
    }
}