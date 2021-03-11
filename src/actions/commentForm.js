// sync actions

export const updateCommentForm = (name, value) => {
    const formData = { name, value }
    return {
      type: "UPDATE_NEW_COMMENT_FORM",
      formData
    }
  }
  
  export const resetCommentForm = () => {
    return {
      type: "RESET_NEW_COMMENT_FORM",
    }
  }
  
  export const setFormDataForEdit = comment => {
    const commentFormData = {
      content: comment.attributes.content
    }
  
    return {
      type: "SET_FORM_DATA_FOR_EDIT",
      commentFormData
    }
  }