import React from 'react'

const DeleteButton = ({ deleteTodo, id }) => {
  const onSubmit = () => {
    deleteTodo(id)
  }
  return(
      <button className="ui icon button ui primary button red"
              onClick={onSubmit}>
        <i className="trash alternate outline icon"></i>
      </button>
  )
}

export default DeleteButton