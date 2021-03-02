import React from "react";

class EditCommentWrapper extends React.Component {
    componentDidMount(){
        this.props.comment && this.props.setFormDataForEdit(this.props.comment)
    }
}