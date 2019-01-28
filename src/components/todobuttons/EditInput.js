import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions'

const EditInput = ({ editTodo, id, completed }) => {
  let input
  return(
    <div style={{
      margin: '0px 5px 5px 0', 
      display: 'inline-block'
    }}>
      <form className="ui form" 
            style={{width: '25vw'}}
            onSubmit={e => {
              e.preventDefault()
              if (!input.value.trim()) {
                return
              }
              editTodo(input.value, id, completed)
              input.value = ''
            }}>
        <div className="ui fluid action input field">
          <input type="text" ref={node => input = node}></input>
          <button className="mini ui icon button" type="submit">
            <i className="search icon"></i>
              Edit
            </button>
          </div>
      </form>
    </div>
  )
}

export default connect(null, actions)(EditInput)