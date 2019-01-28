import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

const AddTodo = ({ addTodo }) => {
  let input
  return (
    <div className="ui segment">
      <form 
        className="ui form"
        onSubmit={ e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          addTodo(input.value)
          input.value = ''
        }}>
        <div className="ui fluid action input field">
          <input ref={node => input = node} />
          <button className="ui inverted primary button" type="submit">
          <i className="icon edit"></i>
            Add Todo
          </button>
        </div>
      </form>
    </div>
  )
}

export default connect(null, actions)(AddTodo)
